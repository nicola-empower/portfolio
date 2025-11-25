# Nicola's Digital Solutions Portfolio

A modern, high-performance portfolio website built to showcase a diverse range of digital solutions, from full-stack SaaS applications to automated business workflows. This project itself serves as a demonstration of modern web development practices, featuring a "Calm Technology" aesthetic, dynamic interactions, and a robust architecture.

##  Tech Stack

This portfolio is built on the bleeding edge of the React ecosystem:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for seamless Dark/Light mode switching.

##  Features

- **Dynamic Project Gallery**: A data-driven grid layout that filters and displays projects based on their category (Web App, Automation, Case Study).
- **Deep Dive Modals**: Interactive modals that allow users to explore projects in detail (Problem, Solution, Tech Stack, Gallery) without leaving the main page.
- **Responsive Design**: Fully responsive layout that adapts gracefully from mobile devices to large desktop screens.
- **Dark Mode Support**: Built-in dark mode with persistent state preferences.
- **Calm Technology Aesthetic**: Designed with a focus on readability, whitespace, and subtle animations to reduce cognitive load.

##  Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nicola-empower/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

##  Project Structure

- **`app/`**: Contains the Next.js App Router pages and layouts.
- **`components/`**: Reusable UI components, organized by feature (e.g., `work/`, `ui/`).
    - **`work/ProjectCard.tsx`**: Individual project card component.
    - **`work/ProjectModal.tsx`**: The deep-dive modal component.
- **`data/projects.ts`**: The single source of truth for all project data. Adding a new project here automatically updates the gallery.
- **`types/`**: TypeScript definitions for the project data structures.

##  Design Philosophy

The design follows a "Business Operating System" metaphor, presenting complex information in a structured, clean, and professional manner. It utilizes a sophisticated color palette (Charcoal, Cream, Rose, Sage) to convey trust and competence.
