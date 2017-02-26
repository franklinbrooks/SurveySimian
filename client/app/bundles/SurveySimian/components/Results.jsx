import React, { PropTypes } from 'react';
import { Button, Jumbotron, PageHeader, Panel, Image, Fade, ListGroup, ListGroupItem } from 'react-bootstrap';
const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: "AIzaSyDqscrqFDqnhdJJCjbxubJawD0FFPcLS0U",
      authDomain: "surveysimian.firebaseapp.com",
      databaseURL: "https://surveysimian.firebaseio.com",
      storageBucket: "surveysimian.appspot.com",
      messagingSenderId: "595746337881"
}, 'surveysimian');

export default class Results extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="container">
        <h2 className="Syncopate">Results</h2>
        <h3>Thank you for taking the quiz!  Here are the results so far:</h3>

          <Panel>
          <ListGroup>
            <ListGroupItem bsStyle="info">
              Q: After graduation and during the job search, how often should Hakuna Matata students remain in touch?
            </ListGroupItem>
            howOftenBefore

          </ListGroup>
          </Panel>
          <Panel>
            howOftenAfter
          </Panel>
          <Panel>
            howOftenLive
          </Panel>
          <Panel>
            howMedia
          </Panel>
          <Panel>
            howFaculty
          </Panel>
          <Panel>
            howMuchPeerSupport
          </Panel>
          <Panel>
            howBestPeerSuport
          </Panel>
          <Panel>
            email: "",
          </Panel>
        <br />
            <a href={"/"}><Button bsSize="large" bsStyle="primary">HOME</Button></a>
      </div>
    );
  }
}
