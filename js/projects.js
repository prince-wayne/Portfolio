function displayProjectCards(limitEnabled, projectIDs) {
    const container = document.getElementsByClassName('project-cards-container')[0];

    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            // Reverse the projects array to show the most recent projects first
            projects.reverse();

            fetch('includes/project-card.html')
                .then(response => response.text())
                .then(template => {
                    if (!container) {
                        console.error('Error: Project cards container not found.');
                        return;
                    }
                    container.innerHTML = ' '; // Clear container before appending new cards
                    
                    let filteredProjects = projects;

                    // if the limit is relased then it will list all projects
                    if (limitEnabled) {
                        // Filter projects by projectIDs if provided and they are valid
                        if (Array.isArray(projectIDs) && projectIDs.length > 0 && projectIDs.length <= 3) {
                            filteredProjects = filteredProjects.filter(project => projectIDs.includes(project.id));
                        } else {
                            // Default to showing the most recent 3 projects if projectIDs is not an array
                            filteredProjects = filteredProjects.slice(0, 3);
                            const header = document.querySelector('#project-showcase-header');
                            header.innerHTML = "Recent projects";
                        } 
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
// displayProjectCards(false, [1, 4, 2]); //tests <- failed current task <- fix this behavior 
// new bug found, if the function array exceds a length of 3 it will display all of those