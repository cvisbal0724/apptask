import { ITask } from "./task";
import { IUser } from "./user";

export interface IAudit {
    id: number;
    status: string;
    user_id: number;
    user: IUser;
    task_id: number;
    task: ITask;
    created_at: string;
    updated_at: string;
  }