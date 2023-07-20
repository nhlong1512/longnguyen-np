export interface IUser{
    first_name: string;
    last_name: string;
    avatar: string;
    employment: {
        key_skill: string;
        title: string;
    }
}