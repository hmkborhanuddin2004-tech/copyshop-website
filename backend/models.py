"""
BrewHaven Coffee — SQLModel database models
Defines tables for contact messages and menu items.
"""
from datetime import datetime, timezone
from typing import Optional

from pydantic import EmailStr
from sqlmodel import Field, SQLModel


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


class ContactMessage(SQLModel, table=True):
    """Stores contact form submissions from visitors."""

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=120)
    email: str = Field(max_length=254)
    subject: str = Field(max_length=200)
    message: str
    created_at: datetime = Field(default_factory=_utc_now)
    is_read: bool = Field(default=False)


class MenuItemDB(SQLModel, table=True):
    """Stores menu items (drinks & pastries)."""

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=100)
    price: float
    description: str
    category: str = Field(max_length=20)  # 'drinks' | 'pastries'
    is_available: bool = Field(default=True)


# ─── Pydantic request / response schemas (no table=True) ─────────────────────

class ContactForm(SQLModel):
    """Incoming contact form payload."""

    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    subject: str = Field(min_length=2, max_length=200)
    message: str = Field(min_length=10, max_length=2000)


class ContactResponse(SQLModel):
    """Success response for contact submissions."""

    success: bool
    message: str
    id: int


class MenuItemOut(SQLModel):
    """Public-facing menu item schema."""

    id: int
    name: str
    price: float
    description: str
    category: str
    is_available: bool
