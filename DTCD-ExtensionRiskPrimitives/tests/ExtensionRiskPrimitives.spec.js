import { ExtensionRiskPrimitives } from '../src/ExtensionRiskPrimitives';

describe('ExtensionRiskPrimitives:getRegistrationMeta', () => {
  test('should be defined', () => {
    expect(ExtensionRiskPrimitives.getRegistrationMeta).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionRiskPrimitives.getRegistrationMeta()).toEqual({
      type: 'extension',
      target: expect.any(Array),
      title: 'Расширение библиотеки примитивов для рисков',
      name: 'ExtensionRiskPrimitives',
      version: expect.any(String),
    });
  });
});

describe('ExtensionRiskPrimitives:getExtensionInfo', () => {
  test('should be defined', () => {
    expect(ExtensionRiskPrimitives.getExtensionInfo).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionRiskPrimitives.getExtensionInfo()).toEqual(expect.any(Array));
  });
});
