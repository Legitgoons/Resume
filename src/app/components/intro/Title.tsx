import Image from 'next/image';

import ColorPeriod from '../shared/ColorPeriod';

import photo from '@/../public/assets/img/photo.webp';

export default function Title() {
  return (
    <section className="flex flex-wrap-reverse">
      <h1 className="t1">
        가치를 만드는
        <br />
        FE 개발자
        <br />
        이의찬입니다
        <ColorPeriod isBlink />
      </h1>
      <Image
        src={photo}
        alt="photo"
        className="ml-6 w-44 self-center xl:w-48 2xl:ml-12 2xl:w-52"
      />
    </section>
  );
}
