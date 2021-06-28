import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import INPUT_INFOS from '../formInputInfos';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClickHandler(onClick) {
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { props, state } = this;
    const { onClick } = props;
    return (
      <form data-testid="add-movie-form">
        {INPUT_INFOS.map((input) => (
          <Input
            key={ input.Name }
            labelDataTestId={ input.labelDataTestId }
            inputLabel={ input.Label }
            inputDataTestId={ input.DataTestId }
            inputName={ input.Name }
            inputType={ input.Type }
            inputValue={ state[input.Name] }
            inputOnChange={ this.onChangeHandler }
          />
        ))}
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ state.storyline }
            data-testid="storyline-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ state.genre }
            onChange={ this.onChangeHandler }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.onClickHandler(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
