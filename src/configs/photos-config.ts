import path from "path";

// Interface for a resource photo config attributes
interface PhotoConfigAttributes {
    urlPath: string;
    storagePath: string;
}

// Class for a ressource's photo config
class PhotoConfig implements PhotoConfigAttributes {
    readonly urlPath!: string;
    readonly storagePath!: string;

    constructor(params: PhotoConfigAttributes) {
        this.urlPath = params.urlPath;
        this.storagePath = params.storagePath;
    }

    getFileURL(filename: string): string {
        return `${this.urlPath}${filename}`;
    }
}

// Product photos' config
const productPhotosConfig: PhotoConfig = new PhotoConfig({
    urlPath: "/public/products/", 
    storagePath: path.join("../", "static", "products")
});

export { productPhotosConfig };