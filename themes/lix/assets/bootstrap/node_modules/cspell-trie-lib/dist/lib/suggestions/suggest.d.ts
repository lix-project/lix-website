import { TrieRoot } from '../TrieNode';
import { GenSuggestionOptions, SuggestionOptions } from './genSuggestionsOptions';
import { SuggestionGenerator, SuggestionResult } from './suggestCollector';
export declare function suggest(root: TrieRoot | TrieRoot[], word: string, options?: SuggestionOptions): SuggestionResult[];
export declare function genSuggestions(root: TrieRoot | TrieRoot[], word: string, options?: GenSuggestionOptions): SuggestionGenerator;
export declare function genCompoundableSuggestions(root: TrieRoot, word: string, options?: GenSuggestionOptions): SuggestionGenerator;
//# sourceMappingURL=suggest.d.ts.map