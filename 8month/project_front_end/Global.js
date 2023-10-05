const PROJECT_NAME = 'NodeJS Web Server Framework(Vue)';
const PROJECT_VERSION = '1.0';
const BASE_DIR = __dirname;
const LOG_BASE_DIR = `${__dirname}/server/logs`;
const SERVICE_STATUS = process.env.NODE_ENV;//development, production
const PORT = 80;
const API_SERVER_HOST = 'http://localhost:8080';

module.exports = {
    PROJECT_NAME,
    PROJECT_VERSION,
    BASE_DIR,
    LOG_BASE_DIR,
    SERVICE_STATUS,
    PORT,
    API_SERVER_HOST
}