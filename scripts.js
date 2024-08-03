let currentUser = null;
let storedPassword = "password"; // For demo purposes, in real applications use secure methods for storing passwords

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

function login() {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (user && password === storedPassword) {
        currentUser = user;
        document.getElementById('user').innerText = user;
        showPage('welcome');
        document.getElementById('menu-login').style.display = 'none';
        document.getElementById('menu-register').style.display = 'none';
        document.getElementById('menu-logout').style.display = 'block';
        document.getElementById('menu-rentalform').style.display = 'block';
    } else {
        alert('Invalid username or password');
        showPage('login-form');
    }
}

document.getElementById('register_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch input values
    var password_register = document.getElementById('password-register').value;
    var repeatPassword = document.getElementById('repeatPassword').value;  
    const password_registered = document.getElementById('password-register').value;     

    // Check if passwords match
    if (password_register !== repeatPassword) 
    {
        alert('Password do not match');
        showPage('register-form');
    } 
    else 
    {
        storedPassword = password_registered; 
        alert('Successfully register');  
        showPage('login-form');
    }
  });


function register()
{
    var password_register = document.getElementById('password-register').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    const password_registered = document.getElementById('password-register').value;
    
        // Check if passwords match
        if (password_register !== repeatPassword) 
            {
                
                alert('Password do not match');
                showPage('register-form');
                
            } 
            else {
                storedPassword = password_registered; 
                alert('Successfully register');  
                showPage('login-form');
                
            }
}

function logout() {
    currentUser = null;
    showPage('home');
    document.getElementById('menu-login').style.display = 'block';
    document.getElementById('menu-register').style.display = 'block';
    document.getElementById('menu-logout').style.display = 'none';
    document.getElementById('menu-rentalform').style.display = 'none';
}

function changePassword() {
    const newPassword = document.getElementById('new-password').value;
    if (newPassword) {
        storedPassword = newPassword;
        alert('Password changed successfully');
        showPage('home');
    } else {
        alert('Please enter a new password');
    }
}



/* Home Slideshow */

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Increment the slide index
    slideIndex++;
    
    // If the slide index exceeds the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].classList.add("active");
    
    // Change slide every 2 seconds
    setTimeout(showSlides, 2000);
}

// Initialize the slideshow
showSlides();


/* Ours Cars Java */
const Standardimg = [
    { src: 'images/BYD E6 Electric.png', text: 'BYD E6 Electric'},
    { src: 'images/Hyundai Ioniq 5 Electric.png', text: 'Hyundai Ioniq 5 Electric' },
    { src: 'images/Kia EV6 Electric.png', text: 'Kia EV6 Electric' }
  ];

  const Premiumimg = [
    { src: 'images/MG 4 EV.png', text: 'MG 4 EV'},
    { src: 'images/Audi Q4 e-tron Electric.png', text: 'Audi Q4 e-tron Electric' },
    { src: 'images/Mazda MX-30 Electric.png', text: 'Mazda MX-30 Electric' }
  ];

  const Luxuryimg = [
    { src: 'images/Tesla Model 3.png', text: 'Tesla Model 3' },
    { src: 'images/Mercedes-Benz EQS Electric.png', text: 'Mercedes-Benz EQS Electric' },
    { src: 'images/BMW iX3 Electric.png', text: 'BMW iX3 Electric' }
  ];


  let currentIndex = 0;

  const StandardImage = document.getElementById('StandardImage');
  const Standard_Text = document.getElementById('Standard_Text');
  
  const PremiumImage = document.getElementById('PremiumImage');
  const Premium_Text = document.getElementById('Premium_Text');

  const LuxuryImage = document.getElementById('LuxuryImage');
  const Luxury_Text = document.getElementById('Luxury_Text');
  

  document.getElementById('Standardnext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Standardimg.length;
    StandardupdateImageText();
  });

  document.getElementById('Standardprev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Standardimg.length) % Standardimg.length;
    StandardupdateImageText();
  });

  document.getElementById('Premiumnext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Premiumimg.length;
    PremiumupdateImageText();
  });

  document.getElementById('Premiumprev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Premiumimg.length) % Premiumimg.length;
    PremiumupdateImageText();
  });

  document.getElementById('Luxurynext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Luxuryimg.length;
    LuxuryupdateImageText();
  });

  document.getElementById('Luxuryprev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Luxuryimg.length) % Luxuryimg.length;
    LuxuryupdateImageText();
  });

  function StandardupdateImageText() {
    StandardImage.src = Standardimg[currentIndex].src;
    Standard_Text.textContent = Standardimg[currentIndex].text;
  }

  function PremiumupdateImageText() {
    PremiumImage.src = Premiumimg[currentIndex].src;
    Premium_Text.textContent = Premiumimg[currentIndex].text;
  }

  function LuxuryupdateImageText() {
    LuxuryImage.src = Luxuryimg[currentIndex].src;
    Luxury_Text.textContent = Luxuryimg[currentIndex].text;
  }

  /* Rental Form Java */

