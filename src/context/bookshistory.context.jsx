import { createContext } from "react";
import { listBooksHistory } from '../lib/bookshistory.appwrite';

export const BooksHistoryContext = createContext ({
    listBookHistory: () => {},
});

export const BooksHistoryProvider = ({ children }) => {

    const listBookHistory = async () => {
        const result = await listBooksHistory();
        return result;
    };

    listBookHistory();

    return (
        <BooksHistoryContext.Provider value={{ listBookHistory }}>{children}</BooksHistoryContext.Provider>
    );
}