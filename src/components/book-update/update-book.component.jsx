import FormInput from '../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { BooksContext } from '../../context/books.context';

const UpdateBookComponent = () => {
    const {updateThisBook, deleteThisBook, createThisBook, clickedBook} = useContext(BooksContext);
    const [selectedBook, setselectedBook] = useState({});

    useEffect(() => {
        clickedBook && setselectedBook(clickedBook);
    }, [clickedBook]);
    
    const {s_no, title, description, author, stock, course, image_url} = selectedBook;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setselectedBook({...selectedBook, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateThisBook(selectedBook);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteThisBook(selectedBook);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        createThisBook(selectedBook);
    }

  return(
    <div className="w-full px-12">
      <div className="text-3xl md:text-4xl font-bold mb-8 mx-auto">
          <h1 className="w-[22vw]">Manage Book</h1>
      </div>
      <div className="text-xl font-semibold">
        <form id='book_form'>
          <FormInput type="text" placeholder="image_url" onChange={handleChange} label="Book Image URL" name="image_url" value={image_url}/>
          <FormInput type="number" placeholder="s_no" onChange={handleChange} label="Serial Number *" name="s_no" value={s_no}/>
          <FormInput type="text" placeholder="name" onChange={handleChange} label="Book Name *" name="title" value={title}/>
          <FormInput type="text" placeholder="author" onChange={handleChange} label="Book Author *" name="author" value={author}/>
          <FormInput type="text" placeholder="course" onChange={handleChange} label="Course" name="course" value={course}/>
          <FormInput type="number" placeholder="number of copies" onChange={handleChange} label="number of copies *" name="stock" value={stock}/>
          <label>Description</label>
          <textarea className="mt-2 h-32 w-[460px] placeholder:font-normal placeholder:text-gray-500 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="description" placeholder="description" onChange={handleChange} value={description}></textarea>
        </form>
      </div>
      <div className="my-[3rem]">
        <div className="text-white flex justify-around">
          <button className="bg-green-500 px-9 py-2 rounded-xl hover:bg-green-600" type="submit" onClick={handleAdd}>Add</button>
          <button className="bg-green-500 px-9 py-2 rounded-xl hover:bg-green-600" type="submit" onClick={handleSubmit}>Submit</button>
          <button className="bg-green-500 px-9 py-2 rounded-xl hover:bg-green-600" type="button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookComponent;