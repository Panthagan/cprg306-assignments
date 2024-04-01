import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollectionRef);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                data: doc.data(),
            });
        });

        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

async function addItem(userId, item) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const newItemRef = await addDoc(itemsCollectionRef, item);

        return newItemRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
}

export { getItems, addItem };
