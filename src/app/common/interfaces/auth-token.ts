import { IUser } from "./user";

export interface IAuthToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token: string;
    user: IUser
}