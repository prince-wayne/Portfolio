# Dev Notes
--- 

## July 14, 2024
---

## Gobal Tasks:
- [~] build functionality across all pages (js) <!-- we will need to refractor later on -->

## Complete task
- [x] build pages 
    - [x] Home
    - [x] Projects 
        - [x] hero section 
            - [x] update hero button to link to Github
    - [x] Contact Page
        - [x] contact form
    - [x] About Page
    - [~] Resume
        - [x] Resume file 

## Current task:
- [~] Review pages html, structure, and content
    - [x] Home
    - [x] Projects 
    - [x] About
    - [x] Contact
    - [x] Resume
    - [ ] Send to typo check and consisently check

- [ ] Style pages 
    - [ ] Find images to use. We haven't used any yet.
    - [~] build style plan  <!-- <= current task as of 10 PM 7/17 --> 
        - located at ('/css/# style Guide.md')[styles link] <!-- make sure you did this link right before commit -->
    - [ ] make global style sheet
        - [x] header
        - [x] projects 
        - [ ] about
        - [ ] contact
        - [ ] footer
    - [ ] make page specific style sheets
        - [~] Home
        - [ ] Projects 
        - [ ] About
        - [ ] Contact
        - [ ] Resume

## WIP notes
    website works on tablets but hasn't been built with responsive design yet so no phones, kevin gates is banned.

## Current issues
- [x] Contact Form html file has an header and i'm ot able to select the header id to just change it within indivual pages where i would need to.
    - works in console lets try to use an event listener to wait until the dom is loaded fully.

- [x] centering issue, check html and css selectors.
 
## Next Tasks
- [ ] Refactor JS for Performance
    - [ ] Use Currying so the hero.js and the project.js can use less resources 
        note: they both fundamentally do the same task: load data, load includes file, select container, fill container using data file.
    - [ ] ensure that the .load method is the best practice for this case. could use '.dev comunity' for this, along with other popular software development sites.
