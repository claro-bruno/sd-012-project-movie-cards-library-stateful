import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import INPUT_INFOS from '../formInputInfos';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { props } = this;
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
            inputValue={ this.state[input.Name] }
            inputOnChange={ this.onChangeHandler }
          />
        ))}
        <label
          htmlFor="storyline" 
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            value={ this.state.storyline }
            data-testid="storyline-input"
            onChange={ this.onChangeHandler }
          />
          <label></label>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
