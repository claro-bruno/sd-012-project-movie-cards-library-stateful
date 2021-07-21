import React from 'react';
import FormInput from './FormsInput';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.renderFormInput = this.renderFormInput.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this);
  }

  onChangeHandle({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  renderFormInput(labelText, id, type, value) {
    return (
      <FormInput
        labelTestId={ `${id}-input-label` }
        labelText={ labelText }
        id={ id !== 'image' ? id : 'imagePath' }
        type={ type }
        value={ value }
        onChangeCallback={ this.onChangeHandle }
        inputTestId={ `${id}-input` }
      />
    );
  }

  render() {
    const { title } = this.state;
    const { subtitle } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;
    const { rating } = this.state;
    const { genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderFormInput('Título', 'title', 'text', title) }
        { this.renderFormInput('Subtítulo', 'subtitle', 'text', subtitle) }
        { this.renderFormInput('Imagem', 'image', 'text', imagePath) }
        { this.renderFormInput('Avaliação', 'rating', 'number', rating) }

        <div htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.onChangeHandle }
          />
        </div>
        <div tmlhFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.onChangeHandle }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default AddMovie;
