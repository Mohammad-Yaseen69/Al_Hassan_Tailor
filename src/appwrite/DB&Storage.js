import { Client, Databases, Storage, ID } from "appwrite";

export class Service {
    Client = new Client();
    Database;
    Storage;

    constructor() {
        this.Client.
            setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

        this.Database = new Databases(this.Client)
        this.Storage = new Storage(this.Client)
    }

    async addProduct({ Img, Title, Description, PriceAndSize }) {
        try {
            const product = await this.Database.createDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                ID.unique(),
                {
                    Img,
                    Title,
                    Description,
                    PriceAndSize,
                }
            )

            return product
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(){

    }
}

const service = new Service()

export default service