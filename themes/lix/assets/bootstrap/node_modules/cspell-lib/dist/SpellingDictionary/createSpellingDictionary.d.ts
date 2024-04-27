import { IterableLike } from '../util/IterableLike';
import { SpellingDictionary, SpellingDictionaryOptions } from './SpellingDictionary';
import { SpellingDictionaryLoadError } from './SpellingDictionaryError';
export declare function createSpellingDictionary(wordList: readonly string[] | IterableLike<string>, name: string, source: string, options: SpellingDictionaryOptions | undefined): SpellingDictionary;
export declare function createForbiddenWordsDictionary(wordList: readonly string[], name: string, source: string, options: SpellingDictionaryOptions | undefined): SpellingDictionary;
export declare function createFailedToLoadDictionary(error: SpellingDictionaryLoadError): SpellingDictionary;
//# sourceMappingURL=createSpellingDictionary.d.ts.map