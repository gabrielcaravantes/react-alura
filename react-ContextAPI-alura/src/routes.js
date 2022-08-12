import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from 'common/context/Usuario';
import { CarrinhoProvider } from "common/context/Carrinho";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login />
          </UsuarioProvider>
        </Route>
        <CarrinhoProvider>
        <Route path="/feira">
          <Feira />
        </Route>
        </CarrinhoProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;