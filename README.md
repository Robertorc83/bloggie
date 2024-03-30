# Project Title

This proejct is a Blog app to create an show blog post with Next.js, Tailwind, Docker, Postgresql, Typescript, Jest, Storybook.

## Decision Rationale

In this project, we've made several key decisions:

-  **Next.js Version 14**: We opted for Next.js for its seamless integration with React, offering server-side rendering, static site generation, and now, with version 14, improved routing capabilities through the App Router. This choice aligns with our goal to enhance SEO, improve performance, and ensure a smooth developer experience. Additionally, Next.js's built-in API routes feature offers a streamlined backend setup within the same project, allowing us to maintain a cohesive codebase without the need for a separate server setup.

-  **TypeScript**: Adopted for its strong typing system, TypeScript enhances code quality and developer productivity through static type checking. This leads to fewer runtime errors and more readable code, significantly benefiting the development process in a collaborative environment.

-  **Jest for Testing**: Selected for its compatibility with both React and Next.js projects. Jest offers a robust framework for unit and integration tests with minimal configuration, helping ensure code reliability and quality.

-  **Storybook for Component Documentation**: Implemented to facilitate an isolated development environment for UI components. Storybook simplifies component documentation and visual testing, enhancing collaboration across the team.

-  **Docker for Database (PostgreSQL)**: Docker containerizes the PostgreSQL database, ensuring a consistent and isolated environment across development and production setups. Using PostgreSQL offers robust data integrity features and support for complex queries and transactions, which are essential for our application's data handling needs.

-  **PostgreSQL as the Database**: We chose PostgreSQL for its reliability, robust feature set, and strong community support. It's a powerful open-source object-relational database system with a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. This makes it an ideal choice for applications that require complex queries, data warehousing, and data integrity.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

-  Docker
-  node >= 12.22.0
-  npm >= 6.14.4

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1.- Clone the repository

2.- npm install

3.- npm run dev:full to inizalize dnext.js app and also postgres conatiner

4.- Running Tests (npm run test)

5.- Run Storybook (npm run storybook)
