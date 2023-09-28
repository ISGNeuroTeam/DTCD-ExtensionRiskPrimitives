import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';
import { NodeWithDefaultLabel } from '../../../../DTCD-SDK';

export default class RiskAppetiteGoalNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Риск-аппетит по цели',
      name: 'RiskAppetiteGoal',
      groups: ['Рисковые примитивы'],
    };
  }

  constructor(yFiles) {
    super(yFiles);
    this.yfiles = yFiles;
    this.instance.tag.defaultLabel = `$this.props.name$`;
    this.instance.tag.defaulInitialtLabel = ``;
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
      stroke: '4px #C6A664',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({expression: `"Риск-аппетит по цели"`, title: 'Тип примитива' }),
      name: createNodeProperty({
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
          ],
        },
        title: 'Наименование цели',
      }),
      description: createNodeProperty({ title: 'Заявление по риск-аппетиту' }),
      goal_budget_value: createNodeProperty({ title: 'Бюджетное значение по цели' }),
      goal_fact_value: createNodeProperty({ title: 'Фактическое значение по цели' }),
      goal_prognoz_value: createNodeProperty({ title: 'Прогнозное значение по цели' }),
      risk_appetite_exceeded: createNodeProperty({ title: 'Факт соблюдения риск-аппетита' }),
      risk_appetite_value: createNodeProperty({ title: 'Значение риск-аппетита' }),
      aggregate_operations: createNodeProperty({
        title: 'Операция по агрегации',
        input: {
          component: 'select',
          type: 'const',
          values: [`"avg"`, `"sum"`],
        },
      }),
    };

    const initPorts = [
      {
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
    ];

    this.instance.tag = { ...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
