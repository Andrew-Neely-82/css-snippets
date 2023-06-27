import { Navbar, CSSEditor, Footer } from "./components/export";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="App-container">
          <CSSEditor />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
