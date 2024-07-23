import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import { ReactComponent as ManageBookImg } from "../../../src/assets/img/admin-dashboard/manage-book.svg";
import { ReactComponent as ManageUserImg } from "../../../src/assets/img/admin-dashboard/manage-user.svg";
import { ReactComponent as BookInventoryImg } from "../../../src/assets/img/admin-dashboard/book-inventory.svg";
import { ReactComponent as HistoryImg } from "../../../src/assets/img/admin-dashboard/history.svg";
import { ReactComponent as IssueBookImg } from "../../../src/assets/img/admin-dashboard/issue-book.svg";
import { ReactComponent as IssueFineImg } from "../../../src/assets/img/admin-dashboard/issue-fine.svg";

const AdminNav = () => {
  return(
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <Link to={"/"} className="flex items-center justify-between mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">UCBS LMS</span>
            </Link>
          </div>

          <div className="flex items-center lg:order-2">
            <Link to={"/admin-dashboard/history"}>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link to={"/admin-dashboard/manage-books"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ManageBookImg/>
                <span className="ml-3 text-black w-full hover:text-white">Manage Book</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin-dashboard/manage-users"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ManageUserImg/>
                <span className="ml-3 text-black w-full hover:text-white">Manage User</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin-dashboard/issue-book"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IssueBookImg/>
                <span className="ml-3 text-black w-full hover:text-white">Issue Book</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin-dashboard/issue-fine"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IssueFineImg/>
                <span className="ml-3 text-black w-full hover:text-white">Issue Fine</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin-dashboard/book-inventory"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BookInventoryImg/>
                <span className="ml-3 text-black w-full hover:text-white">Book Inventory</span>
              </Link>
            </li>
            <li>
              <Link to={"/admin-dashboard/history"}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HistoryImg/>
                <span className="ml-3 text-black w-full hover:text-white">History</span>
              </Link>
            </li>               
          </ul>
        </div>
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
          <div className="bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
              <div className="w-full mx-auto max-w-screen-xl p-2 md:flex items-center justify-center text-center md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with ❤️ by Team <a href="https://digitcrib.com/" className="hover:text-[#06FFFF] font-medium">DigitCrib™</a><br/> All Rights Reserved.
              </span>
              </div>
          </div>
        </div>
      </aside>

      <div className="p-4 md:ml-64 h-auto pt-20 mt-16">
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default AdminNav;