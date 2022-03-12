import { ShopCreationAttributes } from "./shop-model";

// Mock data for shops
const shopsMock: ShopCreationAttributes[] = [
    {
        shop_name: "Tool's techie",
        description: "We are specialized in tech materials such as softwares, hardwares, it services as well as IT courses contents.",
        photo_url: null,
        cover_photo_url: null,
        address: "Lot II E 45 IS Ambohidahy Ankadindrmamy",
        email: "tooltechie@gmail.com",
        owner_id: 1
    },
    {
        shop_name: "Le mini atelier d'Océane",
        description: "Our products are designed around artistic, artisanal and graphical work. If you're interested in those, we are a good place for you.",
        photo_url: null,
        cover_photo_url: null,
        address: "Lot E II B 14 Nanisana",
        email: "atelierOceane@gmail.com",
        owner_id: 2
    }
]

export default shopsMock;