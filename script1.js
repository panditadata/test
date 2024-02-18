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

    // Submit feedback form
    var feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        var formData = new FormData(feedbackForm);
        var rating = formData.get('rating');
        var opinion = formData.get('opinion');

        // Send feedback to PHP script
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit_feedback.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Feedback submitted successfully.');
                } else {
                    console.error('Error submitting feedback.');
                }
            }
        };
        xhr.send('rating=' + encodeURIComponent(rating) + '&opinion=' + encodeURIComponent(opinion));
    });
});


