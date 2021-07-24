// import axios from 'axios'
import { useState } from 'react'
import '../styles/cadastro.scss'

export function Cadastro(){

 const [user, setUsuario] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [adress, setAdress] = useState('')

 function handleCadastro() {
   localStorage.setItem('userName', user);
   localStorage.setItem('userEmail', email);
   localStorage.setItem('userPassword', password);
   localStorage.setItem('userAdress', adress);
}
 return (
   

  <div id="user-subscribe">
    <main>
      <form id="form-user" >
        <div className="">
          <input placeholder="Seu nome" className="userInput" value={user} onChange={e => setUsuario(e.target.value)}/>
        </div>
        <div className="">
          <input placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="">
          <input type="password" placeholder="Escolha uma senha" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="">
          <input placeholder="Digite seu endereço" value={adress} onChange={e => setAdress(e.target.value)} />
        </div>
        <div className="">
        <input type="reset" /><input type="submit" onClick={handleCadastro} />
        </div>
      </form>
   </main>
  </div>  
)
}