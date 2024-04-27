import type { CSpellUserSettings } from './CSpellSettingsDef';
export declare type ConfigKeys = Exclude<keyof CSpellUserSettings, '$schema' | 'version' | 'id'>;
export declare type CSpellUserSettingsFields = {
    [key in ConfigKeys]: key;
};
export declare const ConfigFields: CSpellUserSettingsFields;
//# sourceMappingURL=configFields.d.ts.map