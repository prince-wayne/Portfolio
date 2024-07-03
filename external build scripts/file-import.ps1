# Remember adjust per Job / Project Tyshawn!!!!

# Get the current directory
$rootDir = Get-Location

# Create HTML files
New-Item -ItemType File -Path "$rootDir\index.html" -Force
New-Item -ItemType File -Path "$rootDir\about.html" -Force
New-Item -ItemType File -Path "$rootDir\projects.html" -Force
New-Item -ItemType File -Path "$rootDir\project-details.html" -Force
New-Item -ItemType File -Path "$rootDir\resume.html" -Force
New-Item -ItemType File -Path "$rootDir\contact.html" -Force

# Create CSS directory and files
New-Item -ItemType Directory -Path "$rootDir\css" -Force
New-Item -ItemType File -Path "$rootDir\css\main.css" -Force
New-Item -ItemType File -Path "$rootDir\css\normalize.css" -Force
New-Item -ItemType File -Path "$rootDir\css\projects.css" -Force

# Create JS directory and files
New-Item -ItemType Directory -Path "$rootDir\js" -Force
New-Item -ItemType File -Path "$rootDir\js\main.js" -Force
New-Item -ItemType File -Path "$rootDir\js\projects.js" -Force

# Create image directories
New-Item -ItemType Directory -Path "$rootDir\img\project1" -Force
New-Item -ItemType Directory -Path "$rootDir\img\project2" -Force
# Add more project directories as needed

# Create documents directory
New-Item -ItemType Directory -Path "$rootDir\docs" -Force
New-Item -ItemType File -Path "$rootDir\docs\resume.pdf" -Force

# Create includes directory and files
New-Item -ItemType Directory -Path "$rootDir\includes" -Force
New-Item -ItemType File -Path "$rootDir\includes\header.html" -Force
New-Item -ItemType File -Path "$rootDir\includes\footer.html" -Force
New-Item -ItemType File -Path "$rootDir\includes\project-card.html" -Force

# Create data directory and files
New-Item -ItemType Directory -Path "$rootDir\data" -Force
New-Item -ItemType File -Path "$rootDir\data\projects.json" -Force

# Create assets directory and subdirectories
New-Item -ItemType Directory -Path "$rootDir\assets\fonts" -Force
New-Item -ItemType Directory -Path "$rootDir\assets\icons" -Force

Write-Host "Subdirectories and files for portfolio website created successfully."
