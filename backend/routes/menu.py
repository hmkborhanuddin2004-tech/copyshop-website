"""
BrewHaven Coffee — Menu API route
GET /api/menu          → all items
GET /api/menu/drinks   → drinks only
GET /api/menu/pastries → pastries only
"""
from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from database import get_session
from models import MenuItemDB, MenuItemOut

router = APIRouter(tags=["Menu"])

# ─── Static seed data (used on first startup) ─────────────────────────────────
SEED_MENU = [
    # Drinks
    {"name": "Espresso", "price": 3.50, "description": "Rich and bold single-origin shot", "category": "drinks"},
    {"name": "Latte", "price": 4.50, "description": "Smooth espresso with velvety steamed milk", "category": "drinks"},
    {"name": "Cappuccino", "price": 4.00, "description": "Perfect foam balance — classic Italian style", "category": "drinks"},
    {"name": "Hot Chocolate", "price": 4.00, "description": "Rich Belgian cocoa with steamed milk", "category": "drinks"},
    {"name": "Iced Coffee", "price": 3.50, "description": "Refreshing cold-brew over ice", "category": "drinks"},
    {"name": "Chai Latte", "price": 4.50, "description": "Aromatic spiced tea with warm milk", "category": "drinks"},
    # Pastries
    {"name": "Croissant", "price": 3.00, "description": "Flaky, buttery layers baked fresh daily", "category": "pastries"},
    {"name": "Blueberry Muffin", "price": 3.50, "description": "Bursting with plump wild blueberries", "category": "pastries"},
    {"name": "Cinnamon Roll", "price": 4.00, "description": "Sweet, gooey, and dusted with icing", "category": "pastries"},
    {"name": "Chocolate Chip Cookie", "price": 2.50, "description": "Classic favorite, crisp edge soft center", "category": "pastries"},
    {"name": "Scone", "price": 3.00, "description": "Crumbly perfection — pairs with any tea", "category": "pastries"},
    {"name": "Danish Pastry", "price": 3.50, "description": "Fruity jam filling in delicate pastry", "category": "pastries"},
]


def seed_menu_if_empty(db: Session) -> None:
    """Populate menu table on first run."""
    existing = db.exec(select(MenuItemDB).limit(1)).first()
    if existing is None:
        for item in SEED_MENU:
            db.add(MenuItemDB(**item))
        db.commit()


@router.get("/menu", response_model=list[MenuItemOut], summary="Get full menu")
async def get_menu(db: Session = Depends(get_session)) -> list[MenuItemOut]:
    seed_menu_if_empty(db)
    items = db.exec(select(MenuItemDB).where(MenuItemDB.is_available == True)).all()
    return [MenuItemOut(**i.model_dump()) for i in items]


@router.get("/menu/{category}", response_model=list[MenuItemOut], summary="Get menu by category")
async def get_menu_category(
    category: str, db: Session = Depends(get_session)
) -> list[MenuItemOut]:
    seed_menu_if_empty(db)
    items = db.exec(
        select(MenuItemDB)
        .where(MenuItemDB.category == category, MenuItemDB.is_available == True)
    ).all()
    return [MenuItemOut(**i.model_dump()) for i in items]
