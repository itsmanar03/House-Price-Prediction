import pandas as pd


def preprocess_input(data, feature_columns):
    df = pd.DataFrame([data])

    # Create year, month, day from date
    if "date" in df.columns:
        df["date"] = pd.to_datetime(df["date"])
        df["year"] = df["date"].dt.year
        df["month"] = df["date"].dt.month
        df["day"] = df["date"].dt.day
        df.drop(columns=["date"], inplace=True)

    # One-hot encoding
    df = pd.get_dummies(
        df,
        columns=["city", "statezip"],
        drop_first=True,
        dtype=int,
    )

    # Match training columns
    df = df.reindex(columns=feature_columns, fill_value=0)

    return df