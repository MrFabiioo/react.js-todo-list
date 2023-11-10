import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItem) {
      localStorage.setItem('TODOS_V1',JSON.stringify(initialValue));
      parsedItem=[]
    } else {
      parsedItem=JSON.parse(localStorageItem);
    }
    const[item,setItem]=React.useState(parsedItem);
    const saveItem = (newItem) =>{
      localStorageItem.setItem('TODOS_V1',JSON.stringif(newItem));
      setItem(newItem);
    };
    return [saveItem, item]
  }

export  {useLocalStorage};