export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export type CreateTodoPayload = Omit<Todo, 'id'>;

export type Filter = 'all' | 'active' | 'completed';