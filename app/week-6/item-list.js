"use client";  
import React, { useState } from 'react';
import Item from './item';

function ItemList({ items }) { 
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const renderSortButtons = () => (
    <div>
      <button
        onClick={() => setSortBy('name')}
        style={{ backgroundColor: sortBy === 'name' ? 'blue' : 'lightblue' }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        style={{ backgroundColor: sortBy === 'category' ? 'blue' : 'lightblue' }}
      >
        Sort by Category
      </button>
    </div>
  );

  const renderItems = () => (
    sortedItems.map(item => (
      <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
    ))
  );

  return (
    <div>
      {renderSortButtons()}
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
}

export default ItemList;