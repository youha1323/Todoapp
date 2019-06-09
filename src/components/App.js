import React from "react";

import './App.css';
import Form from "./Form";
import CheckAll from "./CheckAll";
import Filter from "./Filter";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

let currentId = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all",//defaultをall
      todos: []
    };
  }

  render() {
    const { todos, filter } = this.state;
    const filteredTodos = todos.filter(({ completed }) => {
      switch (filter) {
        case "all":
          return true;//filterが全部true

        case "uncompleted":
          return !completed;//未完了のものを表示

        case "completed":
          return completed;

        default:
          return true;
      }
    });

    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <CheckAll
          allCompleted={
            todos.length > 0 && todos.every(({ completed }) => completed)
          }
          onChange={this.handleChangeAllCompleted}
        />

        <Filter filter={filter} onChange={this.handleChangeFilter} />

        <ul>
          {filteredTodos.map(({ id, editing, text, completed }) => (
            <li key={id}>
              {editing ? (
                <EditTodo
                  id={id}
                  text={text}
                  onCancel={this.handleChangeTodoAttribute}
                  onSubmit={this.handleUpdateTodoText}
                />
              ) : (
                <Todo
                  id={id}//idは識別子
                  text={text}
                  completed={completed}
                  onChange={this.handleChangeTodoAttribute}
                  onEdit={this.handleChangeTodoAttribute}
                  onDelete={this.handleClickDelete}
                />
              )}
            </li>
          ))}
        </ul>

        <button onClick={this.handleClickDeleteCompleted}>
          完了済みを全て削除
        </button>
      </div>
    );
  }

  handleSubmit = text => {//Todoを追加できるようにしている
    const newTodo = {
      id: currentId,
      text,//渡されてきた配列
      completed: false,//初期状態は未完了だからfalse
      editing: false//editingがfalse
    };
    const newTodos = [...this.state.todos, newTodo];//JSの書き方
    this.setState({ todos: newTodos });//todosにnewTodosを入れる
    currentId++;
  };

  handleUpdateTodoText = (id, text) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
          editing: false//editingをfalseに
        };
      }

      return todo;
    });

    this.setState({ todos: newTodos });//新しいnewTodosできたからsetState
  };

  handleChangeAllCompleted = completed => {
    const newTodos = this.state.todos.map(todo => {
      return {
        ...todo,
        completed//一括で変換
      };
    });

    this.setState({ todos: newTodos });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  handleChangeTodoAttribute = (id, key, value) => {//好きなkey valueに変えられるようにする
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value
        };
      }

      return todo;
    });

    this.setState({ todos: newTodos });
  };

  handleClickDelete = id => {//clickしたやつだけ消す
    const newTodos = this.state.todos.filter(todo => todo.id !== id);//filerで、todo.idが渡されたidと違うものだけをnewtodosにする
    this.setState({ todos: newTodos });
  };

  handleClickDeleteCompleted = () => {//完了済みのtodoを削除する
    const newTodos = this.state.todos.filter(({ completed }) => !completed);//未完了のものだけnewT
    this.setState({ todos: newTodos });//filterの中でtrueを返したものだけ返す
  };
}

export default App;