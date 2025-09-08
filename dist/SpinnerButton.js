import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
export default function SpinnerButton({ spinnerProps, spinning, children, ...props }) {
    const spinnerSize = !spinnerProps?.size && props?.size === 'sm'
        ? 'sm'
        : undefined;
    return (_jsxs(Button, { ...props, children: [spinning && (_jsxs("span", { className: "me-1", children: [_jsx(Spinner, { as: "span", animation: "border", role: "status", "aria-hidden": "true", size: spinnerSize, ...spinnerProps }), _jsx("span", { className: "visually-hidden", children: "Loading..." })] })), children] }));
}
//# sourceMappingURL=SpinnerButton.js.map