import icon from './icon.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class AlertNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Блок оповещения',
      name: 'Alert',
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
      type: { expression: `"Оповещение"`, type: 'expression' },
      name: { expression: ``, type: 'expression' },
      alert_subject: { expression: ``, type: 'expression' },
      alert_text: { expression: ``, type: 'expression' },
      email_address: { expression: ``, type: 'expression' },
      condition: { expression: ``, type: 'expression' },
      value_1: { expression: ``, type: 'expression' },
      value_2: { expression: ``, type: 'expression' },
      value_3: { expression: ``, type: 'expression' },
      value_4: { expression: ``, type: 'expression' },
      notification_1: { expression: ``, type: 'expression' },
      notification_2: { expression: ``, type: 'expression' },
      notification_3: { expression: ``, type: 'expression' },
      notification_4: { expression: ``, type: 'expression' },
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

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
