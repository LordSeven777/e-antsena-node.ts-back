import path from "path";

// Class for a ressource's photo config
class PhotoConfig {
    readonly baseURL!: string;
    readonly storagePath!: string;

    constructor(baseURL: string, storagePath: string) {
        this.baseURL = baseURL;
        this.storagePath = storagePath;
    }

    getFullURL(filename: string): string {
        return `${this.baseURL}${filename}`;
    }
}

// Product photos' config
const productPhotosConfig: PhotoConfig = new PhotoConfig(
    "/public/products/", 
    path.join("../", "static", "products")
);

export { productPhotosConfig };