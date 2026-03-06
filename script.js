let cart = []
let total = 0
let receiptText = ""

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

receiptText = `
Coffee Shop
วันที่: ${date}
เวลา: ${time}
------------------
`

cart.forEach(item=>{

receiptText += `${item.name} ${item.price} บาท\n`

})

receiptText += `
------------------
รวม: ${total} บาท
รับเงิน: ${money} บาท
เงินทอน: ${change} บาท
`

document.getElementById("receipt").innerText = receiptText

cart=[]
total=0

updateCart()

}

function saveReceipt(){

if(receiptText==""){

alert("ยังไม่มีสลิป")
return

}

let blob = new Blob([receiptText], {type:"text/plain"})

let link = document.createElement("a")

link.href = URL.createObjectURL(blob)

link.download = "receipt.txt"

link.click()

}
