import { useState, useEffect } from "react";
import { listUBHistory } from './../../../lib/usershistory.appwrite'
const UserBooksHistory = () => {
    const [usersHistory, setUsersHistory] = useState();

    useEffect(() => {
        listUBHistory().then((data) => setUsersHistory(data.documents));
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
            {usersHistory && usersHistory.sort((a, b) => new Date(b.issue_date) - new Date(a.issue_date)).map((item) => {
                return(
                    <div key={item.$id} className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                        <p>{item.user.name}</p>
                        <p>{item.issued_book ? item.issued_book.title.slice(0,10) + (item.issued_book.title.length > 10 ? '...' : '') : 'null'}</p>
                        <p>{new Date(item.issue_date).toLocaleDateString()}</p>
                        <p>{new Date(item.return_date).toLocaleDateString()}</p>
                    </div>
                )
            })}
        </>
    )
}

export default UserBooksHistory;