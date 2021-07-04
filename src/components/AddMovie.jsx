// implement AddMovie component here
import React from 'react';
// import Form from './Form';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    console.log('funciona');
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <section>
          <label htmlFor="vinculo" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="vinculo"
              data-testid="title-input"
              name="title"
              value={ title }
              onChange={ this.handleTitleChange }
            />
          </label>
        </section>
      </form>
    );
  }
}

export default AddMovie;
