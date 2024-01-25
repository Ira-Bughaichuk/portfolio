import Footer from "./../sections/Footer/Footer";
import Header from "./../sections/Header/Header";
import Hero from "./../sections/Hero/Hero";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <div className="container">
        <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}
