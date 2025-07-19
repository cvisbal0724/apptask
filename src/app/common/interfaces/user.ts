export interface IUser {
    id: number;
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
    is_active?: boolean;
    is_staff?: boolean;
}