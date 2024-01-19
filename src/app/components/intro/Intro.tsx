import BulletSentence from '../BulletSentence';

export default function Intro() {
  return (
    <article>
      <section className="flex flex-col gap-y-4">
        <div className="h1b">
          클린하고 일관적인 코드만을 프로덕트에 남기기 위해
        </div>
        <ul className="p2r flex flex-col gap-y-2">
          <BulletSentence>
            유지보수와 일관성을 위해 재사용성이 뛰어난 컴포넌트를 만들고자
            고민합니다.
          </BulletSentence>
          <BulletSentence>
            구현, 수정사항 등 Pull Request을 상세하게 작성하고, 능동적으로
            의견을 주고받습니다.
          </BulletSentence>
          <BulletSentence>
            리뷰를 진행할 때에는 병합에 책임감을 가지고 의문이 있다면 적극적으로
            코멘트를 남깁니다.
          </BulletSentence>
        </ul>
        <div className="h1b">유저를 고려하는 개발을 위해</div>
        <ul className="p2r flex flex-col gap-y-2">
          <BulletSentence>
            책상 앞에서 문제를 상상하기 보단 유저와 공감하고자 노력합니다.
          </BulletSentence>
          <BulletSentence>
            도메인의 특성을 파악하고, 어떤 기능이 필요할지 고민합니다.
          </BulletSentence>
        </ul>
      </section>
    </article>
  );
}
