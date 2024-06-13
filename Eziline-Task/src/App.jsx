import { Navigation } from './components/Navigation.jsx';
import { Header } from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";
import { NextSection } from "./components/NextSection.jsx";
import { CardsSection } from "./components/CardsSection.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import { ImageSection } from "./components/ImageSection.jsx";
import { SlideSection } from "./components/SlideSection.jsx";
import { SecondCardSection } from "./components/SecondCardSection.jsx";
import { Footer } from "./components/Footer.jsx";

import "./css/nav.css";

const App = ()=>{
  return(
    <>
      <div className="wraper">
        <Navigation/>
        <Header/>
      </div>
      <Section/>
      <NextSection/>
      <CardsSection/>
      <ProjectSection/>
      <ImageSection/>
      <SlideSection/>
      <SecondCardSection/>
      <Footer/>
    </>
  )
}


export default App;
