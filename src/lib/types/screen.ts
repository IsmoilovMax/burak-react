import { Member } from "./member";
import { Product } from "./product";


// ** REACT APP STATE type integration**/
//Screen component type interface
export interface AppRootState {
    homePage: HomePageState;
    
}


/** HOMEPAGE Screen components*/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/** PRODUCTS PAGE */


/** ORDERS PAGE */