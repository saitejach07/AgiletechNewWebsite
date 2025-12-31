import { Hero } from '../components/Hero';
import { Welcome } from '../components/Welcome';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';

export function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Services />
    </>
  );
}
