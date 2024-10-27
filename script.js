//1º saber o valor total do 1º item e o valor total do 2º item

let totalItemPrice = [0,0]
let productPrice = [9.99,20.90]
let quantityItem = [0,0]

function addItem(item){
    let quantity = document.getElementById('quantity' + item)
    let total = document.getElementById('total' + item)
    quantityItem[item] +=1
    totalItemPrice[item] = Number.parseFloat(productPrice[item]) * quantityItem[item]
    quantity.innerHTML = quantityItem[item]
    total.innerHTML = totalItemPrice[item].toFixed(2)
    CartPrice()
}

function removeItem(item){
    if(quantityItem[item] > 0){
        quantityItem[item] -=1
        let quantity = document.getElementById('quantity' + item)
        let total = document.getElementById('total' + item)
        quantity.innerHTML = quantityItem[item]      
        totalItemPrice[item] = Number.parseFloat(productPrice[item]) * quantityItem[item]
        total.innerHTML = totalItemPrice[item].toFixed(2)
        CartPrice()
    }
}

function CartPrice(){
    let totalCartPrice = document.getElementById('totalPrice')
    let total = 0

    for(let i = 0; i < totalItemPrice.length; i++){
        total += totalItemPrice[i]
    }

    totalCartPrice.innerHTML = total.toFixed(2)

}

