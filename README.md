# Simple To-do List
This repository has documenting purposes only and it aims on how to start with a simple project in React. Here you can see some main concepts about how to use ReactJS correctly and in an organized way.

## The application
This application is basically a react list, in wich we can add some items, so we can explore how the react state works and how the virtual DOM manage it.

## Our project structure
The project structure is divided in main folders, wich are:

- **components**: Every single (atomic) component needs to be developed here, such as buttons, text fields, selects and other UI components. Feel free to add here your layout components too, like grid rows and columns for example. **Components should only receive props**

- **containers**: Containers have the power to encapsulate all logic needed from components and views. Here's where we can manipulate state and create event handlers that will be passed as props to the children components. **Containers can receive props, but the main goal to create them is to pass information and logic to the views**

- **views**: Here is where our pages belong. All the activities, such as "Todo list", "Todo creation" and "Todo update" need to be here in order to organize it separately from the ui components

I know this explanation can be a little bit dificult, but i'm pretty sure you will understand in the moment you start reading the code. Don't be afraid ;) .