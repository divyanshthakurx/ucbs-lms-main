import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

export const createUBHistory = async (UBHistory) => {
    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855041001f550300d9', // Collection ID
        ID.unique(),
        {}
    );
    return result;
}

export const listUBHistory = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66855041001f550300d9', // Collection ID
        [Query.limit(5000)]
    );
    return result;
}

export const deleteUBHistory = async (DocID) => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855041001f550300d9', // Collection ID
        DocID, // Doc ID
    );
    return result;
}

export const updateUBHistory = async (UBHistory) => {
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855041001f550300d9', // Collection ID
        UBHistory.$id, // Doc ID
        {}
    );
    return result;
}

export const getUBHistory = async (DocID) => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855041001f550300d9', // Collection ID
        DocID, // Doc ID
    );
    return result;
}