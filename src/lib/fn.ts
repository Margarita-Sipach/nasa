import { OneOrArr } from "../types";

// interface ConvertOneOrArr<T, K>{
	// convertOneOrArr: (structure: OneOrArr<T>, clb: (structure: OneOrArr<T>)) OneOrArr<K>
// }

export const convertOneOrArr = <T, K>(structure: OneOrArr<T>, clb: (structure: OneOrArr<T>) => OneOrArr<K>): OneOrArr<K> => (Array.isArray(structure) ? structure.map(i => clb(i)) : clb(structure)) as OneOrArr<K>