document.getElementById('rental_form').addEventListener('submit', function(event) {
    event.preventDefault();
      var Card_NumberInput = document.getElementById('cardNumber');
      var Card_Number_requiredLength = 16;
      var CVVInput = document.getElementById('cvv');
      var CVV_requiredLength = 3;
      var postalcodeInput = document.getElementById('postalcode');
      var postalcode_requiredLength = 6;
      var phoneInput = document.getElementById('phone');
      var phone_requiredLength = 8;

          // Validate form
          let valid = true;
    
      if (Card_NumberInput.value.length !== Card_Number_requiredLength) {
        valid = false;
          alert('The Card Number must be exactly ' + Card_Number_requiredLength + ' digits long.');
          event.preventDefault(); // Prevent form submission
      }
      else if (CVVInput.value.length !== CVV_requiredLength) {
        valid = false;
        alert('The CVV must be exactly ' + CVV_requiredLength + ' digits long.');
        event.preventDefault(); // Prevent form submission
    }
    else if (postalcodeInput.value.length !== postalcode_requiredLength) {
      valid = false;
      alert('The Postal Code must be exactly ' + postalcode_requiredLength + ' digits long.');
      event.preventDefault(); // Prevent form submission
    }
    else if (phoneInput.value.length !== phone_requiredLength) {
      valid = false;
      alert('The Phone Number must be exactly ' + phone_requiredLength + ' digits long.');
      event.preventDefault(); // Prevent form submission
    }

  
  
      
      // Show message
      if (valid) 
        {
            const RentalNumber = 'REF' + Math.floor(Math.random() * 1000000);
            alert (`Rental successful! Your Rental number is ${RentalNumber}.`);
            document.getElementById('RentalNumber').innerText = RentalNumber;
            showPage('rented')           
      } 
    });

     /* cardNumber */

