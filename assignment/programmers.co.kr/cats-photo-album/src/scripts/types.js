/**
 * @typedef {"PREV" | "DIRECTORY" | "FILE"} NodeType
 * 
 * @typedef {{
 *  id: string;
 *  name: string;
 *  type: "PREV" | "DIRECTORY" | "FILE";
 *  filePath: string | null;
 *  parent: string | null;
 * }} Node
 * 
 * @typedef {{
 *  id: string;
 *  name: string;
 * }} Directory
 */

export function types() {};