let cart = []
let total = 0
function scrollToMenu(){
document.getElementById("menu").scrollIntoView()
}
function addToCart(name,price){
cart.push({name,price})
total += price
displayCart()
}
function displayCart(){
let list = document.getElementById("cart-items")
list.innerHTML=""
cart.forEach(item => {
let li = document.createElement("li")
li.textContent = item.name + " - ₹" + item.price
list.appendChild(li)
})
document.getElementById("total").textContent = "Total: ₹"+total
}
function bookTable(e){
e.preventDefault()
alert("Table booked successfully!")
}
function login(e){
e.preventDefault()
alert("Login successful!")
}
function signup(e){
e.preventDefault()
alert("Signup successful!")
}