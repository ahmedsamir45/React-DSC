## 📝 **Task Description: Task Management App with React + useReducer/useContext**

### 📌 **Objective**

Build a **Task Management Application** using **React**. The app must allow users to create, edit, delete, and filter tasks. It should use **`useReducer`** and **`useContext`** for global state management and implement filtering by **All**, **Pending**, and **Completed** tasks.

---

### 🎯 **Requirements**

#### 1. **Core Features**

* ✅ Add new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ☑️ Mark tasks as completed
* 🔍 Filter tasks using:

  * All
  * Pending
  * Completed
* 📅 Display current date at the top

#### 2. **State Management**

* Use `useReducer` to manage the global task state (add, edit, delete, toggle complete, set filter).
* Use `useContext` to share this state across components.

#### 3. **Component Structure (Minimum)**

* `<TaskProvider>`: Context provider with reducer logic
* `<TaskList>`: Displays tasks based on the current filter
* `<TaskItem>`: Individual task with checkbox, title, edit, and delete
* `<FilterBar>`: Buttons to filter the task view
* `<TaskInput>`: Input field to add new tasks

---

### 💡 **UI Expectations**

Your UI should closely resemble the provided image:

* Use color coding for completed/pending tasks
* Include edit and delete icons
* Highlight active filter
* Smooth user experience with a clean layout

---

### 🔄 **Version Control – Git Requirement**

**You must use Git and make a commit for each of the following components or features:**

1. `TaskProvider` setup using `useReducer` and `useContext`
2. `TaskList` component implementation
3. `TaskItem` with checkbox, edit, and delete buttons
4. `FilterBar` for switching between task states
5. `TaskInput` form for adding tasks
6. Any styling or layout changes

Use clear, meaningful commit messages like:

```
feat: add TaskProvider with global state
feat: implement TaskList to display tasks
feat: add TaskItem with edit/delete functionality
```

---

### ✅ **Submission Checklist**

* [ ] App is fully functional as per the UI and feature requirements
* [ ] All components committed individually in Git with descriptive messages
* [ ] Uses `useReducer` and `useContext` for state management
* [ ] Code is clean, organized, and follows React best practices

---

![Task UI](\task.jpg)
