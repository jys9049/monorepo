import { ImageProps } from "./types";

const Images = ({
  baseUrl = "https://cdn.driven.run/landing",
  images,
  className: defaultClassName,
}: ImageProps) => {
  return (
    <>
      {images.map((item, index) => (
        <img
          key={index}
          src={`${item.baseUrl ?? baseUrl}${item.path}`}
          style={{ width: "100%", height: "auto", ...item.style }}
          className={`${defaultClassName} ${item.className}`}
          alt={`landing_image_${index + 1}`}
        />
      ))}
    </>
  );
};

export default Images;
