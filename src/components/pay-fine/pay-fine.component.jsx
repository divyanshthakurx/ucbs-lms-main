const PayFine = () => {

    return (
    
        <>
        
            <main className="pb-4 px-4 md:ml-64 h-full pt-20">

                    <div className="mb-4 h-full">

                        <div>
                            <div className="py-[2rem]">
                                <div className="px-[2rem]">
                                    <div>
                                        <h1 className="text-4xl font-bold">Pay Fine.</h1>
                                    </div>                  
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="px-[2rem] md:px-0 lg:px-[2rem]">

                                <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center content-center gap-4">                        
                                    <div className="block w-full p-6 bg-blue-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">Total Fine</h5>
                                        <p className="font-extrabold py-6 text-center text-6xl text-black dark:text-gray-400"><span>500</span></p>
                                    </div>
                                    <div className="block w-full p-6 bg-red-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">Pending Fine</h5>
                                        <p className="font-extrabold py-6 text-center text-6xl text-black dark:text-gray-400"><span>20</span></p>
                                    </div>                       
                                </div>  

                            </div>
                        </div>
                        

                        <div>
                            <div className="py-[3rem]">
                                <div className="px-[2rem]">
                                    <div className="px-6">
                                        <ul className="list-decimal">
                                            <li>Total Fine - <span className="font-semibold">Total fine paid till date.</span></li>
                                            <li className="mt-2">Pending Fine - <span className="font-semibold">In a library management system, the concept of a "pending fine" typically refers to the amount of money a library patron owes due to overdue, lost, or damaged books.</span></li>
                                        </ul>
                                    </div>                  
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="py-[2rem]">
                                <div className="px-[2rem]">
                                    <div>
                                        <h1 className="text-4xl font-bold">Fine History.</h1>
                                    </div>                  
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="w-full px-[2rem] md:px-0 lg:px-[2rem]">   
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-center">
                                            <th scope="col" className="px-6 py-3">
                                                Book Name
                                            </th>                                         
                                            <th scope="col" className="px-6 py-3">
                                                Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Fine Alloted On
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Fine Paid On
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Book name
                                            </th>
                                            <td className="px-6 py-4">
                                                10
                                            </td>
                                            <td className="px-6 py-4">
                                                21/04/2024
                                            </td>
                                            <td className="px-6 py-4">
                                                28/04/2024
                                            </td>
                                        </tr>                                      
                                    </tbody>
                                </table>
                            </div>

                            </div> 
                        </div>

                    </div>  

            </main>
        
        </>

    )
}

export default PayFine;