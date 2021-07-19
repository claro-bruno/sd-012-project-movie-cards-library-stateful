import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeTitle = this.handleChangeTitle.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeTitle(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChangeTitle }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
