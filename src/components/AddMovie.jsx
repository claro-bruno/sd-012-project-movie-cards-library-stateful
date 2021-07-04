import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div>
        <span>AddMovie Component</span>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              name="title"
              id="title"
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle"
              type="text"
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
