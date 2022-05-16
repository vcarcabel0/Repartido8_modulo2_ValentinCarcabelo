var lis = document.querySelectorAll("p");
//i representa la posición en el array lis
//lis.length la medida del array
        for(let i=0; i<lis.length; i++){
          lis[i].style.color="red"
          lis[i].style.fontSize="1rem"         
          document.getElementsByTagName("p")[i].addEventListener("mouseover", pasarMouse)
          document.getElementsByTagName ("p")[i].addEventListener("mouseout", sacarMouse)
          function pasarMouse(){
              document.getElementsByTagName("p")[i].style.color = "black";
              document.getElementsByTagName("p")[i].style.fontSize = "20px";
              document.getElementsByTagName("p")[i].style.border = "black 5px solid";
          }
          function sacarMouse(){
                document.getElementsByTagName("p")[i].style.color = "red";
                document.getElementsByTagName("p")[i].style.fontSize ="15px";
                document.getElementsByTagName("p")[i].style.border = "none";
          }
        }


        document.getElementById("rojo").addEventListener("click", rojo);
function rojo (){
        document.getElementsByTagName("body")[0].style.backgroundColor = "red"
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('')"
}


        document.getElementById("amarillo").addEventListener("click", amarillo);
function amarillo (){
        document.getElementsByTagName("body")[0].style.backgroundColor = "yellow"
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('')"
}


        document.getElementById("naranja").addEventListener("click", naranja);
function naranja (){
        document.getElementsByTagName("body")[0].style.backgroundColor = "orange"
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('')"
}


        document.getElementById("azul").addEventListener("click", azul);
function azul (){
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue"
        console.log(document.getElementsByTagName("body")[0].style.backgroundColor )
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('')"
}

document.getElementById("imagen").addEventListener("click", imagen);
function imagen (){
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg')";

}

var nombre
var boton = document.getElementById("boton");
boton.addEventListener("click", function(){
        nombre = document.getElementById("nombre").value;
        gracias (nombre)
})
function gracias (it){
        var gracias = document.getElementById("gracias");
        gracias.innerHTML = `Gracias ${it} por contactarse con nuestra compañia`
}