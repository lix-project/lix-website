/**
 * The data for this file was constructed from:
 * ```
 * cd ~/projects/clones/vscode/extensions
 * find . -type f -iname package.json -exec pcregrep -M '(?:"id":.*)|(?:"extensions":[^\]]+)' {} \; > ~/projects/cspell/src/languageIds.txt`
 * ```
 */
export interface LanguageExtensionDefinition {
    id: string;
    /** List of extensions starting with '.' */
    extensions: string[];
    /** Filenames that do not have an extension or have a different type than their implied extension */
    filenames?: string[];
}
export declare type LanguageDefinition = LanguageExtensionDefinition;
export declare type LanguageDefinitions = LanguageDefinition[];
export declare type ExtensionToLanguageIdMapSet = Map<string, Set<string>>;
export declare type ExtensionToLanguageIdMap = Map<string, string[]>;
export declare const languageExtensionDefinitions: LanguageDefinitions;
export declare type LanguageId = string;
export declare const binaryLanguages: Set<string>;
export declare const generatedFiles: Set<string>;
export declare const languageIds: LanguageId[];
export declare function isBinaryExt(ext: string): boolean;
export declare function isBinaryFile(basename: string): boolean;
export declare function isBinary(languageId: LanguageId | LanguageId[] | Iterable<LanguageId>): boolean;
export declare function isGeneratedExt(ext: string): boolean;
export declare function isGeneratedFile(basename: string): boolean;
export declare function isGenerated(languageId: LanguageId | LanguageId[] | Iterable<LanguageId>): boolean;
export declare function buildLanguageExtensionMapSet(defs: LanguageDefinitions): ExtensionToLanguageIdMapSet;
export declare function getLanguagesForExt(ext: string): string[];
export declare function getLanguagesForBasename(basename: string): string[];
//# sourceMappingURL=LanguageIds.d.ts.map