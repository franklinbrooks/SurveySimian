import React, { PropTypes } from 'react';

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
      name: this.props.name,
      email: null
    };
  }

  updateName = (name) => {
    this.setState({
      name
    });
  };

  updateEmail = (email) => {
    this.setState({
      email
    });
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <br />
    <label>After graduation and during the job search, how often should Hakuna Matata students remain in touch?
      <select required>
        <option value="Several times a week">Several times a week</option>
        <option value="Once a week">Once a week</option>
        <option value="Once every two weeks">Once every two weeks</option>
        <option value="Once a month">Once a month</option>
      </select>
    </label>
    <br />
    <label>Once we secure jobs, how often should HM students remain in touch?
      <select required>
        <option value="Several times a week">Several times a week</option>
        <option value="Once a week">Once a week</option>
        <option value="Once every two weeks">Once every two weeks</option>
        <option value="Once a month">Once a month</option>
      </select>
    </label>
    <br />
    <label>How often should HM students continue to meet up in person after GA?
      <select required>
        <option value="Several times a week">Several times a week</option>
        <option value="Once a week">Once a week</option>
        <option value="Once every two weeks">Once every two weeks</option>
        <option value="Once a month">Once a month</option>
      </select>
    </label>
    <br />
    <label>How should HM students continue to keep in touch after GA?
      <select required>
        <option value="Slack">Slack</option>
        <option value="Facebook">Facebook</option>
        <option value="Email">Email</option>
        <option value="WhatsApp">WhatsApp</option>
        <option value="Yahoo! group">Yahoo! group</option>
        <option value="custom open source software app that we create">custom open source software app that we create</option>
      </select>
    </label>
    <br />
    <label>Should HM instructors be included in our post-graduation network?
      <select required>
        <option value="Always welcome!">Always welcome!</option>
        <option value="Maybe on select occasions?">Maybe on select occasions?</option>
        <option value="Maybe select instructors?">Maybe select instructors?</option>
        <option value="DND">DND</option>
      </select>
     </label>
     <br />
    <label>How much do you see your peers here as a support system going forward?
      <select required>
        <option value="Indispensable. Need you all day, errday!">Indispensable. Need you all day, errday!</option>
        <option value="Definitely gonna help">Definitely gonna help</option>
        <option value="Nice to know they’re there, but…">Nice to know they’re there, but…</option>
        <option value="So long, farewell, Auf Wiedersehen, Goodbye…">So long, farewell, Auf Wiedersehen, Goodbye…</option>
      </select>
     </label>
     <br />
     <label>How can your HM peers best support you going forward?
      <select required>
        <option value="Job references: See something, say something!">Job references: See something, say something!</option>
        <option value="Code projects for practice: Let’s learn a new framework for fun…">Code projects for practice: Let’s learn a new framework for fun…</option>
        <option value="White Boarding meet up wingman needed.  Be my plus-one!">White Boarding meet up wingman needed.  Be my plus-one!</option>
        <option value="Enough JavaScript. Can we just have fun and be human for a while, together?">Enough JavaScript. Can we just have fun and be human for a while, together?</option>
      </select>
     </label>
     <br />
    <label>Your email address <span classname="red">* optional</span>
      <input
        id="email"
        type="text"
        name="email"
        value={this.state.email}
        onChange={(e) => this.updateEmail(e.target.value)}
        />
    </label>

    <br />
  <button type="">SUBMIT</button>

        </form>
      </div>
    );
  }
}
