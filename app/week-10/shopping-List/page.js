"use client"
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect, useState } from "react";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const Page = ({ user }) => {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        if (user && user.uid) {
            const loadItems = async () => {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            };
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user && user.uid) {
            const newItemId = await addItem(user.uid, newItem);
            setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
        }
    };

    const handleItemSelect = (item) => {
        if (item && item.name) {
            const itemName = item.name.split(',')[0].trim();
            const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[-]|[-]|[\u2011-\u26FF]|[-])/g, '');
            setSelectedItemName(cleanedItemName);
        }
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
