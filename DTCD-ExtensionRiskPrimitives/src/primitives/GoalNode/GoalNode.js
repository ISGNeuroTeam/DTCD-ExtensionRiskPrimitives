import icon from './icon.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class GoalNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Цель',
      name: 'Goal',
      groups: ['Рисковые примитивы 2'],
    };
  }

  constructor(yFiles) {
    super(yFiles)
    this.yfiles = yFiles.default;
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
      stroke: '4px #6495ED',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"Цель"`, type: 'expression' },
      name: {
        expression: ``,
        type: 'expression',
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"Чистая прибыль млн руб."`,
            `"Грузооборот"`,
            `"Доходность на общий парк руб./ваг./сут."`,
            `"EBITDA"`,
            `"Чистый долг/EBITDA"`,
            `"ROIC"`,
            `"Проект «Скоростные перевозки контейнеров»"`,
            `"Проект «Контрейлерные перевозки»"`,
            `"Проект «Стратегия цифровой трансформации»"`,
          ]
        }
      },
      description: { expression: ``, type: 'expression' },
      value: { expression: ``, type: 'expression' },
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
