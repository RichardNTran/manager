import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    // const ds = new FlatList.data({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    const data = employees;
    this.dataSource = data;
    console.log(this.dataSource);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      // <ListView
      //   enableEmptySections
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
      <FlatList
        enableEmptySections
        numColumns={2}
        data={this.dataSource}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
