let cart=[]
let total=0

function addItem(name,price){

let item=cart.find(i=>i.name===name)

if(item){
item.qty++
}else{
cart.push({name,price,qty:1})
}

renderCart()

}

function removeItem(i){

cart.splice(i,1)

renderCart()

}

function renderCart(){

let table=document.getElementById("cartTable")

table.innerHTML=`
<tr>
<th>สินค้า</th>
<th>ราคา</th>
<th>จำนวน</th>
<th>รวม</th>
<th></th>
</tr>
`

total=0

cart.forEach((item,i)=>{

let sum=item.price*item.qty

total+=sum

table.innerHTML+=`
<tr>
<td>${item.name}</td>
<td>${item.price}</td>
<td>${item.qty}</td>
<td>${sum}</td>
<td><button onclick="removeItem(${i})">X</button></td>
</tr>
`

})

document.getElementById("total").innerText=total

}

function pay(){

let money=document.getElementById("money").value

let change=money-total

document.getElementById("change").innerText=change

}

function printReceipt(){

let w=window.open()

w.document.write(`
<h3>Coffee Shop</h3>
<hr>
`)

cart.forEach(i=>{
w.document.write(`${i.name} x${i.qty} = ${i.price*i.qty}<br>`)
})

w.document.write(`<hr>Total ${total}`)

w.print()

}
