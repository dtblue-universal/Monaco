define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {

			'charpattern': {
				label: {
					name: 'charpattern',
					type: '(string)',
				},
				documentation: {
					value: [
						'The pattern "[%z\\x01-\\x7F\\xC2-\\xF4][\\x80-\\xBF]*", which matches exactly zero or more UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},
		},

		Function: {

			/**
			 * Roblox
			 */

			'char()': {
				insertText: 'char(${1:codepoints})',
				documentation: {
					value: [
						'```lua', 'function char(codepoints: Tuple<number>): string', '```',
						'',
						'Converts zero or more codepoints to UTF-8 byte sequences.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'codes()': {
				insertText: 'codes(${1:str})',
				documentation: {
					value: [
						'```lua', 'function codes(str: string): function', '```',
						'',
						'Returns an iterator function that iterates over all codepoints in a given string.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'codepoint()': {
				insertText: 'codepoint(${1:string}, ${2:number}, ${3:number})',
				documentation: {
					value: [
						'```lua', 'function codepoint(str: string, i: number, j: number): Tuple<number>', '```',
						'',
						'Returns the codepoints (as integers) from all codepoints in a given string.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'len()': {
				insertText: 'len(${1:string}, ${2:number}, ${3:number})',
				documentation: {
					value: [
						'```lua', 'function len(s: string, i: number, j: number): number', '```',
						'',
						'Returns the number of UTF-8 codepoints in a given string.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'offset()': {
				insertText: 'offset(${1:string}, ${2:number}, ${3:number})',
				documentation: {
					value: [
						'```lua', 'function offset(s: string, n: number, i: number): number', '```',
						'',
						'Returns the position (in bytes) where the encoding of the n-th codepoint of s (counting from byte position i) starts.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'graphemes()': {
				insertText: 'graphemes(${1:string}, ${2:number}, ${3:number})',
				documentation: {
					value: [
						'```lua', 'function graphemes(str: string, i: number, j: number): function', '```',
						'',
						'Returns an iterator function that iterates over the grapheme clusters of a given string.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'nfcnormalize()': {
				insertText: 'nfcnormalize(${1:string})',
				documentation: {
					value: [
						'```lua', 'function nfcnormalize(str: string): string', '```',
						'',
						'Converts the input string to Normal Form C.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},

			'nfdnormalize()': {
				insertText: 'nfdnormalize(${1:string})',
				documentation: {
					value: [
						'```lua', 'function nfdnormalize(str: string): string', '```',
						'',
						'Converts the input string to Normal Form D.',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/utf8)',
					].join('\n')
				},
			},
		},
	};
});