import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchList } from '../actions/homePageAction';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      userList: []
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ userList: nextProps.data });
  }
  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
    console.log('hehhhe1');
    this.props.fetchList(event.target.value);
  }
  render() {
    console.log(this.state.userList);
    return (
      <div className="wrapper">
        <div className="header">
          <select>
            <option value="name">By name</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>  <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
        </div>
        Total results: {this.state.userList.total_count}
        <ul className="list-style">
          {this.state.userList.items && this.state.userList.items.map((value) => {
            return (
              <li className="user-list">
                <div> <div class="avatar">
                  <img className="image-avatar" src={value.avatar_url} />
                </div><div className="info">{value.login}</div>
                <div className="info"> profile url:{value.url}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
};

HomePage.propTypes = {
  list: PropTypes.array
};

function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.homePage.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchList: (searchString) => dispatch(fetchList(searchString))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

