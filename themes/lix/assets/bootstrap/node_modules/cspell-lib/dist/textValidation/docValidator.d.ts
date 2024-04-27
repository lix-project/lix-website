import type { CSpellUserSettings } from '@cspell/cspell-types';
import { TextDocument } from '../Models/TextDocument';
import { ValidateTextOptions, ValidationIssue } from './validator';
export interface DocumentValidatorOptions extends ValidateTextOptions {
    /**
     * Optional path to a configuration file.
     * If given, it will be used instead of searching for a configuration file.
     */
    configFile?: string;
    /**
     * Prevents searching for local configuration files
     * By default the spell checker looks for configuration files
     * starting at the location of given filename.
     * If `configFile` is defined it will still be loaded instead of searching.
     * `false` will override the value in `settings.noConfigSearch`.
     * @defaultValue undefined
     */
    noConfigSearch?: boolean;
}
export declare class DocumentValidator {
    readonly options: DocumentValidatorOptions;
    readonly settings: CSpellUserSettings;
    private _document;
    private _ready;
    readonly errors: Error[];
    private _prepared;
    private _preparations;
    private _preparationTime;
    private _suggestions;
    /**
     * @param doc - Document to validate
     * @param config - configuration to use (not finalized).
     */
    constructor(doc: TextDocument, options: DocumentValidatorOptions, settings: CSpellUserSettings);
    get ready(): boolean;
    prepareSync(): void;
    prepare(): Promise<void>;
    private _prepareAsync;
    private _updatePrep;
    /**
     * The amount of time in ms to prepare for validation.
     */
    get prepTime(): number;
    checkText(range: SimpleRange, _text: string, _scope: string[]): ValidationIssue[];
    get document(): TextDocument;
    updateDocumentText(text: string): void;
    private addPossibleError;
    private catchError;
    private errorCatcherWrapper;
    private suggest;
    private genSuggestions;
}
export declare type Offset = number;
export declare type SimpleRange = readonly [Offset, Offset];
//# sourceMappingURL=docValidator.d.ts.map