import { getUserSession } from '../session/sessionContext.js';
import { getIndexView } from './indexRoleViews.js';

const session = getUserSession();
const viewComponents = getIndexView(session.role);