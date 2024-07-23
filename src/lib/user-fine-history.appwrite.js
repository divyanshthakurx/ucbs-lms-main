import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

const database_id = '66431d5a00229c5bbd1f';
const collection_id = '669e194d0003997a1c1d';

export const createUFHistory = async (userid, FA, FP) => {
    const currentDate = new Date();
    const curDate = currentDate.toISOString();
    let result = await databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
            date: curDate,
            user: userid,
            fine_alloted: FA,
            fine_paid: FP
        }
    );
    return result;
}

export const listUFHistory = async () => {
    const result = await databases.listDocuments(
        database_id,
        collection_id,
        [Query.limit(5000)]
    );
    return result;
}