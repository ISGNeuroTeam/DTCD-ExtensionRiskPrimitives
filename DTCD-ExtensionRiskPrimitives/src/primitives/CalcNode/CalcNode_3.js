import icon from './icon_3.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'

export default class CalcNode_3 {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Расчетный3',
      name: 'Calc3',
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
      type: createNodeProperty({ expression: `"Расчетный"`, title:'Тип примитива' }),
      name: createNodeProperty({ title:'Наименование' }),
      description: createNodeProperty({ title:'Описание' }),
      value: createNodeProperty({ title:'Значение' }),
    };

    const initPorts = [
      {
        primitiveName: `inPort1`,
        type: 'IN',
        portPosition: { x: 0.2, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: `inPort2`,
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: `inPort3`,
        type: 'IN',
        portPosition: { x: 0.8, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: `outPort1`,
        type: 'OUT',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: createNodeProperty({expression: `value`}),
        },
      }
    ];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
