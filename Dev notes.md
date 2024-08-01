# Dev Notes

## Global Tasks
- [~] Build functionality across all pages (JavaScript). <!-- To be refactored later -->

## Completed Tasks
- [x] Build pages
  - [x] Home
  - [x] Projects
    - [x] Hero section
      - [x] Update hero button to link to GitHub
  - [x] Contact Page
    - [x] Contact form
  - [x] About Page
  - [~] Resume
    - [x] Resume file

## Current Tasks
- [~] Review page HTML, structure, and content
  - [x] Home
  - [x] Projects
  - [x] About
  - [x] Contact
  - [x] Resume
  - [ ] Send for typo check and ensure consistency

- [ ] Style pages
  - [ ] Find images to use (none included yet)
  - [~] Build style plan <!-- Current task as of 10 PM 7/17 -->
    - Located at [`/css/#style-guide.md`](#) <!-- Verify this link before committing -->
  - [ ] Create global style sheet
    - [x] Header
    - [x] Projects
    - [ ] About
    - [ ] Contact
    - [ ] Footer
  - [ ] Create page-specific style sheets
    - [~] Home
    - [ ] Projects
    - [ ] About
    - [ ] Contact
    - [ ] Resume

- [~] Improve home page
  - Add hero section and potentially some filler sections to enhance content.
    - [ ] HTML structure
    - [ ] CSS styles

## Work in Progress (WIP) Notes
- Website works on tablets but isn't responsive on phones yet. Kevin Gates is banned.
- currently working to have the projects (flex)-wrap correctly

## Current Issues
- [x] Contact Form HTML file includes an unwanted header. Try using an event listener to ensure the DOM is fully loaded before applying changes.
- [x] Centering issue with HTML and CSS selectors.
- [ ] though we haven't sat down and worried about making our site responsive we need to eventrually.
  though i just realized our main responsive issue is our header. if we strink the page below it's length everything will look to be off center
- [ ] if you add an git ignore we could exlude the unneccesary files from being pushed to the main branch. make sure you start using this on your future developments



## Next Tasks
- [ ] Refactor JavaScript for performance
  - [ ] Use currying to optimize `hero.js` and `project.js` (both perform similar tasks)
  - [ ] Verify `.load` method as best practice with resources like `.dev community` and other popular software development sites.

## Future Improvements

### General
- Use Sass to manage components in separate files, but will not include until Sass is studied to ensure integrity.
- social media section to include my instagram
- badges for the skills orange means learning



### Desktop
- Light/Dark switch
- Long description pop-up from cards
- Additional improvements (to be noted once found)

### Mobile
- No mobile version yet.

