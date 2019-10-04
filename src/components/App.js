import React from 'react';
import Items from './Items';

export default function App() {
  return (
    <Items items={[
      { category: 'pets', name: 'max', count: 2 },
      { category: 'clothing', name: 'boots', count: 1 },
      { category: 'electronics', name: 'computer', count: 1 },
    ]}/>
  );
}
  
