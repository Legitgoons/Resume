import BulletSentence from '../BulletSentence';

import ExperienceDetail from './ExperienceDetail';
import ExperienceTitle from './ExperienceTitle';

export default function Experience() {
  return (
    <div className="flex flex-col gap-y-8">
      <article className="flex flex-col flex-wrap">
        <ExperienceTitle title="삼성청년SW아카데미">
          <ul>
            <li>2023.01 ~ 12</li>
            <li>9th, Web(Java)</li>
          </ul>
        </ExperienceTitle>
        <section className="flex w-full flex-col gap-y-4">
          <ExperienceDetail title="Detail">
            <BulletSentence>
              삼성전자에서 주관하는 삼성청년SW아카데미에 교육생으로 선발되어
              교육을 수료한 후 프로젝트를 진행하였습니다.
            </BulletSentence>
            <BulletSentence>
              처음 6개월간은 학습을 진행하며 JavaScript와 Vue를 이용한 Frontend,
              Java와 Spring을 이용한 Backend, MySQL을 이용한 DB를 구현하며 Web
              개발을 익혔습니다.
            </BulletSentence>
            <BulletSentence>
              자료구조와 알고리즘에 대한 지식을 익혀 모의 삼성SW역량테스트에서
              A형(Advanced 등급)을 취득하였습니다.
            </BulletSentence>
            <BulletSentence>
              이후 6개월 간 3차례의 프로젝트를 프론트엔드 개발자로
              진행하였습니다. 현직 개발자 심사를 통해 우수 프로젝트로 선정되기도
              하였습니다. 상세한 내역은 Project항목을 참조 부탁드립니다.
            </BulletSentence>
          </ExperienceDetail>
        </section>
      </article>
      <article className="flex flex-col flex-wrap">
        <ExperienceTitle title="멋쟁이 사자처럼 대학">
          <ul>
            <li>2022.03 ~ 12</li>
            <li>10th, Frontend</li>
          </ul>
        </ExperienceTitle>
        <section className="flex w-full flex-col gap-y-4">
          <ExperienceDetail title="Detail">
            <BulletSentence>
              연합 개발 동아리 멋쟁이 사자처럼 대학에 10기 Front-end 트랙으로
              참여하였습니다.
            </BulletSentence>
            <BulletSentence>
              Java Script와 React를 사용하는 Frontend 교육을 수료한 후,
              아이디어톤 1회와 해커톤 2회 등 여러 공모전에 참여하였습니다.
            </BulletSentence>
            <BulletSentence>
              기술로 문제를 해결하는 경험을 하며 개발자로의 진로를 결정하게
              되었습니다.
            </BulletSentence>
          </ExperienceDetail>
        </section>
      </article>
    </div>
  );
}
