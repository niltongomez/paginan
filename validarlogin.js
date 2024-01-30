var formulario=document.getElementById("validar")
formulario.addEventListener("submit",function(e){
e.preventDefault()
var usuario="niltoncatherin"
var clave="02082022"
var user=document.getElementById("usuario").value
var password=document.getElementById("clave").value

console.log(user)
console.log(password)
if (usuario==user & clave==password) {
    location.href="main.html"
} else {
    alert("no sabes  o como es")
    
}


})