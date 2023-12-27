class AppResponse {
    constructor(message = null, payload = null, code = 200, status = "ok") {
        this.message = message;
        this.code = code;
        this.status = status;
        this.payload = payload;
    }
}

module.exports = AppResponse;
