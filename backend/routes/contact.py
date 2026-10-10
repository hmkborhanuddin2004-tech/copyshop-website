"""
BrewHaven Coffee — Contact form route
POST /api/contact  → saves message to SQLite, returns confirmation
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session

from database import get_session
from models import ContactForm, ContactMessage, ContactResponse

router = APIRouter(tags=["Contact"])


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact form",
)
async def submit_contact(
    form: ContactForm,
    db: Session = Depends(get_session),
) -> ContactResponse:
    """
    Accept a visitor's contact message and persist it to the database.

    Returns a success payload with the generated message ID.
    Raises HTTP 422 automatically when Pydantic validation fails.
    """
    try:
        msg = ContactMessage(
            name=form.name.strip(),
            email=form.email.strip().lower(),
            subject=form.subject.strip(),
            message=form.message.strip(),
        )
        db.add(msg)
        db.commit()
        db.refresh(msg)
    except Exception as exc:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not save message. Please try again.",
        ) from exc

    return ContactResponse(
        success=True,
        message="Thank you! Your message has been received.",
        id=msg.id,  # type: ignore[arg-type]
    )


@router.get(
    "/contact/messages",
    summary="List contact messages (admin)",
)
async def list_messages(
    db: Session = Depends(get_session),
    skip: int = 0,
    limit: int = 50,
) -> list[ContactMessage]:
    """Return paginated contact messages for admin review."""
    from sqlmodel import select

    messages = db.exec(
        select(ContactMessage).offset(skip).limit(limit)
    ).all()
    return list(messages)
