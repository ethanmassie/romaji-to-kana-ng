import { Pipe, PipeTransform } from '@angular/core';

const kanaMap = {
  // standard hiragana
  'nn': 'ん', 'wa': 'わ',  'ra': 'ら', 'ya': 'や', 'ma': 'ま', 'ba': 'ば', 'ha': 'は', 'na': 'な', 'da': 'だ', 'ta':  'た', 'za': 'ざ', 'sa':  'さ', 'ga': 'が', 'ka': 'か', 'a': 'あ',
                          'ri': 'り',           　'mi': 'み', 'bi': 'び', 'hi': 'ひ', 'ni': 'に', 'di': 'ぢ', 'chi': 'ち', 'ji': 'じ', 'shi': 'し', 'gi': 'ぎ', 'ki': 'き', 'i': 'い',
                          'ru': 'る', 'yu': 'ゆ', 'mu': 'む', 'bu': 'ぶ', 'fu': 'ふ', 'nu': 'ぬ', 'du': 'づ', 'tsu': 'つ', 'zu': 'ず', 'su':  'す', 'gu': 'ぐ', 'ku': 'く', 'u': 'う',
                          're': 'れ',           　'me': 'め', 'be': 'べ', 'he': 'へ', 'ne': 'ね', 'de': 'で', 'te':  'て', 'ze': 'ぜ', 'se':  'せ', 'ge': 'げ', 'ke': 'け', 'e': 'え',
              'wo': 'を', 'ro': 'ろ', 'yo': 'よ', 'mo': 'も', 'bo': 'ぼ', 'ho': 'ほ', 'no': 'の', 'do': 'ど', 'to':  'と', 'zo': 'ぞ', 'so':  'そ', 'go': 'ご', 'ko': 'こ', 'o': 'お',
  
  // little ya, yu, and yo
  'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
  'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
  'sya': 'しゃ', 'syu': 'しゅ', 'syo': 'しょ',
  'jya': 'じゃ', 'jyu': 'じゅ', 'jyo': 'じょ',
  'cya': 'ちゃ', 'cyu': 'ちゅ', 'cyo': 'ちょ',
  'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
  'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
  'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
  'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
  'pya': 'ぴゃ', 'pyu': 'ぴゅ', 'pyo': 'ぴょ',
  'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',

  // standard katakana
  'NN': 'ｎ', 'WA': 'ワ', 'RA': 'ラ', 'YA': 'ヤ', 'MA': 'マ', 'BA': 'バ', 'HA': 'ハ', 'NA': 'ナ', 'DA': 'ダ', 'TA':  'タ', 'ZA': 'ザ', 'SA':  'サ', 'GA': 'ガ', 'KA': 'カ', 'A': 'ア',
                          'RI': 'リ',           　'MI': 'ミ', 'BI': 'ビ', 'HI': 'ヒ', 'NI': 'ニ', 'DI': 'ヂ', 'CHI': 'チ', 'JI': 'ジ', 'SHI': 'シ', 'GI': 'ギ', 'KI': 'キ', 'I': 'イ',
                          'RU': 'ル', 'YU': 'ユ', 'MU': 'ム', 'BU': 'ブ', 'FU': 'フ', 'NU': 'ヌ', 'DU': 'ヅ', 'TSU': 'ツ', 'ZU': 'ズ', 'SU':  'ス', 'GU': 'グ', 'KU': 'ク', 'U': 'ウ',
                          'RE': 'レ',           　'ME': 'メ', 'BE': 'ベ', 'HE': 'ヘ', 'NE': 'ネ', 'DE': 'デ', 'TE':  'テ', 'ZE': 'ゼ', 'SE':  'セ', 'GE': 'ゲ', 'KE': 'ケ', 'E': 'エ',
              'WO': 'ヲ', 'RO': 'ロ', 'YO': 'ヨ', 'MO': 'モ', 'BO': 'ボ', 'HO': 'ホ', 'NO': 'ノ', 'DO': 'ド', 'TO':  'ト', 'ZO': 'ゾ', 'SO':  'ソ', 'GO': 'ゴ', 'KO': 'コ', 'O': 'オ',

  // little ya yu and yo katakana
  'KYA': 'キャ', 'KYU': 'キュ', 'KYO': 'キョ',
  'GYA': 'ギャ', 'GYU': 'ギュ', 'GYO': 'ギョ',
  'SYA': 'シャ', 'SYU': 'シュ', 'SYO': 'ショ',
  'JYA': 'ジャ', 'JYU': 'ジュ', 'JYO': 'ジョ',
  'CYA': 'チャ', 'CYU': 'チュ', 'CYO': 'チョ',
  'NYA': 'ニャ', 'NYU': 'ニュ', 'NYO': 'ニョ',
  'HYA': 'ヒャ', 'HYU': 'ヒュ', 'HYO': 'ヒョ',
  'BYA': 'ビャ', 'BYU': 'ビュ', 'BYO': 'ビョ',
  'MYA': 'ミャ', 'MYU': 'ミュ', 'MYO': 'ミョ',
  'PYA': 'ピャ', 'PYU': 'ピュ', 'PYO': 'ピョ',
  'RYA': 'リャ', 'RYU': 'リュ', 'RYO': 'リョ',

  // others
  '-': 'ー' // long vowel
}

const katakanaRegExp =/[\u30a0-\u30ff]/g; // matches only katakana characters
const specialCharAndKanaRegExp = /[!@#$%^&*(),.?":{}|<>\ _\u3040-\u30ff]/g; // matches kana and special characters

@Pipe({
  name: 'romajiToKana'
})
export class RomajiToKanaPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) return;

    let acc = '';
    let valueArr = value.split('')
    let result = '';
    while (valueArr.length) {
      acc = acc.concat(valueArr.shift());
      
      // if the acc contains a kana character or a special character reset acc and continue
      if (acc.match(specialCharAndKanaRegExp)) {
        result += acc;
        acc = '';
        continue;
      }

      // check if there is mixed casing
      if (acc.match(/[a-z]/g) && acc.match(/[A-Z]/g)) {
        result += acc[0];
        acc = acc.slice(1);
      }

      const mappedValue = kanaMap[acc];
      if (!!mappedValue) {
        result += mappedValue;
        acc = '';
      } else if (acc.length == 3) {
        // logic for a double consonant
        // check if the top is equal to the next char
        if (acc[0] == acc[1]) {
          const mappedTail = kanaMap[acc.slice(1)];
          if (!!mappedTail) {
            result += this.makeDoubleConsonant(mappedTail);
            acc = '';
            continue;
          } else {
            // peek at the next character
            const nextChar = valueArr.slice(0, 1); // using a slice since we don't know if there actually is another character
            const fourCharMatch = kanaMap[acc.slice(1).concat(...nextChar)];

            // we found something like jjya or ggya
            if (!!fourCharMatch) {
              result += this.makeDoubleConsonant(fourCharMatch);
              acc = '';
              valueArr.shift(); // remove the character we peeked at
              continue;
            }
          }
        }
          
        // if we reach this point assume these 3 characters don't match anything and add them to the result then clear the acc
        result += acc;
        acc = '';
      }
    }
    // add any leftovers to the result and return it
    return result.concat(acc);
  }

  makeDoubleConsonant(kana: string) {
    // choose which little tsu to use based on if it is katakana
    return kana.match(katakanaRegExp) ? `ッ${kana}`: `っ${kana}`;
  }
}
