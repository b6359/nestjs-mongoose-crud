import { ProductsService } from './product.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: any): Promise<import("./product.schema").Product>;
    findAll(): Promise<import("./product.schema").Product[]>;
    findOne(id: string): Promise<import("./product.schema").Product>;
    update(id: string, updateProductDto: any): Promise<import("./product.schema").Product>;
    remove(id: string): Promise<any>;
}
