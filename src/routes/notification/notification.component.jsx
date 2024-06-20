const Notification = () => {
    return(
        <>
            <h1>History</h1>
            <p className="mb-4">Issued Books:</p>
            <div className="flex justify-evenly border border-black rounded-md w-3/4 m-auto">
                <p>book name</p>
                <p>Author</p>
                <p>DOI</p>
                <p>DOR</p>
            </div>
        </>
    )
}

export default Notification;