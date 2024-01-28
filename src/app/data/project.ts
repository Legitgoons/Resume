import { Project } from '@/app/type/project';

import githubIcon from '@/../public/assets/img/githubIcon.svg';

export const projectData: Project[] = [
  {
    title: '스타게이트',
    period: '2023.07 ~ 08',
    role: 'Frontend / 팀장',
    titleLinks: [
      {
        href: 'https://github.com/Legitgoons/StarGate',
        imgSrc: githubIcon,
        imgAlt: 'Github',
        text: 'Github',
      },
      {
        href: 'https://youtu.be/5--jl63PSaE?si=Ubh4xmladuUAYaP_',
        text: '📺관리자 시연 영상',
      },
      {
        href: 'https://github.com/Legitgoons/StarGate',
        text: '📺팬 시연 영상',
      },
    ],
    details: [
      {
        title: 'Description',
        sentences: [
          '화상통화를 이용한 비대면 팬사인회 서비스입니다. 현직 개발자의 심사를 통해 삼성청년SW아카데미 우수 프로젝트로 선정되었습니다.',
        ],
      },
      {
        title: 'Skills',
        sentences: [
          'React, TypeScript, Tailwind CSS, Recoil',
          'Notion, Figma, Google Spreadsheet, Jira, Slack, Git, GitLab',
        ],
      },
      {
        title: '구현',
        sentences: [
          '팬사인회 조회, 연예인 그룹/멤버 관리',
          '팬사인회 생성 및 수정과 종료 후 페이지 등 팬사인회 진행 일부',
        ],
      },
      {
        title: '문제 해결',
        sentences: [
          '팬사인회 입장 대기시간을 1000ms마다 1초가 줄어들도록 구현했으나, 비활성화 시 최대 60000ms까지 시간이 증가하였습니다.',
          'Page Visibility API를 활용해 사용자가 해당 탭으로 돌아올 때, 다시 데이터를 가져오도록 하여 해결하였습니다.',
          {
            text: '자세한 사항은 ',
            link: {
              href: 'https://cksxkr5193.tistory.com/38',
              text: '블로그를 참조',
            },
            endText: ' 부탁드립니다.',
          },
        ],
      },
    ],
    reviews: [
      {
        title: 'Keep',
        details: [
          {
            heading: '개발',
            sentences: [
              {
                text: '적절한 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/7#4.%20%EA%B8%B0%EC%88%A0%20%EC%8A%A4%ED%83%9D-1',
                  text: '기술 선정을 위해 논의',
                },
                endText: ' 진행',
              },
              {
                text: '선택을 위해 Package Manager에 대해 학습한 후 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/2',
                  text: '팀원과 공유',
                },
                endText: '',
              },
              {
                text: '컴포넌트의 재사용성과 유지보수성을 고려해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/4',
                  text: 'Atomic 패턴 사용',
                },
                endText: '',
              },
              'Template을 통해 Merge Request 작성/리뷰 소요시간 단축',
              {
                text: '진행도 파악을 위해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/7#Jira%EB%A1%9C%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-1',
                  text: 'Jira를 사용해 프로젝트 관리',
                },
                endText: '',
              },
            ],
          },
          {
            heading: '기획',
            sentences: [
              {
                text: '유저를 고려한 문제점 파악 / 해결책 제안을 위해 구글 폼 설문과 ',
                link: {
                  href: 'https://factual-twilight-c6d.notion.site/15454388981943ed92208cde5c3ce2fe?pvs=4',
                  text: '비대면 팬사인회 경험자 인터뷰',
                },
                endText: ' 진행',
              },
              {
                text: '프로덕트 구체화를 위해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/7#3.%20%EB%AC%B8%EC%84%9C%20%EC%9E%91%EC%84%B1%20%26%20%EB%AA%A9%EC%97%85%20%EB%A7%8C%EB%93%A4%EA%B8%B0-1',
                  text: '세밀한 요구사항 정의서 / 기능 정의서 작성',
                },
                endText: '',
              },
            ],
          },
          {
            heading: '기타',
            sentences: [
              '팀장으로서 편안한 분위기를 만들어 소통에 대한 망설임을 줄임',
            ],
          },
        ],
      },
      {
        title: 'Problem',
        details: [
          {
            heading: '개발',
            sentences: [
              '다른 사람의 코드를 중간에 이어받아서 작업하며 어려움을 느낌',
              'atom단계의 컴포넌트가 의존성을 가지거나, organisms에서 바로 api를 호출해 컴포넌트의 재사용성이 떨어짐, ',
              '5계층으로 컴포넌트를 분리하는 것에 부담을 느껴 atom/organisms/pages 3단계로만 나눴으나, 오히려 더 헷갈리게 됨.',
              'Jira를 통해서 일정을 관리하고 있었음에도 불구하고, 경험 미숙과 욕심으로 하위 기능을 포기하는 판단이 늦었음',
            ],
          },
          {
            heading: '기획',
            sentences: [
              'UI/UX에 대해서 이론적인 지식이 없어 UI 기획에 어려움을 겪음',
            ],
          },
        ],
      },
      {
        title: 'Try',
        details: [
          {
            heading: '개발',
            sentences: [
              '좀 더 세밀한 Eslint & Prettier설정과 JsDoc로 주석 작성 등, 코드의 가독성을 높이는 Rule 도입',
              'Atomic Design 패턴에 대한 이해 및 추가적 계층 도입 필요',
              'MVP만 우선 구현하고, 추가 기능들을 덧붙이는 방식으로 구현',
            ],
          },
          {
            heading: '기획',
            sentences: ['UI/UX에 대한 학습이 필요.'],
          },
        ],
      },
    ],
    blog: {
      title: '관련 게시글',
      links: [
        {
          href: 'https://cksxkr5193.tistory.com/7',
          text: '프로젝트 회고',
        },
        {
          href: 'https://cksxkr5193.tistory.com/2',
          text: 'npm VS yarn Vs pnpm Vs yarn berry 뭘 써야 해?',
        },
        {
          href: 'https://cksxkr5193.tistory.com/4',
          text: 'Atomic Design Pattern 도전기',
        },
        {
          href: 'https://cksxkr5193.tistory.com/38',
          text: 'setInterval과 Page Visibility API로 정확한 대기시간 알려주기',
        },
        {
          href: 'https://cksxkr5193.tistory.com/40',
          text: 'Template으로 중복되는 JSX문 줄이기',
        },
      ],
    },
  },
];
