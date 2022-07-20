import React, { ReactElement } from "react";
import { H1 } from "./Heading.styles";

type HeadingProps = {
    title: string;
    className?: string;
}

const Heading = ({title, className}: HeadingProps): ReactElement => (
    <H1 className={`${className}`} >{title}</H1>
)

export default Heading