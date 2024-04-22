import { WithId, Document } from 'mongodb';

/** BaseOtherResponse
 * @param {string} title : 제목
 * @param {string} period : 기간
 * @param {string} summary : 한 줄 요약
 * @param {string[]} details : 상세 내역
 */

interface BaseOtherResponse extends WithId<Document> {
  title: string;
  period: string;
  summary: string;
  details: string[];
}

interface Link {
  href: string;
  imgSrc?: string;
  imgAlt?: string;
  text: string;
}

export interface OthersResponse extends BaseOtherResponse {
  link?: Link;
}

export interface ExperienceResponse extends BaseOtherResponse {
  role: string;
}
