/**
 * Parse a directory and return its root
 * @param directory - directory to parse.
 * @returns root directory
 */
export declare function directoryRoot(directory: string): string;
/**
 * Find the git repository root directory.
 * @param directory - directory to search up from.
 * @returns resolves to `.git` root or undefined
 */
export declare function findRepoRoot(directory: string): Promise<string | undefined>;
/**
 * Checks to see if the child directory is nested under the parent directory.
 * @param parent - parent directory
 * @param child - possible child directory
 * @returns true iff child is a child of parent.
 */
export declare function isParentOf(parent: string, child: string): boolean;
/**
 * Check to see if a parent directory contains a child directory.
 * @param parent - parent directory
 * @param child - child directory
 * @returns true iff child is the same as the parent or nested in the parent.
 */
export declare function contains(parent: string, child: string): boolean;
//# sourceMappingURL=helpers.d.ts.map