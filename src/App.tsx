import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div style={{background: '#C00D0D'}} className="d-flex justify-content-between flex-column min-vh-100">
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

