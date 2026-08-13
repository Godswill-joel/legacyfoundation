import AboutUs from '@/components/pages/aboutus';
import Donate from '@/components/pages/donate';
import EventHomePage from '@/components/pages/events';
import Hero from '@/components/pages/hero'


export default function Home() {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Donate />
      <EventHomePage />
    </section>
  );
}
