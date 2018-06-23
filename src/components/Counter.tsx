import { inject, observer } from "mobx-react";
import * as React from "react";
import { CountStoreType } from "../stores/CountStore";

interface Props {
  count?: CountStoreType;
}

@inject("count")
@observer
class Counter extends React.Component<Props> {
  public render() {
    const { count } = this.props;

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
