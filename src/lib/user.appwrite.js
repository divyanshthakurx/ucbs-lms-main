import { ID } from "appwrite";
import { databases } from "./appwrite";

export const createUser = async () => {

    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        ID.unique(),
        {}
    );
    return result;
}

export const listUsers = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        []
    );
    return result;
}

export const deleteUser = async () => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        '', // Doc ID
    );
    return result;
}

export const updateUser = async () => {
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        '', // Doc ID
        {
            user_id: 100000799,
            password: "1000000067",
            name: "zz1",
            roll_no: 5555,
            course: "bba",
            year: 1,
        }
    );
    return result;
}

export const getUser = async () => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        '', // Doc ID
    );
    return result;
}