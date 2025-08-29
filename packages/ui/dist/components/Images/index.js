import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Images = ({ baseUrl = "https://cdn.driven.run/landing", images, className: defaultClassName, }) => {
    return (_jsx(_Fragment, { children: images.map((item, index) => (_jsx("img", { src: `${item.baseUrl ?? baseUrl}${item.path}`, style: { width: "100%", height: "auto", ...item.style }, className: `${defaultClassName} ${item.className}`, alt: `landing_image_${index + 1}` }, index))) }));
};
export default Images;
