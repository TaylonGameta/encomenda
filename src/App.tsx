import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Encomendas from './components/encomendaInfo';
import Registrar from './components/registrar-encomenda';
import EncomendasList from './components/encomendaList';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/cliente/pacote" component={Encomendas} />
          <Route exact path="/cliente" component={EncomendasList} />
          <Route exact path="/transportador/registrar" component={Registrar} />
        </Switch>
        <GlobalStyles></GlobalStyles>
    </Router>
  );
}

export default App;
