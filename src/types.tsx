export interface ImgInfo{
	url: string
	title: string
}

export type OneOrArr<T> = T | T[]

export type Params = OneOrArr<string>