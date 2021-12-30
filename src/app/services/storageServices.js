export const saveLastInterestProduct = (productName) => {
    //API LocalStorage / SessionStorage 
    sessionStorage.setItem("lastSessionProduct",productName)
}