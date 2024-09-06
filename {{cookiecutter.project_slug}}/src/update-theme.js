const { spawn } = require("child_process");
const config = require("../config");
const fs = require("fs");


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


async function main() {
    try {
        const whatChanged = process.argv[2];

        process.chdir(config.projectRoot);

        console.log("Activating venv...");
        await runCommand(config.pythonExec, ["-m", "pip", "show", "pelican"]);

        if (whatChanged === "styles" && config.useWebpack) {
            console.log("Changes detected in styles, running Webpack...");
            await runCommand("npx", ["webpack"]);
        } else if (whatChanged === "templates" && config.useWebpack) {
            console.log("Changes detected in templates, skipping Webpack...");
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        process.exit(1);
    }
}

main();
