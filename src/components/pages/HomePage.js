import React from 'react';
import Items from '../Items';
import ItemForm from '../ItemForm';
import Header from '../Header';
import Footer from '../Footer';

export default function HomePage() {

  return (
    <>
      <Header />
      <ItemForm />
      <Items items={[
        { category: 'pets', name: 'max', count: 2 },
        { category: 'clothing', name: 'boots', count: 1 },
        { category: 'electronics', name: 'computer', count: 30 },
      ]}/>
      <Footer />
    </>
  );

}
