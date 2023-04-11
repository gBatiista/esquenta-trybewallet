import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions/userAction';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.verifyInput);
  };

  verifyInput = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const numberMin = 4;
    const verifyEmail = regex.test(email);
    const verifyPassword = password.length >= numberMin;
    this.setState({ isDisabled: !(verifyEmail && verifyPassword) });
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(login({ email, password }));
    history.push('/posts');
  };

  render() {
    const { isDisabled, email, password } = this.state;
    return (
      <form>
        <label>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar

          </button>
        </label>
      </form>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
