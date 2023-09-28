import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';
import { NodeWithDefaultLabel } from '../../../../DTCD-SDK';

export default class DataNode extends NodeWithDefaultLabel {

  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Примитив с данными',
      name: 'Data',
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
      stroke: '4px #00C7BE',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({ expression: `"Примитив с данными"`, title: 'Тип примитива' }),
      name:  createNodeProperty({ title: 'Наименование' }),
      description: createNodeProperty({ title: 'Описание' }),
      value: createNodeProperty({ title: 'Значение' }),
    };

    const initPorts = [
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
