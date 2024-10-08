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
  - [x] Resume
    - [x] Resume file
- [x] Review page HTML, structure, and content
  - [x] Home
  - [x] Projects
  - [x] About
  - [x] Contact
  - [x] Resume
- [x] Improve home page
  - Add hero section and potentially some filler sections to enhance content.
    - [x] HTML structure
    - [x] CSS styles

## Current Tasks

- [ ] check headers in js and html for contact sections
- [ ] Review all the issues once we're in wifi 
- [ ] Review the Css and clarify 
- [ ] wriite docs 
- [ ] Make site responsive <!-- Important pre launch step -->

- [ ] Send for typo check and ensure consistency

- [ ] Style pages
  - [ ] Find images to use (none included yet) <!-- important pre launch step -->
  - [~] Build style plan <!-- Current task as of 10 PM 7/17 -->
    - Located at [`/css/#style-guide.md`](#) <!-- Verify this link before committing -->
  - [x] Create global style sheet
  - [x] Create page-specific style sheets <!-- we found most of these useless -->
    - [~] Home
    - [ ] Projects
    - [ ] About
    - [ ] Contact
    - [ ] Resume



## Work in Progress (WIP) Notes
- Website works on tablets but isn't responsive on phones yet. Kevin Gates is banned.
- currently working to have the projects (flex)-wrap correctly
- add the social section to pages that apply


## Current Issues
- [x] Contact Form HTML file includes an unwanted header. Try using an event listener to ensure the DOM is fully loaded before applying changes.
- [x] Centering issue with HTML and CSS selectors.
- [ ] though we haven't sat down and worried about making our site responsive we need to eventrually.
  though i just realized our main responsive issue is our header. if we strink the page below it's length everything will look to be off center
- [ ] if you add an git ignore we could exlude the unneccesary files from being pushed to the main branch. make sure you start using this on your future developments
- [ ] Could be a connection issue but ensure that we're able to use our contact form once we're connected to wifi


### post production steps
- [ ] Refactor JavaScript for performance
  - [ ] Use currying to optimize `hero.js` and `project.js` (both perform similar tasks)
  - [ ] in `contact.js` we added a list of pages that we should display headers on. we could make this better but using a .remove at the end of the code instead of having the functions wrapped in an if statement.
  - [ ] Verify `.load` method as best practice with resources like `.dev community` and other popular software development sites.
  - [ ] We started a `main.js ` file that could inprove our code modules by importing all and flowing accross the pages (contact)

## Next Tasks

## Future Improvements

### General
- Use Sass to manage components in separate files, but will not include until Sass is studied to ensure integrity.
- social media section to include my instagram
- badges for the skills orange means learning

- we might remove our resume page until we have a decent resume to display. 


### Desktop
- Light/Dark switch
- Long description pop-up from cards
- Additional improvements (to be noted once found)

### Mobile
- No mobile version yet.
- one majior thing is once we veiw on phone our spacer element is going to be a lot smaller in size

