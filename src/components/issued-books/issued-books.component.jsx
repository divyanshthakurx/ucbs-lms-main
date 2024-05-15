import Book from "../book/book.component";
import { BooksContext } from "../../context/books.context";
import { useContext } from "react";
import {createUser} from '../../lib/appwrite';
import {deleteUser} from '../../lib/appwrite';
import {updateUser} from '../../lib/appwrite';
import {getUser} from '../../lib/appwrite';
import {listUsers} from '../../lib/appwrite';

const IssuedBooks = () => {
    const {currentBook} = useContext(BooksContext);

    return(
        <>
            <main className="flex-1">

                <section>
                    <div className="text-4xl font-bold my-4 mx-auto px-12">
                        <h1 className="w-[28vw]">Your Books.</h1>
                    </div>
                </section>

                <section>

                    <div className="flex">
                        <button className="px-5 py-2 border mx-2 rounded-lg border-black" onClick={createUser}>Create User</button>
                        <button className="px-5 py-2 border mx-2 rounded-lg border-black" onClick={deleteUser}>Delete User</button>
                        <button className="px-5 py-2 border mx-2 rounded-lg border-black" onClick={updateUser}>Update User</button>
                        <button className="px-5 py-2 border mx-2 rounded-lg border-black" onClick={getUser}>Get User</button>
                        <button className="px-5 py-2 border mx-2 rounded-lg border-black" onClick={listUsers}>List users</button>
                    </div>
                    
                    <div className="w-full px-20">
                        {currentBook.map((book) => {
                            return <Book key={book.id} book_item={book}/>
                        })}
                    </div>

                </section>

            </main>
        </>
    )
}

export default IssuedBooks;