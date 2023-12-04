import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import SplashScreen from './SplashScreen';
import OnboardingScreen from './OnboardingScreen';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="splash" component={SplashScreen} hideNavBar initial />
      <Scene key="onboarding" component={OnboardingScreen} title="Onboarding" />
    </Scene>
  </Router>
);

export default App;
