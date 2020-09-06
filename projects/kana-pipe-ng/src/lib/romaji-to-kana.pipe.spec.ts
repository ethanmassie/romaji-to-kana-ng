import { RomajiToKanaPipe } from './romaji-to-kana.pipe';

const testStrings = {
  'konnnichiha': 'こんにちは',
  'aeiou': 'あえいおう',
  'kka': 'っか',
  'ggya': 'っぎゃ'
}

describe('RomajiToKanaPipe', () => {
  it('create an instance', () => {
    const pipe = new RomajiToKanaPipe();
    expect(pipe).toBeTruthy();
  });

  it('should map test strings correctly', () => {
    const pipe = new RomajiToKanaPipe();
    for (let romaji of Object.keys(testStrings)) {
      const transform = pipe.transform(romaji)
      console.log(`${romaji} -> ${transform}`);
      expect(transform).toEqual(testStrings[romaji]);
    }
  })
});