const { spawn } = require("child_process");
const fs = require("fs");
const config = require('../config');


function runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, { stdio: "inherit", shell: true, ...options });

        child.on("error", (err) => {
            console.error(`Failed to start process: ${err.message}`);
            reject(err);
        });

        child.on("exit", (code, signal) => {
            if (code !== 0) {
                const errorMsg = `Process exited with code: ${code} and signal: ${signal}`;
                console.error(errorMsg);
                reject(new Error(errorMsg));
            } else {
                resolve();
            }
        });
    });
}


async function initialSetup() {
    try {
        // check if content dir, else create it
        if (!fs.existsSync(config.contentDir)) {
            console.log("Content directory not found. Creating it...");
            fs.mkdirSync(config.contentDir, { recursive: true });
            console.log("Content directory created.");
        }
        
        const useWebpack = true;
        if (config.useWebpack) {
            // run initial npx webpack
            console.log("Running initial webpack build...");
            await runCommand("npx", ["webpack"], { cwd: config.projectRoot });
            console.log("Initial webpack build complete.");
        }
    } catch (error) {
        console.error("An error occurred during initial setup:", error.message);
        process.exit(1);
    }
}


async function runPelican() {
    try {
        console.log("Generating content...");

        if (!fs.existsSync(config.pelicanExec)) {
            console.error("Pelican executable not found. Make sure it's installed in your virtual environment.");
            process.exit(1);
        }

        // Run content generation
        await runCommand(config.pelicanExec, ["content"], { cwd: config.pelicanDir });
        console.log("Content generation complete.");

        // Start Pelican
        console.log("Starting Pelican server...");
        await runCommand(config.pelicanExec, ["--listen", "--autoreload"], { cwd: config.pelicanDir });
        console.log("Pelican server started successfully.");
    } catch (error) {
        console.error("Failed to start Pelican server:", error.message);
        process.exit(1);
    }
}


async function main() {
    try {
        if (!fs.existsSync(config.venvActivate)) {
            console.log("Setting up venv...");
            await runCommand(config.pythonExec, ["-m", "venv", "venv"], { cwd: config.projectRoot });
            console.log("Created venv.");
        }

        console.log("Activating venv...");
        await runCommand(config.pythonExec, ["-m", "pip", "install", "-r", "requirements.txt"], { cwd: config.projectRoot });

        // Initial setup
        await initialSetup();

        // Run server
        await runPelican();
    } catch (error) {
        console.error("An error occurred:", error.message);
        process.exit(1);
    }
}


main();