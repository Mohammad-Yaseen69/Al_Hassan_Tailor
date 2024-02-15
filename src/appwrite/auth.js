import { Client, Account, ID } from "appwrite";


export class Auth {
    Client = new Client()
    Account;

    constructor() {
        this.Client.
            setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

        this.Account = new Account(this.Client)    
    }

    async SignUp({Email , Password , Name}){
        try {
            const user = await this.Account.create(
                ID.unique()
                ,Email
                ,Password
                ,Name
            )

            if(user){
                return this.login({Email, Password})
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login({Email, Password}){
        try {
            const user = await this.Account.createEmailSession(Email, Password)

            return user
        } catch (error) {
            console.log(error);
        }
    }
    
    async logout(){
        try {
            const user = await this.Account.deleteSessions()
            return user
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.Account.get()

            return user
        } catch (error) {
            console.log(error);
        } 
    }
}

const auth = new Auth()

export default auth