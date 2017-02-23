import React, { PropTypes } from 'react';

export default class Error404 extends React.Component {
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
      <div>
        <h3>
          Sorry, that page wasn't found.
        </h3>
        <hr />
        <br />
        <br />
        <button>START AGAIN</button>
      </div>
    );
  }
}
