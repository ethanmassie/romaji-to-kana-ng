import { RomajiToKanaPipe } from './romaji-to-kana.pipe';

describe('RomajiToKanaPipe', () => {
  const pipe = new RomajiToKanaPipe();
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should map konnnichiha to こんにちは', () => {
    expect(pipe.transform('konnnichiha')).toEqual('こんにちは');
  });

  it('should map aeiou to あえいおう', () => {
    expect(pipe.transform('aeiou')).toEqual('あえいおう');
  });

  it('should map double consonants', () => {
    expect(pipe.transform('kka')).toEqual('っか');
    expect(pipe.transform('ggya')).toEqual('っぎゃ');
  });

  it('shouldn\'t map invalid characters', () => {
    expect(pipe.transform('ts > js')).toEqual('ts > js');
    expect(pipe.transform('bbb')).toEqual('bbb');
  });

  it('should work as inputs are made', () => {
    let value = 'ka';
    value = pipe.transform(value);
    value = pipe.transform(value.concat('ka'));
    value = pipe.transform(value.concat('a'));
    expect(value).toEqual('かかあ');
  });

  it('should work with three characters where the last 2 are a match', () => {
    expect(pipe.transform('kga')).toEqual('kが');
    expect(pipe.transform('kgya')).toEqual('kぎゃ');
  })

  it('should work with katakana', () => {
    expect(pipe.transform('KATAKANAHAKAKKOII')).toEqual('カタカナハカッコイイ');
  });

  it('shouldn\'t work with mixed case', () => {
    expect(pipe.transform('KaTaKaNa')).toEqual('KあTあKあNあ');
  });

  it('should work with special characters', () => {
    expect(pipe.transform('yoroshikuonegaishimasu! (^-^)')).toEqual('よろしくおねがいします! (^ー^)');
  });

  it('should replace - with a long vowel', () => {
    expect(pipe.transform('a-iggyo-')).toEqual('あーいっぎょー');
  })
});