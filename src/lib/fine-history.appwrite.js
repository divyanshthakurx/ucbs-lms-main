import { ID } from "appwrite";
import { databases } from "./appwrite";

export const createFine = async () => {

    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66440dd2001ec6fe7648', // Collection ID
        ID.unique(),
        {}
    );
    return result;
}

export const listFines = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66440dd2001ec6fe7648', // Collection ID
        []
    );
    return result;
}