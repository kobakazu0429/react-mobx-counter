import { inject, observer } from "mobx-react";
import * as React from "react";
import { CountStoreType } from "../stores/CountStore";

interface Props {
  count?: CountStoreType;
}

@inject("count")
// countが使えるようになる

@observer
// vueでいうwatchでstateが更新させるとコンポーネントも変わる
// CountStoreのnumとか
class Counter extends React.Component<Props> {
  public render() {
    const { count } = this.props;
    // <=> const count = this.props.count;

    return (
      <div>
        Counter : {count!.num} <br />
        <button onClick={count!.onIncrement}> + </button>
        <button onClick={count!.onDecrement}> - </button>
        <br /> GetDoubleCount: {count!.getDoubleCount}
      </div>
    );
  }
}

export default Counter;
