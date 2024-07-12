import {loadDataFile} from './load-data.js';

function displayProjectCards(limitEnabled, projectIDs) {
    const container = document.getElementById('project-cards-container');

    if (!container) {
        console.error('Error: Project cards container not found.');
        return;
    }

    fetch('../includes/project-card.html')
        .then(response => response.text())
        .then(template => {
            container.innerHTML = ''; // Clear container before appending new cards

            loadDataFile('data/projects.json').then(projects => {
                // Reverse the projects array to show the most recent projects first
                projects.reverse();

                let filteredProjects = projects;

                // If the limit is enabled then it will list all projects
                if (limitEnabled) {
                    // Filter projects by projectIDs if provided and they are valid
                    if (Array.isArray(projectIDs) && projectIDs.length > 0 && projectIDs.length <= 3) {
                        filteredProjects = filteredProjects.filter(project => projectIDs.includes(project.id));
                    } else {
                        // Default to showing the most recent 3 projects if projectIDs is not an array
                        filteredProjects = filteredProjects.slice(0, 3);
                        const header = document.querySelector('#project-showcase-header');
                        if (header) {
                            header.innerHTML = "Recent projects";
                        }
                    }
                }

                filteredProjects.forEach(project => {
                    const card = document.createElement('div');
                    card.innerHTML = template;

                    // card.querySelector('.project-image img').src = project.images.desktop; // include onve we have the pictures
                    card.querySelector('.project-image img').alt = project.title;
                    card.querySelector('.project-title').textContent = project.title;
                    card.querySelector('.project-description').textContent = project.shortDescription;
                    card.querySelector('.project-link').href = project.link;

                    container.appendChild(card);
                });
            }).catch(error => console.error('Error processing projects data:', error));
        })
        .catch(error => console.error('Error loading project card template:', error));
}

export {displayProjectCards};

