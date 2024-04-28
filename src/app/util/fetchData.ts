import { ContactResponse } from '../type/contact';
import { ExperienceResponse, OthersResponse } from '../type/others';
import { ProjectDefaultResponse, ProjectResponse } from '../type/project';

import { connectDB } from './data';

const db = (await connectDB).db('Portfolio');
const contact = await db
  .collection<ContactResponse>('Contact')
  .find()
  .toArray();
const study = await db.collection<OthersResponse>('Study').find().toArray();
const exp = await db.collection<ExperienceResponse>('Exp').find().toArray();
const others = await db.collection<OthersResponse>('Others').find().toArray();
const projects = await db
  .collection<ProjectResponse>('Projects')
  .find()
  .toArray();
const otherProjects = await db
  .collection<ProjectDefaultResponse>('otherProjects')
  .find()
  .toArray();

export { contact, exp, others, projects, otherProjects, study };
