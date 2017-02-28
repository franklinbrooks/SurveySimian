import React, { PropTypes } from 'react';
import { Button, Jumbotron, PageHeader, Panel, Image, Fade, ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';

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
    this.state = {
      Surveys: [],
      responses: {
        howOftenBeforeArray: [],
        howOftenAfterArray: [],
        howOftenLiveArray: [],
        howMediaArray: [],
        howFacultyArray: [],
        howMuchPeerSupportArray: [],
        howBestPeerSuportArray: [],
        emailList: []
      }
    };
    this.getSurveys = this.getSurveys.bind(this);
    this.renderSurveys = this.renderSurveys.bind(this);
  }

  getSurveys() {
    axios.get('https://surveysimian.firebaseio.com/.json')
    .then((response) => {
      this.setState({
        Surveys: response.data
      });
      console.log("this.state.Surveys is " + this.state.Surveys);
    })
    .catch((error) => {
      console.error(error);
    });
  }

   componentDidMount() {
    this.getSurveys();
  }

  renderSurveys() {
    console.log(this.state.Surveys);
  }

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
              Your response has been recorded.
            </ListGroup>
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
             Q. Once we secure jobs, how often should HM students remain in touch?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
              Q. How often should HM students continue to meet up in person after GA?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
              Q. How should HM students continue to keep in touch after GA?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
              Q. Should GA instructors and faculty be included in our post-graduation network?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
              Q. How much do you see your peers here as a support system going forward?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

          <Panel>
            <ListGroupItem bsStyle="info">
              Q. How can your HM peers best support you going forward?
            </ListGroupItem>
            Your response has been recorded.
          </Panel>

        <br />
            <a href={"/"}><Button bsSize="large" bsStyle="primary">HOME</Button></a>
      </div>
    );
  }
}
