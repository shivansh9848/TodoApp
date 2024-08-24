# React Todo App 📝
# 🔗 [https://tudu-react-app.vercel.app]

This project is a fully functional Todo application built with React and Redux. It allows users to manage tasks by adding, updating, and deleting them. The app features a drag-and-drop interface for changing task statuses, and all tasks are persisted in the browser's local storage.

# Tech Stack 💻:
- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **Utilities**: React Icons, React Toastify


# Features 🗒:

- **Add Tasks ⚡**: Users can add new tasks with a name, description, and status.
- **Update Tasks ✔️**: Existing tasks can be edited and updated.
- **Delete Tasks ➿**: Users can delete tasks they no longer need.
- **Drag and Drop ✏️**: Tasks can be reordered using drag and drop functionality.
- **Responsive Design📱**: The app is fully responsive, making it usable on various devices.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/0ujjwal0/todo_react.git
    ```
2. Navigate to the project directory:
    ```
    cd todo_react
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm start
    ```

## Project Structure

## Here's an overview of the project structure:
```
todo-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Greeting.jsx
│   │   ├── Modal.jsx
│   │   ├── TaskInput.jsx
│   │   └── TaskList.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── store/
│   │   ├── tasksSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

### **Components Documentation**

- **Modal Component**:
Purpose: The Modal component is used for updating or deleting tasks. It opens as a modal dialog when a task is being edited or deleted.
Props: Receives onClose, isOpen, task, and setTask to control the modal's behavior and manage the task data.
State Management: Uses Redux to dispatch actions for updating or deleting tasks.

- **Task List Component**:
Purpose: The TaskList component displays a list of tasks filtered by their status.
Props: Receives status to filter the tasks displayed.
State Management: Uses useSelector to access the tasks from the Redux store

- **Tasks Input Component**: 
Purpose: The TaskInput component handles the creation of new tasks with a form that accepts the task's name, status, and description.
State Management: Uses useState for local state and useDispatch for Redux actions.
Validation: Displays an error message if the task name is empty.
- **Greetings Component**: 
Purpose: The Greeting component displays a greeting based on the time of day along with the current date.
Props: None.
Output: A styled header that changes greetings according to the time (e.g., "Good morning", "Good afternoon").

### **State Management**

- **Redux Store**: The application uses Redux Toolkit for state management. The global state is managed in the `store.js` file, and individual pieces of state, like tasks, are managed in slices.

- **Tasks Slice**: The `tasksSlice.js` handles the core actions for managing tasks in the application.
#### Actions:
- **addTask**: Adds a new task to the state.
- **updateTask**: Updates an existing task based on its id.
- **deleteTask**: Removes a task from the state by its id.

## Deployment

The application is deployed on Vercel and can be accessed [here](https://tudu-react-app.vercel.app/).
