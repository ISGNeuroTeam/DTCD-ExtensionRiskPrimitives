import icon from './icon_2.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class KIRNode_2 extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Ключевой индикатор риска2',
      name: 'KIR2',
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
      type: createNodeProperty({ expression: `"Ключевой индикатор риска"`, title: 'Тип примитива' }),
      name: createNodeProperty({ title: 'Наименование КИР' }),
      description: createNodeProperty({ title: 'Описание' }),
      budget_value: createNodeProperty({ title: 'Бюджетное значение' }),
      fact_value: createNodeProperty({ title: 'Фактическое значение' }),
      critical_coef: createNodeProperty({ title: 'Коэффициент для критического значения' }),
      boundary_coef: createNodeProperty({ title: 'Коэффициент для пограничного значения' }),
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

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
