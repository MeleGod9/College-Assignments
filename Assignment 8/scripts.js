document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('userInfoForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Capture the form data
        const formData = new FormData(form);
        const userInfo = {
            name: formData.get('name'),
            gender: formData.get('gender'),
            mobile: formData.get('mobile'),
            email: formData.get('email'),
            city: formData.get('city'),
            state: formData.get('state'),
            country: formData.get('country')
        };

        // Store the data in localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Redirect to the display page
        window.location.href = 'display.html';
    });
});
