import React from 'react';
import Button, {ButtonProps} from "react-bootstrap/Button";
import Spinner, {SpinnerProps} from "react-bootstrap/Spinner";

export interface SpinnerButtonProps extends ButtonProps {
    spinnerProps?: SpinnerProps;
    spinning?: boolean;
    children?: React.ReactNode;
}

export default function SpinnerButton({spinnerProps, spinning, children, ...props}: SpinnerButtonProps) {
    return (
        <Button {...props}>
            {spinning && (
                <span className="me-1">
                    <Spinner as="span" animation="border" role="status" aria-hidden="true" {...spinnerProps}/>
                    <span className="visually-hidden">Loading...</span>
                </span>
            )}
            {children}
        </Button>
    )
}
