"""
BrewHaven Coffee — Backend API tests
Run:  pytest tests/ -v
"""
import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine
from sqlmodel.pool import StaticPool

from main import app
from database import get_session


# ── In-memory SQLite for tests ─────────────────────────────────────────────────
@pytest.fixture(name="session")
def session_fixture():
    engine = create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        yield session


@pytest.fixture(name="client")
def client_fixture(session: Session):
    def get_session_override():
        return session

    app.dependency_overrides[get_session] = get_session_override
    client = TestClient(app)
    yield client
    app.dependency_overrides.clear()


# ── Health check ───────────────────────────────────────────────────────────────
def test_health(client: TestClient):
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json()["status"] == "healthy"


# ── Contact form ───────────────────────────────────────────────────────────────
def test_contact_submit_success(client: TestClient):
    payload = {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "subject": "Test subject",
        "message": "This is a test message with enough characters.",
    }
    res = client.post("/api/contact", json=payload)
    assert res.status_code == 201
    data = res.json()
    assert data["success"] is True
    assert data["id"] is not None


def test_contact_invalid_email(client: TestClient):
    payload = {
        "name": "Jane Smith",
        "email": "not-an-email",
        "subject": "Hello",
        "message": "A perfectly valid message body.",
    }
    res = client.post("/api/contact", json=payload)
    assert res.status_code == 422  # Pydantic validation error


# ── Menu ───────────────────────────────────────────────────────────────────────
def test_get_full_menu(client: TestClient):
    res = client.get("/api/menu")
    assert res.status_code == 200
    items = res.json()
    assert len(items) == 12  # 6 drinks + 6 pastries


def test_get_drinks_category(client: TestClient):
    res = client.get("/api/menu/drinks")
    assert res.status_code == 200
    items = res.json()
    assert all(item["category"] == "drinks" for item in items)
    assert len(items) == 6


def test_get_pastries_category(client: TestClient):
    res = client.get("/api/menu/pastries")
    assert res.status_code == 200
    items = res.json()
    assert all(item["category"] == "pastries" for item in items)
    assert len(items) == 6
