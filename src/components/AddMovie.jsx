import React from 'react';
import FormInput from './FormsInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.renderFormInput = this.renderFormInput.bind(this);
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

    return (
      <form data-testid="add-movie-form">
        { this.renderFormInput('Título', 'title', 'text', title) }
        { this.renderFormInput('Subtítulo', 'subtitle', 'text', subtitle) }
        { this.renderFormInput('Imagem', 'image', 'text', imagePath) }
        <div htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.onChangeHandle }
          />
        </div>
      </form>
    );
  }
}

export default AddMovie;
