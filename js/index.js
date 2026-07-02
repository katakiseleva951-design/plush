if ($(".intro").length) {

    $(".intro").slick({

        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000

    });

}


const loginModal = document.getElementById("login-modal");
const login = document.getElementById("login");
const loginModalForm = document.getElementById("login-modal-form");

function openLoginModal() {

    if (!loginModal) return;

    loginModal.style.display = "block";

    loginModal.classList.remove("animate__fadeOut");
    loginModal.classList.add("animate__fadeIn");

}

function closeLoginModal() {

    if (!loginModal) return;

    loginModal.classList.remove("animate__fadeIn");
    loginModal.classList.add("animate__fadeOut");

    setTimeout(() => {

        loginModal.style.display = "none";

        loginModal.classList.remove("animate__fadeOut");

        if (loginModalForm) {

            loginModalForm.reset();

        }

    },500);

}

if (login) {

    login.addEventListener("click",openLoginModal);

}


const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModalButton");
const closeButton = document.querySelector(".close");

function openModal(){

    if(!modal) return;

    modal.style.display="block";

    modal.classList.remove("animate__fadeOut");
    modal.classList.add("animate__fadeIn");

}

function closeModal(){

    if(!modal) return;

    modal.classList.remove("animate__fadeIn");
    modal.classList.add("animate__fadeOut");

    setTimeout(()=>{

        modal.style.display="none";

        modal.classList.remove("animate__fadeOut");

    },500);

}

if(openModalButton){

    openModalButton.addEventListener("click",openModal);

}

if(closeButton){

    closeButton.addEventListener("click",closeModal);

}

const hamburger=document.getElementById("hamburger");
const menu=document.getElementById("menu");

function hamburgerMenu(){

    if(!hamburger || !menu) return;

    menu.classList.toggle("open");
    menu.classList.toggle("hamburger-menu");

    hamburger.classList.toggle("open");

}

if(hamburger){

    hamburger.addEventListener("click",hamburgerMenu);

}

if(menu){

    menu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            if(menu.classList.contains("open")){

                hamburgerMenu();

            }

        });

    });

}



const cartIcon = document.querySelector('.cart-icon');
const cartCounter = document.getElementById('cart-counter');
const addToCart = document.querySelectorAll('.add-to-cart');

let itemCount = 0;




if (localStorage.getItem("cartCount")) {

    itemCount = Number(localStorage.getItem("cartCount"));

    if (cartCounter) {
        cartCounter.textContent = itemCount;
    }

}


function updateCartCounter() {

    localStorage.setItem("cartCount", itemCount);

    if (cartCounter) {
        cartCounter.textContent = itemCount;
    }

}


function addToCartHandler() {

    itemCount++;

    updateCartCounter();

}


addToCart.forEach(button => {

    button.addEventListener('click', function (e) {

        e.preventDefault();

        addToCartHandler();

    });

});

function clearCart() {

    itemCount = 0;

    updateCartCounter();

    localStorage.removeItem("cartCount");

    location.reload();

}

const openCart = document.getElementById("openCart");

if (openCart) {

    openCart.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "korzina.html";

    });

}


document.querySelectorAll("form").forEach(form => {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

    });

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (href === "#") return;

        const target = document.querySelector(href);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


document.addEventListener("DOMContentLoaded", () => {

    if (cartCounter) {

        cartCounter.textContent = itemCount;

    }

});

const clearCartBtn = document.getElementById("clearCartBtn");

if (clearCartBtn) {

    clearCartBtn.addEventListener("click", function () {

        clearCart();

    });

}

const removeButtons = document.querySelectorAll(".remove-from-cart");

removeButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        if (itemCount > 0) {

            itemCount--;

           

            updateCartCounter();

        }

    });

});