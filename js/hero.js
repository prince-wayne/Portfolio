import {loadDataFile} from './load-data.js';

const HeroData = loadDataFile('/data/hero sections.json');

function displayHeroSection(heroID) {
    const container = document.getElementById('hero-section-container');
    if (!container) {
        console.error('Error: no container element found');
    }
    if (!container) {
        console.error('Error: Hero section container not found.');
        return;
    }

    fetch('includes/hero-sections.html') /* error here, file not found, fixed the json and html have a seperate name*/
        .then(response => response.text())
        .then(template => {
            container.innerHTML = ''; // Clear container before appending new hero section

            HeroData.then(heroSections => {
                try {
                    console.log(heroSections);
                } catch (error) {
                    console.log(error);
                }
                const heroSection = heroSections.find(section => section.id === heroID); // error here, .find is not a function
                

                if (!heroSection) {
                    console.error('Error: Hero section not found.');
                    return;
                }

                const heroElement = document.createElement('div');
                heroElement.innerHTML = template;

                /* background image */
                // heroElement.querySelector('.hero-image img').src = heroSection.image;
                // heroElement.querySelector('.hero-image img').alt = heroSection.title; 

                /*  title */
                heroElement.querySelector('.hero-title').textContent = heroSection.title;

                /* subtitle */
                heroElement.querySelector('.hero-subtitle').textContent = heroSection.subtitle;
                
                /* description */ 
                heroElement.querySelector('.hero-description').textContent = heroSection.description;

                /* call to action */
                heroElement.querySelector('.hero-cta').textContent = heroSection.buttonText;
                heroElement.querySelector('.hero-cta').href = heroSection.buttonLink;


                container.appendChild(heroElement);

                /* 
                    "id" : "Contact",
                    "title": "Contact Me",
                    "description": "Get in touch and let's create something amazing together.",
                    "buttonText": "Get in Touch",
                    "buttonLink": "#contactSection",
                    "backgroundImage": "path/to/contact-hero-image.jpg"
                */
            }).catch(error => console.error('Error processing hero sections data:', error));
        })
        .catch(error => console.error('Error loading hero section template:', error));
}

// Example usage:
/* 

    document.addEventListener('DOMContentLoaded', () => {
        displayHeroSection('name'); // Pass the hero section ID you want to display (the id is the )
    });

 */

export {displayHeroSection};