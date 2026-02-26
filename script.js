// script.js

// Function to load HTML content dynamically based on the provided URL
function loadContent(url) {
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Event listeners for navigation links
document.getElementById('inspectors-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    loadContent('inspectors.html');
});

document.getElementById('sgae-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    loadContent('sgae.html');
});
