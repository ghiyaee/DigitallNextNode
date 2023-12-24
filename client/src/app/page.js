import ListProducts from '../components/layout/ListProducts';
import Hero from '../components/layout/Hero';
import SearchBr from '@/components/layout/SearchBr';
import Slider from '@/components/layout/Slider';
export default async function Home() {
  return (
    <>
      <SearchBr />
      <Hero>
        <Slider/>
        <ListProducts  />
      </Hero>
    </>
  );
}
