import { ID } from "appwrite";
import { databases } from "./appwrite";

export const createUser = async (user) => {
    let { user_id, password, name, roll_no, course, year, fine, issued_book } = user;
    user_id = parseInt(user_id);
    roll_no = parseInt(roll_no);
    year = parseInt(year);
    fine = parseInt(fine);
    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        ID.unique(),
        {
            user_id,
            password,
            name,
            roll_no,
            course,
            year,
            fine,
            issued_book
        }
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

export const deleteUser = async (DocID) => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        DocID, // Doc ID
    );
    return result;
}

export const updateUser = async (user) => {
    let { user_id, password, name, roll_no, course, year, fine, issued_book } = user;
    user_id = parseInt(user_id);
    roll_no = parseInt(roll_no);
    year = parseInt(year);
    fine = parseInt(fine);
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        user.$id, // Doc ID
        {
            user_id,
            password,
            name,
            roll_no,
            course,
            year,
            fine,
            issued_book
        }
    );
    return result;
}

export const getUser = async (DocID) => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431dad000f2a73cc5d', // Collection ID
        DocID, // Doc ID
    );
    return result;
}