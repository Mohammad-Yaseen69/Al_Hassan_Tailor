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

    async deleteProduct({id}){
        try {
            const product = await this.Database.deleteDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                id
            )

            return product; 
        } catch (error) {
            console.log(error);
        }
    }


    async listProducts() {
        try {
            const products = await this.Database.listDocuments(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID
            )

            return products
        } catch (error) {
            console.log(error);
        }

    }
    async getProduct({id}){
        try {
            const product = await this.Database.getDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                id
            )

            return product
        } catch (error) {
            console.log(error);
        }
    }

    async uploadFile(file){
        try {
            const response = await this.Storage.createFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )

            return response
        } catch (error) {
            console.log(error);
        }
    }

   getFilePreview(fileId){
        try {
            const response = this.Storage.getFilePreview(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileId
            )

            return response
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFile(fileId){
        try {
            const response = this.Storage.deleteFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileId
            )

            return response
        } catch (error) {
            console.log(error);
        }
    } 
}


const service = new Service()

export default service