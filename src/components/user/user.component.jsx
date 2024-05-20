const User = ({user}) => {
    const { name, roll_no, course, year} = user;
    return(
        <>
            <div className="ml-12 grid grid-cols-4">
                <p>{name}</p>
                <p>{roll_no}</p>
                <p>{course}</p>
                <p className="mb-12">{year}</p>
            </div>
        </>
    )
}

export default User;