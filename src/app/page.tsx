import Footer from "./../sections/Footer/Footer";
import Header from "./../sections/Header/Header";
import Hero from "./../sections/Hero/Hero";
import About from './../sections/About/About';
import Skills from './../sections/Skills/Skills';

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
