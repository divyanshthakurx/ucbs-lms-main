import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

export const createBook = async (book) => {
    let { s_no, book_no, image_URL, author, title, edition, year, pages, stock, course, description } = book;
    s_no = parseInt(s_no);
    book_no = parseInt(book_no);
    year = parseInt(year);
    pages = parseInt(pages);
    stock = parseInt(stock);
    let result = await databases.createDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        ID.unique(),
        {
            s_no,
            book_no,
            image_URL,
            author,
            title,
            edition,
            year,
            pages,
            stock,
            course,
            description
        }
    );
    return result;
}

export const listBooks = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        [Query.limit(5000)]
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
    let { s_no, book_no, image_url, author, title, edition, year, pages, stock, course, description } = book;
    s_no = parseInt(s_no);
    book_no = parseInt(book_no);
    year = parseInt(year);
    pages = parseInt(pages);
    stock = parseInt(stock);
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f', // Database ID
        '66431da200196276fb0f', // Collection ID
        book.$id, // Doc ID
        {
            s_no,
            book_no,
            image_url,
            author,
            title,
            edition,
            year,
            pages,
            stock,
            course,
            description
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