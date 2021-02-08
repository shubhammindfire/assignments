// first JS assignment
"use strict";

// prices
const books = 250;
const furniture = 500;
const appliance = 300;

let booksReduce = document.getElementById('books-reduce');
let booksIncrease = document.getElementById('books-increase');

let furnitureReduce = document.getElementById('furniture-reduce');
let furnitureIncrease = document.getElementById('furniture-increase');

let applianceReduce = document.getElementById('appliance-reduce');
let applianceIncrease = document.getElementById('appliance-increase');

let booksQuantity = document.getElementById('books-quantity');
let furnitureQuantity = document.getElementById('furniture-quantity');
let applianceQuantity = document.getElementById('appliance-quantity');

let booksPrice = document.getElementById('books-price');
let furniturePrice = document.getElementById('furniture-price');
let appliancePrice = document.getElementById('appliance-price');

let finalQuantity = 0;
let finalShipping = 0;
let finalPrice = 0;


booksReduce.onclick = function(){
    let q = Number(booksQuantity.innerHTML);

    if(q > 0){
        booksQuantity.innerHTML = --q;
        booksPrice.innerHTML = q * books;
    }
    else
        alert("Please choose a value greater than zero!");
    
    updateData();
}

booksIncrease.onclick = function(){
    let q = Number(booksQuantity.innerHTML);

    booksQuantity.innerHTML = ++q;
    booksPrice.innerHTML = q*books;

    updateData();
}

furnitureReduce.onclick = function(){
    let q = Number(furnitureQuantity.innerHTML);

    if(q > 0){
        furnitureQuantity.innerHTML = --q;
        furniturePrice.innerHTML = q * furniture;
    }
    else
        alert("Please choose a value greater than zero!");
    
    updateData();
}

furnitureIncrease.onclick = function(){
    let q = Number(furnitureQuantity.innerHTML);

    furnitureQuantity.innerHTML = ++q;
    furniturePrice.innerHTML = q*furniture;

    updateData();
}

applianceReduce.onclick = function(){
    let q = Number(applianceQuantity.innerHTML);

    if(q > 0){
        applianceQuantity.innerHTML = --q;
        appliancePrice.innerHTML = q * appliance;
    }
    else
        alert("Please choose a value greater than zero!");
    
    updateData();
}

applianceIncrease.onclick = function(){
    let q = Number(applianceQuantity.innerHTML);

    applianceQuantity.innerHTML = ++q;
    appliancePrice.innerHTML = q*appliance;

    updateData();
}

function updateQuantity(){
    finalQuantity = Number(booksQuantity.innerHTML) + Number(furnitureQuantity.innerHTML) + Number(applianceQuantity.innerHTML);
    document.getElementById("quantity").innerHTML = finalQuantity;
}

function updateShipping(){
    /* If cart quantity = 1, Shipping charges = Rs 50
If cart quantity > 1, then shiping charges = 25
If total amount >= 1000, Shipping charges = 0 */

    finalPrice = Number(booksPrice.innerHTML) + Number(furniturePrice.innerHTML) + Number(appliancePrice.innerHTML);

    if(finalQuantity === 1)
        finalShipping = 50;
    else if(finalPrice >= 1000)
        finalShipping = 0;
    else
        finalShipping = 25;
    
    document.getElementById("shipping").innerHTML = finalShipping;
}

function updatePrice(){
    finalPrice = finalPrice + finalShipping;

    document.getElementById("price").innerHTML = finalPrice;
}

function updateData(){
    updateQuantity();
    updateShipping();
    updatePrice();
}
