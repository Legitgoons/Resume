import { Project } from '@/app/type/project';

import githubIcon from '@/../public/assets/img/githubIcon.svg';
import next from '@/../public/assets/img/next.svg';
import react from '@/../public/assets/img/react.svg';
import reactNative from '@/../public/assets/img/reactNative.svg';
import reactQuery from '@/../public/assets/img/reactquery.svg';
import recoil from '@/../public/assets/img/recoil.svg';
import redux from '@/../public/assets/img/redux.svg';
import styledComponent from '@/../public/assets/img/styledComponents.svg';
import tailwindCSS from '@/../public/assets/img/tailwindCSS.svg';
import typeScript from '@/../public/assets/img/typeScript.svg';

export const projectData: Project[] = [
  {
    title: '관리하당',
    period: '2023.10 ~ 11',
    role: 'Frontend',
    titleLinks: [
      {
        href: 'https://github.com/Legitgoons/SugarManager',
        imgSrc: githubIcon,
        imgAlt: 'Github',
        text: 'Github',
      },
    ],
    skills: [
      {
        imgSrc: reactNative,
        imgAlt: 'reactNative',
      },
      {
        imgSrc: typeScript,
        imgAlt: 'typeScript',
      },
      {
        imgSrc: styledComponent,
        imgAlt: 'styledComponent',
      },
      {
        imgSrc: redux,
        imgAlt: 'redux',
      },
      {
        imgSrc: reactQuery,
        imgAlt: 'reactQuery',
      },
    ],
    details: [
      {
        title: 'Description',
        sentences: ['가족과 함께하는 당뇨 관리 App입니다.'],
      },
      {
        title: '구현 사항',
        sentences: ['혈당 등록 및 관리 기능', '식단 검색, 등록 및 관리 기능'],
      },
      {
        title: '문제 해결',
        sentences: [
          '같은 데이터를 상단에는 그래프로, 하단에는 날짜별 카드 형식으로 보여줘야하는 화면이 있었습니다.',
          '무한 스크롤을 도입해, 카드를 가져올때마다 그래프를 업데이트 하도록 했습니다.',
          {
            text: '상세한 내용은 ',
            link: {
              href: 'https://cksxkr5193.tistory.com/17',
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
              '모바일 환경을 우선적으로 고려하여 React-Native를 도입',
              {
                text: '클린하고 일관적인 프로덕트를 위해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/21',
                  text: '상세한 PR 작성 및 적극적인 리뷰',
                },
                endText: '',
              },
              {
                text: '상황에 알맞은 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/20',
                  text: '폴더구조',
                },
                endText: ' 사용',
              },
              '재사용성과 유지보수성을 위해 컴포넌트와 Util함수, type을 모듈화',
              {
                text: '',
                link: {
                  href: 'https://cksxkr5193.tistory.com/24',
                  text: 'Interface와 Type의 차이점에 대해서 학습',
                },
                endText: ' 및 사용',
              },
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
              'JsDoc로 주석을 작성하는건 가독성에 도움이 되지만, 코드가 주석을 못따라가는 현상 발생',
              'React-Native를 사용하며 App 관련 설정에서 많은 어려움을 겪음',
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
              '핵심적인 경우에만, 최소한의 주석을 작성하는 식으로 변경',
              'Native App에 대한 학습 필요',
            ],
          },
        ],
      },
    ],
    blog: {
      title: '관련 게시글',
      links: [
        {
          href: 'https://cksxkr5193.tistory.com/22',
          text: '🧑‍⚕️가족과 함께하는 당뇨관리 <관리하당> 회고',
        },
        {
          href: 'https://cksxkr5193.tistory.com/17',
          text: '무한스크롤을 통해서 UX 개선하기/React-Native',
        },
        {
          href: 'https://cksxkr5193.tistory.com/18',
          text: 'Debounce를 활용해서 api 요청 횟수 줄이기',
        },
        {
          href: 'https://cksxkr5193.tistory.com/20#3.%20%EA%B4%80%EB%A6%AC%ED%95%98%EB%8B%B9(React-Native)-1',
          text: '폴더구조의 Best Practice를 찾아서',
        },
        {
          href: 'https://cksxkr5193.tistory.com/21',
          text: '나의 코드리뷰(클린하고 일관적인 프로덕트를 위해)',
        },
      ],
    },
  },
  {
    title: '모익',
    period: '2023.08 ~ 10',
    role: 'Frontend',
    titleLinks: [
      {
        href: 'https://github.com/Fintech-Moic/Moic',
        imgSrc: githubIcon,
        imgAlt: 'Github',
        text: 'Github',
      },
      {
        href: 'https://youtu.be/vNfzS5zWNRc?si=5WFoKRIQgMAOJhM6',
        text: '📺시연 영상',
      },
    ],
    skills: [
      {
        imgSrc: next,
        imgAlt: 'next.js',
      },
      {
        imgSrc: typeScript,
        imgAlt: 'typeScript',
      },
      {
        imgSrc: tailwindCSS,
        imgAlt: 'tailwindCSS',
      },
    ],
    details: [
      {
        title: 'Description',
        sentences: [
          '잊기 쉬운 카드 혜택, 기프티콘을 지도를 이용해서 보여주는 핀테크 서비스입니다.',
        ],
      },
      {
        title: '구현 사항',
        sentences: [
          '로그인/회원가입과 아이디/비밀번호 찾기 등 회원관리 기능',
          'JWT 관리 등 프론트엔드에서의 보안 관리',
        ],
      },
      {
        title: '문제 해결',
        sentences: [
          '로그인 여부에 따라서 각각 메인 페이지/로그인 페이지로 이동시켜야 하는 이슈가 있었습니다.',
          '토큰 여부에 따라 이동시키는 Hook를 구현하여 로그인 관련 페이지와 Navbar에 넣어서 해결하였습니다.',
          {
            text: '자세한 사항은 ',
            link: {
              href: 'https://cksxkr5193.tistory.com/41',
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
              'Next.js를 사용하며 SSR에 대한 이해도를 높임',
              {
                text: '보안 및 로그인 관리를 위해 ',
                link: {
                  href: 'https://ssafy-fintech.notion.site/JWT-d8e71a3d94f348ebabbe90684024bb74?pvs=4',
                  text: 'JWT를 학습 및 사용',
                },
                endText: '',
              },
              {
                text: '재사용성과 유지보수성을 위해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/11',
                  text: 'Atomic 패턴을 사용해서 회원관리 구현',
                },
                endText: '',
              },
              {
                text: '모바일 사용을 우선으로 하는 프로덕트임을 고려해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/15',
                  text: 'PWA 설정',
                },
                endText: '',
              },
              {
                text: '',
                link: {
                  href: 'https://ssafy-fintech.notion.site/FRONTEND-0075c7725d20489a9f7ca2fda3569b94?pvs=4',
                  text: 'JsDoc 주석 작성을 룰로 정하는 등',
                },
                endText: ' 코드의 가독성을 위해 노력',
              },
            ],
          },
          {
            heading: '기획',
            sentences: [
              {
                text: '화면 기획단계에서 Figma를 통해 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/37#2.%20%EA%B8%B0%ED%9A%8D-1',
                  text: '사용할 컴포넌트를 모두 정의',
                },
                endText: '',
              },
            ],
          },
          {
            heading: '기타',
            sentences: [
              {
                text: '매일 아침 ',
                link: {
                  href: 'https://ssafy-fintech.notion.site/7c2c1d4daee940c184306224a7f03415?pvs=4',
                  text: '데일리 스크럼',
                },
                endText: '을 통해 현재 진행 상황과 논의사항 공유',
              },
              {
                text: '',
                link: {
                  href: 'https://www.notion.so/ssafy-fintech/ae2f3112a59449aca3ead390bc6ef580?v=0028458500104c96862e7c093cfada0b&pvs=4',
                  text: 'Jira 사용 및 회의를 통해 개발 상황을 지속적으로 공유',
                },
                endText: '하는 등의 노력으로 일정에 맞게 프로덕트를 완성',
              },
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
              '컴포넌트를 계층별로 나누는 Atomic 패턴을 사용하다보니 Props 관리에 어려움을 겪음',
              {
                text: '',
                link: {
                  href: 'https://cksxkr5193.tistory.com/20#2.%20%EB%AA%A8%EC%9D%B5(Next.js%20%2F%20App%20Routing)-1',
                  text: '공통 컴포넌트와 관심사별 컴포넌트를 나눴으나',
                },
                endText: ' 정도가 지나쳐 부작용을 겪음',
              },
              'React-hook-form 라이브러리를 사용했으나 내부 로직을 완벽히 이해하지 못해 Validation 부분 이슈가 있음',
              'Next.js와 React-Query를 동시에 도입, 러닝 커브로 인해 완전히 이해하지 못한채로 사용',
            ],
          },
          {
            heading: '기획',
            sentences: [
              '도메인에 대한 지식 부족으로 인해 기획 과정에서 많은 시간 소모, 이로 인해 개발 기간이 줄어듦',
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
              'Props를 좀 더 효율적으로 다룰 수 있는 방법 학습하기',
              '상황에 맞는 폴더구조에 대해 좀 더 고민해봐야',
              '개발 편의성만을 위한 라이브러리 도입이 아닌, 정말 필요한지 고민하는 태도 갖추기',
              'Next.js와 React-Query에 대한 추가적인 학습 필요',
            ],
          },
        ],
      },
    ],
    blog: {
      title: '관련 게시글',
      links: [
        {
          href: 'https://cksxkr5193.tistory.com/37',
          text: '💳 카드 혜택, 기프티콘 서비스 <모익> 회고',
        },
        {
          href: 'https://cksxkr5193.tistory.com/41',
          text: '로그인 여부에 따른 접근 제한 처리하기 / Next.js',
        },
        {
          href: 'https://cksxkr5193.tistory.com/11',
          text: 'react-hook-form으로 재사용성을 고려한 로그인/회원가입 컴포넌트 만들기',
        },
        {
          href: 'https://cksxkr5193.tistory.com/20#2.%20%EB%AA%A8%EC%9D%B5(Next.js%20%2F%20App%20Routing)-1',
          text: '폴더구조의 Best Practice를 찾아서',
        },
        {
          href: 'https://cksxkr5193.tistory.com/15',
          text: 'Next.js 13 App Routing PWA 적용하기',
        },
      ],
    },
  },
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
        href: 'https://youtu.be/jkVMuuSQKvY?si=cv2JKvvXDwSrLxFu',
        text: '📺팬 시연 영상',
      },
    ],
    skills: [
      {
        imgSrc: react,
        imgAlt: 'react',
      },
      {
        imgSrc: typeScript,
        imgAlt: 'typeScript',
      },
      {
        imgSrc: tailwindCSS,
        imgAlt: 'tailwindCSS',
      },
      {
        imgSrc: recoil,
        imgAlt: 'recoil',
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
              {
                text: '이후 ',
                link: {
                  href: 'https://cksxkr5193.tistory.com/40',
                  text: '리팩토링을 통해 중복된 JSX문 제거',
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
        ],
      },
      {
        title: 'Problem',
        details: [
          {
            heading: '개발',
            sentences: [
              '다른 사람의 코드를 중간에 이어받아서 작업하며 어려움을 느낌',
              'atom단계의 컴포넌트가 의존성을 가지거나, organisms에서 바로 api를 호출해 컴포넌트의 재사용성이 떨어짐',
              '5계층으로 컴포넌트를 분리하는 것에 부담을 느껴 atom/organisms/pages 3단계로만 나눴으나, 오히려 더 헷갈리게 됨',
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
            sentences: ['UI/UX에 대한 학습 필요.'],
          },
        ],
      },
    ],
    blog: {
      title: '관련 게시글',
      links: [
        {
          href: 'https://cksxkr5193.tistory.com/7',
          text: '🌟SSAFY 우수 프로젝트, 비대면 팬사인회 서비스 <스타게이트>회고',
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
