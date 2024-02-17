'use client'; 
import React, { useState } from 'react';
import items from './items.json';
import Item from './item';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupItemsByCategory = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupItemsByCategory).sort();

  const renderItemsByCategory = () => {
    return sortedCategories.map(category => (
      <div key={category}>
        <h2 className="mt-4 mb-2 capitalize">{category}</h2>
        {groupItemsByCategory[category].map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mr-2 px-3 py-1 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`mr-2 px-3 py-1 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`px-3 py-1 rounded ${
            sortBy === 'groupedCategory' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setSortBy('groupedCategory')}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === 'groupedCategory' ? (
        renderItemsByCategory()
      ) : (
        <ul>
          {sortedItems.map(item => (
            <li key={item.id}>
              <Item name={item.name} quantity={item.quantity} category={item.category} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
