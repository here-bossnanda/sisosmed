import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home'
import Create from './page/Create'
import Edit from './page/Edit'

function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/aplikasi/create"><Create /></Route>
        <Route path="/aplikasi/:id/edit"> <Edit /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;