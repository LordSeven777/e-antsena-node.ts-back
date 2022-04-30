import { ProductPhotoCreationAttributes } from "./productPhoto-model";

// Product photos configs
import { productPhotosConfig } from "../../configs/photos-config";

// Mock data for the product photos
const productPhotosMock: ProductPhotoCreationAttributes[] = [
    {
        path: productPhotosConfig.getFileURL("71NwGhwVycS._AC_SL1500_.jpg"),
        productId: 1
    },
    {
        path: productPhotosConfig.getFileURL("asus-chromebook-cx1-4gb-ram-and-32gb-ssd-storage-intel-celeron-dual-core-n3350-1.jpg"),
        productId: 1,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("asus-cover-image-2-720x720.jpg"),
        productId: 1
    },
    {
        path: productPhotosConfig.getFileURL("N_ed45e505-4_Image_In_Body.png"),
        productId: 1
    },
    {
        path: productPhotosConfig.getFileURL("1582481937.png"),
        productId: 2,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("1_C4yGTDSLSz86TCakrza2HQ.jpeg"),
        productId: 2
    },
    {
        path: productPhotosConfig.getFileURL("HD-wallpaper-code-programming-monitor-hacker.jpg"),
        productId: 2
    },
    {
        path: productPhotosConfig.getFileURL("Adobe-After-Effects-2020-Crack-v17.1.2.37-Free-Download-Latest1.png"),
        productId: 3,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("Adobe-After-Effects-2021-v18.1.0.38-Win-x64-Multilingual.jpg"),
        productId: 3
    },
    {
        path: productPhotosConfig.getFileURL("what-is-adobe-after-effects.jpg"),
        productId: 3
    },
    {
        path: productPhotosConfig.getFileURL("Adobe-After-Effects-CC-2021-for-Windows-2.jpg"),
        productId: 3
    },
    {
        path: productPhotosConfig.getFileURL("13543838lpw-13543837-article-jpg_5042473.jpg"),
        productId: 4,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("eecole-francaise-vers-1600-dapres-leonard-de-vinci-portrait-de-lisa-gherardini-dit-la-joconde-ou-mona-lisa-artcurial-tt-width-620-height-874-fill-0-cr.jpg"),
        productId: 4
    },
    {
        path: productPhotosConfig.getFileURL("qui-est-la-joconde.jpg"),
        productId: 4
    },
    {
        path: productPhotosConfig.getFileURL("cover-r4x3w1000-5f7b43ac184c6-000-1up4sw.jpg"),
        productId: 4
    },
    {
        path: productPhotosConfig.getFileURL("baby-boy-pencil-portrait.jpg"),
        productId: 5,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("823ff74dafa3f0c35795fbb0ee68d5b1.jpg"),
        productId: 5
    },
    {
        path: productPhotosConfig.getFileURL("eac93f27527124bbb5a63d68e6d407e3.jpg"),
        productId: 5
    },
    {
        path: productPhotosConfig.getFileURL("il_fullxfull.2508140138_3xit.jpg"),
        productId: 5
    },
    {
        path: productPhotosConfig.getFileURL("Milkyway.jpg"),
        productId: 6,
        isMain: true
    },
    {
        path: productPhotosConfig.getFileURL("ec19392705832253357079539dccf393.jpg"),
        productId: 6
    },
    {
        path: productPhotosConfig.getFileURL("file-20181031-76393-1ycnfy8.jpg"),
        productId: 6
    },
    {
        path: productPhotosConfig.getFileURL("milky-way-night-sky.jpg"),
        productId: 6
    }
];

export default productPhotosMock;