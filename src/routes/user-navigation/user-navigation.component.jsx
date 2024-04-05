import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/Bell.svg";
import { ReactComponent as Ham } from "../../assets/hamBurger.svg";

const UserNavigation = () => {
    return(
        <>
            <header>
                <nav className="flex justify-between items-center px-8 py-8"    >
                    <div className="align-middle">
                     <Ham />
                    </div>

                    {/* <div class="align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">

                            <defs>
                            </defs>
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                <path d="M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                            </svg>
                    </div> */}

                    <div className="align-middle">
                        {/* <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="40" height="40" viewBox="0 0 256 256" xml:space="preserve">

                            <defs>
                            </defs>
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                <path d="M 79.635 73.696 C 86.104 65.901 90 55.898 90 45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 c 0 10.898 3.896 20.901 10.365 28.696 c 0.105 0.161 0.227 0.315 0.383 0.445 c 0.002 0.002 0.005 0.003 0.007 0.005 C 19.015 83.837 31.298 90 45 90 c 13.702 0 25.985 -6.163 34.245 -15.854 c 0.003 -0.002 0.005 -0.003 0.008 -0.005 C 79.408 74.01 79.53 73.857 79.635 73.696 z M 45 4 c 22.607 0 41 18.393 41 41 c 0 9.169 -3.026 17.645 -8.132 24.482 c -6.081 -6.505 -13.876 -10.99 -22.402 -13.023 c 6.497 -3.669 10.901 -10.629 10.901 -18.609 c 0 -11.782 -9.585 -21.367 -21.367 -21.367 c -11.782 0 -21.367 9.585 -21.367 21.367 c 0 7.979 4.404 14.939 10.901 18.608 c -8.526 2.033 -16.321 6.518 -22.402 13.023 C 7.026 62.645 4 54.169 4 45 C 4 22.393 22.393 4 45 4 z M 45 55.217 c -9.576 0 -17.367 -7.791 -17.367 -17.367 S 35.424 20.482 45 20.482 s 17.367 7.791 17.367 17.367 S 54.576 55.217 45 55.217 z M 45 86 c -11.986 0 -22.787 -5.171 -30.29 -13.399 C 22.48 64.079 33.418 59.217 45 59.217 c 11.581 0 22.52 4.863 30.29 13.384 C 67.787 80.829 56.986 86 45 86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                            </g>
                        </svg> */}
                        <Link to={'/notifications'}><Bell /></Link>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default UserNavigation;