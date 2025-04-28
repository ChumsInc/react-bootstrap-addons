import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
export default function ContextAlert({ context, count, children, ...props }) {
    return (_jsxs(Alert, { variant: "warning", ...props, children: [!!context && (_jsxs(Alert.Heading, { children: [context, !!count && count > 1 && (_jsx(Badge, { bg: props.variant, children: count }))] })), children] }));
}
//# sourceMappingURL=ContextAlert.js.map