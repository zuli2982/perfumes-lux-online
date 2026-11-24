// Header y footer

function cargarComponente(idContenedor, rutaArchivo, callback) {
    fetch(rutaArchivo)
        .then(response => {
            if (!response.ok) throw new Error(`No se pudo cargar: ${rutaArchivo}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(idContenedor).innerHTML = data;
            
            // Si pasamos una función (callback) al cargar, la ejecutamos aquí
            if (callback) callback(); 
        })
        .catch(error => console.error('Error cargando el componente:', error));
}

document.addEventListener("DOMContentLoaded", () => {

    cargarComponente("footer-placeholder", "components/footer.html");

    cargarComponente("header-placeholder", "components/header.html", () => {
        
        //Menú usuario
        const botonUsuario = document.getElementById("boton-usuario");
        const menuUsuario = document.querySelector(".menu-usuario");

        if (botonUsuario && menuUsuario) {
            botonUsuario.addEventListener("click", function () {
                if (menuUsuario.style.display === "block") {
                    menuUsuario.style.display = "none";
                } else {
                    menuUsuario.style.display = "block";
                }
            });
        }
    });
});


// Mostrar/ocultar contraseña

const botonMostrarPassword = document.getElementById("mostrar-pass");
const campoPassword = document.getElementById("contrasena");
    
if (botonMostrarPassword && campoPassword) {
    botonMostrarPassword.addEventListener("click", function () {
        if (campoPassword.type === "password") {
            campoPassword.type = "text";
            botonMostrarPassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
        } else {
            campoPassword.type = "password";
            botonMostrarPassword.innerHTML = '<i class="bi bi-eye"></i>';
        }
    });
};

// Rating con estrellas

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".rating .star");
    let currentRating = 0; 

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            currentRating = index + 1;
            highlightStars(currentRating);
            console.log(`Calificación guardada: ${currentRating}`);
        });

        star.addEventListener("mouseover", () => {
            highlightStars(index + 1);
        });

        star.addEventListener("mouseout", () => {
            highlightStars(currentRating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }
});