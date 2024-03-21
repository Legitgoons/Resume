import Image from 'next/image';
import Link from 'next/link';

import { ContactItem } from '@/app/type/contact';

import BulletSentence from '../shared/BulletSentence';

import Layout from './Layout';

interface ContactProps {
  contactData: ContactItem[];
}

export default function Contact({ contactData }: ContactProps) {
  return (
    <Layout title="Contact">
      {contactData.map((item) => (
        <BulletSentence key={item.text}>
          {item.icon && <span>{item.icon}&nbsp;</span>}
          <Link href={item.link}>
            <span className="flex">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  className="mx-1 size-4 sm:ml-1 sm:mr-2 sm:size-5"
                  width={16}
                  height={16}
                />
              )}
              {item.text}
            </span>
          </Link>
        </BulletSentence>
      ))}
    </Layout>
  );
}
