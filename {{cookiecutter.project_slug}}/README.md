# static-site
A template for easy full-stack development of static websites using the Pelican CMS, which is markdown- and Python-based. This setup enables smooth development of a website's frontend by editing a Pelican-theme and treats Pelican as the backend. It features live reloading and live Webpack bundling when developing the frontend (`theme/`). The template supports both Unix and Windows environments.

Using `Pelican` offers several advantages, such as being completely free and providing extensive customizability through easy-to-write themes.

In Pelican, content is written in Markdown (`.md`), which is then transpiled to HTML using the theme as a basis.

## Prerequisites
- Git
- Node.js (with npm)
- Python 3

## Setup
For local development, follow this workflow. The project requires Pelican and Webpack to function properly.

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install npm dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

    This will start the development server with live reloading and Webpack bundling.

That's it! You're now ready to develop your Pelican-powered static site.

## Conclusion
This template provides a robust starting point for developing and deploying static websites using the Pelican CMS. With features like live reloading, Webpack bundling, and compatibility with both Unix and Windows, you can streamline the development process for your static sites.
