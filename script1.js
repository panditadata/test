document.addEventListener('DOMContentLoaded', function() {
    var feedbackLink = document.getElementById('feedbackLink');
    var feedbackFormContainer = document.getElementById('feedbackFormContainer');

    // Hide feedback form initially
    feedbackFormContainer.style.display = 'none';

    // Show feedback form when hovering over the feedback link
    feedbackLink.addEventListener('mouseenter', function() {
        feedbackFormContainer.style.display = 'block';
    });

    // Hide feedback form when mouse leaves the feedback container
    feedbackFormContainer.addEventListener('mouseleave', function() {
        feedbackFormContainer.style.display = 'none';
    });

    // Prevent default behavior of the feedback link
    feedbackLink.addEventListener('click', function(event) {
        event.preventDefault();
    });

 
});


