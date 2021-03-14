import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  // now we can pass delete down to each, individual todo
  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  } 

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // delete is now available as this.props.delete
    // takes in arg and passes it to payload
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer); 