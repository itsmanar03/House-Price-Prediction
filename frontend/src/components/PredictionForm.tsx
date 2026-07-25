import axios from "axios";
import { useState } from "react";

function PredictionForm() {
  const [formData, setFormData] = useState({
    bedrooms: "",
    bathrooms: "",
    sqft_living: "",
    sqft_lot: "",
    floors: "",
    waterfront: "0",
    view: "0",
    condition: "3",
    sqft_above: "",
    sqft_basement: "",
    yr_built: "",
    yr_renovated: "0",
    city: "",
    statezip: "",
    date: "",
  });

const [prediction, setPrediction] = useState<number | null>(null);
const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/predict/",
      {
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        sqft_living: Number(formData.sqft_living),
        sqft_lot: Number(formData.sqft_lot),
        floors: Number(formData.floors),
        waterfront: Number(formData.waterfront),
        view: Number(formData.view),
        condition: Number(formData.condition),
        sqft_above: Number(formData.sqft_above),
        sqft_basement: Number(formData.sqft_basement),
        yr_built: Number(formData.yr_built),
        yr_renovated: Number(formData.yr_renovated),
        city: formData.city,
        statezip: formData.statezip,
        date: formData.date,
      }
    );

    setPrediction(response.data.predicted_price);
  } catch (error) {
    alert("Prediction failed!");
    console.error(error);
  }

  setLoading(false);
};

  return (
    <form onSubmit={handleSubmit} className="prediction-form">

      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.5"
        name="bathrooms"
        placeholder="Bathrooms"
        onChange={handleChange}
      />

      <input
        type="number"
        name="sqft_living"
        placeholder="Living Area (sqft)"
        onChange={handleChange}
      />

      <input
        type="number"
        name="sqft_lot"
        placeholder="Lot Area (sqft)"
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.5"
        name="floors"
        placeholder="Floors"
        onChange={handleChange}
      />

      <select name="waterfront" onChange={handleChange}>
        <option value="0">No Waterfront</option>
        <option value="1">Waterfront</option>
      </select>

      <input
        type="number"
        name="view"
        placeholder="View"
        onChange={handleChange}
      />

      <input
        type="number"
        name="condition"
        placeholder="Condition"
        onChange={handleChange}
      />

      <input
        type="number"
        name="sqft_above"
        placeholder="Above Ground Area"
        onChange={handleChange}
      />

      <input
        type="number"
        name="sqft_basement"
        placeholder="Basement Area"
        onChange={handleChange}
      />

      <input
        type="number"
        name="yr_built"
        placeholder="Year Built"
        onChange={handleChange}
      />

      <input
        type="number"
        name="yr_renovated"
        placeholder="Year Renovated"
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
      />

      <input
        type="text"
        name="statezip"
        placeholder="State ZIP"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <button type="submit">
        Predict Price
      </button>

    {loading && <p>Predicting...</p>}

    {prediction !== null && (
    <h2>Predicted Price: ${prediction.toLocaleString()}</h2>
    )}

    </form>
  );
}

export default PredictionForm;

