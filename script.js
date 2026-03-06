let cart = []
let total = 0

function addItem(name,price){

cart.push({name,price})

total += price

updateCart()

}

function updateCart(){

let cartList = document.getElementById("cart")

cartList.innerHTML=""

cart.forEach(item=>{

let li = document.createElement("li")

li.textContent = item.name+" - "+item.price+" บาท"

cartList.appendChild(li)

})

document.getElementById("total").innerText = total

}

function pay(){

let money = parseFloat(document.getElementById("money").value)

if(money < total){

alert("เงินไม่พอ")

return

}

let change = money-total

let now = new Date()

let date = now.toLocaleDateString()

let time = now.toLocaleTimeString()

let receipt = `
<h3>ใบเสร็จ Coffee Shop</h3>
วันที่: ${date}<br>
เวลา: ${time}<br>
<hr>
`

cart.forEach(item=>{

receipt += item.name+" "+item.price+" บาท<br>"

})

receipt += `
<hr>
รวม: ${total} บาท<br>
รับเงิน: ${money} บาท<br>
เงินทอน: ${change} บาท
`

document.getElementById("receipt").innerHTML = receipt

cart=[]
total=0

updateCart()

}
