import { Products } from './Products';
export class Categories{
    id: number;
    name: string;
    description: string;
    products: Products[];
    edit: boolean;
}