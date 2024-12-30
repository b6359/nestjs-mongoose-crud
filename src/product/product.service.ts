import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // For MongoDB
import { Model } from 'mongoose';
import { Product } from './product.schema'; // For MongoDB

// Uncomment for TypeORM
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>, // MongoDB
    // @InjectRepository(Product) private readonly productRepository: Repository<Product>, // TypeORM
  ) {}

  async create(createProductDto: any): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto); // MongoDB
    // const createdProduct = this.productRepository.create(createProductDto); // TypeORM
    return createdProduct.save(); // MongoDB
    // return this.productRepository.save(createdProduct); // TypeORM
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec(); // MongoDB
    // return this.productRepository.find(); // TypeORM
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec(); // MongoDB
    // return this.productRepository.findOneBy({ id }); // TypeORM
  }

  async update(id: string, updateProductDto: any): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    }); // MongoDB
    // await this.productRepository.update(id, updateProductDto); // TypeORM
    // return this.productRepository.findOneBy({ id }); // TypeORM
  }

  async remove(id: string): Promise<any> {
    return this.productModel.findByIdAndDelete(id); // MongoDB
    // return this.productRepository.delete(id); // TypeORM
  }
}
