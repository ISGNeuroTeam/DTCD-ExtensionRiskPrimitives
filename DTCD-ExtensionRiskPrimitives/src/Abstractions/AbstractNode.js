export default class AbstractNode {
  instance;

  constructor(yFiles) {
    const { SimpleNode } = yFiles.default
    this.instance = new SimpleNode();
      this.instance.tag = {}
  }
}