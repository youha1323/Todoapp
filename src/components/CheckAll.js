import React from "react";

class CheckAll extends React.Component {
  render() {
    const { allCompleted } = this.props;//全てのtodosが完了済みならtrue

    return (
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={this.handleChange}
        />
        全て{allCompleted ? "未完了" : "完了"}にする
      </label>//全て完了ならすべて未完了に、すべて未完了ならすべて完了に
    );
  }

  handleChange = e => {
    const { onChange, allCompleted } = this.props;
    onChange(!allCompleted);//現在のallCompletedを逆転
  };
}

export default CheckAll;