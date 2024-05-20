import { ID } from "appwrite";
import { databases } from "./appwrite";

export const createIssuedBook = async () => {

    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dba00208aa8b171', // Collection ID
        ID.unique(),
        {}
    );
    console.log(result);
    return result;
}

export const listIssuedBooks = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dba00208aa8b171', // Collection ID
        []
    );
    console.log(result);
    return result;
}