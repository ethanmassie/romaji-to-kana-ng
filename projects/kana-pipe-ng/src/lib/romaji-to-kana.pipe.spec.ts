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
  });
});