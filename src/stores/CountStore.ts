import { action, computed, observable } from "mobx";

export interface CountStoreType {
  num: number;
  getDoubleCount: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default class CountStore {
  @observable private num = 0;

  @computed // observableが変わると同時に変わる
  get getDoubleCount() {
    return this.num * 2;
  }

  @action.bound // vueでいうmutatinos stateを変えれる
  public onIncrement() {
    this.num = this.num + 1;
  }

  @action.bound
  public onDecrement() {
    this.num = this.num - 1;
  }
}
