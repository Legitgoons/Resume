import { WithId, Document } from 'mongodb';

interface ImageProps {
  src: string;
  alt: string;
}

interface ContactItem {
  icon: string;
  link: string;
  text: string;
  image?: ImageProps;
}

export interface ContactResponse extends WithId<Document> {
  data: ContactItem[];
}
