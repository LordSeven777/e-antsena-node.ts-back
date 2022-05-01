import path from "path";


/* TYPE DEFINITIONS **********************************************************/

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
        return `${this.urlPath}/${filename}`;
    }
}

/*****************************************************************************/


// Contant values
const BASE_URL_PATH = "/public/images";
const BASE_STORAGE_PATH = path.join(__dirname, "../", "../", "static", "images");


/* RESSOURCES' PHOTO CONFIG INSTANCES ****************************************/

// User photos' config
const userPhotosconfig = new PhotoConfig({
    urlPath: `${BASE_URL_PATH}/users`,
    storagePath: path.join(BASE_STORAGE_PATH, "users")
});

// Product photos' config
const productPhotosConfig = new PhotoConfig({
    urlPath: `${BASE_URL_PATH}/products`,
    storagePath: path.join(BASE_STORAGE_PATH, "products")
});

/*****************************************************************************/


export { userPhotosconfig, productPhotosConfig };