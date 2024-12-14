import FormInput from '../../input-field/input-field.component';
import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../../../context/users.context';
import { createUFHistory } from '../../../lib/user-fine-history.appwrite';
import { updateUFHistory } from '../../../lib/user-fine-history.appwrite';
import { listUFHistory } from '../../../lib/user-fine-history.appwrite';
const UpdateIssueFine = () => {
    const {updateThisUser, clickedUser} = useContext(UsersContext);
    const [selectedUser, setselectedUser] = useState({});
    const [histories, sethistories] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleUpdate = async () => {
            if (histories.length > 0) {
                await updateMultipleDocuments(histories);
            }
        };
        handleUpdate();
    }, [histories])

    useEffect(() => {
        setselectedUser(clickedUser);
    }, [clickedUser])

    const {user_id, fine, name, roll_no, course, year, amount_paid} = selectedUser;

    const updateMultipleDocuments = async (documents) => {
        try {
            const updatePromises = documents.map((doc) => updateUFHistory(doc.$id));

            await Promise.all(updatePromises);
            console.log('All documents updated successfully');
            sethistories([]);
        } catch (error) {
            console.error('Error updating documents:', error);
        }
    };

    const validateForm = (user) => {
        const newErrors = validateUser(user);
        return newErrors;
    };
    const validateUser = (user) => {
        const newErrors = {};
        if (user.fine - clickedUser.fine < 0) {
            newErrors.fine = "Enter a valid value";
        }
        return newErrors;
    };

    const getHistoryId = async (user_rno) => {
        try {
          const result = await listUFHistory();
          const history = result.documents.filter((h) => h.user.roll_no === user_rno && h.fine_paid_on === null);
          sethistories(history ? history.$id : null);
        } catch (error) {
          console.error("Error fetching history:", error);
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target[7].checked){
            setErrors({});
        }
        const validationErrors = validateForm(selectedUser);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            updateThisUser(selectedUser);
            if (fine > 0) {
                createUFHistory(clickedUser.$id, (fine - clickedUser.fine))
            }            
            if(e.target[7].checked){
                getHistoryId(clickedUser.roll_no);
            }
            setErrors({});
        }
    }

    const handleFine = (e) => {
        const val = clickedUser.fine + parseInt(e.target.value);
        setselectedUser({...selectedUser, fine: val});
    }

    const handlePaid = (e) => {
        if (e.target.checked) {
            setselectedUser({...selectedUser, amount_paid: (amount_paid + clickedUser.fine), fine: 0});
        }else{
            setselectedUser({...selectedUser, amount_paid: (amount_paid - clickedUser.fine), fine: clickedUser.fine});
        }
    }

      return (
        <>
            <div className="w-full flex flex-col px-14 py-8">
                <div className="text-3xl md:text-5xl font-bold mb-8">
                    <h1 className="w-fit">Manage User.</h1>
                </div>
    
                <div className="text-xl font-semibold">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-10">
    
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-4'>
                                    <FormInput
                                        type="text" 
                                        placeholder="name" 
                                        label="Name *" 
                                        name="name" 
                                        id="name"
                                        value={name || ""}  // Ensure empty string fallback
                                        readOnly={true} 
                                        autoComplete="off"
                                    />
                                    <FormInput 
                                        type="number" 
                                        placeholder="roll_no" 
                                        label="Roll Number *" 
                                        name="roll_no" 
                                        id="roll_no"
                                        value={roll_no || ""} 
                                        readOnly={true} 
                                        autoComplete="off"
                                    />
                                    <div className="flex flex-col">
                                        <label htmlFor="Course">Course</label>
                                        <select 
                                            className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" 
                                            name="Course" 
                                            id="Course"
                                            disabled
                                            value={course?.toLowerCase() || ""}
                                            autoComplete="off"
                                        >
                                            <option value="all">Course</option>
                                            <option value="bca">BCA</option>
                                            <option value="bba">BBA</option>
                                        </select>
                                    </div>
                                    <FormInput 
                                        type="number" 
                                        placeholder="Amount paid" 
                                        label="Amount paid" 
                                        name="amount_paid" 
                                        id="amount_paid"
                                        value={amount_paid || ""}
                                        readOnly={true}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
    
                            <div className="flex flex-col gap-4">
                                <FormInput 
                                    type="number" 
                                    placeholder="user_id" 
                                    label="User ID *" 
                                    name="user_id" 
                                    id="user_id"
                                    value={user_id || ""} 
                                    readOnly={true} 
                                    autoComplete="off"
                                />
                                <div className="flex flex-col">
                                    <label htmlFor="Year">Year</label>
                                    <select 
                                        className="h-10 mt-2 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" 
                                        name="Year" 
                                        id="Year" 
                                        disabled 
                                        value={year || ""}
                                        autoComplete="off"
                                    >
                                        <option>Year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div className='flex justify-between gap-2'>
                                    <FormInput 
                                        type="number" 
                                        placeholder="fine alloted"
                                        label="Fine alloted" 
                                        name="fine_alloted" 
                                        id="fine_alloted"
                                        value={clickedUser.fine || ""} 
                                        readOnly={true}
                                        autoComplete="off"
                                    />
                                    <FormInput
                                        className="w-[30px] h-[30px]"
                                        type="checkbox" 
                                        label="Paid" 
                                        name="paid" 
                                        id="paid"
                                        onChange={handlePaid} 
                                        autoComplete="off"
                                    />
                                </div>
                                <FormInput 
                                    type="number" 
                                    placeholder="Fine"
                                    label="Fine" 
                                    name="fine" 
                                    id="fine"
                                    onChange={handleFine}
                                    autoComplete="off"
                                    error={errors.fine}
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="text-white flex justify-around">
                                <button 
                                    className="bg-blue-500 px-9 py-2 rounded-xl" 
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
    
            </div>
        </>
    );
    
}

export default UpdateIssueFine;