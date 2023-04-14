import icon from './icon_3.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'

export default class KIRNode_3 {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Ключевой индикатор риска',
      name: 'KIR3',
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
      stroke: '4px #DF73FF',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({ expression: `"КИР"`, title: 'Тип примитива' }),
      name: createNodeProperty({ title: 'Наименование КИР' }),
      description: createNodeProperty({ title: 'Описание' }),
      budget_value: createNodeProperty({ title: 'Бюджетное значение' }),
      fact_value: createNodeProperty({ title: 'Фактическое значение' }),
      critical_coef: createNodeProperty({ title: 'Коэффициент для критического значения' }),
      boundary_coef: createNodeProperty({ title: 'ККоэффициент для пограничного значения' }),
      critical_value: createNodeProperty({ title: 'Критическое значение' }),
      boundary_value: createNodeProperty({ title: 'Пограничное значение' }),
      plan_value: createNodeProperty({ title: 'Плановое значение' }),
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
          status: createNodeProperty({ expression: `value` }),
        },
      }
    ];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
