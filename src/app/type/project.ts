import { WithId, Document } from 'mongodb';

interface Link {
  href: string;
  imgSrc?: string;
  imgAlt?: string;
  text: string;
}

export interface LinkSentence {
  text: string;
  link: Link;
  endText?: string;
}

interface Skills {
  imgSrc: string;
  imgAlt: string;
}

interface Detail {
  title: string;
  sentences: LinkSentence[];
}

/** Project
 * @param {string} title : 프로젝트 제목
 * @param {string} period : 진행 기간
 * @param {string} role : 역할
 * @param {Link[]} links : 제목 하단 링크
 * @param {Skills[]} skills: 프로젝트 사용 기술
 * @param {Detail[]} details : 프로젝트 상세 내역
 */

export interface ProjectDefaultResponse extends WithId<Document> {
  title: string;
  period: string;
  titleLinks: Link[];
  details: Detail[];
}

export interface ProjectResponse extends ProjectDefaultResponse {
  skills: Skills[];
  role: string;
}
