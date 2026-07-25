# 🏠 House Price Prediction using Machine Learning

A Machine Learning regression project that predicts house prices based on property characteristics. The project includes data preprocessing, exploratory data analysis (EDA), model comparison, evaluation, and deployment-ready model serialization.

---

## 📌 Project Overview

The goal of this project is to build an accurate house price prediction model by comparing multiple regression algorithms and selecting the best-performing one based on evaluation metrics.

The project follows a complete Machine Learning pipeline:

- Data Loading
- Exploratory Data Analysis (EDA)
- Data Preprocessing
- Feature Engineering
- Data Visualization
- Train/Test Split
- Feature Scaling
- Model Training
- Model Evaluation
- Best Model Selection
- Model Saving

---

## 📊 Dataset

The dataset contains different house features used to predict the house price.

Typical features include:

- Area
- Number of Bedrooms
- Number of Bathrooms
- Stories
- Parking
- Main Road Access
- Air Conditioning
- Preferred Area
- Furnishing Status
- And other property characteristics

**Target Variable**

- `price`

---

## 🛠 Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- XGBoost
- Pickle
- Jupyter Notebook

---

## ⚙️ Machine Learning Workflow

### 1. Data Loading

The dataset is imported using Pandas.

### 2. Exploratory Data Analysis

Performed to understand:

- Dataset shape
- Missing values
- Data types
- Feature distributions
- Correlations
- Outliers

### 3. Data Preprocessing

- Handling categorical variables
- Feature encoding
- Preparing input features
- Train/Test split
- Standard Scaling (for models requiring normalization)

---

## 🤖 Models Trained

The following regression algorithms were evaluated:

- Support Vector Regression (SVR)
- XGBoost Regressor
- Ridge Regression
- Bayesian Ridge Regression
- Linear Regression
- Random Forest Regressor

---

## 📈 Evaluation Metrics

Each model was evaluated using:

- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)
- R² Score

---

## 🏆 Best Model

After comparing all models,

**Bayesian Ridge Regression** achieved the best overall performance with:

- Lowest MAE
- Lowest RMSE
- Highest R² Score

It was selected as the final model for deployment.

---

## 💾 Model Serialization

The trained model and preprocessing objects were saved for future inference:

- `house_price.pkl`
- `scaler.pkl`
- `feature_columns.pkl`

This allows predictions without retraining the model.

---

## 🚀 How to Run

### Clone the repository

```bash
git clone https://github.com/yourusername/House-Price-Prediction.git
```

```bash
cd House-Price-Prediction
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Launch Jupyter Notebook

```bash
jupyter notebook
```

Open:

```
house.ipynb
```

---

## 📌 Future Improvements

- Hyperparameter Optimization
- Feature Selection
- Cross Validation
- Model Explainability using SHAP
- Deploy the model using Flask or FastAPI
- Create an interactive Streamlit web application

---

## 📷 Project Pipeline

```
Dataset
    │
    ▼
EDA
    │
    ▼
Preprocessing
    │
    ▼
Feature Scaling
    │
    ▼
Train/Test Split
    │
    ▼
Train Multiple Models
    │
    ▼
Evaluate Performance
    │
    ▼
Select Best Model
    │
    ▼
Save Model (.pkl)
```
