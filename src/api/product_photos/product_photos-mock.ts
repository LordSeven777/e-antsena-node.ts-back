import { ProductPhotoCreationAttributes } from "./product_photo-model";

// Product photos configs
import { productPhotosConfig } from "../../configs/photos-config";

// Mock data for the product photos
const productPhotosMock: ProductPhotoCreationAttributes[] = [
    {
        url: productPhotosConfig.getFileURL("71NwGhwVycS._AC_SL1500_.jpg"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFileURL("asus-chromebook-cx1-4gb-ram-and-32gb-ssd-storage-intel-celeron-dual-core-n3350-1.jpg"),
        product_id: 1,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("asus-cover-image-2-720x720.jpg"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFileURL("N_ed45e505-4_Image_In_Body.png"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFileURL("1582481937.png"),
        product_id: 2,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("1_C4yGTDSLSz86TCakrza2HQ.jpeg"),
        product_id: 2
    },
    {
        url: productPhotosConfig.getFileURL("HD-wallpaper-code-programming-monitor-hacker.jpg"),
        product_id: 2
    },
    {
        url: productPhotosConfig.getFileURL("Adobe-After-Effects-2020-Crack-v17.1.2.37-Free-Download-Latest1.png"),
        product_id: 3,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("Adobe-After-Effects-2021-v18.1.0.38-Win-x64-Multilingual.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFileURL("what-is-adobe-after-effects.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFileURL("Adobe-After-Effects-CC-2021-for-Windows-2.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFileURL("13543838lpw-13543837-article-jpg_5042473.jpg"),
        product_id: 4,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("eecole-francaise-vers-1600-dapres-leonard-de-vinci-portrait-de-lisa-gherardini-dit-la-joconde-ou-mona-lisa-artcurial-tt-width-620-height-874-fill-0-cr.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFileURL("qui-est-la-joconde.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFileURL("cover-r4x3w1000-5f7b43ac184c6-000-1up4sw.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFileURL("baby-boy-pencil-portrait.jpg"),
        product_id: 5,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("823ff74dafa3f0c35795fbb0ee68d5b1.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFileURL("eac93f27527124bbb5a63d68e6d407e3.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFileURL("il_fullxfull.2508140138_3xit.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFileURL("Milkyway.jpg"),
        product_id: 6,
        is_main: true
    },
    {
        url: productPhotosConfig.getFileURL("ec19392705832253357079539dccf393.jpg"),
        product_id: 6
    },
    {
        url: productPhotosConfig.getFileURL("file-20181031-76393-1ycnfy8.jpg"),
        product_id: 6
    },
    {
        url: productPhotosConfig.getFileURL("milky-way-night-sky.jpg"),
        product_id: 6
    }
];

export default productPhotosMock;