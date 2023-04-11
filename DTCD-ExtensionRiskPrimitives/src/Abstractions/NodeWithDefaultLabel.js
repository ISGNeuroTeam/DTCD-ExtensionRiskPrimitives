import AbstractNode from './AbstractNode'
export default class NodeWithDefaultLabel extends AbstractNode {

  constructor(yFiles) {
    super(yFiles);
    this.instance.tag.defaultLabel = `Имя: $this.props.name$ <br>Значение: $this.props.value$`
    this.instance.tag.defaulInitialtLabel = `Имя: <br>Значение:`
  }
}