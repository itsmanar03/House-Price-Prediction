from fastapi import APIRouter
import pandas as pd

from app.schemas.prediction import HouseFeatures
from app.services.inference import (
    model,
    scaler,
    feature_columns,
)
from app.services.preprocessing import preprocess_input

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post("/")
def predict(data: HouseFeatures):

    # Convert request to dictionary
    house = data.model_dump()

    # Preprocess input
    df = preprocess_input(house, feature_columns)

    # Scale data
    df_scaled = scaler.transform(df)

    # Predict
    prediction = model.predict(df_scaled)[0]

    return {
        "predicted_price": round(float(prediction), 2)
    }