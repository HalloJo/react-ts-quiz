import React, { PropsWithChildren, ReactElement } from "react";
import { P } from "./Paragraph.styles";

type ParagraphProps = {
    className?: string
}

const Paragraph = ({className, children}: PropsWithChildren<ParagraphProps>): ReactElement => (
    <P className={className}>
        {children}
    </P>
)

export default Paragraph