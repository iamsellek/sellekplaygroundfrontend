import {Tasks} from '../types/tasks';

export interface AppState {
  tasks: Tasks;
  loggedIn: boolean;
  errorMessage: string;
}
