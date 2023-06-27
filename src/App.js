import { Navbar, Footer, Carousel } from "./components/export";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="App-container">
          <Carousel />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
