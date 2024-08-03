import { Member } from "./member";
import { Product } from "./product";


// ** REACT APP STATE type integration**/
//Screen component type interface
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
}


/** HOMEPAGE Screen components*/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}


/** PRODUCTS PAGE */
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}


/** ORDERS PAGE */