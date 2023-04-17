import icon from './icon.svg';
import createNodeProperty from '../../../../DTCD-SDK/utils/createNodeProperty'
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class RiskAppetiteRiskNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Допустимый уровень риска',
      name: 'RiskAppetiteRisk',
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
      stroke: '4px #AAA664',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({ expression: `"Рисковый"`, title:'Тип примитива'}),
      name: createNodeProperty({ title:'Наименование риска' }),
      identifier: createNodeProperty({title:'Идентификатор риска'}),
      description: createNodeProperty({title:'Заявление по риску'}),
      risk_appetite_impact: createNodeProperty({title:'Допустимое влияние риска'}),
      risk_appetite_probability: createNodeProperty({title:'Допустимая вероятность риска'}),
      risk_appetite_value: createNodeProperty({title:'Допустимый уровень риска'}),
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
