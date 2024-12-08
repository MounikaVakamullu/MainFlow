// Interactive Navbar: Smooth Scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for your message!');
    document.getElementById('contactForm').reset();
  });
  
  // Dynamic Cart Feedback
  const cartButtons = document.querySelectorAll('.product-item button');
  let cartCount = 0;
  
  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      alert(`Added to cart! Total items: ${cartCount}`);
    });
  });
  