import { User } from './user';

export interface AuthInfo {
  isLoggedIn: boolean;
  token?: string;
  user?: any;
  role?: any;
}
