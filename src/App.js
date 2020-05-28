import React from 'react';
import Layout from './components/Layout';
import NavigationBar from './components/Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import NoMatch from './NoMatch';
import Surprise from './Surprise';
import Profile from './Profile';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Profile />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/surprise" component={Surprise} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
