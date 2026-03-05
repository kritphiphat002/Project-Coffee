let ctx=document.getElementById("saleChart")

new Chart(ctx,{
type:"bar",
data:{
labels:["Mon","Tue","Wed","Thu","Fri"],
datasets:[{
label:"Sales",
data:[1200,900,1500,800,2000]
}]
}
})
