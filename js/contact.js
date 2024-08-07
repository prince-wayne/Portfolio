function displayContact() {
    // we are transforming this to be used in the main.js
    const path = window.location.pathname;
    console.log(path);
    /*  
        true [home, projects, resume]
        false [about, contact]
    */
    // this list is for the pages that display a header, i could've reversed it to make it faster (a single milisecond lol)
    const list = ['/index.html', '/projects.html', '/resume.html'];
    // header would go here if we were to revert this file
    if (list.includes(path) == false) {
        $(document).ready(function() {
            // Ensure the contact form is loaded
            $('#contact-container').load('/includes/contact.html', function(response, status, xhr) {
                if (status == "error") {
                    console.log("Error loading contact form: " + xhr.status + " " + xhr.statusText);
                } else {
                    const contactHeader = $('#contact-form-header');
                    console.log(contactHeader);
                    if (contactHeader.length) {
                        contactHeader.remove();
                    } else {
                        console.log('Element with ID "contact-form-header" not found.');
                    }

                    const formElement = document.getElementById('contact-form');
                    if (formElement && formElement.tagName === 'FORM') {
                        formElement.addEventListener('submit', function(event) {
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
                                // alert(data);
                                alert("thank you for your submition");
                                console.log(data);
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                        });
                    } else {
                        console.error('Element with ID "contact-form" is not a form.');
                    }
                }
            });
        });
    } else {
        $('#contact-container').load('/includes/contact.html', function(response, status, xhr) {
            if (status == "error") {
                console.log("Error loading contact form: " + xhr.status + " " + xhr.statusText);
            } else {
                const formElement = document.getElementById('contact-form');
                if (formElement && formElement.tagName === 'FORM') {
                    formElement.addEventListener('submit', function(event) {
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
                            // alert(data); // this wasn't something we needed
                            console.log(data);
                            alert('thank you for your submission');
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                    });
                } else {
                    // this code block has the erro check above
                    console.error('Element with ID "contact-form" is not a form.'); 
                }
            }
        });
    }
}

// Ensure this script runs after jQuery is loaded
export { displayContact }
