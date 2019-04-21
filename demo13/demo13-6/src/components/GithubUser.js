import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGithubUser } from '../actions';

class User extends React.Component {
  fetchUser = e => {
    let value = e.target.value;
    if (!value) return;
    const {actions: {fetchGithubUser}} = this.props;
    fetchGithubUser(value);
  }

  render() {
    const {actions: {fetchGithubUser}, user} = this.props;
    return (
      <div>
        <div>
          {
            user.login && (
              <React.Fragment>
                <img src={user.avatar_url} style={{width: 100, height: 100}} />
                <p>username: <b>{user.login}</b></p>
                <p>homepage: <a href={user.html_url}>{user.html_url}</a></p>
              </React.Fragment>
            )
          }
        </div>
        <input onChange={this.fetchUser} />
        <span style={{fontSize: 12, marginLeft: 20}}>输入 Github 用户名称</span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.fetchUser.user,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({fetchGithubUser}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
