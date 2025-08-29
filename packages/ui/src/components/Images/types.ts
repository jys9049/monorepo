export interface ImageProps {
  baseUrl?: string;
  images: ImageItemProps[] | string[];
  className?: string;
}

export interface ImageItemProps {
  path: string;
  baseUrl?: string;
  style?: React.CSSProperties;
  className?: string;
}
