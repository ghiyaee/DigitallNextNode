import ListProducts from '../components/layout/ListProducts';
import Hero from '../components/layout/Hero';
import SearchBr from '@/components/layout/SearchBr';
import Product from '@/models/Products';
import dbConnect from '@/dbConnect';
export default async function Home() {
  await dbConnect();
  const products = await Product.find();
  return (
    <>
      <SearchBr />
      <Hero>
        <ListProducts products={products} />
      </Hero>
    </>
  );
}
