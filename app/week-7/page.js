"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <div className="  pr-4  ">
        <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
        <h3 className="text-xl font- text-white">Add New Item</h3>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-black">Meal Ideas</h1>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;