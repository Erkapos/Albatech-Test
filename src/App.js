import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Stack from "./components/stack/stack";
import Service from "./components/service-list/service";
import Collaboration from "./components/collaboration/collaboration";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Partnered from "./components/partnered/partnered";
import Consultation from "./components/consultation/consultation";
import Footer from "./components/footer/footer";
import FAB from "./components/fab/fab";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Stack />
      <Collaboration />
      <Portfolio />
      <Testimonial />
      <Partnered />
      <Consultation />
      <Footer />
      <FAB />
    </div>
  );
}

export default App;
