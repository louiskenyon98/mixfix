import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpotifyLoginSuccess from './components/SpotifyLogin/SpotifyLoginSuccess';
import Splash from './components/Splash/Splash';
import {theme} from "./theme";
import SignupFormContainer from "./containers/SignupFormContainer";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/*<Login/>*/}
        {/*<Splash/>*/}
        <Router>
          <Switch>
            <Route path={"/loginSuccess"} component={SpotifyLoginSuccess}/>
            <Route path={"/hello"} component={() => <div>hello world</div>}/>
            <Route path={"/signupform"} component={SignupFormContainer}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;