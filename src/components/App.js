import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Item from './Item';

export default function App() {
  return (
    <Item item={{ category: 'pets', name: 'max', count: 1 }}/>
  );
}
  
