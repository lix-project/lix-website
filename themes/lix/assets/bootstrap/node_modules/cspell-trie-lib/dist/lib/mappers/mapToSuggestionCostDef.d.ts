import type { CharacterSetCosts } from '../models/DictionaryInformation';
import type { SuggestionCostMapDef } from '../models/suggestionCostsDef';
import { EditCostsRequired } from './mapCosts';
export declare function parseAlphabet(cs: CharacterSetCosts, locale: string[] | undefined, editCost: EditCostsRequired): SuggestionCostMapDef[];
export declare function parseAlphabetCaps(alphabet: string, locale: string[] | undefined, editCost: EditCostsRequired): SuggestionCostMapDef;
export declare function calcFirstCharacterReplaceDefs(alphabets: CharacterSetCosts[], editCost: EditCostsRequired): SuggestionCostMapDef[];
export declare function calcFirstCharacterReplace(cs: CharacterSetCosts, editCost: EditCostsRequired): SuggestionCostMapDef;
export declare function parseAccents(cs: CharacterSetCosts, _editCost: EditCostsRequired): SuggestionCostMapDef | undefined;
export declare function calcCostsForAccentedLetters(simpleMap: string, locale: string[] | undefined, costs: EditCostsRequired): SuggestionCostMapDef[];
/**
 * Splits a simple map string into its parts.
 * - `abc` => `a`, `b`, `c`
 * - `a(bc)` => `a`, `bc`
 * @param map - string of characters
 */
export declare function splitMap(map: string): Iterable<string>;
//# sourceMappingURL=mapToSuggestionCostDef.d.ts.map