
import { useContext } from "react";
import { IssuedBooksContext } from "../../context/issued-book-history.context";
const IssuedBooksHisory = ({book}) => {
  const {currentIssuedBook} = useContext(IssuedBooksContext);
  return(
    <>
    <h1>Issued Book History:</h1>
    </>
  )
}

export default IssuedBooksHisory;