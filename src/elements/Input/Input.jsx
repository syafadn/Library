const Input = (props) => {
    return(
        <>
            <label htmlFor="product_name" className={props.classLabel}>
                {props.label}
            </label>
            <input
                type={props.type}
                id="img_product"
                className={props.classInput}
                name={props.name}
                placeholder={props.placeholder}
                rows={props.rows}
                value={props.value}
                onChange={props.onChange}
                autoComplete="off"
            />
        </>
    )
}

export default Input