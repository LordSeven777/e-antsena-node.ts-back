// Response error
class AppError extends Error {
    // Error status code
    status: number;

    // Error payload
    payload: any;

    constructor(status: number, message: string, payload?: any) {
        super();
        this.status = status;
        this.message = message;
        this.payload = payload;
    }

}

export default AppError;