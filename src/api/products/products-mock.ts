import { ProductCreationAttributes } from "./product-model";

// Mock data for products
const productsMock: ProductCreationAttributes[] = [
    {
        label: "Chromebook",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://www.intel.fr/content/dam/www/central-libraries/us/en/images/chromebook-virtual-assistant-canada-png16x9.png.rendition.intel.web.480.270.png",
        price: 299.9,
        shopId: 1
    },
    {
        label: "Master React within 30 days - Udemy",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN",
        price: 50,
        shopId: 1
    },
    {
        label: "Adobe After Effects 2020",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://awdescargas.com/wp-content/uploads/2017/10/Adobe-After-Effects-2020-Full.jpg",
        price: 170,
        shopId: 1
    },
    {
        label: `"La joconde"'s photo`,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2021/11/eecole-francaise-vers-1600-dapres-leonard-de-vinci-portrait-de-lisa-gherardini-dit-la-joconde-ou-mona-lisa-artcurial-tt-width-620-height-874-fill-0-crop-0-bgcolor-eeeeee.jpg",
        price: 122_486.5,
        shopId: 2
    },
    {
        label: "A gorgeous baby's portrait",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://www.drawingskill.com/wp-content/uploads/7/Child-Girl-Drawing-Sketch.jpg",
        price: 60,
        shopId: 2
    },
    {
        label: "A magnificient Milky Way shot",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: "https://media.istockphoto.com/photos/man-looking-at-the-milky-way-galaxy-picture-id475438790?k=20&m=475438790&s=170667a&w=0&h=RSkAqjp0DQNDUDcbjX1K9_nUGpRNqLNJRjGK3Fl2uY4=",
        price: 20,
        shopId: 2
    }
]

export default productsMock;