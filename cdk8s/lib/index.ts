import { App } from 'cdk8s'
import { autorun, computed } from 'mobx'
import * as charts from './charts'

class Main extends App {
  constructor() {
    super()
    this.mosquitto
  }

  @computed
  public get mosquitto(): charts.IMosquittoChart {
    return new charts.MosquittoChart(this, 'mosquitto')
  }
}

autorun(() => {
  new Main().synth()
})
