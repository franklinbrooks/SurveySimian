import ReactOnRails from 'react-on-rails';

import Index from '../components/Index';
import Results from '../components/Results';
import Survey from '../components/Survey';
// This is how react_on_rails can see the component in the browser.
ReactOnRails.register({
  Index,
  Results,
  Survey,
});
