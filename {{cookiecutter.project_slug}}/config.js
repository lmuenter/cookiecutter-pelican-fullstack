const path = require('path');
require('dotenv').config();

const PROJECT_SLUG = process.env.PROJECT_SLUG || 'pelican';

const projectRoot = path.resolve(__dirname);
const themeDir = path.resolve(projectRoot, 'theme');
const pelicanDir = path.resolve(projectRoot, PROJECT_SLUG);
const outputDir = path.resolve(pelicanDir, 'output');
const distDir = path.resolve(themeDir, 'static', 'dist');
const contentDir = path.resolve(pelicanDir, 'content');

// Commands
const pythonExec = process.platform === 'win32' ? 'python' : 'python3';
const pelicanExec = process.platform === 'win32'
    ? path.resolve(projectRoot, 'venv', 'Scripts', 'pelican.exe')
    : path.resolve(projectRoot, 'venv', 'bin', 'pelican');

const venvActivate = process.platform === 'win32'
    ? path.resolve(projectRoot, 'venv', 'Scripts', 'activate')
    : path.resolve(projectRoot, 'venv', 'bin', 'activate');

// Webpack
const useWebpack = true;

module.exports = {
    projectSlug: PROJECT_SLUG,
    projectRoot,
    themeDir,
    pelicanDir,
    outputDir,
    distDir,
    contentDir,
    pythonExec,
    pelicanExec,
    venvActivate,
    useWebpack
};
