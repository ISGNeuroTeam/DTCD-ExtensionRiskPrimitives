import icon from './icon_3.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'
import { NodeWithDefaultLabel } from '../../../../DTCD-SDK';

export default class CalcNode_3 extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Расчетный3',
      name: 'Calc3',
      groups: ['Рисковые примитивы'],
    };
  }

  constructor(yFiles) {
    super(yFiles);
    this.yfiles = yFiles;
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
      type: createNodeProperty({ expression: `"Расчетный"`, title: 'Тип примитива' }),
      name: createNodeProperty({ title: 'Наименование' }),
      description: createNodeProperty({ title: 'Описание' }),
      value: createNodeProperty({ title: 'Значение' }),
    };

    const initPorts = [
      {
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.2, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: 'inPort2',
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: 'inPort3',
        type: 'IN',
        portPosition: { x: 0.8, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: 'outPort1',
        type: 'OUT',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: createNodeProperty({ expression: 'value' }),
        },
      },
    ];

    this.instance.tag = { ...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
