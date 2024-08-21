document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav_list');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    console.log('hello');
    document.getElementById("home-btn").addEventListener('click', function() {
        const homesection=document.getElementById("home")
        homesection.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById("about-btn").addEventListener('click',function(){
        const aboutsection=document.getElementById("about")
        aboutsection.scrollIntoView({behavior:'smooth'})
    });
    document.querySelector(".contact_btn").addEventListener('click', function() {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

    
