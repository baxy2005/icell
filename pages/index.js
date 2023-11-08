import Head from 'next/head';
import Hero from '../components/hero';
import Card from '../components/card';
import Card2 from '../components/card-2';
import Button from '../components/button';


export default function Home() {
  return (
    <>
    <Hero/>
    <section className="bg-gray-900 services">
      <Card2/>
      </section>
      <section className="container px-4 sm:px-8">
      <Card/>
      </section>
      </>
  );
}