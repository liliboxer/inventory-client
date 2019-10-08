import React from 'react';
import Items from '../item/Items';
import Header from '../Header';
import Footer from '../Footer';
import AddItem from '../../containers/AddItem';

export default function HomePage() {
  return (
    <>
      <Header />
      <AddItem />
      <Items items={[
        { category: 'pets', name: 'max', quantity: 2 },
        { category: 'clothing', name: 'boots', quantity: 1 },
        { category: 'electronics', name: 'computer', quantity: 30 },
      ]}/>
      <Footer />
    </>
  );

}
