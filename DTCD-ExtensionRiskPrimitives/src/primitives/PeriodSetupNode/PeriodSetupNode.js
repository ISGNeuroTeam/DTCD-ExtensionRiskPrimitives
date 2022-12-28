import icon from './icon.svg';

export default class PeriodSetupNode {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Настройка временного интервала',
      name: 'PeriodSetup',
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
      type: { expression: `Настройка периода`, type: 'expression' },
      name: { expression: `Настройка периода`, type: 'expression' },
      start: { expression: `"01.2023"`, type: 'expression' },
      finish: { expression: `"01.2024"`, type: 'expression' },
    };

    const initPorts = [];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
