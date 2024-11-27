import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShoppingList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);


  const addItemHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newItem = { id: Date.now(), name: input };

      axios.post('http://localhost:3000/items', newItem)
        .then(response => {
          setItems([...items, response.data]);
          setInput(''); //
        })
        .catch(error => console.error('Error adding item:', error));
    }
  };

  const deleteItemHandler = (id) => {
    axios.delete(`http://localhost:3000/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <form onSubmit={addItemHandler}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add an item"
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}





// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addItems, deleteItem } from '../actions';

// function AddItem() {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch();

//   const addItemHandler = (e) => {
//     e.preventDefault();
//     dispatch(addItems(input));
//     setInput(''); 
//   };

//   const deleteItemHandler = (id) => {
//     dispatch(deleteItem(id));
//   };

//   return (
//     <div>
//       <form onSubmit={addItemHandler}>
//         <input 
//           type="text" 
//           value={input} 
//           onChange={(e) => setInput(e.target.value)} 
//         />
//         <button type="submit">Add Item</button>
//       </form>

    
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AddItem;
