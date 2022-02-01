import React from "react";

interface IProps {
  base?: number
}

interface IStates {
  count: number
  base: number
}

class AClass extends React.Component<IProps, IStates> {
  state: IStates = { count: 0, base: 0 }         //ステート登録(初期値)

  //コンストラクタ
  constructor(props: IProps) {
    super(props);                 //継承
    this.state = {
      ...this.state,
      base: this.props.base || 1  //baseの値だけを設定
    };
    this.decCount = this.decCount.bind(this);  //従来メソッド登録
  }

  //ハンドラー(アロー関数)
  incCount = () => {
    //this.setState({ count: ++this.state.count }); //NG
    //UPD関数使用
    this.setState(state => ({ ...state, count: state.count + state.base }))
  }
  //ハンドラー(従来関数)
  decCount() {
    this.setState(state => ({ ...state, count: state.count - state.base }))
  }

  //ハンドラー(With 引数)
  addBase(n: number) {
    this.setState(state => ({ ...state, base: state.base + 1 }))
  }

  render() {
    return (
      <>
        <button onClick={this.incCount}>+1</button>
        <div className="val">{this.state.count}</div>
        <button onClick={this.decCount}>-1</button>
        <button onClick={() => this.addBase(1)}>Base Up</button>
      </>
    );
  }
}

export default AClass;