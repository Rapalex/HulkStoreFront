import { Authorities } from './Authorities';
export class Users {
    id: number;
    image: string;
    name: string;
    lastName: string;
    email: string;
    user: string;
    category: number;
    password: string;
    authority: Authorities[];
}
