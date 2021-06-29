// implement AddMovie component here
import React from 'react';
import InputText from './InputText';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      subtitle:'',
      title: '',
      imagePath:'',
      storyLine:'',
      rating:0,
      genre: 'action',
    };
  }

  changeHandler(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelText="Título"
          labelId="title-input-label"
          inputId="title-input"
          inputType="text"
          inputName="title"
          inputValue={ title }
          onChangeInput={ this.changeHandler }
        />
      </form>
    );
  }
}

export default AddMovie;
