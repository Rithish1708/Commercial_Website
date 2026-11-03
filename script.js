
const bikes = [
    {
        name: "VELOCITY R1",
        engine: "399 CC",
        power: "42 HP",
        speed: "180 KM/H",
        price: "₹2.80 L",
        description: "A perfect combination of aggressive styling, powerful performance and everyday comfort.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200"
    },

    {
        name: "VELOCITY X2",
        engine: "650 CC",
        power: "68 HP",
        speed: "210 KM/H",
        price: "₹4.50 L",
        description: "Designed for riders who love aggressive street performance and a bold riding experience.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200"
    },

    {
        name: "VELOCITY PRO",
        engine: "900 CC",
        power: "110 HP",
        speed: "250 KM/H",
        price: "₹8.20 L",
        description: "A premium performance machine built for passionate riders who demand more.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200"
    }
];

function changeBike(index) {

    const bike = bikes[index];

    // Update hero details
    document.getElementById("hero-name").innerHTML =
        bike.name + ' <span>EDITION</span>';

    document.getElementById("hero-description").textContent =
        bike.description;

    document.getElementById("hero-power").textContent = bike.power;
    document.getElementById("hero-speed").textContent = bike.speed;
    document.getElementById("hero-engine").textContent = bike.engine;

    // Update model section
    document.getElementById("model-name").textContent = bike.name;
    document.getElementById("model-info").textContent = bike.description;

    document.getElementById("model-engine").textContent = bike.engine;
    document.getElementById("model-power").textContent = bike.power;
    document.getElementById("model-speed").textContent = bike.speed;
    document.getElementById("model-price").textContent = bike.price;

    // Update bike images
    document.getElementById("main-bike").src = bike.image;
    document.getElementById("model-image").src = bike.image;

    // Update selected button
    const buttons = document.querySelectorAll(".model-btn");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    buttons[index].classList.add("active");

    // Update contact form selection
    document.getElementById("customer-bike").selectedIndex = index;
}


// CONTACT FORM

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customer-name").value;
    const email = document.getElementById("customer-email").value;
    const phone = document.getElementById("customer-phone").value;
    const bike = document.getElementById("customer-bike").value;

    alert(
        "Thank you " + name +
        "!\nYour enquiry for " + bike +
        " has been received.\nWe will contact you soon."
    );

    this.reset();

});
