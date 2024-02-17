import Footer from "./../sections/Footer/Footer";
import Header from "./../sections/Header/Header";
import Hero from "./../sections/Hero/Hero";
import About from './../sections/About/About';
import Skills from './../sections/Skills/Skills';
import Education from './../sections/Education/Education';
import Languages from './../sections/Languages/Languages';
import Projects from './../sections/Projects/Projects';
import Offer from './../sections/Offer/Offer';
import Contacts from './../sections/Contacts/Contacts';

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero />
        <About />
        <Skills />
        <Offer />
        <Projects />
        <Education />
        <Languages />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

