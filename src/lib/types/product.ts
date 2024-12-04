import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product {
    _id: string;
    productStatus: ProductStatus | string;
    productCollection: ProductCollection;
    productName: string;
    productPrice:number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume?: number;
    productDesc?:string | undefined;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
    
}

export interface ProductInQuery {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;

}