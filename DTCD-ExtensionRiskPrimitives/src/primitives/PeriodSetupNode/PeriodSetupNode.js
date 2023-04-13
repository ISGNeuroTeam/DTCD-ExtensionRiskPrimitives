import icon from './icon.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class PeriodSetupNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Настройка временного интервала',
      name: 'PeriodSetup',
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
      stroke: '4px #FDBCB4',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"Настройка периода"`, type: 'expression' },
      name: { expression: `"Настройка периода"`, type: 'expression' },
      start: { expression: `"01.2023"`, type: 'expression' },
      finish: { expression: `"01.2024"`, type: 'expression' },
    };

    const initPorts = [];

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
