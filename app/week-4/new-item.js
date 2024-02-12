import React, { useState, useEffect } from 'react';

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  useEffect(() => {
    setName("");
    setQuantity(1);
    setCategory("produce");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
      </form>
    </div>
  );
};

export default NewItem;
