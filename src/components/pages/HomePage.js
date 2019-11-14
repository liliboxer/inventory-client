import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import AddItem from '../../containers/AddItem';
import AllItems from '../../containers/AllItems';

export default function HomePage() {
  return (
    <>
      <Header />
      <AddItem />
      <AllItems/>
      <Footer />
    </>
  );
}
