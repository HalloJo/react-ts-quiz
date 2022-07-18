import { ReactElement } from "react"

type ButtonProps = {
    onClick: any;
}

const Button = ({onClick}:ButtonProps): ReactElement => (
    <button onClick={onClick}>
        Start!
    </button>
)

export default Button