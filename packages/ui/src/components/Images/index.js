import { jsx as _jsx } from "react/jsx-runtime";
const Images = ({ items }) => {
    return (_jsx("div", { style: { width: 900 }, children: items.map((item, index) => (_jsx("img", { src: item.src, style: { width: "100%", height: "auto", ...item.style }, className: item.className, alt: `landing_image_${index + 1}` }, index))) }));
};
export default Images;
