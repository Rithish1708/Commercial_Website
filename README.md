# Ex02 Commercial Website
## Date:02-11-2026

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
# html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velocity | Sports Bike Showroom</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- NAVBAR -->
    <header class="navbar">
        <a href="#home" class="logo">VELO<span>CITY</span></a>

        <nav>
            <a href="#home">Home</a>
            <a href="#models">Models</a>
            <a href="#performance">Performance</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" class="nav-btn">Book a Ride</a>
    </header>


    <!-- HERO SECTION -->
    <section class="hero" id="home">

        <div class="hero-content">
            <p class="tagline">BUILT FOR SPEED. DESIGNED FOR YOU.</p>

            <h1 id="hero-name">
                THE ART OF <span>SPEED</span>
            </h1>

            <p id="hero-description">
                Experience pure adrenaline with our next-generation
                sports motorcycles. Power, style and performance
                come together in one machine.
            </p>

            <div class="hero-buttons">
                <a href="#models" class="primary-btn">Explore Bikes</a>
                <a href="#performance" class="secondary-btn">Discover More</a>
            </div>

            <div class="hero-stats">
                <div>
                    <h2 id="hero-power">42 HP</h2>
                    <p>MAX POWER</p>
                </div>

                <div>
                    <h2 id="hero-speed">180 KM/H</h2>
                    <p>TOP SPEED</p>
                </div>

                <div>
                    <h2 id="hero-engine">399 CC</h2>
                    <p>ENGINE</p>
                </div>
            </div>
        </div>

        <div class="hero-image">
            <img
                id="main-bike"
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200"
                alt="Sports Motorcycle">
        </div>

    </section>


    <!-- BIKE MODEL SELECTOR -->
    <section class="model-section" id="models">

        <div class="section-heading">
            <p>FIND YOUR MACHINE</p>
            <h2>CHOOSE YOUR <span>RIDE</span></h2>
            <p>Select your favourite motorcycle model.</p>
        </div>

        <div class="model-selector">

            <button class="model-btn active" onclick="changeBike(0)">
                VELOCITY R1
            </button>

            <button class="model-btn" onclick="changeBike(1)">
                VELOCITY X2
            </button>

            <button class="model-btn" onclick="changeBike(2)">
                VELOCITY PRO
            </button>

        </div>

        <div class="selected-bike">

            <div class="selected-image">
                <img id="model-image"
                     src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000"
                     alt="Selected bike">
            </div>

            <div class="selected-details">

                <p class="tagline">MEET YOUR NEXT MACHINE</p>

                <h2 id="model-name">VELOCITY R1</h2>

                <p id="model-info">
                    A perfect combination of aggressive styling,
                    powerful performance and everyday comfort.
                </p>

                <div class="spec-grid">

                    <div class="spec">
                        <span>ENGINE</span>
                        <h3 id="model-engine">399 CC</h3>
                    </div>

                    <div class="spec">
                        <span>POWER</span>
                        <h3 id="model-power">42 HP</h3>
                    </div>

                    <div class="spec">
                        <span>TOP SPEED</span>
                        <h3 id="model-speed">180 KM/H</h3>
                    </div>

                    <div class="spec">
                        <span>PRICE</span>
                        <h3 id="model-price">₹2.80 L</h3>
                    </div>

                </div>

                <a href="#contact" class="primary-btn">Enquire Now</a>

            </div>
        </div>

    </section>


    <!-- PERFORMANCE SECTION -->
    <section class="performance" id="performance">

        <div class="performance-heading">
            <p>ENGINEERED TO PERFORM</p>
            <h2>MORE THAN JUST <span>A BIKE</span></h2>
            <p>
                Every detail is designed to deliver an exciting
                riding experience.
            </p>
        </div>

        <div class="performance-container">

            <div class="performance-card">
                <div class="icon">⚡</div>
                <h3>Powerful Engine</h3>
                <p>
                    Experience responsive acceleration and
                    powerful engine performance.
                </p>
            </div>

            <div class="performance-card">
                <div class="icon">🏁</div>
                <h3>Racing Design</h3>
                <p>
                    Aerodynamic body design inspired by
                    professional racing motorcycles.
                </p>
            </div>

            <div class="performance-card">
                <div class="icon">🛞</div>
                <h3>Advanced Handling</h3>
                <p>
                    Designed for stability, control and
                    confidence on every ride.
                </p>
            </div>

            <div class="performance-card">
                <div class="icon">🛡️</div>
                <h3>Safety Features</h3>
                <p>
                    Modern braking and safety technology
                    for a controlled riding experience.
                </p>
            </div>

        </div>

    </section>


    <!-- COLLECTION SECTION -->
    <section class="collection">

        <div class="section-heading">
            <p>EXPLORE OUR COLLECTION</p>
            <h2>BUILT TO <span>STAND OUT</span></h2>
        </div>

        <div class="collection-container">

            <div class="collection-card">
                <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=700"
                alt="Sports motorcycle">

                <div class="collection-info">
                    <p>SPORT SERIES</p>
                    <h3>Racing Edition</h3>
                    <a href="#models" onclick="changeBike(0)">Explore Model →</a>
                </div>
            </div>

            <div class="collection-card">
                <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=700"
                alt="Motorcycle">

                <div class="collection-info">
                    <p>STREET SERIES</p>
                    <h3>Street Fighter</h3>
                    <a href="#models" onclick="changeBike(1)">Explore Model →</a>
                </div>
            </div>

            <div class="collection-card">
                <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700"
                alt="Superbike">

                <div class="collection-info">
                    <p>PREMIUM SERIES</p>
                    <h3>Performance Pro</h3>
                    <a href="#models" onclick="changeBike(2)">Explore Model →</a>
                </div>
            </div>

        </div>

    </section>


    <!-- ABOUT SECTION -->
    <section class="about" id="about">

        <div class="about-image">
            <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000"
            alt="Motorcycle showroom">
        </div>

        <div class="about-content">
            <p class="tagline">OUR STORY</p>

            <h2>PASSION FOR <span>PERFORMANCE</span></h2>

            <p>
                Welcome to Velocity, a sports motorcycle showroom
                created for people who love speed, design and
                innovation.
            </p>

            <p>
                We bring together exciting motorcycle designs,
                advanced technology and a passion for riding.
                Our goal is to help every customer discover
                the perfect machine.
            </p>

            <a href="#contact" class="primary-btn">Know More</a>
        </div>

    </section>


    <!-- CUSTOMER REVIEWS -->
    <section class="reviews">

        <div class="section-heading">
            <p>RIDER EXPERIENCES</p>
            <h2>WHAT RIDERS <span>SAY</span></h2>
        </div>

        <div class="review-container">

            <div class="review-card">
                <div class="stars">★★★★★</div>
                <p>
                    "Amazing bike design and a great showroom
                    experience. The team was very helpful."
                </p>
                <h3>Arun Kumar</h3>
                <span>Sports Bike Owner</span>
            </div>

            <div class="review-card">
                <div class="stars">★★★★★</div>
                <p>
                    "I love the aggressive styling and premium
                    appearance. Excellent experience."
                </p>
                <h3>Vijay Raj</h3>
                <span>Sports Bike Owner</span>
            </div>

            <div class="review-card">
                <div class="stars">★★★★★</div>
                <p>
                    "The model selection and customer support
                    made my buying experience easy."
                </p>
                <h3>Karthik S</h3>
                <span>Sports Bike Owner</span>
            </div>

        </div>

    </section>


    <!-- CONTACT SECTION -->
    <section class="contact" id="contact">

        <div class="contact-content">
            <p class="tagline">YOUR NEXT RIDE STARTS HERE</p>

            <h2>READY TO <span>RIDE?</span></h2>

            <p>
                Contact our showroom and book your favourite
                sports bike today.
            </p>
        </div>

        <form id="contact-form">

            <input type="text" id="customer-name"
                   placeholder="Your Name" required>

            <input type="email" id="customer-email"
                   placeholder="Your Email" required>

            <input type="tel" id="customer-phone"
                   placeholder="Phone Number" required>

            <select id="customer-bike">
                <option value="Velocity R1">Velocity R1</option>
                <option value="Velocity X2">Velocity X2</option>
                <option value="Velocity Pro">Velocity Pro</option>
            </select>

            <textarea id="customer-message"
                      placeholder="Your Message"></textarea>

            <button type="submit" class="primary-btn">
                Submit Enquiry
            </button>

        </form>

    </section>


    <!-- FOOTER -->
    <footer>

        <div class="footer-container">

            <div>
                <h2 class="logo">VELO<span>CITY</span></h2>
                <p>Feel the speed. Experience the freedom.</p>
            </div>

            <div>
                <h3>Quick Links</h3>
                <a href="#home">Home</a>
                <a href="#models">Models</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <div>
                <h3>Contact Details</h3>
                <p>Email: info@velocity.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Location: Tamil Nadu, India</p>
            </div>

        </div>

        <div class="copyright">
            <p>© 2026 Velocity Sports Bikes. All Rights Reserved.</p>
        </div>

    </footer>

    <script src="script.js"></script>

