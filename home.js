
    // Function to show the selected section and hide others
    function showSection(sectionId) {
      const sections = document.querySelectorAll('main');
      sections.forEach((section) => {
        section.style.display = section.id === sectionId ? 'flex' : 'none';
      });
    }

    // Add click event listeners to each navigation link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
      });
    });

    // Show the home page by default
    showSection('home');
     
/// birthday page 

 // Function to switch between the birthday message and thank you page
 function switchContent() {
    const birthdaySection = document.getElementById('birthday');
    const birthdayMsgSection = document.getElementById('birthday-msg');
    const thankYouSection = document.getElementById('thankyou');

    // Hide the birthday section and show the thank you section
    birthdaySection.style.display = 'none';
    thankYouSection.style.display = 'block';

    // Get the message from the textarea
    const message = document.getElementById('birthday-textarea').value;
    console.log('Received message:', message);
  }

  // Function to switch to the birthday message section after 5 seconds
  function showBirthdayMessage() {
    const birthdayMsgSection = document.getElementById('birthday-msg');

    // Hide the birthday image and show the birthday message section
    document.getElementById('birthday-img').style.display = 'none';
    birthdayMsgSection.style.display = 'block';

    // Set a timer to switch to the thank you page after 5 seconds
    setTimeout(switchContent, 5000);
  }

  // Add click event listener to the submit button
  document.getElementById('submit-btn').addEventListener('click', showBirthdayMessage);

   // Slider functionality
   let slideIndex = 1;

   function showSlide(index) {
     const slides = document.querySelectorAll('.slide');
     if (index < 1) {
       slideIndex = slides.length;
     } else if (index > slides.length) {
       slideIndex = 1;
     }

     slides.forEach((slide) => {
       slide.style.display = 'none';
     });

     slides[slideIndex - 1].style.display = 'block';
   }

   function prevSlide() {
     showSlide(slideIndex -= 1);
   }

   function nextSlide() {
     showSlide(slideIndex += 1);
   }

   // Show the first slide on page load
   showSlide(slideIndex);


