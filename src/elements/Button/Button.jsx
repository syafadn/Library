const Button = ({onClick, label}) => {
    return(
        <button
            type="submit"
            className="btn btn-primary"
            id="submit"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button