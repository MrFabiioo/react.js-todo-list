import React from "react";

function useLocalStorage(itemName, initialValue){
  const[item,setItem]=React.useState(initialValue);
  const[loading,setLoading]=React.useState(true);
  const[error,setError]=React.useState(false);

    

    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=[]
          } else {
            parsedItem=JSON.parse(localStorageItem);
            setItem(parsedItem)
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError("Error:"+error,true)
        }
      },2000)

    },[]);

    
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringif(newItem));
      setItem(newItem);
    };
    return {saveItem, item,loading,error}
  };

export  {useLocalStorage};