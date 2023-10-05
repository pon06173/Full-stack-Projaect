const BASE_DIR = __dirname;
const PORT = 80;
const PROJECT_NAME = "카페 메뉴 관리 시스템";
const SERVICE_STATUS = process.env.NODE_ENV;//development, production

module.exports = {
    BASE_DIR,
    PORT,
    PROJECT_NAME,
    SERVICE_STATUS
}