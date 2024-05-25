import { ID } from "appwrite";
import { databases } from "./appwrite";

export const createBook = async (book) => {
    let { s_no, name, description, author, image_URL, stock, course } = book;
    s_no = parseInt(s_no);
    stock = parseInt(stock);
    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        ID.unique(),
        {
            s_no,
            name,
            description,
            author,
            image_URL,
            stock,
            course
        }
    );
    return result;
}

export const listBooks = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        []
    );
    return result;
}

export const deleteBook = async (DocID) => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        DocID, // Doc ID
    );
    return result;
}

export const updateBook = async (book) => {
    const { s_no, name, description, author, image_URL, stock, course } = book;
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        book.$id, // Doc ID
        {
            s_no,
            name,
            description,
            author,
            image_URL,
            stock,
            course
        }
    );
    return result;
}

export const getBook = async (DocID) => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        DocID, // Doc ID
    );
    return result;
}