interface ImageProps {
  src: string;
  alt: string;
}

export interface ContactItem {
  icon: string;
  link: string;
  text: string;
  image?: ImageProps;
}
