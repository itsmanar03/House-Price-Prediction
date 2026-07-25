import PredictionForm from "../components/PredictionForm";

function HomePage() {
  return (
    <div>
      <h1>House Price Prediction</h1>
      <p>Predict the selling price of a house using Machine Learning.</p>

      <PredictionForm />
    </div>
  );
}

export default HomePage;