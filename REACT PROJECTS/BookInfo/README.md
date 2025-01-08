# Mini Project: Displaying Book Information with Props

## Overview
In this mini project, I created two functional components in React to practice the use of props. The first component is responsible for passing the book data as props (Books.jsx), and the second component receives those props(Card.jsx) and displays the book information dynamically.

### Tools Used:
- **React:** I used React to create two functional components, which allowed me to practice working with props and how data flows between components.
- **JSX:** JSX syntax was used to render the book data inside HTML-like elements in the components.
- **Vanilla CSS:** I used Vanilla CSS for styling in my `index.css` file and I ensured the design was clean, responsive, and easy to implement.

### What I Learned:
1. **Props in React:**
   - Props are a way to pass data from a parent component to a child component. In this project, I passed book information from a parent component `Books,jsx` and displayed it in a child component `Card.jsx` by accessing the props.
   - This helped me understand how data is shared between components, which is a key concept in React.

2. **Functional Components:**
   - I used functional components to make the project simpler and more efficient. React functional components are easier to maintain and test than class components, making them ideal for smaller projects like this one.

3. **Dynamic Data Rendering:**
   - By passing book data as props, I learned how to render dynamic content in a React component, which helps in making the app more interactive and flexible.
   
4. **React Component Reusability:**
   - I learned that passing props allows me to create reusable components. For instance, the second component can be reused to display information for different books by simply passing in different props.

### Responsiveness:
- I made the project responsive using **Vanilla CSS**. By utilizing `@media` for various screen breakpoints, the layout automatically adjusts based on the screen size.
- The book information is displayed in a responsive card layout, which stacks vertically on smaller screens and aligns horizontally on larger screens. This ensures that the app is accessible and functional across all devices, from mobile phones to desktop screens.

### Work ScreenShot
![Screenshot](/BookInfo/book-info.png)

### Conclusion:
This mini project was a great exercise in learning and applying React props, while also improving my understanding of how to make components reusable and responsive. Using Tailwind CSS made styling easier, and the use of functional components helped keep the code clean and manageable.
