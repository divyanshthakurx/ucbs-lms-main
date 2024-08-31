import FormInput from '../../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { BooksContext } from '../../../context/books.context';

const UpdateBookComponent = () => {
    const {updateThisBook, deleteThisBook, createThisBook, clickedBook} = useContext(BooksContext);
    const [selectedBook, setselectedBook] = useState({});

    useEffect(() => {
        clickedBook && setselectedBook(clickedBook);
    }, [clickedBook]);
    
    const {s_no, title, description, author, stock, course, image_url} = selectedBook;
    console.log(course);

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
    <div className="w-full flex px-14 py-8 flex-col">
      <div className="text-3xl md:text-4xl font-bold mb-8">
          <h1 className="w-fit">Manage Book</h1>
      </div>
      <div className="text-xl font-semibold">
        <form className="flex flex-col gap-4" id='book_form'>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <FormInput type="text" placeholder="image_url" onChange={handleChange} label="Book Image URL" name="image_url" value={image_url}/>
              <FormInput type="text" placeholder="author" onChange={handleChange} label="Book Author *" name="author" value={author}/>
            </div>

            <div className="flex flex-col gap-4">
              <FormInput type="number" placeholder="s_no" onChange={handleChange} label="Serial Number *" name="s_no" value={s_no}/>
              <FormInput type="text" placeholder="name" onChange={handleChange} label="Book Name *" name="title" value={title}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="books">Course</label>
            {course && console.log(course.toLowerCase())}
            <select className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" name="books" id="books" defaultChecked={course ? course.toLowerCase() : 'b'}>
                <option value="b">All</option>
                <option value="bca">BCA</option>
                <option value="bba">BBA</option>
            </select>
          </div>
          <FormInput type="number" placeholder="number of copies" onChange={handleChange} label="number of copies *" name="stock" value={stock}/>
          <div className="flex flex-col">
            <label>Description</label>
            <textarea className="mt-2 px-2 w-full h-[14vh] font-normal placeholder:font-normal placeholder:text-gray-500 border border-black rounded-lg bg-[#F0F0F0]" name="description" placeholder="description" onChange={handleChange} value={description}/>
          </div>
        </form>
      </div>

      <div className="mt-6">
        <div className="text-white flex justify-around">
          <button className="bg-green-500 px-9 py-2 rounded-xl" type="submit" onClick={handleAdd}>Add</button>
          <button className="bg-blue-500 px-9 py-2 rounded-xl" type="submit" onClick={handleSubmit}>Update</button>
          <button className="bg-red-500 px-9 py-2 rounded-xl" type="button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookComponent;