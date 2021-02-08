import { App } from 'cdk8s'
import { autorun, computed } from 'mobx'

class Main extends App {
  constructor() {
    super()
  }
}

autorun(() => {
  new Main().synth()
})
