import React from 'react';
import FormBody from './Form';

const state = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = state;

    this.handleClick = this.handleClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.setState(state);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <FormBody onChange={ this.handleClick } state={ this.state } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClick }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}

export default AddMovie;
