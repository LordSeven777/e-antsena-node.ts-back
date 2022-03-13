import { ProductPhotoCreationAttributes } from "./product_photo-model";

// Product photos configs
import { productPhotosConfig } from "../../configs/photos-config";

// Mock data for the product photos
const productPhotosMock: ProductPhotoCreationAttributes[] = [
    {
        url: productPhotosConfig.getFullURL("71NwGhwVycS._AC_SL1500_.jpg"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFullURL("asus-chromebook-cx1-4gb-ram-and-32gb-ssd-storage-intel-celeron-dual-core-n3350-1.jpg"),
        product_id: 1,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("asus-cover-image-2-720x720.jpg"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFullURL("N_ed45e505-4_Image_In_Body.png"),
        product_id: 1
    },
    {
        url: productPhotosConfig.getFullURL("1582481937.png"),
        product_id: 2,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("1_C4yGTDSLSz86TCakrza2HQ.jpeg"),
        product_id: 2
    },
    {
        url: productPhotosConfig.getFullURL("HD-wallpaper-code-programming-monitor-hacker.jpg"),
        product_id: 2
    },
    {
        url: productPhotosConfig.getFullURL("Adobe-After-Effects-2020-Crack-v17.1.2.37-Free-Download-Latest1.png"),
        product_id: 3,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("Adobe-After-Effects-2021-v18.1.0.38-Win-x64-Multilingual.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFullURL("what-is-adobe-after-effects.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFullURL("Adobe-After-Effects-CC-2021-for-Windows-2.jpg"),
        product_id: 3
    },
    {
        url: productPhotosConfig.getFullURL("13543838lpw-13543837-article-jpg_5042473.jpg"),
        product_id: 4,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("eecole-francaise-vers-1600-dapres-leonard-de-vinci-portrait-de-lisa-gherardini-dit-la-joconde-ou-mona-lisa-artcurial-tt-width-620-height-874-fill-0-cr.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFullURL("qui-est-la-joconde.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFullURL("cover-r4x3w1000-5f7b43ac184c6-000-1up4sw.jpg"),
        product_id: 4
    },
    {
        url: productPhotosConfig.getFullURL("baby-boy-pencil-portrait.jpg"),
        product_id: 5,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("823ff74dafa3f0c35795fbb0ee68d5b1.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFullURL("eac93f27527124bbb5a63d68e6d407e3.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFullURL("il_fullxfull.2508140138_3xit.jpg"),
        product_id: 5
    },
    {
        url: productPhotosConfig.getFullURL("Milkyway.jpg"),
        product_id: 6,
        is_main: true
    },
    {
        url: productPhotosConfig.getFullURL("ec19392705832253357079539dccf393.jpg"),
        product_id: 6
    },
    {
        url: productPhotosConfig.getFullURL("file-20181031-76393-1ycnfy8.jpg"),
        product_id: 6
    },
    {
        url: productPhotosConfig.getFullURL("milky-way-night-sky.jpg"),
        product_id: 6
    }
];

export default productPhotosMock;