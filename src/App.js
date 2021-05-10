import './App.css';
import Login from './Pages/Login';
import Game from  './Pages/Game';
import Questions from './Pages/Questions';
import Result from './Pages/Result';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/resultado" component={ Result } />
        <Route path="/perguntas" component={ Questions } />
        <Route path="/iniciar" component={ Game } />
        <Route path="/" component={ Login } />
      </Switch>
    </Layout>
  );
}

export default App;
