const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://sellekplayground.appspot.com' : 'http://localhost:8080';

export const TASKS_URL = `${BASE_URL}/tasks`;