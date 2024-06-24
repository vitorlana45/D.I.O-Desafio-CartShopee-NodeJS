// quais ações meu carrinho pode fazer
// CASOS DE USO 

// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

 // calcular o total 
async function calculateTotal (userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee cart Total is ");
    console.log(`Total: ${result}`);
};

    // deletar item no carrinho
async function deleteItem(userCart, name) {

    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}
    // remover um item - diminuir um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log("item encontrado no index", indexFound)

    //2. Caso não encontre o item
    if(indexFound === -1) {
    console.log("item não encontrado!")
    return;
    }

    //3. item > 1 subtrair um item da quntidade
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity-=1;
        return;
    }
    // item = 1 deletar o item
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1)
        return;
    }
}

async function displayCart (userCart){
    console.log("\nshopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | quantity = ${item.quantity}x | Subtotal = R$ ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}
