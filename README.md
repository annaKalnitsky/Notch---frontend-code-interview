# Notch - frontend code interview

## Background
Welcome to Notch! We're excited to meet you!
The goal for this coding exercise is for us to see your basic frontend coding skills:
- Understanding requirements
- Implementing code that works
- Communication as a team member
- Code maintainability
- Basic skills in: React, CSS, HTML, Typescript

Also, it's a starting point for the next interview, where we will discuss SPA architecture.

The exercise instructions are deliberately partially detailed.
You will need to make reasonable assumptions and communicate with your interviewer about open questions.

Good luck!

## General instructions
You will create an onboarding flow for an insurance product - insurance for an Instagram account.
The flow consists of asking the user some questions related to their insurable asset.

[Here's a video of the full working flow (for inspiration only - you will only implement parts of this)](https://drive.google.com/file/d/1dafRvC-1JZ6YVN2tbp1gIMPFfVy3Lqob/view?usp=sharing) 

In this repository, you will find a basic React app with one page consisting of 3 user input components.
Your job is to style these components and make them into a flow similarly to the video.

You are allowed to change anything you want in the existing code, use any external library and ask anything you want to.
We want to see what you can do with the tools you will have every day.

### Running the application
`npm install && npm run dev`

## Exercise
### Part A - Styling each component
Under `src/steps` you will find 3 flow steps components.
They are completely un-styled. HTML only.
The 1st task is to style the components (static style, no animation).

Implement the desktop version only - but keep in mind that there are mobile/tablet versions as well.
Don't implement the different states for the buttons and input components, only the default state.

[You can find the design for the steps here](https://www.figma.com/file/qKexQATW733R1bBvHvg342/%F0%9F%A4%96-Front-End-Code-Interview-Hand-Off)

The "definition of done" for part 1- A page with all 3 input components correctly styled.

### Part B - Flow behavior
Your job is to implement a flow behaviour using routes.
Each flow step should have its own route, e.g `/everBeenHacked`.

The user's answers should be saved between the routes in some state, so that we can send all the answers to a server at the end of the flow (we won't implement actually sending it to a server).
When answering each step, the app should automatically go to the next step. The steps order is `everBeenHacked -> instagramUserName -> isThisYou`.
If a user answered the previous step, the answer should appear at the top of the page (refer to the Figma design to see this).

Keep in mind - there's a bug in the current code relating to changing & saving the user's answers. Find it and fix it.

After the user answers "this is me", you should display a page with the user's answers. No need for a design here, just a `JSON.stringify` is good enough.

### Part C - flow design & animation
Refer to the [full flow video](https://drive.google.com/file/d/1dafRvC-1JZ6YVN2tbp1gIMPFfVy3Lqob/view?usp=sharing) again. Implement animations to switch between the flows.

### Part D - bonus
- Implement the mobile & tablet versions
- Implement the different hover/valid/invalid etc. states for the button and input elements

## Next steps
### Sending in the assignment
Two options:
- Create a github repo and send the link to your interviewer
- Send the .zipped source code in an email to your interviewer

### Next interview
For the next interview, we will design fully featured SPA for based on this flow. It will be a whiteboard brainstorm meeting, not a coding task. Example questions:
- State management including saving current flow state for customer who stop the flow in the middle and will return to the webpage later
- Bundling, performance and build tool chains
- Supporting different flows for different users. For example, if a user's IG account is private, we will change up the order of the steps and/or add a step to the flow.
- Supporting theming, i18n, accessibility, responsiveness
- Deployment architecture and considerations
