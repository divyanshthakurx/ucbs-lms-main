import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const UserNavigation = () => {
    return(
        <>
            <Link to={'/bookInventory'}>Book Inventory</Link>
            <Link to={'/issuedBooks'}>Issued Books</Link>
            <Link to={'/notifications'}>notification</Link>
            <Outlet/>
        </>
    )
}

export default UserNavigation;