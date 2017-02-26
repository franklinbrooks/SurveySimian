import React, { PropTypes } from 'react';
import { Button, Jumbotron, PageHeader, Panel, Image, Fade } from 'react-bootstrap';

export default class Index extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    // How to set initial state in ES6 class syntax @ https://facebook.github.io/react/docs/reusable-components.html#es6-classes
  }

  render() {
    return (
<div className="container">
  <Jumbotron>
    <Image src="/assets/Fxemoji_u1F649.svg.png" responsive />
    <h1 className="Syncopate">SurveySimian</h1>
    <p>A quick survey about the future of Hakuna Matata.</p>
    <h3>Welcome to the quiz!</h3>
    <a href={"/survey"}><Button bsSize="large" bsStyle="primary">BEGIN SURVEY</Button></a>
  </Jumbotron>
</div>
    );
  }
}
