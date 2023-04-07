import icon from './icon.svg';
import NodeWithDefaultLabel from '../../Abstractions/NodeWithDefaultLabel';

export default class MeasuresNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Мероприятия',
      name: 'Measures',
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
      stroke: '4px #00FF7F',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: { expression: `"Мероприятия"`, type: 'expression' },
      name: { expression: ``, type: 'expression' },
      description: { expression: ``, type: 'expression' },
      value: { expression: ``, type: 'expression' },
      risk_owner: {
        expression: ``,
        type: 'expression',
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"ЦП: Д.В. Катков"`,
            `"УпР: О.Н. Бороздина"`,
            `"ЦПП: А.В. Рыбаков"`,
            `"ДЭПС: Е.В. Мальцев"`,
            `"ДИТ: С.В. Зайцев"`,
            `"ДКФ: А.О. Киселева"`,
            `"ДУП: М.С. Белосохов"`,
            `"ДКБ: В.Н. Архипов"`,
            `"ДУД: В.Ю. Соколов"`,
            `"ДЮ: А.С. Теплов"`,
            `"УКК: В.В. Михайличенко"`,
            `"ДБН: Е.В. Шмакова"`,
            `"ОБТ: С.А. Шолох"`,
            `"УЗД: О.В. Маркова"`,
            `"УМСФО: Д.Е. Касенова"`,
            `"ДСКУ: Р.Г. Абдуллаева"`,
            `"ДПИ: С.А. Калашников"`,
          ],
        }
      },
      cost: { expression: ``, type: 'expression' },
      planned_at: { expression: ``, type: 'expression' },
      status: { expression: ``, type: 'expression' },
      efficiency: { expression: ``, type: 'expression' },
      comment: { expression: ``, type: 'expression' },
    };

    const initPorts = [
      {
        primitiveName: `outPort1`,
        type: 'OUT',
        portPosition: { x: 1, y: 0.5 },
        properties: {
          status: { expression: `value`, type: 'expression' },
        },
      }
    ];

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties, initPorts };

    return this.instance;
  }
}
