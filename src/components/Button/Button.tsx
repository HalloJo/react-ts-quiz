import React, { ReactElement } from "react"
import { ButtonWrapper } from "./Button.styles";


type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string,
    className: string,
}

const Button = ({onClick, label, className}:ButtonProps): ReactElement => (
    <ButtonWrapper className={`${className}`} onClick={onClick}>
        {label}
    </ButtonWrapper>
)

export default Button