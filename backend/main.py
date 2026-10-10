"""
BrewHaven Coffee — FastAPI application entry point
Run:  uvicorn main:app --reload --port 8000
Docs: http://localhost:8000/docs
"""
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import create_db_and_tables
from routes import contact, menu


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Create DB tables on startup."""
    create_db_and_tables()
    yield


app = FastAPI(
    title="BrewHaven Coffee API",
    description="Backend for the BrewHaven Coffee Shop website",
    version="1.0.0",
    lifespan=lifespan,
)

# ─── CORS — allow Next.js dev server ─────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# ─── Routers ──────────────────────────────────────────────────────────────────
app.include_router(contact.router, prefix="/api")
app.include_router(menu.router, prefix="/api")


@app.get("/", tags=["Health"])
async def root() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "ok", "project": "BrewHaven Coffee API"}


@app.get("/health", tags=["Health"])
async def health() -> dict[str, str]:
    return {"status": "healthy"}
