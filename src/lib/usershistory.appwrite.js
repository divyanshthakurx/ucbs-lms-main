import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

const database_id = '66431d5a00229c5bbd1f';
const collection_id = '66855041001f550300d9';

export const createUBHistory = async (user) => {
    const { fine } = user;
    const currentDate = new Date();
    const curDate = currentDate.toISOString();
    let result = await databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
            date: curDate,
            paid_fine: fine,
            user: user.$id,
        }
    );
    return result;
}

export const listUBHistory = async () => {
    const result = await databases.listDocuments(
        database_id,
        collection_id,
        [Query.limit(5000)]
    );
    return result;
}

export const deleteUBHistory = async (DocID) => {
    const result = await databases.deleteDocument(
        database_id,
        collection_id,
        DocID,
    );
    return result;
}

export const getUBHistory = async (DocID) => {
    const result = await databases.getDocument(
        database_id,
        collection_id,
        DocID,
    );
    return result;
}