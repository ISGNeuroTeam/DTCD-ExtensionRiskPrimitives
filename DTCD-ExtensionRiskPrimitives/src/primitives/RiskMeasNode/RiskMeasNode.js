import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';
import { NodeWithDefaultLabel } from '../../../../DTCD-SDK';

export default class RiskMeasNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Риск с учётом мероприятий (расчетное дерево + меры)',
      name: 'RiskMeas',
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
      stroke: '4px #480607',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {
      type: createNodeProperty({ expression: `"Риск с учётом мероприятий (расчетное дерево + меры)"`, title: 'Тип примитива' }),
      name: createNodeProperty({
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"Риск снижения маржинального дохода по оперированию"`,
            `"Риск роста просроченной дебиторской задолженности"`,
            `"Риск снижения выручки и получения штрафных санкций со стороны Минобороны РФ"`,
            `"Риск снижения эффективности предоставления в аренду подвижного состава"`,
            `"Риски связанные с реализацией проектов по объектам производственной инфраструктуры"`,
            `"Риск связанный с изменением тарифной системы РЖД"`,
            `"Риск дополнительных затрат на содержание парка вагонов (отстой)"`,
            `"Риск дополнительныхзатрат на подготовку вагонов-цистерн на ППС"`,
            `"Риск роста стоимости текущих ремонтов (роста затрат на текущий ремонт вагонов)"`,
            `"Риск роста стоимости плановых ремонтов (роста затрат на плановый ремонт вагонов)"`,
            `"Риск связанный с отстановкой вагонов от эксплуатации в случае выявления нарушений государственных надзорных органов"`,
            `"Риск сохранности вагонов и запасных частей"`,
            `"Риск снижения эффективности проектов НИОКР"`,
            `"Риск снижения уровня безопасности движения и надежности перевозочного процесса"`,
            `"Риск неэффективной автоматизации бизнес-процессов (внедрения информационных систем)"`,
            `"Риск возникновения дополнительных затрат на сопровождение информационных систем АО 'ФГК'"`,
            `"Риск снижения ликвидности"`,
            `"Процентный риск"`,
            `"Валютный риск"`,
            `"Кадровый риск"`,
            `"Риск информационной безопасности"`,
            `"Коррупционный риск"`,
            `"Риск снижения эффективности организации административно-хозяйственной деятельности (роста затрат на ТМЦ услуги в области административно хозяйственной деятельности)"`,
            `"Риск невозможности надлежащей защиты прав и законных интересов АО 'ФГК' в судебном порядке"`,
            `"Риск недоступности (сбоев) в работе информационных систем (программного обеспечения)"`,
            `"Репутационный риск"`,
            `"Комплаенс риск в области антимонопольного законодательства"`,
            `"Комплаенс риск в области налогового законодательства"`,
            `"Комплаенс риск в области железнодорожного законодательства"`,
            `"Комплаенс риск в области эксплуатации подвижного состава"`,
            `"Комплаенс риск в области трудового законодательства"`,
            `"Комплаенс риск в области охраны труда пожарной промышленной и экологической безопасности"`,
            `"Риски необеспечения защиты персональных данных"`,
            `"Комплаенс риск в области корпоративного законодательства"`,
            `"Комплаенс риск выявления нарушения порядка осуществления закупки товаров работ услуг а также представления информации и исполнения предписаний (решений) контролирующих органов"`,
            `"Комплаенс риск в части постановления Правительства Российской Федерации от 11.12.2014 № 1352 'Об особенностях участия субъектов малого и среднего предпринимательства в закупках товарах работ услуг отдельными видами юридических лиц'"`,
            `"Комплаенс риск в части отчетности по РСБУ"`,
            `"Комплаенс риск в части МСФО"`,
            `"Риск снижения эффективности инвестиционных проектов"`,
            `"Риск связанный с организацией работы в сфере корпоративного управления"`,
            `"Риски неосвоения или перерасхода инвестиционной программы в части закупки подвижного состава"`,
            `"Риск снижения индекса исполнительской дисциплины"`,
            `"Риск несоотвествия рабочего парка потребному в связи с отсутствием деталей для ремонта ПС"`,
          ],
        },
        title: 'Наименование риска',
      }),
      identifier: createNodeProperty({
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"Р.001"`,
            `"Р.002"`,
            `"Р.003"`,
            `"Р.004"`,
            `"Р.005"`,
            `"Р.006"`,
            `"Р.007"`,
            `"Р.008"`,
            `"Р.009"`,
            `"Р.010"`,
            `"Р.011"`,
            `"Р.012"`,
            `"Р.013"`,
            `"Р.014"`,
            `"Р.015"`,
            `"Р.016"`,
            `"Р.017"`,
            `"Р.018"`,
            `"Р.019"`,
            `"Р.020"`,
            `"Р.021"`,
            `"Р.022"`,
            `"Р.023"`,
            `"Р.024"`,
            `"Р.025"`,
            `"Р.026"`,
            `"Р.027"`,
            `"Р.028"`,
            `"Р.029"`,
            `"Р.030"`,
            `"Р.031"`,
            `"Р.032"`,
            `"Р.033"`,
            `"Р.034"`,
            `"Р.035"`,
            `"Р.036"`,
            `"Р.037"`,
            `"Р.038"`,
            `"Р.039"`,
            `"Р.040"`,
            `"Р.041"`,
            `"Р.042"`,
            `"Р.043"`,
            `"Р.044"`,
            `"Р.045"`,
            `"Р.046"`,
          ],
        },
        title: 'Идентификатор риска',
      }),
      description: createNodeProperty({ title: 'Описание' }),
      residual_risk_probability: createNodeProperty({
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"<5%"`,
            `"5-25%"`,
            `"26-50%"`,
            `"51-75%"`,
            `">75%"`,
          ],
        },
        title: 'Остаточный риск - Вероятность',
      }),
      residual_risk_impact: createNodeProperty({ title: 'Остаточный риск - Влияние' }),
      residual_risk_value: createNodeProperty({ title: 'Остаточный риск - Итоговая оценка' }),
      management_strategy: createNodeProperty({
        input: {
          component: 'select',
          type: 'const',
          values: [
            `"Избежание риска"`,
            `"Минимизация риска"`,
            `"Принятие риска"`,
            `"Передача риска"`,
            `"Добор риска"`,
          ],
        },
        title: 'Стратегия управления риском',
      }),
      measures: createNodeProperty({ title: 'Мероприятия' }),
      management_resources: createNodeProperty({ title: 'Используемые ресурсы' }),
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
