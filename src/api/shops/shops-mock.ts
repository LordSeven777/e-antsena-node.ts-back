import { ShopCreationAttributes } from "./shop-model";

// Mock data for shops
const shopsMock: ShopCreationAttributes[] = [
    {
        name: "Tool's techie",
        description: "We are specialized in tech materials such as softwares, hardwares, it services as well as IT courses contents.",
        photoPath: null,
        coverPhotoPath: null,
        address: "Lot II E 45 IS Ambohidahy Ankadindrmamy",
        email: "tooltechie@gmail.com",
        ownerId: 1
    },
    {
        name: "Le mini atelier d'Océane",
        description: "Our products are designed around artistic, artisanal and graphical work. If you're interested in those, we are a good place for you.",
        photoPath: null,
        coverPhotoPath: null,
        address: "Lot E II B 14 Nanisana",
        email: "atelierOceane@gmail.com",
        ownerId: 2
    }
]

export default shopsMock;