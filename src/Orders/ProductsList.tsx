import React from "react";
import { checkIsSelected } from "./helpers";


import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct:(product :Product) => void;
};
function ProductsList({ products,selectedProducts, onSelectProduct }: Props) {
    return( 
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(prod => (
                    <ProductCard key={prod.id} product={prod} onSelectProduct={ onSelectProduct } 
                    isSelected={checkIsSelected(selectedProducts, prod)}/>
                ))}
            </div>
        </div>
    );
 }
 
 export default ProductsList;