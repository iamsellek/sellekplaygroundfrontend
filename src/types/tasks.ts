export interface Tasks {
  [id: string]: Task;
}

export interface Task {
  name: string;
  description?: string;
  done: boolean;
  id: string;
}
