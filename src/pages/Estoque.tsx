import productImage from '../assets/images/sylvie.png'
import { useState } from 'react'




export function Estoque(){

  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
 
  function handleProduct() {
    localStorage.setItem(`productName${product}`, product);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productStock', stock);
 }



 return (
 <div id="home-login">
  <main>
   <div className="main-content">
   <img src={productImage} alt="Logo 42 Store" className="logo-main"/>  
   <form id="form-user" >
        <div className="">
          <input placeholder="Nome do Produto" className="userInput" value={product} onChange={e => setProduct(e.target.value)}/>
        </div>
        <div className="">
          <input placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className="">
          <input placeholder="Qtde em estoque" value={stock} onChange={e => setStock(e.target.value)} />
        </div>
        <div className="">
        <input type="reset" /><input type="submit" onClick={handleProduct} />
        </div>
      </form>
   
   </div>
  </main>
 </div>
)
}