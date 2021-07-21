import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle({ target }) {
    const { value } = target;

    this.setState({
      title: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.onChangeHandle }
          />
        </div>
      </form>
    );
  }
}

export default AddMovie;
