import { InventoryRestockses } from './InventoryRestockses';
import { InventoryOuts } from './InventoryOuts';
import { Categories } from './Categories';
export class Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: Categories;
    active: boolean;
    creationDate: Date;
    quantity: number;
    quantityInStock: number;
    quantitySold: number;
    quantityRestockses: number;
    inventoryOuts: InventoryOuts[];
    inventoryRestockses: InventoryRestockses[];
}
