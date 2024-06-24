import * as cartService from "./services/cart.js";
import createItem from'./services/item.js'

const myCart = [];
const myWhishList = [];

console.log("welcome to the your Shopee cart");

const itemOne = await createItem("camisa", 20.99, 1);
const itemTwo = await createItem("calca", 39.99, 3);



await cartService.addItem(myCart, itemOne);
await cartService.addItem(myCart, itemTwo);




await cartService.removeItem(myCart, itemTwo);
await cartService.removeItem(myCart, itemTwo);


// await cartService.deleteItem(myCart, itemTwo.name);
// await cartService.deleteItem(myCart, itemOne.name);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);






