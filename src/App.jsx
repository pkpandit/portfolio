import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main class="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
