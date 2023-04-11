import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserInfo extends Component {
  render() {
    const { email, userName, phone } = this.props;
    return (
      <div>
        <p>{email}</p>
        <p>{userName}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.user,
});

export default connect(mapStateToProps)(UserInfo);
