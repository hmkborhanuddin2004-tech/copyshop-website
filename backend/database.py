"""
BrewHaven Coffee — Database configuration
SQLite via SQLModel — lightweight, zero-config local database
"""
from sqlmodel import SQLModel, Session, create_engine

DATABASE_URL = "sqlite:///./brewhaven.db"

engine = create_engine(
    DATABASE_URL,
    echo=False,
    connect_args={"check_same_thread": False},
)


def create_db_and_tables() -> None:
    """Initialize all database tables on startup."""
    SQLModel.metadata.create_all(engine)


def get_session():
    """FastAPI dependency — yields a database session."""
    with Session(engine) as session:
        yield session
