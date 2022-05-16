export const getCart = () => {
  return new Promise( (resolve, reject) =>{
    const cart = window.localStorage.getItem('cart');
    resolve(cart);
    if( cart ){
      resolve(cart);
    }else{
      reject('cart is empty')
    }
    
  })
}

export const storeCart = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}
