# Task Management App

A modern **Task Management App** built with **Next.js 14** and **React 18**. This application helps users manage their tasks effectively, with features like persistent state using **Zustand** and an intuitive drag-and-drop interface powered by **React DnD**.

---

## Features

- **Task Management**: Add, edit, delete, and drag and drop tasks effortlessly.
- **Drag and Drop**: Rearrange tasks using an intuitive drag-and-drop interface built with **React DnD**.
- **State Management**: Persistent state management using **Zustand**.

---

## Prerequisites

Before you can run the app locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (latest version recommended)

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <https://github.com/Shameera17/task-management>
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Run the Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

### 4. Project Structure

```bash

/project-root
├── /node_modules              # Node.js dependencies
├── /public                    # Static assets available to the public
│   ├── /data                  # Static data files (e.g., JSON, CSV)
│   ├── /favicon               # Favicon assets
│   └── /images                # Static images (e.g., logos, icons)
├── /src
│   ├── /app                   # Core application (Next.js App Router)
│   │   ├── /components        # Reusable UI components
│   │   ├── /inbox             # Inbox page
│   │   ├── /insights          # Insights page
│   │   ├── /report            # Report page
│   │   ├── /settings          # Gsettings page
│   │   ├── /tasks             # Task page
│   │   ├── /globals.css       # Global styles for the app
│   │   ├── /layout.tsx        # Main layout component for app-wide structure
│   │   ├── /not-found.tsx     # Custom 404 page
│   │   ├── /page.tsx          # Default page or home page
│   ├── /store                 # Global state management (Zustand)
│   ├── /hooks                 # Custom hooks (e.g., useTasks, useUser)
│   ├── /lib                   # Utility functions (e.g., helpers, formatters)
│   ├── /types                 # TypeScript types and interfaces
│   ├── .eslintignore          # ESLint ignore rules
│   ├── .gitignore             # Git ignore rules
│   ├── components.json        # Custom components configuration (if needed)
│   ├── next-env.d.ts          # TypeScript environment types
│   ├── next.config.mjs        # Next.js configuration
│   ├── tailwind.config.ts     # Tailwind CSS configuration
│   ├── postcss.config.mjs     # PostCSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   ├── README.md              # Project documentation
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lock file for dependencies
└── yarn.lock                  # Lock file for yarn (if used)

```
