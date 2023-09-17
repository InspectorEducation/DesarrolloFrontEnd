let resultados;
const url = "http://localhost:8080/api/productos";
const contenedor = document.querySelector(`tbody`);
const formArticulo = document.querySelector('form')

const nombre = document.querySelector(`#nombre`);
const precio = document.querySelector(`#precio`);
const marca = document.querySelector(`#marca`);
const stock = document.querySelector(`#stock`);
const capacidad = document.querySelector(`#capacidad`);
const descripcion = document.querySelector(`#descripcion`);
const botonAgregar = document.querySelector(`#btnCrear`);

//Procedimiento Crear
btnCrear.addEventListener('click', () => {
    console.log("ENTRO");
    var data = {
        nombre: nombre.value,
        precio: precio.value,
        marcaNombre: marca.value,
        capacidad: capacidad.value,
        cantidad: stock.value,
        comentarios: descripcion.value
    };

    console.log(data);
    fetch(url + "/crear", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
})


//funcion para mostrar los resultados
const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `<tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.nombre}</td>
                            <td>${articulo.descripcion.comentarios}</td>
                            <td>${articulo.precio}</td>
                            <td>${articulo.descripcion.cantidad}</td>
                            <td>${articulo.marca.nombre}</td>                                                        
                            <td class="text-center"><button class="btnEditar btn btn-sm btn-warning"><i class="fas fa-edit"></i> Editar</button>  <button class="btnBorrar btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i> Borrar</button> <td>
                    </tr>
`
    })
    contenedor.innerHTML = resultados
}

//Procedimiento Mostrar
fetch("http://localhost:8080/api/productos/lista", {
    method: "GET"
})
    .then(response => response.json())
    .then(data => {
        console.log(data),
            mostrar(data)
    })
    .catch(error => console.log(error));



const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("Desea eliminar el producto?.",
    function(){
        fetch("http://localhost:8080/api/productos/eliminar/?id="+id, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
        //alertify.success('Ok')
    },
    function(){
        alertify.error('Cancel')
    })
})


//Procedimiento Editar
on(document, 'click', '.btnEditar', e =>{    
    
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    var data = {
        nombre: nombre.value,
        precio: precio.value,
        marcaNombre: marca.value,
        capacidad: capacidad.value,
        cantidad: stock.value,
        comentarios: descripcion.value
    };    
    fetch("http://localhost:8080/api/productos/actualizar/?id="+id,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( response => response.json() )
    .then( response => location.reload() )
    .catch(error => alertify.error("Por favor ingresar datos en el formulario de registro"))
})


//Autenticacion

class Auth {
  
    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth");
        console.log(auth);
        this.validateAuth(auth);
    }
    
    validateAuth(auth) {
        if (auth == "") {
            window.location.replace("../vista/login.html");
            console.log("la validacion del token fue incorrecta");
        } else {
            document.querySelector("body").style.display = "block";
            console.log("la validacion del token fue correcta");
        }
    }
    
    logOut() {
        localStorage.removeItem("auth");
        window.location.replace("../vista/index.html");
    }
   }
   
   const auth = new Auth();