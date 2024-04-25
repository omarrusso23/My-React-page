import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <header>
      </header>
      <section class="section1">
        <Body></Body>
      </section>
      <section class="section2">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default App;
