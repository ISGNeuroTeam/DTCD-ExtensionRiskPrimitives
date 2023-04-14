import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'

export default class AlertNode {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Оповещение',
      name: 'Alert',
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
      stroke: '4px #ED760E',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({ expression: `"Оповещение"`, title:'Тип примитива' }),
      name: createNodeProperty({ title:'Наименование' }),
      alert_subject: createNodeProperty({ title:'Тема уведомления' }),
      alert_text: createNodeProperty({ title:'Текст уведомления' }),
      email_address: createNodeProperty({ title:'Адрес эл.почты' }),
      condition: createNodeProperty({ title:'Условие' }),
      value_1: createNodeProperty({ title:'Значение 1' }),
      value_2: createNodeProperty({ title:'Значение 2' }),
      value_3: createNodeProperty({ title:'Значение 3' }),
      value_4: createNodeProperty({ title:'Значение 4' }),
      notification_1: createNodeProperty({ title:'Уведомление 1' }),
      notification_2: createNodeProperty({ title:'Уведомление 2' }),
      notification_3: createNodeProperty({ title:'Уведомление 3' }),
      notification_4: createNodeProperty({ title:'Уведомление 4' }),
    };

    const initPorts = [
      {
        primitiveName: `inPort1`,
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      }
    ];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
