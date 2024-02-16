import { WithId, Document } from 'mongodb';

/** ExperienceResponse
 * @param {string} title : 제목
 * @param {string} period : 기간
 * @param {string} role : 역할
 * @param {string[]} details : 상세 내역
 */

export interface ExperienceResponse extends WithId<Document> {
  title: string;
  period: string;
  role: string;
  details: string[];
}
