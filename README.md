# Google Doc

[Google Doc version](https://docs.google.com/document/d/1hvxnFWGL2SaOcCwEqzzqa20JWeKVX-ZPzWqMoCde4rs/edit?usp=sharing)


Muzzammil: Alot of the code is boilerplate, so we can definitely use it. It'll be easier for me since all the files are set up and the 
mainframe of the code is there. We just have to work on some of the small bugs that it has, 
such as the side navbars buttons, they haven't been linked yet. 
Also all the pages show when we click ‘Create an App’ It ends up showing all the pages instead of just one that we clicked on. 

## Side Navbar Links Not Linked Correctly:
    - The side navbar (Sidenav component) buttons use href attributes pointing to #main. This suggests that all buttons are pointing to the same section (i.e., #main), hence clicking on any button results in navigating to the same section. Instead, you should assign unique ids for each target section and ensure the href links match those IDs.
### All Pages Show When 'Create an App' is Clicked:
    - This is likely due to incorrect routing. If you want to display different content based on which option is clicked (e.g., "Build an App", "Write a Book", etc.), you need to set up proper routes and components that are conditionally rendered based on the route.
## Enhancements and Solutions:

### Fix the Side Navbar Links:
    - Assign unique id values to different sections of your app and update the href attributes in the navbar to reflect those unique IDs.
### Implement Correct Routing for Pages:
    - You mentioned that all pages show when 'Create an App' is clicked. This issue can be solved by leveraging React Router to handle navigation between different pages/components. Each link in the navbar should lead to a different route that renders a specific component.
### Improve Sidenav with react-router-dom:
    - Instead of using href, you can use Link from react-router-dom to navigate between routes.
### Tidy Up the UI:
    - Tailwind CSS is already used, so you can further improve the styling and transitions for a more interactive experience, such as animated transitions for the sidebar, hover effects on buttons, etc.




## Younus: 
    The current code provides a solid foundation for us to build upon. It runs and has basic functionality, 
    though there are some minor issues. What we need to focus on moving forward is identifying and fixing these issues, 
    experimenting with the code, and fully understanding its structure. The website seems to be in its starting phase and 
    needs much work to be completed and finished, The website functions correctly with no major code-related errors, but when 
    deploying it on localhost, some buttons seem unresponsive. We'll need to investigate this further and troubleshoot the problem. 
    As a team, our goal is to clearly understand the tasks and expectations for how the website should look and function going forward. 
    With that clarity, we can work collaboratively to deliver an improved, fully functional solution.

## Ammar Code Analysis:
    
    - The current implementation has all components grouped on a single main page, which makes the structure less efficient 
    and harder to maintain. To enhance the user experience and maintain a cleaner architecture, we should:

### Separate Components into Individual Pages:

    - By breaking down the components into distinct pages, we can improve scalability and make it easier to manage each feature separately.
    This will involve creating separate React components for each page (e.g., website creation, app creation, book writing, and logo design).

### Implement React Router for Navigation:

    - We need to use React Router to manage navigation between pages. This will allow users to be directed to the correct page when they click on the corresponding buttons.
    React Router's use will provide a smoother and more intuitive navigation experience, with potential routes like /create-app, /write-book, etc.

### Preserve the Current Design:

    - The overall design of the front end looks good, and major layout changes may not be necessary at this stage yet .
    The primary focus should be on ensuring that all the functionalities are properly implemented and that the buttons and components work as intended.

