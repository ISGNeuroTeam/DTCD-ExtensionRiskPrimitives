import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty'

export default class MeasuresNode {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Мероприятия',
      name: 'Measures',
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
      type: createNodeProperty({ expression: `"Мероприятия"`, title: 'Тип примитива' }),
      name: createNodeProperty({ title: 'Наименование мероприятия' }),
      description: createNodeProperty({ title: 'Описание' }),
      value: createNodeProperty({ title: 'Значение' }),
      risk_owner: createNodeProperty({
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
        },
        title:'Владелец риска'
      }),
      cost: createNodeProperty({ title: 'Затраты на реализацию' }),
      planned_at: createNodeProperty({ title: 'Плановая дата мероприятия' }),
      status: createNodeProperty({ title: 'Текущий статус' }),
      efficiency: createNodeProperty({ title: 'Итоговая эффективность мероприятия' }),
      comment: createNodeProperty({ title: 'Комментарии' }),
    };

    const initPorts = [
      {
        primitiveName: `outPort1`,
        type: 'OUT',
        portPosition: { x: 1, y: 0.5 },
        properties: {
          status: createNodeProperty({ expression: `value`}),
        },
      }
    ];

    instance.tag = { customLabelStyle, properties, initPorts };

    this.instance = instance;
    return instance;
  }
}
