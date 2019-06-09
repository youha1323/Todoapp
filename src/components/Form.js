import React from "react";

class Form extends React.Component {
  constructor(props) {//コンストラクタはJS
    super(props);//superで親コンポーネントのReact.Componetを呼び出している

    this.state = {//appの中で保存される値　JSでデータを保存しておくための箱
      input: ""
    };
  }

  render() {
    const { input } = this.props;

    return (//onSubmitにhandleSubmitを渡している
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}//inputの中身
          onChange={this.handleChange}//userが入力したときに呼び出される
        />
        <button type="submit">追加</button>
      </form>
    );
  }

  handleChange = e => {//eはeventの変数
    this.setState({ input: e.currentTarget.value });//上のinputが変更されたときに渡したeventhandlerには、eventという変数が渡され,
  };//そこのcurretTargetの中のvalueで文字列取得。setStateでinputがーー

  handleSubmit = e => {
    e.preventDefault();//
    this.setState({ input: "" });// submitしたら入力フォームを空白に
    this.props.onSubmit(this.state.input);//propsとして渡されてきたonSubmitをthis.state.inputを渡す
  };
}

export default Form;