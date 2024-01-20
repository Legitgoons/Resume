import Image from 'next/image';

import photo from '@/../public/assets/img/photo.webp';

export default function Title() {
  return (
    <section className="flex flex-wrap-reverse">
      <h1 className="t1 my-10">
        가치를 만드는
        <br />
        FE 개발자
        <br />
        이의찬입니다
        <span className="animate-blink text-blue-400">.</span>
      </h1>
      <Image
        src={photo}
        alt="photo"
        className="ml-6 w-52 self-center sm:ml-12"
      />
    </section>
  );
}
