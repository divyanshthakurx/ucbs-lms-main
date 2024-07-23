import { useContext, useEffect ,useState } from "react";
import { UsersContext } from "../../context/users.context";
import { getUser } from "../../lib/user.appwrite";

const UserIssuedBooks = () => {
    const [curUser, setCurUser] = useState({});
    const {Users} = useContext(UsersContext);
    const user = Users && Users.find((user) => user.user_id == localStorage.getItem('currentuserCreds'));
    const some = user && getUser(user.$id);

    useEffect(() => {
        some && some.then((result) => setCurUser(result));
    }, [user]);

    return (
    <div>
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-bold">{curUser.name}</p>
        <p className="text-lg">Roll No: {curUser.roll_no}</p>
        <p className="text-lg">Course: {curUser.course}</p>
        <p className="text-lg">Year: {curUser.year}</p>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <p className="text-xl font-bold">Issued Books</p>
        <ol className="list-decimal text-lg ml-12">
            {curUser.book ? curUser.book.map((book) => (
            <li key={book.s_no}>
                {book.title}
            </li>
            )) : <p>No books issued</p>}
        </ol>
        </div>
    </div>
    );
};

export default UserIssuedBooks;