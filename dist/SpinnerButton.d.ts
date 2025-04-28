import React from 'react';
import { ButtonProps } from "react-bootstrap/Button";
import { SpinnerProps } from "react-bootstrap/Spinner";
export interface SpinnerButtonProps extends ButtonProps {
    spinnerProps?: SpinnerProps;
    spinning?: boolean;
    children?: React.ReactNode;
}
export default function SpinnerButton({ spinnerProps, spinning, children, ...props }: SpinnerButtonProps): import("react/jsx-runtime").JSX.Element;