document.getElementById('cardNumber').addEventListener('input', function(event) {
    var Card_NumberInput = event.target;
    var Card_Number = 16;
  
    // Remove non-digit characters
    Card_NumberInput.value = Card_NumberInput.value.replace(/\D/g, '');
  
    // Ensure input value does not exceed max length
    if (Card_NumberInput.value.length > Card_Number) {
      Card_NumberInput.value = Card_NumberInput.value.slice(0, Card_Number);
    }
  });
  
  /* cvv */
  
  document.getElementById('cvv').addEventListener('input', function(event) {
    var CVVInput = event.target;
    var CVV = 3;
  
    // Remove non-digit characters
    CVVInput.value = CVVInput.value.replace(/\D/g, '');
  
    // Ensure input value does not exceed max length
    if (CVVInput.value.length > CVV) {
      CVVInput.value = CVVInput.value.slice(0, CVV);
    }
  });
  
  /* postalcode */
  
  document.getElementById('postalcode').addEventListener('input', function(event) {
    var postalcodeInput = event.target;
    var postalcode = 6;
  
    // Remove non-digit characters
    postalcodeInput.value = postalcodeInput.value.replace(/\D/g, '');
  
    // Ensure input value does not exceed max length
    if (postalcodeInput.value.length > postalcode) {
      postalcodeInput.value = postalcodeInput.value.slice(0, postalcode);
    }
  });
  
  /* phone */
  
  document.getElementById('phone').addEventListener('input', function(event) {
    var phoneInput = event.target;
    var phone = 8;
  
    // Remove non-digit characters
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  
    // Ensure input value does not exceed max length
    if (phoneInput.value.length > phone) {
      phoneInput.value = phoneInput.value.slice(0, phone);
    }
  });

    /* level */
  
    document.getElementById('level').addEventListener('input', function(event) {
        var levelInput = event.target;
        var level = 2;
      
        // Remove non-digit characters
        levelInput.value = levelInput.value.replace(/\D/g, '');
      
        // Ensure input value does not exceed max length
        if (levelInput.value.length > level) {
            levelInput.value = levelInput.value.slice(0, level);
        }
      });

          /* unit number */
  
    document.getElementById('unit-number').addEventListener('input', function(event) {
        var unitInput = event.target;
        var unit = 3;
      
        // Remove non-digit characters
        unitInput.value = unitInput.value.replace(/\D/g, '');
      
        // Ensure input value does not exceed max length
        if (unitInput.value.length > unit) {
            unitInput.value = unitInput.value.slice(0, unit);
        }
      });

  /* Start and End Date  */
    document.addEventListener('DOMContentLoaded', () => {
        const today = new Date();
        const startDateInput = document.getElementById('pickup-date');
        const endDateInput = document.getElementById('return-date');

        // Function to format date to YYYY-MM-DD
        function formatDate(date) {
            return date.toISOString().split('T')[0];
        }

        // Set minimum date for start date to today
        startDateInput.setAttribute('min', formatDate(today));
        endDateInput.setAttribute('min', formatDate(today));


    });

    const cars = [
        { brand: "BYD E6 Electric", price: 100, inStock: true },
        { brand: "Hyundai Ioniq 5 Electric", price: 100, inStock: false },
        { brand: "Kia EV6 Electric", price: 100, inStock: true },
        { brand: "MG 4 EV", price: 200, inStock: true },
        { brand: "Audi Q4 e-tron Electric", price: 200, inStock: false },
        { brand: "Mazda MX-30 Electric", price: 200, inStock: true },
        { brand: "Tesla Model 3", price: 300, inStock: false },
        { brand: "Mercedes-Benz EQS Electric", price: 300, inStock: true },
        { brand: "BMW iX3 Electric", price: 300, inStock: true }

    ];

    const carSelect = document.getElementById('carSelect');
    const priceInput = document.getElementById('price');
    const daysInput = document.getElementById('day');
    const totalPriceInput = document.getElementById('total');

    // Populate dropdown with car brands
    cars.forEach((car, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = car.brand;
        if (!car.inStock) {
            option.disabled = true;
            option.text += " (Out of Stock)";
        }
        carSelect.appendChild(option);
    });

    function updateCarDetails() {
        const selectedCar = cars[carSelect.value];
        priceInput.value = `$${selectedCar.price}`;
        stockInput.value = selectedCar.inStock ? "In Stock" : "Out of Stock";
        calculateTotal();
    }

    function calculateDays() {
        const startDate = new Date(document.getElementById('pickup-date').value);
        const endDate = new Date(document.getElementById('return-date').value);
        if (startDate && endDate && endDate >= startDate) {
            const timeDiff = endDate - startDate;
            const days = timeDiff / (1000 * 60 * 60 * 24) + 1;
            daysInput.value = days;
        } else {
            daysInput.value = 0;
        }
        calculateTotal();
    }

    function calculateTotal(event) {
        if (event) event.preventDefault(); // Prevent form submission if called from submit event
        const selectedCar = cars[carSelect.value];
        const days = parseInt(daysInput.value) || 0;
        const total = selectedCar.price * days;
        totalPriceInput.value = `$${total}`;
    }

    function togglePasswordRegister() {
        const passwordInput = document.getElementById('password-register');
        const toggleIcon = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }

   function togglePasswordRepeat() {
        const passwordInput = document.getElementById('repeatPassword');
        const toggleIcon = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }

    function togglePasswordLogin() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }

    function togglePasswordReset() {
        const passwordInput = document.getElementById('new-password');
        const toggleIcon = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }