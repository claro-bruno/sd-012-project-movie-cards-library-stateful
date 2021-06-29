import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle({ target }) {
    const { name, value } = target;

    this.setState({
      title: value,
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              id="title-input"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.onChangeHandle }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle-input"
              name="subtitle"
              type="text"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.onChangeHandle }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
