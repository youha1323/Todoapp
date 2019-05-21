import React from 'react';

class ToDoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toDoList: props.toDoList,
      textTitle: '',
      textContent: ''
    };
  }　

  addToDo(){
    let list = this.state.toDoList;
    list.push({ title: this.state.textTitle, content: this.state.textContent });
    this.setState({toDoList: list});
  }

  deleteToDo(i){
    let list = this.state.toDoList;
    list.splice(i, 1);
    this.setState({toDoList: list});
  }

  render(){
      console.log(this.state.toDoList)
    const domList = this.state.toDoList.map((m, i) =>{
      return <li key={i}>
        タイトル：{m.title}<br/>
        内容：{m.content}<br/>
        <button onClick={e => this.deleteToDo(i)}>削除{i}</button>
      </li>;
    });

    return(
      <div>
        <div>

          タイトル：<input type="text" value={this.state.textTitle} 
            onChange={e => this.setState({textTitle: e.target.value})}/>

          内容：<input type="text" value={this.state.textContent} 
            onChange={e => this.setState({textContent: e.target.value})}/>

        </div>
        <button onClick={e => this.addToDo()}>追加</button>
        <ul>{domList}</ul>
      </div>
    );
  }
}

export default ToDoList;