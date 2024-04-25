import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <section className="body">
        <Body></Body>
      </section>
      <section className="footer">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default App;
