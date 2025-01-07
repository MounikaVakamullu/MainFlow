<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Natural Art Gallery</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        // Lightbox and Gallery Image Functionality
        const galleryImages = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const close = document.getElementById('close');
        
        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImage.src = image.src;
                lightbox.classList.add('active');
            });
        });

        close.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImage) {
                lightbox.classList.remove('active');
            }
        });

        // Form Submission and Thank You Message
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });

        function handleFormSubmit(event) {
            event.preventDefault();  // Prevents the form from submitting

            // Hide the form
            document.getElementById("contactForm").style.display = "none";

            // Show the thank you message
            document.getElementById("thankYouMessage").style.display = "block";
        }
    </script>
</head>
<body>
    <header>
        <nav>
            <ul class="navbar">
                <li><a href="home.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contactForm" onsubmit="handleFormSubmit(event)">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div>
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" oninput="this.value=this.value.replace(/[^0-9]/g,'');" required>
            </div>

            <button type="submit">Submit</button>
        </form>

        <!-- Thank You Message -->
        <div id="thankYouMessage" style="display:none; text-align:center;">
            <h3>Thank you for your interest! We will contact you soon.</h3>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Natural Art Gallery. All rights reserved.</p>
    </footer>
</body>
</html>
