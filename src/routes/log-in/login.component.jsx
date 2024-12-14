import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ReactComponent as UcbsLogo } from "../../assets/img/home/ucbs-logo.svg";

const LogIn = () => {
  
  return (
    <>

      <div>

      <div className="font-[sans-serif] bg-[#0A433D] md:h-screen bg-no-repeat bg-center bg-cover bg-login-bg">

        <div className="grid md:grid-cols-2 items-center gap-8 h-full">

          <div className="max-md:order-1 p-4 mx-auto">        
            <UcbsLogo className="w-[14rem] h-auto md:w-[22rem] opacity-85"/>
            <p className="text-white font-extrabold text-3xl mt-8 text-center">WELCOME</p>
          </div>

          <div className="flex items-center md:p-8 p-6 bg-white h-full">

            <div className="max-w-lg w-full mx-auto">

              <div className="mb-12">
                <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
                <div className="text-3xl font-semibold mt-4">We're glad you're back!</div>
                <p className="text-gray-800 md:text-lg font-medium mt-2">University College Of Business Studies<br/>Library Management System</p>
              </div>

              <div>
                <ul className="w-full flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <li className="w-full">
                      <Link to={`/login/admin-login`} className="w-full inline-block p-4 rounded-t-lg text-md bg-red-200 text-[#279c91] font-semibold hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-current="page">Admin</Link>
                  </li>
                  <li className="w-full">
                      <Link to={`/login`} className="w-full inline-block p-4 rounded-t-lg text-md bg-green-200 text-[#279c91] font-semibold hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300">Student</Link>
                  </li>
                </ul>
              </div>

              <Outlet/>
            
            </div> 

          </div>  
        
        </div>

      </div>

      </div>

      

    </>
  );
}

export default LogIn;