import joblib
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
MODELS_DIR = BASE_DIR / "models"

model = joblib.load(MODELS_DIR / "house_price.pkl")
scaler = joblib.load(MODELS_DIR / "scaler.pkl")
feature_columns = joblib.load(MODELS_DIR / "feature_columns.pkl")