import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems, deleteItem } from '../actions'; // Import action creators

function AddItem() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(addItems(input));  // Dispatch the action to add the item
    setInput('');  // Clear the input field after dispatching
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteItem(id));  // Dispatch the action to delete the item
  };

  return (
    <div>
      <form onSubmit={addItemHandler}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Add Item</button>
      </form>

      {/* Assuming you have an array of items to map through */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItem;
