import React, { useState } from 'react';
import FavButton from './favBtn';

// import useLocalStorage from 'react-use-localstorage';

let Faves = ({ id }) => {
let [storageItem, setStorageItem] = useState(( ) => JSON.parse(localStorage.getItem("faves") || "[]"))
let isFavourited = storageItem.Includes(id)
let handleToggleFavourite = () => { 
    if (!isFavourited) {

        let newStorageItem = [...storageItem, id]
        setStorageItem(newStorageItem);
        localStorage.setItem("faves", JSON.stringify(newStorageItem))
    } else {

        let newStorageItem = storageItem.filter((savedId) => savedId !== is)
        setStorageItem(newStorageItem);
        localStorage.setItem("faves", JSON.stringify(newStorageItem))
    }


    return ( <FavButton onClick={handleToggleFavourite}>
        {isFavourited ? <Favourite color="error" /> : <FavouriteBorder  color="error" />} 
        </FavButton>
    );
    };




export default Faves;