import { useContext, useState, useEffect } from "react";
import { UsersHistoryContext } from '../../../context/usershistory.context';
const UserBooksHistory = () => {
    const { listUsersHistory } = useContext(UsersHistoryContext);
    const [usersHistory, setUsersHistory] = useState();

    useEffect(() => {
        listUsersHistory().then((data) => setUsersHistory(data.documents));
    }, []);

    return(
        <>
            <p className="mb-4">Issued and returen Books history:</p>
            <div className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                <p>User</p>
                <p>Issued Book</p>
                <p>Returen Book</p>
                <p>Date</p>
            </div>
            {usersHistory && usersHistory.map((item) => {
                return(
                    <div key={item.$id} className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                        <p>{item.user.name}</p>
                        <p>{item.issued_book ? item.issued_book.title.slice(0,10) + (item.issued_book.title.length > 10 ? '...' : '') : 'null'}</p>
                        <p>{item.returned_book ? item.returned_book.title.slice(0,10) + (item.returned_book.title.length > 10 ? '...' : '') : 'null'}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                )
            })}
        </>
    )
}

export default UserBooksHistory;