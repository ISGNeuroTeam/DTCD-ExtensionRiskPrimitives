import icon from './icon_3.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class KIRNode_3 extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'КИР',
      name: 'KIR3',
      groups: ['Рисковые примитивы 2'],
    };
  }

  constructor(yFiles) {
    super(yFiles)
    this.yfiles = yFiles.default;
    this.instance.tag.defaultLabel = `$this.props.name$`
    this.instance.tag.defaulInitialtLabel = ``
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
        type: 'IN',
        portPosition: { x: 0.2, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      },
      {
        primitiveName: `inPort2`,
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: { expression: ``, type: 'expression' },
        },
      },
      {
        primitiveName: `inPort3`,
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
