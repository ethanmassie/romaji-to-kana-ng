# RomajiToKanaNg
Provides an angular pipe for converting roman characters to kana.

# Developer Usage

Import the module
```typescript
import { RomajiToKanaModule } from 'romaji-to-kana';

@ngModule(
    ...
    imports: [
        ...
        RomajiToKanaModule
    ]
)
```

Usage with ngModel
```html
<input [ngModel]="value | romajiToKana" (ngModelChange)="value=$event" type="text"/>
```

# Enduser Usage
Input your romaji phonetically. Capitals will be converted to katakana whereas lowercase is converted to hiragana.  Mixed case will be ignored.
'-' hyphens will be converted to katakana long vowels. Example: ka -> か　gyo -> ぎょ　gga -> っが. 
