// API URLs
const BASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://sellekplayground.appspot.com'
    : 'http://localhost:8080';

export const TASKS_URL = `${BASE_API_URL}/tasks`;
export const getTasksUrlWithId = (id: string) => `${TASKS_URL}/${id}`;

// Client URLs
export const LOGIN_PATH = '/login';
export const HOME_PATH = '/home';

// Auth
export const JWT_TOKEN = 'jwtToken';
