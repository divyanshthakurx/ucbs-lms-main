const Book = ({book_item}) => {
    const {name, description, author, image_URL} = book_item;

    return(
        <>
            <div className="mt-14 flex-1">
                <div className="w-full">
                    <img className="" src={image_URL} alt={name}></img>
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