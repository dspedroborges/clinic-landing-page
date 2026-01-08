import AboutSection from "./components/AboutSection"
import Button from "./components/Button"
import CardsSection from "./components/CardsSection"
import Checks from "./components/Checks"
import Contact from "./components/Contact"
import HowSection from "./components/HowSection"
import MiddleSection from "./components/MiddleSection"
import Testimonials from "./components/Testimonials"
import Whatsapp from "./components/Whatsapp"
import WhySection from "./components/WhySection"
import { content } from "./content"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero"

function App() {
  const slidesToShow =
    window.innerWidth < 640 ? 1 :
      window.innerWidth < 1024 ? 2 :
        3;

  return (
    <div className="bg-gray-50">
      <Whatsapp />
      <Hero
        logo={content.hero.logo}
        title={content.hero.title}
        description={content.hero.description}
        button={content.hero.button}
        backgroundImage={content.hero.fileSrc}
      />
      {/* <HeroVideo
        logo={content.hero.logo}
        title={content.hero.title}
        description={content.hero.description}
        button={content.hero.button}
        videoSrc={content.hero.fileSrc}
      /> */}
      <Checks content={content.checks} />
      <div className="flex items-center justify-center p-12">
        <Button link={content.button.link} name={content.button.name} />
      </div>
      <WhySection
        title={content.whySection.title}
        description={content.whySection.description}
        images={content.whySection.images}
        achievements={content.whySection.achievements}
        slidesToShow={slidesToShow}
      />
      <CardsSection
        title={content.cardsSection.title}
        cards={content.cardsSection.cards}
      />
      <HowSection
        title={content.howSection.title}
        description={content.howSection.description}
        videoSrc={content.howSection.videoSrc}
      />
      <MiddleSection
        title={content.middleSection.title}
        description={content.middleSection.description}
        list={content.middleSection.list}
        button={content.middleSection.button}
        image={content.middleSection.image}
      />
      <Testimonials
        testimonials={content.testimonials}
        slidesToShow={slidesToShow}
      />
      <AboutSection
        title={content.about.title}
        description={content.about.description}
        image={content.about.image}
      />
      <Contact
        address={content.contact.address}
        email={content.contact.email}
        telephone={content.contact.telephone}
      />
    </div>
  )
}

export default App
