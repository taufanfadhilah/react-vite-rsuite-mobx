export interface TodoInputInterface {
  title: string;
  deadline: Date;
  description?: string;
}

export interface TodoInterface extends TodoInputInterface {
  id: number;
  isDone: boolean;
}
