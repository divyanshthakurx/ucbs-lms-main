const FormInput = ({ label, ...otherProps }) => {

    return(
        <div className="flex flex-col justify-center">
            {label && (
                <label>{label}</label>
            )}
            <input className="h-10 mt-2 placeholder:font-normal placeholder:text-gray-500 px-2 font-normal border border-black rounded-lg bg-[#F0F0F0]" {...otherProps}></input>
        </div>
    )
}

export default FormInput;