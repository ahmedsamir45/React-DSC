## 📘 **Project Description**

### Title: **Global Counter App using `useReducer` and `useContext`**

### 💡 Goal:

Build a simple, reusable **React counter application** that demonstrates how to manage **global state** using `useReducer` and `useContext`. Students will gain experience in creating a context provider, reducer logic, and consuming context in multiple components.

---

### ✅ Learning Objectives:

By completing this exercise, students will:

* Understand the concept of **global state** in React
* Learn how to use the **`useReducer`** hook for managing complex state
* Use **`useContext`** to share and access state across components
* Structure a React app using **context + reducer** for scalability

---

## 🧩 **App Behavior & Output**

### 📺 **Expected UI Layout**

```
+-------------------------+
|   Global Counter App    |
|-------------------------|
| Current Count: 0        |
|                         |
|   [+]    [−]            |
+-------------------------+
```

### ▶️ **Functional Requirements:**

| Action                    | Expected Result                                     |
| ------------------------- | --------------------------------------------------- |
| App loads                 | Displays "Current Count: 0"                         |
| Click `+` button          | Counter increases by 1                              |
| Click `−` button          | Counter decreases by 1                              |
| Count is updated globally | Any other component using the state will reflect it |

---

## 🧪 Example Output Flow

1. Initial load:

   ```
   Current Count: 0
   ```

2. After clicking `+` twice:

   ```
   Current Count: 2
   ```

3. After clicking `−` once:

   ```
   Current Count: 1
   ```

---

### 🧠 Bonus Ideas (for advanced students):

* Add a **"Reset"** button to reset count to 0.
* Create an **Action Log** component to display a list of past actions (e.g., "+", "-", etc.).
* Style the components using **Tailwind CSS** or **basic CSS**.
* Add constraints (e.g., "min = 0, max = 10").
