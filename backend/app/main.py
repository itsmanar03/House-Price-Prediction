from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.prediction import router

app = FastAPI(
    title="House Price Prediction API",
    description="Predict house prices using a trained Machine Learning model",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prediction Routes
app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "House Price Prediction API is running successfully!"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }
