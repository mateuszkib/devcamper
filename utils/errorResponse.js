class errorResponse extends Error {
    constructor(...params) {
        super(...params);
        this.status = status;
    }
}

module.exports = errorResponse;
