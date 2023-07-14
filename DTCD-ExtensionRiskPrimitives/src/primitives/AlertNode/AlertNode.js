import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class AlertNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Оповещение',
      name: 'Alert',
      groups: ['Рисковые примитивы'],
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
      root_condition: createNodeProperty({ title:'Корневое условие' }),
      condition_1: createNodeProperty({ title:'Условие 1' }),
      condition_2: createNodeProperty({ title:'Условие 2' }),
      condition_3: createNodeProperty({ title:'Условие 3' }),
      condition_4: createNodeProperty({ title:'Условие 4' }),
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

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
