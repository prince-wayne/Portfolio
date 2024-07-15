function displayContact(header) {
    if (!header) {
        $(document).ready(function() {
            // Ensure the contact form is loaded
            $('#contact-form').load('/includes/contact.html', function() {
                const contactHeader = $('#contact-form-header');
                console.log(contactHeader);
                if (contactHeader.length) {
                    contactHeader.remove();
                } else {
                    console.log('Element with ID "contact-form-header" not found.');
                }
            });
        });
    } else {
        $('#contact-form').load('/includes/contact.html');
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);

    fetch('https://formspree.io/f/xeojqdzr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



export {displayContact}