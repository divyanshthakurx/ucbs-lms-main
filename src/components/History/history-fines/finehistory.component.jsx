import { useState, useEffect } from "react";
import { listUFHistory } from '../../../lib/user-fine-history.appwrite'
const FineHistory = () => {
    const [usersHistory, setUsersHistory] = useState();

    useEffect(() => {
        listUFHistory().then((data) => setUsersHistory(data.documents));
    }, []);

    return(
        <>
            <p className="mb-4">Fine history:</p>
            <div className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                <p>User</p>
                <p>Pending Fine</p>
                <p>Fine alloted on</p>
                <p>Fine paid on</p>
            </div>
            {usersHistory && usersHistory.sort((a, b) => new Date(b.fine_alloted_on) - new Date(a.fine_alloted_on)).map((item) => {
                return(
                    <div key={item.$id} className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                        <p>{item.user.name}</p>
                        <p>{item.amount ? item.amount : 0}</p>
                        <p>{new Date(item.fine_alloted_on).toLocaleDateString()}</p>
                        <p>{item.fine_paid_on ? (new Date(item.fine_paid_on).toLocaleDateString()) : 'Not paid'}</p>
                    </div>
                )
            })}
        </>
    )
}

export default FineHistory;