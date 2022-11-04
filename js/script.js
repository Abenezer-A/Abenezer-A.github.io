window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("embed", window.scrollY > 0);
});

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

});

ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100

});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 400, origin: 'right'});
ScrollReveal().reveal('.home .info .btn',{ delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.home-img, .img, .about-img', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.about , .description, .copy-rght', { delay: 400, origin: 'right'});
ScrollReveal().reveal('.about, .professional-list li', { delay: 300, origin: 'right', interval: 100});
ScrollReveal().reveal('.skills-description, .contact-card', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.experience-card, .education, .portfolio .img-card', { delay: 600, origin: 'bottom', interval: 100});
ScrollReveal().reveal('footer .group',{ delay: 300, origin: 'top', interval: 100 });
