import React from "react";

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props;//

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}//booleanを渡す
            onChange={this.handleChangeCompleted}
          />
          <span>{text}</span>
        </label>
        <button onClick={this.handleClickEdit}>編集</button>
        <button onClick={this.handleClickDelete}>削除</button>
      </div>
    );
  }

  handleChangeCompleted = () => {
    const { onChange, id, completed } = this.props;//
    onChange(id, "completed", !completed);//falseならtrueが逆ならその逆に
  };

  handleClickEdit = () => {
    const { onChange, id, editing } = this.props;
    onChange(id, "editing", !editing);
  };

  handleClickDelete = () => {//削除機能
    const { onDelete, id } = this.props;//親からonDeleteというpropsを渡す、削除するもの見つけるためにidを渡す
    onDelete(id);
  };
}

export default Todo;