</body>
</html>

```
# css
```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #0b0b0b;
    color: white;
}

:root {
    --red: #ff3030;
    --dark: #0b0b0b;
    --grey: #181818;
    --light: #bdbdbd;
}

/* NAVBAR */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 7%;
    background: #080808;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #292929;
}

.logo {
    font-size: 27px;
    font-weight: 900;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
}

.logo span {
    color: var(--red);
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    transition: 0.3s;
}

nav a:hover {
    color: var(--red);
}

.nav-btn,
.primary-btn {
    background: var(--red);
    color: white;
    text-decoration: none;
    padding: 13px 23px;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
}

.nav-btn:hover,
.primary-btn:hover {
    background: white;
    color: black;
    transform: translateY(-3px);
}


/* HERO SECTION */

.hero {
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 7%;
    background:
        radial-gradient(circle at 75% 50%, #292020, #0b0b0b 60%);
    gap: 30px;
}

.hero-content {
    flex: 1;
}

.tagline {
    color: var(--red);
    letter-spacing: 3px;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 22px;
}

.hero h1 {
    font-size: clamp(42px, 5vw, 70px);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 25px;
}

.hero h1 span,
.section-heading span,
.performance-heading span,
.selected-details h2,
.about-content h2 span,
.contact h2 span {
    color: var(--red);
}

.hero-content > p:not(.tagline) {
    color: var(--light);
    line-height: 1.8;
    max-width: 480px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.secondary-btn {
    color: white;
    border: 1px solid white;
    padding: 13px 23px;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.3s;
}

.secondary-btn:hover {
    background: white;
    color: black;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-image img {
    width: 100%;
    max-width: 600px;
    height: 420px;
    object-fit: cover;
    border-radius: 15px;
    filter: contrast(1.1);
}

.hero-stats {
    display: flex;
    gap: 40px;
    margin-top: 55px;
    flex-wrap: wrap;
}

.hero-stats h2 {
    font-size: 25px;
    color: var(--red);
}

.hero-stats p {
    color: #aaa;
    font-size: 10px;
    letter-spacing: 2px;
    margin-top: 8px;
}


/* COMMON SECTION */

.model-section,
.collection,
.reviews {
    padding: 90px 7%;
}

.section-heading,
.performance-heading {
    text-align: center;
    margin-bottom: 45px;
}

.section-heading > p:first-child,
.performance-heading > p:first-child {
    color: var(--red);
    letter-spacing: 3px;
    font-size: 13px;
    margin-bottom: 15px;
}

.section-heading h2,
.performance-heading h2 {
    font-size: 38px;
    margin-bottom: 15px;
}

.section-heading > p:last-child,
.performance-heading > p:last-child {
    color: var(--light);
}


/* MODEL SELECTOR */

.model-selector {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 45px;
}

.model-btn {
    padding: 14px 30px;
    background: #202020;
    color: white;
    border: 1px solid #444;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;
}

.model-btn:hover,
.model-btn.active {
    background: var(--red);
    border-color: var(--red);
}

.selected-bike {
    display: flex;
    align-items: center;
    gap: 60px;
    background: #171717;
    padding: 40px;
    border-radius: 12px;
    flex-wrap: wrap;
}

.selected-image {
    flex: 1;
    min-width: 280px;
}

.selected-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 8px;
    transition: 0.3s;
}

.selected-details {
    flex: 1;
    min-width: 280px;
}

.selected-details h2 {
    font-size: 42px;
    margin-bottom: 20px;
}

.selected-details > p:not(.tagline) {
    color: var(--light);
    line-height: 1.8;
    margin-bottom: 25px;
}

.spec-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
}

.spec {
    background: #252525;
    padding: 18px;
    flex: 1 1 40%;
    border-radius: 5px;
}

.spec span {
    font-size: 11px;
    color: #aaa;
    letter-spacing: 2px;
}

.spec h3 {
    margin-top: 10px;
    font-size: 21px;
}


/* PERFORMANCE */

.performance {
    padding: 90px 7%;
    background: #151515;
}

.performance-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.performance-card {
    flex: 1 1 220px;
    padding: 35px 25px;
    background: #222;
    border: 1px solid #333;
    border-radius: 8px;
    transition: 0.3s;
}

.performance-card:hover {
    transform: translateY(-10px);
    border-color: var(--red);
}

.icon {
    font-size: 35px;
    margin-bottom: 20px;
}

.performance-card h3 {
    margin-bottom: 15px;
}

.performance-card p {
    color: var(--light);
    line-height: 1.7;
    font-size: 14px;
}


/* COLLECTION */

.collection-container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.collection-card {
    flex: 1 1 280px;
    background: #191919;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s;
}

.collection-card:hover {
    transform: translateY(-8px);
}

.collection-card img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.collection-info {
    padding: 25px;
}

.collection-info p {
    color: var(--red);
    font-size: 12px;
    letter-spacing: 2px;
}

.collection-info h3 {
    font-size: 23px;
    margin: 12px 0 20px;
}

.collection-info a {
    color: white;
    text-decoration: none;
}

.collection-info a:hover {
    color: var(--red);
}


/* ABOUT */

.about {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 90px 7%;
    background: #171717;
    flex-wrap: wrap;
}

.about-image {
    flex: 1;
    min-width: 280px;
}

.about-image img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 10px;
}

