const Book = ({book_item}) => {
    const {name, description, author} = book_item;

    return(
        <>
            <div className="mt-14">
                <div className="w-full">
                    <img className="w-full" src="https://picsum.photos/200/300" alt=""></img>
                </div>
                <div className="my-4">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <h3>{author}</h3>
                    </div> 
                    <div>
                        <h3>{description}</h3>
                    </div> 
                </div>
                
            </div>
        </>
    )
}

export default Book;