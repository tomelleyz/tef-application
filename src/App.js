import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChooseLanguage from './pages/js/choose-language';
import GetStarted from './pages/js/get-started';
import ApplicationProcess from './pages/js/application-process';
import HelpfulWidgets from './pages/js/helpful-widgets';
import TEFEntrepreneurshipApplication1 from './pages/js/tef-entrepreneurship-application';
import TEFEntrepreneurshipApplication2 from './pages/js/tef-entrepreneurship-application-2';
import Error from './pages/js/Error';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={ChooseLanguage} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/application-process" component={ApplicationProcess} />
        <Route path="/helpful-widgets" component={HelpfulWidgets} />
        <Route path="/tef-entrepreneurship-application" component={TEFEntrepreneurshipApplication1} />
        <Route path="/tef-entrepreneurship-application-2" component={TEFEntrepreneurshipApplication2} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
