// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem({bakedGood, addToCart}){
    return (
        <div>
            <h1>{bakedGood.name}</h1>
            {bakedGood.description}
            <p></p>
            Price: {bakedGood.price}
            <p></p>
            <img src={bakedGood.image}></img>
            <button onClick={() => {addToCart(bakedGood)}}>Add to Cart</button>
        </div>
    );
}