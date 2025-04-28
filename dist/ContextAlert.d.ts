import React from 'react';
import { AlertProps } from "react-bootstrap";
export interface ContextAlertProps extends AlertProps {
    context?: string;
    count?: number;
    children?: React.ReactNode;
}
export default function ContextAlert({ context, count, children, ...props }: ContextAlertProps): import("react/jsx-runtime").JSX.Element;
