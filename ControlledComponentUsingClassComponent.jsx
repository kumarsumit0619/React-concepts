import React from 'react';

class ControlledClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tag: 'No tag found',
    };
  }

  inputChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      tag: this.state.name,
      name: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.inputChangeHandler}
              id="name"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>Tags: {this.state.tag}</div>
      </>
    );
  }
}

export default ControlledClassComp;
