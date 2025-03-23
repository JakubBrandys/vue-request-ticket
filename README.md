# Vue 3 Starter App – VRT-01

A simple Vue 3 + TypeScript project showcasing good practices, API integration, error handling, and modular app architecture.

---

## 🚀 Tech Stack

- **Vue 3** (Composition API)
- **Vite** – fast build tool
- **TypeScript** – type safety across the app
- **Vue Router** – SPA routing
- **ESLint + Prettier** – code style and formatting

---

---

## ⚙️ How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

---

❗️ Error Handling Approach

The application uses a centralized and reusable approach to error handling based on the Composition API.

✨ Key Concepts

- useError() composable

A global reactive state that holds the latest error message. This keeps error logic decoupled from UI components.
For example, useUsers() catches errors from the API and passes them to useError(), making the logic reusable across components.

💡 Why this approach?
- Keeps error logic simple and declarative
- Can be extended in the future (e.g. error logging, error codes, toasts, modals)

