import { inject, observer } from "mobx-react";
import * as React from "react";
import { CountStoreType } from "../stores/CountStore";

import styled from "styled-components";

interface Props {
  count?: CountStoreType;
}

@inject("count")
// countが使えるようになる

@observer
// vueでいうwatchでstateが更新させるとコンポーネントも変わる
// CountStoreのnumとか
export default class Counter extends React.Component<Props> {
  public render() {
    const { count } = this.props;
    // <=> const count = this.props.count;

    return (
      <Div>
        Counter : {count!.num} <br />
        <button onClick={count!.onIncrement}> + </button>
        <button onClick={count!.onDecrement}> - </button>
        <br /> GetDoubleCount: {count!.getDoubleCount}
      </Div>
    );
  }
}

const Div = styled.div`
  text-align: center;
  background-color: rgba(186, 203, 255, 0.8);
`;
