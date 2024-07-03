function displayProjectCards(limitEnabled, projectIDs) {
    const container = document.getElementById('project-cards-container');

    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            // Reverse the projects array to show the most recent projects first
            projects.reverse();

            fetch('includes/project-card.html')
                .then(response => response.text())
                .then(template => {
                    if (!container.innerHTML === null) {
                        container.innerHTML = ''; // Clear container before appending new cards
                    }

                    let filteredProjects = projects;
                    projects.reverse(); // reverse the array to show most recent first

                    // Filter projects by projectIDs if provided and they are valid
                    if (Array.isArray(projectIDs) && projectIDs.length > 0) {
                        filteredProjects = filteredProjects.filter(project => projectIDs.includes(project.id));
                    } else if (limitEnabled){
                        // Default to showing the most recent 3 projects if projectIDs is not an array
                        filteredProjects = filteredProjects.slice(0, 3);
                    }

                    filteredProjects.forEach(project => {
                        const card = document.createElement('div');
                        card.innerHTML = template;

                        card.querySelector('.project-image img').src = project.image;
                        card.querySelector('.project-image img').alt = project.title;
                        card.querySelector('.project-title').textContent = project.title;
                        card.querySelector('.project-description').textContent = project.description;
                        card.querySelector('.project-link').href = project.link;

                        container.appendChild(card);
                    });
                })
                .catch(error => console.error('Error loading project card template:', error));
        })
        .catch(error => console.error('Error loading projects:', error));
}
