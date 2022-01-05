import db from "../db/db";

export const getProductById = async (id) => {
    const productsFromDb = await db.cart.get(Number(id));
    return productsFromDb;
}

export const getAllProducts = async () => {
    const allProductsFromDb = await db.cart.toArray();
    return allProductsFromDb;
}