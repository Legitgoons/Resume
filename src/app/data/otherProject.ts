import { ProjectDefault } from '@/app/type/project';

import githubIcon from '@/../public/assets/img/githubIcon.svg';

export const OtherProjectData: ProjectDefault[] = [
  {
    title: '아워홈 사전과제',
    period: '2023.12 ~ 2024.01',
    titleLinks: [
      {
        href: 'https://github.com/Legitgoons/eCommerce-ourHome',
        imgSrc: githubIcon,
        imgAlt: 'Github',
        text: 'Github',
      },
    ],
    details: [
      {
        title: 'Detail',
        sentences: [
          '아워홈의 사전 과제를 위해 제작된 Toy Project입니다.',
          {
            text: '',
            link: {
              href: 'https://cksxkr5193.tistory.com/44',
              text: '🧑‍🍳토이 프로젝트 <아워홈 사전과제> 회고',
            },
            endText: '',
          },
        ],
      },
    ],
  },
  {
    title: '모두의 지하철',
    period: '2023.05 ~ 2023.06',
    titleLinks: [
      {
        href: 'https://github.com/Legitgoons/Everyones-Subway',
        imgSrc: githubIcon,
        imgAlt: 'Github',
        text: 'Github',
      },
    ],
    details: [
      {
        title: 'Detail',
        sentences: [
          '휠체어 사용자를 위한 지하철 App 서비스입니다. 새싹톤에 출품되었습니다.',
          {
            text: '',
            link: {
              href: 'https://cksxkr5193.tistory.com/6',
              text: '🌱새싹톤 <모두의 지하철> 회고',
            },
            endText: '',
          },
        ],
      },
    ],
  },
];
