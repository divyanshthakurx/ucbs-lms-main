import { useContext, useState, useEffect } from "react";
import { UsersHistoryContext } from '../../../context/usershistory.context';
const FineHistory = () => {
    const { listUsersHistory } = useContext(UsersHistoryContext);
    const [usersHistory, setUsersHistory] = useState();

    useEffect(() => {
        listUsersHistory().then((data) => setUsersHistory(data.documents));
    }, []);

    return(
        <>
            <p className="mb-4">Fine history:</p>
            <div className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                <p>User</p>
                <p>Pending Fine</p>
                <p>Paid Fine</p>
                <p>Date</p>
            </div>
            {usersHistory && usersHistory.map((item) => {
                return(
                    <div key={item.$id} className="flex justify-evenly border border-black rounded-md w-3/4 m-auto mb-10">
                        <p>{item.user.name}</p>
                        <p>{item.pending_fine ? item.pending_fine : 0}</p>
                        <p>{item.user.amount_paid ? item.user.amount_paid : 0}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                )
            })}
        </>
    )
}

export default FineHistory;