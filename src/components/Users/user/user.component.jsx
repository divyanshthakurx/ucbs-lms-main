import { useContext } from "react";
import {UsersContext} from "../../../context/users.context";
const User = ({user_item}) => {
    const {setclickedUser} = useContext(UsersContext);
    const { name, roll_no, course, year, user_id, fine, book} = user_item;
    const book_count = book.length
    const handleClick = () => {
        setclickedUser(user_item);
    }

    return(
        <>
        <div className="mb-6 flex flex-col justify-around border border-gray-500 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-1 place-items-center place-content-center">
                <div className="flex flex-col gap-3">
                    <div className="self-center"><img onClick={handleClick} src="https://img.icons8.com/?size=120&id=85147&format=png&color=000000" alt=""/></div>
                    <div className="justify-end ">
                        <div className="grid grid-cols-2 text-lg">
                            <div>Issued Books: <span className="font-semibold"></span>{book_count}</div>
                            <div className="justify-self-end">Fine: <span className="font-semibold">&#x20b9;<span>{fine}</span></span> </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-xl">
                        <div >User ID: <span className="font-semibold underline">{user_id}</span></div>
                        <div className=" my-4">Name: <span className="font-semibold">{name}</span></div>
                        <div>Class Roll No: <span className="font-semibold">{roll_no}</span></div>
                    </div>
                    <div className="text-lg flex justify-between mt-4">
                        <div className="font-semibold">{course}</div>
                        <div>Year: <span className="font-semibold">{year}</span></div>   
                    </div>
                </div>            
            </div>
        </div>
        </>
    )
}

export default User;