import type { BaseSetting, CSpellUserSettings, LanguageId, LanguageSetting, LocaleId } from '@cspell/cspell-types';
export declare type LanguageSettings = LanguageSetting[];
export declare function getDefaultLanguageSettings(): LanguageSettings;
export declare function normalizeLanguageId(langId: LanguageId | LanguageId[]): Set<LanguageId>;
export declare function normalizeLocale(locale: LocaleId | LocaleId[]): Set<LocaleId>;
export declare function isLocaleInSet(locale: LocaleId | LocaleId[], setOfLocals: Set<LocaleId>): boolean;
export declare function calcSettingsForLanguage(languageSettings: LanguageSettings, languageId: LanguageId, locale: LocaleId): BaseSetting;
export declare function calcUserSettingsForLanguage(settings: CSpellUserSettings, languageId: string): CSpellUserSettings;
export declare function calcSettingsForLanguageId(baseSettings: CSpellUserSettings, languageId: LanguageId[] | LanguageId): CSpellUserSettings;
//# sourceMappingURL=LanguageSettings.d.ts.map