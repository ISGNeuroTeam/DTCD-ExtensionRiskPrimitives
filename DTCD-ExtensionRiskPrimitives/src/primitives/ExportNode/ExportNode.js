import icon from './icon.svg';

export default class ExportNode {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Экспортный узел',
      name: 'ExportNode',
      groups: ['Узлы экспорта'],
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }

  create() {
    const {
      SimpleNode,
      ShapeNodeStyle,
      Rect,
      Font,
      MarkupLabelStyle,
      HorizontalTextAlignment,
      TextWrapping,
    } = this.yfiles;

    const instance = new SimpleNode();

    instance.layout = new Rect(0, 0, 294, 148);
    instance.style = new ShapeNodeStyle({
      shape: 'round-rectangle',
      stroke: '4px #77dd77',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    instance.tag = { customLabelStyle, properties: {}, initPorts: [] };

    this.instance = instance;
    return instance;
  }
}
