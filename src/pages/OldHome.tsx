// import { useContext } from 'react'

// import { useHistory } from 'react-router'

import illustrationImg from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'


export function OldHome(){
  // const history = useHistory();
  
  return (
  <div id="page-auth">
   <aside>
    <img src={illustrationImg} alt="Ilustração" />
     <strong>Crie salas de Q&amp;A ao-vivo</strong>
     <p>Tire as dúvidas da sua audiência em tempo real</p>    
   </aside>
   <main>
    <div className="main-content">
     <img src={logoImage} alt="Letmeask" />   
    <button className="create-room">
     <img src={googleIconImg} alt="Logo Google" />
     Crie sua sala com o Google
    </button>
    <div className="separator">Ou entre em uma sala</div>
    <form>
     <input type="text" placeholder="Digite o código da sala"/>
     <Button type="submit">
      Entrar na sala
     </Button>
    </form>
    </div>
   </main>
  </div>
 )
}