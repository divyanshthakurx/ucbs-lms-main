import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

export const createBooksHistory = async (bookHistory) => {
    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855032002ff367fbf7', // Collection ID
        ID.unique(),
        {}
    );
    return result;
}

export const listBooksHistory = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66855032002ff367fbf7', // Collection ID
        [Query.limit(5000)]
    );
    return result;
}

export const deleteBooksHistory = async (DocID) => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855032002ff367fbf7', // Collection ID
        DocID, // Doc ID
    );
    return result;
}

export const updateBooksHistory = async (bookHistory) => {
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855032002ff367fbf7', // Collection ID
        bookHistory.$id, // Doc ID
        {}
    );
    return result;
}

export const getBooksHistory = async (DocID) => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66855032002ff367fbf7', // Collection ID
        DocID, // Doc ID
    );
    return result;
}