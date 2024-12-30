import { Model } from 'mongoose';
import { Product } from './product.schema';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    create(createProductDto: any): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: any): Promise<Product>;
    remove(id: string): Promise<any>;
}
