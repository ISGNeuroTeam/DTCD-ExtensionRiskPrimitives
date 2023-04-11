import icon from './icon_2.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class CalcNode_2 extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Расчетный',
      name: 'Calc2',
      groups: ['Рисковые примитивы 2'],
    };
  }

  constructor(yFiles) {
    super(yFiles)
    this.yfiles = yFiles.default;
  }

  create() {
    const {
      ShapeNodeStyle,
      Rect,
      Font,
      MarkupLabelStyle,
      HorizontalTextAlignment,
      TextWrapping,
    } = this.yfiles;


    this.instance.layout = new Rect(0, 0, 294, 148);
    this.instance.style = new ShapeNodeStyle({
      shape: 'round-rectangle',
      stroke: '4px #32ADE6',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"Расчетный"`, type: 'expression' },
      name: { expression: ``, type: 'expression' },
      description: { expression: ``, type: 'expression' },
      value: { expression: ``, type: 'expression' },
    };

    const initPorts = [
      {
        primitiveName: `inPort1`,
        type: 'IN',
        portPosition: { x: 0.2, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      },
      {
        primitiveName: `inPort2`,
        type: 'IN',
        portPosition: { x: 0.8, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      },
      {
        primitiveName: `outPort1`,
        type: 'OUT',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: { expression: `value`, type: 'expression' },
        },
      }
    ];

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
