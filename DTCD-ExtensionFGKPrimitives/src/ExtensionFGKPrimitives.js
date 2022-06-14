import primitives from './primitives';
import { ExtensionPlugin } from './../../DTCD-SDK/';
import { version } from './../package.json';

export class ExtensionFGKPrimitives extends ExtensionPlugin {
  static getRegistrationMeta() {
    return {
      version,
      type: 'extension',
      target: ['PrimitiveLibraryPanel', 'LiveDashPanel'],
      title: 'Расширение библиотеки примитивов FGK',
      name: 'ExtensionFGKPrimitives',
    };
  }

  static getExtensionInfo() {
    const result = [];
    primitives.forEach(primitive => {
      const primitiveInfo = primitive.getPrimitiveInfo();
      primitiveInfo.extensionName = this.getRegistrationMeta().name;
      primitiveInfo.primitiveName = primitiveInfo.name;
      result.push(primitiveInfo);
    });
    return result;
  }

  constructor() {
    super();

    const yFiles = this.getDependence('yFiles');

    this.primitives = {};
    primitives.forEach(PrimitiveClass => {
      const { name } = PrimitiveClass.getPrimitiveInfo();
      this.primitives[name] = PrimitiveClass.bind(null, yFiles);
    });
  }
}
