// Action Types
export const addItem = 'addItem';
export const removeItem ='removeItem';

// Action Creators
export const addItems = (item) => {
  return {
    type: addItem,
    payload: item,
  };
};

export const deleteItem = (id) => {
  return {
    type: removeItem,
    payload: id,
  };
};
