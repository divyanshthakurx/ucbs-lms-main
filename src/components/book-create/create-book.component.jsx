import { useState, useContext } from "react";
import FormInput from "../input-field/input-field.component";
import { BooksContext } from "../../context/books.context";

const defaultValues = {
    s_no: "",
    name: "",
    description: "",
    author: "",
    image_URL: "https://i.pinimg.com/564x/88/c2/21/88c221f5748e7f862c444f817513d782.jpg",
    stock: "",
    course: "",
}
const CreateNewBook = () => {
  const {createThisBook} = useContext(BooksContext);
  const [currentCreateBook, setcurrentCreateBook] = useState(defaultValues);

  const {s_no, name, description, author, stock, course} = currentCreateBook;

  const handleChange = (e) => {
      const {name, value} = e.target;
      setcurrentCreateBook({...currentCreateBook, [name]: value});
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      createThisBook(currentCreateBook);
  }

  return(
    <div className="w-full px-12">
      <h1 className="text-3xl">Create Book</h1>
      <form className="grid grid-cols-2">
        <FormInput type="number" placeholder="s_no" onChange={handleChange} label="Serial Number *" name="s_no" value={s_no}/>
        <FormInput type="text" placeholder="name" onChange={handleChange} label="Book Name *" name="name" value={name}/>
        <FormInput type="text" placeholder="description" onChange={handleChange} label="Book Description" name="description" value={description}/>
        <FormInput type="text" placeholder="author" onChange={handleChange} label="Book Author *" name="author" value={author}/>
        <FormInput type="text" placeholder="image_URL" onChange={handleChange} label="Book Image URL" name="image_URL"/>
        <FormInput type="number" placeholder="number of copies" onChange={handleChange} label="number of copies *" name="stock" value={stock}/>
        <FormInput type="text" placeholder="course" onChange={handleChange} label="Course" name="course" value={course}/>
      </form>
      <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">Submit</button>
    </div>
  )
}

export default CreateNewBook;