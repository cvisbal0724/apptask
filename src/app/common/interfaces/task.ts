import { IUser } from "./user";

export interface ITask {
    id: number;
    description: string;
    status: string;
    user_id: number;
    user: IUser;
    created_at: string;
    updated_at: string;
  }