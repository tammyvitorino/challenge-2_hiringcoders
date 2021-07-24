import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {Home} from './pages/Home';
import {Cadastro} from './pages/Cadastro';
import {Estoque} from './pages/Estoque';
import {NewRoom} from './pages/NewRoom';
import {OldHome} from './pages/OldHome';

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('Teste');
  
  return (
    <BrowserRouter>
      <TestContext.Provider value={{value, setValue} }>
        <Route path="/" exact component={Home} />
        <Route path="/logged/cadastro" component={Cadastro} />
        <Route path="/logged/estoque" component={Estoque} />
        <Route path="/rooms/new" component={NewRoom} />        
        <Route path="/rooms/old" component={OldHome} />
        handleSubscription()
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
