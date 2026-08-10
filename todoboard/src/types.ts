export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export type CreateTodoPayload = Omit<Todo, 'id'>;

export type todoItemFilter = 'all' | 'active' | 'completed';