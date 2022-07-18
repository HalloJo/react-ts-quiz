import React, { ReactElement } from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string,
}

const Button = ({onClick, label}:ButtonProps): ReactElement => (
    <button onClick={onClick}>
        {label}
    </button>
)

export default Button