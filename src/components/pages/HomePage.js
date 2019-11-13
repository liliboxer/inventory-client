import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import AddItem from '../../containers/AddItem';
import AllItems from '../../containers/AllItems';

function HomePage() {
  return (
    <>
      <Header />
      <AddItem />
      <AllItems/>
      <Footer />
    </>
  );
}

HomePage.propTypes = {
  history: PropTypes.object
};

export default HomePage;
