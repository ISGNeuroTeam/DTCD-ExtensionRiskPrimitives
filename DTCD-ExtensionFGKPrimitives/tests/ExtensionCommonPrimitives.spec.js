import { ExtensionFGKPrimitives } from '../src/ExtensionFGKPrimitives';

describe('ExtensionFGKPrimitives:getRegistrationMeta', () => {
  test('should be defined', () => {
    expect(ExtensionFGKPrimitives.getRegistrationMeta).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionFGKPrimitives.getRegistrationMeta()).toEqual({
      type: 'extension',
      target: expect.any(Array),
      title: 'Расширение библиотеки примитивов FGK',
      name: 'ExtensionFGKPrimitives',
      version: expect.any(String),
    });
  });
});

describe('ExtensionFGKPrimitives:getExtensionInfo', () => {
  test('should be defined', () => {
    expect(ExtensionFGKPrimitives.getExtensionInfo).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionFGKPrimitives.getExtensionInfo()).toEqual(expect.any(Array));
  });
});
