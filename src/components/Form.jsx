import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Para pesquisar clique em OK');
    event.preventDefault();
  }

  render() {
    <form onSubmit={this.handleSubmit}>
      <label data-testid="text-input-label">Inclui o texto:
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
      </label>
    </form>
  }
}

export default Form;