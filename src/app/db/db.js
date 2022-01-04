import Dexie from "dexie";

const db = new Dexie("Shopping")

db.version(1).stores({
    cart: '++id, price, title'
})

export default db;