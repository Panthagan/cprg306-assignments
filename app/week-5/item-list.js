'use client'; 
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ShoppingList = () => {
  const [sortBy, setSortBy] = useState('name');

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupByCategory = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      acc[item.category] = [...(acc[item.category] || []), item];
      return acc;
    }, {});
    return groupedItems;
  };

  const renderItems = () => {
    if (sortBy === 'grouped') {
      const groupedItems = groupByCategory();
      return Object.entries(groupedItems).map(([category, items]) => (
        <div key={category}>
          <h2 className="font-bold capitalize">{category}</h2>
          <ul>
            {items.map((item, index) => (
              <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
        </div>
      ));
    } else {
      return (
        <ul>
          {sortedItems.map((item, index) => (
            <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <div className="mb-4">
        Sort by:
        <button onClick={() => handleSortBy('name')} className={`mx-2 ${sortBy === 'name' ? 'bg-orange-300' : 'bg-orange-100'}`}>Name</button>
        <button onClick={() => handleSortBy('category')} className={`${sortBy === 'category' ? 'bg-orange-300' : 'bg-orange-100'}`}>Category</button>
        <button onClick={() => handleSortBy('grouped')} className={`${sortBy === 'grouped' ? 'bg-orange-300' : 'bg-orange-100'}`}>Grouped Category</button>
      </div>
      {renderItems()}
    </div>
  );
};

export default ShoppingList;
