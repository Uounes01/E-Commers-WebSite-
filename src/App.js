import Header from "./component/Header";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Place from "./component/Place";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Hero/>
      <Product/>
      <Place/>
      <Blog/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