.about-content {
    flex: 1;
    min-width: 280px;
}

.about-content h2 {
    font-size: 38px;
    margin-bottom: 25px;
}

.about-content > p:not(.tagline) {
    color: var(--light);
    line-height: 1.9;
    margin-bottom: 20px;
}

.about-content .primary-btn {
    margin-top: 15px;
}


/* REVIEWS */

.review-container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.review-card {
    flex: 1 1 250px;
    background: #1c1c1c;
    padding: 30px;
    border-radius: 8px;
    border: 1px solid #333;
}

.stars {
    color: #ffb400;
    margin-bottom: 20px;
    font-size: 20px;
}

.review-card p {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 25px;
}

.review-card h3 {
    margin-bottom: 8px;
}

.review-card span {
    color: #999;
    font-size: 13px;
}


/* CONTACT */

.contact {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 90px 7%;
    background: #151515;
    flex-wrap: wrap;
}

.contact-content {
    flex: 1;
    min-width: 260px;
}

.contact h2 {
    font-size: 45px;
    margin-bottom: 20px;
}

.contact-content > p:last-child {
    color: var(--light);
    line-height: 1.8;
}

.contact form {
    flex: 1;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.contact input,
.contact textarea,
.contact select {
    width: 100%;
    padding: 16px;
    background: #252525;
    color: white;
    border: 1px solid #444;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
}

.contact textarea {
    height: 120px;
    resize: vertical;
}

.contact input:focus,
.contact textarea:focus,
.contact select:focus {
    border-color: var(--red);
}

.contact button {
    font-size: 15px;
}


/* FOOTER */

footer {
    background: #070707;
    padding: 55px 7% 20px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    padding-bottom: 40px;
}

.footer-container > div {
    flex: 1 1 200px;
}

.footer-container h3 {
    margin-bottom: 20px;
}

.footer-container p {
    color: #aaa;
    margin-top: 15px;
    font-size: 14px;
}

.footer-container a {
    display: block;
    color: #aaa;
    text-decoration: none;
    margin: 12px 0;
}

.footer-container a:hover {
    color: var(--red);
}

.copyright {
    border-top: 1px solid #333;
    text-align: center;
    padding-top: 20px;
    color: #888;
    font-size: 13px;
}


/* RESPONSIVE DESIGN */

@media (max-width: 900px) {

    .navbar {
        flex-wrap: wrap;
        gap: 20px;
    }

    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-content > p:not(.tagline) {
        margin: auto;
    }

    .hero-buttons,
    .hero-stats {
        justify-content: center;
    }

    .hero-image img {
        height: 320px;
    }

    .selected-bike {
        gap: 30px;
    }
}

@media (max-width: 600px) {

    .navbar {
        justify-content: center;
        padding: 20px;
    }

    nav {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }

    .nav-btn {
        display: none;
    }

    .hero {
        padding: 65px 20px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-stats {
        gap: 25px;
    }

    .model-section,
    .collection,
    .reviews,
    .performance,
    .about,
    .contact {
        padding: 65px 20px;
    }

    .section-heading h2,
    .performance-heading h2 {
        font-size: 29px;
    }

    .selected-bike {
        padding: 20px;
    }

    .selected-details h2 {
        font-size: 32px;
    }

    .selected-image img {
        height: 230px;
    }

    .about-content h2,
    .contact h2 {
        font-size: 30px;
    }
}

```
# javascript
```

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

```

## OUTPUT
![alt text](<../Screenshot (151).png>)
![alt text](<../Screenshot (152).png>)
![alt text](<../Screenshot (153).png>)
![alt text](<../Screenshot (154).png>)
![alt text](<../Screenshot (155).png>)


## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.