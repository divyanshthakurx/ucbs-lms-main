const FormInput = ({ label, ...otherProps }) => {

    return(
        <div className="relative my-12">
            {label && (
                <label className="text-lg">{label}</label>
            )}
            <input className="border border-black rounded-lg px-4 py-2 ml-4" {...otherProps}></input>
        </div>
    )
}

export default FormInput;