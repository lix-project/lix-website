import type { CSpellSettings, CSpellUserSettings } from '@cspell/cspell-types';
import { CSpellSettingsInternal } from '../Models/CSpellSettingsInternalDef';
export declare function combineTextAndLanguageSettings(settings: CSpellUserSettings, text: string, languageId: string | string[]): CSpellSettingsInternal;
export declare function extractSettingsFromText(text: string): CSpellSettings;
//# sourceMappingURL=TextDocumentSettings.d.ts.map