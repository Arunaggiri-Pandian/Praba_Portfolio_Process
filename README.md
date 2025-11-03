# Prabalakshmi Arumugam - Personal Portfolio

This repository contains the source code for the personal portfolio website of Prabalakshmi Arumugam.

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
*   Powers the dynamic, component-based user interface, allowing for a modular and maintainable codebase.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
*   Provides static typing for the entire project, ensuring code quality, preventing common bugs, and improving developer experience.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
*   Serves as the high-performance build tool and development server, offering near-instant hot-reloading and optimized builds.

![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
*   Used to create smooth, declarative animations and micro-interactions that enhance the user experience.

![React Slick](https://img.shields.io/badge/React_Slick-FFFFFF?style=for-the-badge&logo=react&logoColor=black)
*   A carousel component built with React, used for creating interactive and swipeable content sliders.

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone git@github.com:Arunaggiri-Pandian/Prabalakshmi_Portfolio.git
    cd Prabalakshmi_Portfolio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:8501`.

## Configuration

This portfolio includes an optional password protection feature.

### Setting the Password

To set your own password, create or edit the `.env.local` file in the root of the project and add the following line:

```
VITE_PORTFOLIO_PASSWORD=your_secure_password_here
```

### Enabling/Disabling Password Protection

You can turn the password protection on or off by editing the `VITE_PASSWORD_PROTECT` variable in the `.env.local` file.

-   **To enable password protection:**
    ```
    VITE_PASSWORD_PROTECT=true
    ```
-   **To disable password protection:**
    ```
    VITE_PASSWORD_PROTECT=false
    ```

> **Note:** After changing any environment variables in the `.env.local` file, you must restart the development server for the changes to take effect.

## Directory Structure

```
.
├── components/
│   ├── sections/
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Interests.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   └── Skills.tsx
│   ├── Header.tsx
│   ├── Icon.tsx
│   ├── Navigation.tsx
│   └── ThemeToggle.tsx
├── public/
│   ├── Anna_University_Logo.png
│   ├── Boise_State_University_logo.jpeg
│   ├── dram-icon.png
│   ├── favicon.png
│   ├── op-amp-icon.png
│   ├── profile.png
│   └── waveform-icon.png
├── App.tsx
├── assets.ts
├── constants.ts
├── index.html
├── index.tsx
├── package.json
├── tsconfig.json
├── types.ts
└── vite.config.ts
```

<div align="center">Author: Prabalakshmi Arumugam</div>