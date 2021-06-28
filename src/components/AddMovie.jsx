import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.setState = {
      title: '',
      subtitle: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    // const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          dataTestidLabel="title-input-label"
          htmlFor="text-addmovie"
          labelText="Título"
          id="text-addmovie"
          type="text"
          name="title"
          dataTestidInput="title-input"
          // value={ title }
        />
        <Input
          type="text"
          labelText="Subtítulo"
          dataTestidLabel="subtitle-input-label"
          // value={ subtitle }
          dataTestidInput="subtitle-input"
          // change={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
