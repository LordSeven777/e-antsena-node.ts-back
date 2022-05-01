// Product photos config
import { productPhotosConfig } from "../../configs/photos-config";

import { ProductCreationAttributes } from "./product-model";

// Mock data for products
const productsMock: ProductCreationAttributes[] = [
    {
        label: "Chromebook",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("chromebook-photo.PNG"),
        price: 299.9,
        shopId: 1
    },
    {
        label: "Master React within 30 days - Udemy",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("react-course-cover.jpg"),
        price: 50,
        shopId: 1
    },
    {
        label: "Adobe After Effects 2020",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("Adobe-After-Effects-2020-Full.jpg"),
        price: 170,
        shopId: 1
    },
    {
        label: `"La joconde"'s photo`,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("la-joconde-photo.jpg"),
        price: 122_486.5,
        shopId: 2
    },
    {
        label: "A gorgeous baby's portrait",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("Child-Girl-Drawing-Sketch.jpg"),
        price: 60,
        shopId: 2
    },
    {
        label: "A magnificient Milky Way shot",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo libero, voluptatum reiciendis corrupti odit in architecto dolores voluptas dolore atque quos asperiores reprehenderit, neque deserunt hic, ut praesentium ex.",
        photoPath: productPhotosConfig.getFileURL("istockphoto-475438790-170667a.jpg"),
        price: 20,
        shopId: 2
    }
]

export default productsMock;