import icon from './icon.svg';

export default class FactorAnalysisNode {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Верхний блок факторный анализ',
      name: 'FactorAnalysis',
      groups: ['Рисковые примитивы 2'],
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
      stroke: '4px #fde910',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"Факторный анализ"`, type: 'expression' },
      name: { expression: ``, type: 'expression' },
      description: { expression: ``, type: 'expression' },
      value: { expression: ``, type: 'expression' },
      management_action: { expression: ``, type: 'expression' },
      external_influence: { expression: ``, type: 'expression' },
    };

    const initPorts = [
      {
        primitiveName: `inPort1`,
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      }
    ];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
