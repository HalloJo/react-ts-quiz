import React, { ReactElement } from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string,
    className: string,
}

const Button = ({onClick, label, className}:ButtonProps): ReactElement => (
    <button className={`${className}`} onClick={onClick}>
        {label}
    </button>
)

export default Button