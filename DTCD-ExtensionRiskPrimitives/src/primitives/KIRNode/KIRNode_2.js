import icon from './icon_2.svg';

export default class KIRNode_2 {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'КИР',
      name: 'KIR2',
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
      stroke: '4px #DF73FF',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"КИР"`, type: 'expression' },
      name: { expression: ``, type: 'expression' },
      description: { expression: ``, type: 'expression' },
      budget_value: { expression: ``, type: 'expression' },
      fact_value: { expression: ``, type: 'expression' },
      critical_coef: { expression: ``, type: 'expression' },
      boundary_coef: { expression: ``, type: 'expression' },
      critical_value: { expression: ``, type: 'expression' },
      boundary_value: { expression: ``, type: 'expression' },
      plan_value: { expression: ``, type: 'expression' },
    };

    const initPorts = [
      {
        primitiveName: `inPort1`,
        type: 'OUT',
        portPosition: { x: 0.2, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      },
      {
        primitiveName: `inPort2`,
        type: 'OUT',
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

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
