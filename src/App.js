import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
      </div>
    </>
  );
};

export default App;
