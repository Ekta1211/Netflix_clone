        // JavaScript for FAQ toggle
        const labels = document.querySelectorAll('label');

        labels.forEach((label) => {
            label.addEventListener('click', () => {
                const content = label.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });

// login page 
const loginButton = document.getElementById('loginButton');

        loginButton.addEventListener('click', () => {
            // Redirect to the login page URL
            window.location.href = 'login_page.html'; // Replace with your login page URL
        });

// JavaScript code to handle the button click and redirect
document.getElementById('getStartedBtn').addEventListener('click', function() {
    // Replace 'login.html' with the actual path of your login page
    window.location.href = 'login_page.html';
  });