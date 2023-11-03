define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {

			/**
			 * Roblox
			 */

			'close()': {
				insertText: 'close(${1:thread})',
				documentation: {
					value: [
						'```lua', 'bool|Variant<string, void> close(thread)', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#close)',
					].join('\n')
				},
			},

			'create()': {
				insertText: 'create(${1:function})',
				documentation: {
					value: [
						'```lua', 'thread create(function)', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#create)',
					].join('\n')
				},
			},

			'isyieldable()': {
				insertText: 'isyieldable()',
				documentation: {
					value: [
						'```lua', 'bool isyieldable()', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#isyieldable)',
					].join('\n')
				},
			},

			'resume()': {
				insertText: 'resume(${1:thread})',
				documentation: {
					value: [
						'```lua', 'bool|Variant<Tuple, string> resume(thread, [...args])', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#resume)',
					].join('\n')
				},
			},

			'running()': {
				insertText: 'running()',
				documentation: {
					value: [
						'```lua', 'thread running()', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#running)',
					].join('\n')
				},
			},

			'status()': {
				insertText: 'status(${1:thread})',
				documentation: {
					value: [
						'```lua', 'string status(thread)', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#status)',
					].join('\n')
				},
			},

			'wrap()': {
				insertText: 'wrap(${1:function})',
				documentation: {
					value: [
						'```lua', 'function wrap(function)', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#wrap)',
					].join('\n')
				},
			},

			'yield()': {
				insertText: 'yield(${1:...args})',
				documentation: {
					value: [
						'```lua', 'Tuple<Variant> yield(...args)', '```',
						'',
						'[View documents](https://create.roblox.com/docs/reference/engine/libraries/coroutine#yield)',
					].join('\n')
				},
			},
		},
	};
});