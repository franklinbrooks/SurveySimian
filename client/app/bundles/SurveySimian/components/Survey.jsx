import React, { PropTypes } from 'react';
import { Button, Jumbotron, PageHeader, Panel, Image, Fade, ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';
/*const database = firebase.database();*/
/*const Rebase = require('re-base');*/
/*const base = Rebase.createClass({
      apiKey: "AIzaSyDqscrqFDqnhdJJCjbxubJawD0FFPcLS0U",
      authDomain: "surveysimian.firebaseapp.com",
      databaseURL: "https://surveysimian.firebaseio.com",
      storageBucket: "surveysimian.appspot.com",
      messagingSenderId: "595746337881"
}, 'surveysimian');*/

export default class Survey extends React.Component {
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
    this.state = {
      surveys: [],
      survey: {
      howOftenBefore: "",
      howOftenAfter: "",
      howOftenLive: "",
      howMedia: "",
      howFaculty: "",
      howMuchPeerSupport: "",
      howBestPeerSuport: "",
      email: ""
    },
    };
    this.handleChange = this.handleChange.bind(this);
    this.postSurvey = this.postSurvey.bind(this);
    this.getSurveys = this.getSurveys.bind(this);
  }

 handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log(event.target.name + " = " + event.target.value);
  }

  getSurveys() {
    axios.get('https://surveysimian.firebaseio.com/.json')
    .then((response) => {
      this.setState({
        surveys: response.data
      });
      console.log("this.state.Surveys is " + this.state.surveys.Poop);
    })
    .catch((error) => {
      console.error(error);
    });
  }

   componentDidMount() {
    this.getSurveys();
  }

  postSurvey() {  // Axios POST of new survey
    console.log("postSurvey!");
    let newSurvey = {
      howOftenBefore: this.state.howOftenBefore,
      howOftenAfter: this.state.howOftenAfter,
      howOftenLive: this.state.howOftenLive,
      howMedia: this.state.howMedia,
      howFaculty: this.state.howFaculty,
      howMuchPeerSupport: this.state.howMuchPeerSupport,
      howBestPeerSuport: this.state.howBestPeerSuport,
      email: this.state.email
    };
    axios({
      url: '/.json',
      baseURL: 'https://surveysimian.firebaseio.com',
      method: "POST",
      data: newSurvey
    }).then((response) => {
      let newSurveyId = response.data.name;  // this is key of database entry
      console.log(newSurveyId);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="Syncopate">SurveySimian</h2>
          <h3>
            Please take a short survey about the future of Hakuna Matata
          </h3>
          <form>
            <br />
            <div>
            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                  Q. After graduation and during the job search, how often should Hakuna Matata students remain in touch?
                </ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
                  <FormControl componentClass="select" name="howOftenBefore" value={this.state.value} onChange={this.handleChange} required >
                    <option value="blank"></option>
                    <option value="Several times a week">Several times a week</option>
                    <option value="Once a week">Once a week</option>
                    <option value="Once every two weeks">Once every two weeks</option>
                    <option value="Once a month">Once a month</option>
                  </FormControl>
                </FormGroup>
              </ListGroup>
            </Panel>

            <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                Q. Once we secure jobs, how often should HM students remain in touch?
                </ListGroupItem>

                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
                  <FormControl componentClass="select"  name="howOftenAfter" value={this.state.value} onChange={this.handleChange} required >

                <option value="blank"></option>
                <option value="Several times a week">Several times a week</option>
                <option value="Once a week">Once a week</option>
                <option value="Once every two weeks">Once every two weeks</option>
                <option value="Once a month">Once a month</option>

                  </FormControl>
                </FormGroup>
              </ListGroup>
            </Panel>

            <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                Q. How often should HM students continue to meet up in person after GA?
                </ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
              <FormControl componentClass="select" name="howOftenLive" value={this.state.value} onChange={this.handleChange} required>
                <option value="blank"></option>
                <option value="Several times a week">Several times a week</option>
                <option value="Once a week">Once a week</option>
                <option value="Once every two weeks">Once every two weeks</option>
                <option value="Once a month">Once a month</option>
                  </FormControl>
                </FormGroup>
            </ListGroup>
            </Panel>

            <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                  Q. How should HM students continue to keep in touch after GA?
                </ListGroupItem>
                                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
              <FormControl componentClass="select" name="howMedia" value={this.state.value} onChange={this.handleChange} required>
                <option value="blank"></option>
                <option value="Slack">Slack</option>
                <option value="Facebook">Facebook</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Yahoo! group">Yahoo! group</option>
                <option value="custom open source software app that we create">custom open source software app that we create</option>
              </FormControl>
                </FormGroup>
            </ListGroup>
            </Panel>

            <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                Q. Should GA instructors and faculty be included in our post-graduation network?
                </ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
              <FormControl componentClass="select" name="howFaculty" value={this.state.value} onChange={this.handleChange} required>
                <option value="blank"></option>
                <option value="Always welcome!">Always welcome!</option>
                <option value="Maybe on select occasions?">Maybe on select occasions?</option>
                <option value="Maybe select instructors?">Maybe select instructors?</option>
                <option value="DND">DND</option>
              </FormControl>
              </FormGroup>
             </ListGroup>
             </Panel>

             <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                  Q. How much do you see your peers here as a support system going forward?
                </ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
              <FormControl componentClass="select" name="howMuchPeerSupport" value={this.state.value} onChange={this.handleChange} required>
                <option value="blank"></option>
                <option value="Indispensable. Need you all day, errday!">Indispensable. Need you all day, errday!</option>
                <option value="Definitely gonna help">Definitely gonna help</option>
                <option value="Nice to know they’re there, but…">Nice to know they’re there, but…</option>
                <option value="So long, farewell, Auf Wiedersehen, Goodbye…">So long, farewell, Auf Wiedersehen, Goodbye…</option>
              </FormControl>
              </FormGroup>
             </ListGroup>
             </Panel>

             <br />

             <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                  Q. How can your HM peers best support you going forward?
                </ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select one</ControlLabel>
              <FormControl componentClass="select" name="howBestPeerSuport" value={this.state.value} onChange={this.handleChange} required>
                <option value="blank"></option>
                <option value="Job references: See something, say something!">Job references: See something, say something!</option>
                <option value="Code projects for practice: Let’s learn a new framework for fun…">Code projects for practice: Let’s learn a new framework for fun…</option>
                <option value="White Boarding meet up wingman needed.  Be my plus-one!">White Boarding meet up wingman needed.  Be my plus-one!</option>
                <option value="Enough JavaScript. Can we just have fun and be human for a while, together?">Enough JavaScript. Can we just have fun and be human for a while, together?</option>
              </FormControl>
              </FormGroup>
             </ListGroup>
             </Panel>

             <br />

            <Panel>
              <ListGroup>
                <ListGroupItem bsStyle="info">
                  Your email address <span className="red">* optional</span>
                </ListGroupItem>

              <FormControl
                name="email"
                type="text"
                placeholder="Your email address"
                value={this.state.email}
                onChange={this.handleChange}
                />

            </ListGroup>
            </Panel>
            <br />
            <a href={"/results"}><Button bsSize="large" bsStyle="primary" onClick={this.postSurvey}>SUBMIT</Button></a>
            <br />
            </div>
          </form>
          <br />
        </div>
    );
  }
}
