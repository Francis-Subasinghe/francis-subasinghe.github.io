document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Gather form data
    const formData = {
        from_name: document.getElementById("user-email").value,
        from_email: document.getElementById("user-email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send the email using EmailJS
    emailjs.send("service_s3iudsb", "template_r13ep2r", formData)
    .then(function(response) {
        console.log("Success!", response.status, response.text);
        
        // Show the success message
        document.getElementById("success-message").style.display = 'block';
        
        // Reset the form after submission
        document.getElementById("contact-form").reset();

        // Hide the success message after 5 seconds
        setTimeout(function() {
            document.getElementById("success-message").style.display = 'none';
        }, 5000); // Hide after 5 seconds (5000 milliseconds)
    }, function(error) {
        console.error("Failed to send email:", error);
        alert("Error sending message, please try again.");
    });
});


// Toggle dark mode class for the theme
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const sections = document.querySelectorAll(".section");
const headings = document.querySelectorAll("h1, h2, h3"); // Select all headings
const experienceCards = document.querySelectorAll(".experience-card");
const projectCards = document.querySelectorAll(".project-card");

// Check for saved user preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
    sections.forEach(section => section.classList.add("dark-mode"));
    headings.forEach(heading => heading.classList.add("dark-mode"));
    experienceCards.forEach(card => card.classList.add("dark-mode")); // Add dark mode to experience cards
    projectCards.forEach(card => card.classList.add("dark-mode")); // Add dark mode to project cards
}

toggleButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    // Toggle dark mode class for all sections, headings, and cards
    sections.forEach(section => section.classList.toggle("dark-mode"));
    headings.forEach(heading => heading.classList.toggle("dark-mode"));
    experienceCards.forEach(card => card.classList.toggle("dark-mode")); // Add dark mode to experience cards
    projectCards.forEach(card => card.classList.toggle("dark-mode")); // Add dark mode to project cards

    // Save the current theme in local storage
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector('.background-grid');
    const cubeSize = 20; // Size of each cube in pixels

    function generateGrid() {
        gridContainer.innerHTML = ''; // Clear any existing cubes

        const gridWidth = window.innerWidth;
        const gridHeight = window.innerHeight;

        const cols = Math.ceil(gridWidth / cubeSize);
        const rows = Math.ceil(gridHeight / cubeSize);
        const numCubes = cols * rows;

        gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${cubeSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, ${cubeSize}px)`;

        for (let i = 0; i < numCubes; i++) {
            const cube = document.createElement('div');
            cube.classList.add('grid-cube');
            gridContainer.appendChild(cube);

            // Add click event listener to each cube
            cube.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent click from affecting underlying elements
                cube.classList.toggle('active'); // Toggle the active class to highlight it
            });
        }
    }

    // Generate grid on page load
    generateGrid();

    // Regenerate grid on window resize
    window.addEventListener('resize', generateGrid);
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});
