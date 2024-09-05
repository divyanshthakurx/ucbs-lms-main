const FormInput = ({ label, id, ...otherProps }) => {

    return(
        <div className="flex flex-col justify-center">
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            <input className="h-10 mt-2 placeholder:font-normal placeholder:text-gray-500 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" id={id} {...otherProps}></input>
        </div>
    )
}

export default FormInput;