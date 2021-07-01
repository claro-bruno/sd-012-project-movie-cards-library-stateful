import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ value } onChange={ this.handleChange } />
        </label>
      </form>
    );
  }
}

export default Form;
