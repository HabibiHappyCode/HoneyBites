function Button({ children, myStyle, ...props }) {

    return (
        <button className={myStyle} {...props}>{children}</button>
    )
}

export default Button
