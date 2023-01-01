import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
