"use client"
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        const newId = Date.now().toString();
        const itemWithId = { ...newItem, id: newId };
        setItems([...items, itemWithId]);
    };

    const handleItemSelect = (item) => {
        const itemName = item.name.split(',')[0].trim();
        const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-black text-center mb-4">Shopping List</h1>
            <div className="flex">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;