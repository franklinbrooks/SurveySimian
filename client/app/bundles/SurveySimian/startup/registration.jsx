import ReactOnRails from 'react-on-rails';

import Index from '../components/Index';
import Survey from '../components/Survey';
import Results from '../components/Results';
import Error404 from '../components/Error404';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Index,
  Survey,
  Results,
  Error404,
});
