import { TrieRoot } from '../TrieNode';
import { SuggestionGenerator, SuggestionResult } from './suggestCollector';
import { GenSuggestionOptionsStrict, SuggestionOptions } from './genSuggestionsOptions';
export declare function genCompoundableSuggestions(root: TrieRoot, word: string, options: GenSuggestionOptionsStrict): SuggestionGenerator;
export declare function suggest(root: TrieRoot | TrieRoot[], word: string, options: SuggestionOptions): SuggestionResult[];
export declare function genSuggestions(root: TrieRoot | TrieRoot[], word: string, options: GenSuggestionOptionsStrict): SuggestionGenerator;
//# sourceMappingURL=suggestAStar.d.ts.map