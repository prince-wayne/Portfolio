import { displayContact } from "/js/contact.js";
// import { displayProjects } from '/js/projects.js'

// low key it could be easier to have this check for our most common compondents and run the code meant for them
/* 
    home 
        header
        skill set
        projects
        Social Media
        contact 
        footer
    
*/


// if these aren't present send an console error
const header = document.getElementById('header');
const footer = document.getElementById('footer');


// if these aren't present just skip we'll transform this into a 
const skillSet = {
    element : document.getElementById('skill-set-container'),
    Path : "skillset" 
};
const social = {
    elememt : document.getElementById('social-media-container'),
    path : 'social media' 
};
const contact =  {
    element: document.getElementById('contact-container'),
    path : 'contact'
}


if (header == null, footer == null) {
    console.log('missing header or footer, new page?');
}

$(function() {
    $('#header').load('/includes/header.html');
    $('#footer').load('/includes/footer.html');


    $('#skill-set-container').load('/includes/skillset.html');
    displayContact(); 

});
