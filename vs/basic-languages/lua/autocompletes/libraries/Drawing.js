define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const { CompletionItemKind } = monaco.languages;

	exports.autocompletes = {
		"Function": {
			'new': {
				kind: CompletionItemKind.Function,
				insertText: 'new("${1}")',
				label: 'new()',
				documentation: {
					value: [
						'```lua', 'function new(type: string)\n  -> Instance', '```',
						'',
						'Creates a new object of type val. The parent argument is optional; If it is supplied, the object will be parented to that object',
						'',
						'',
						'```lua', 'type: string\n   | "Line"\n   | "Text"\n   | "Image"\n   | "Circle"\n   | "Square"\n   | "Quad"\n   | "Triangle"', '```',
					].join('\n')
				},
				command: { title: "Lua", id: "editor.action.triggerSuggest" },

				__children__: {},
				__using__: ['params/DrawingTypes'],
			}
		},

		"Field": {
			'Fonts': {
				label: {
					kind: monaco.languages.CompletionItemKind.Enum,
					name: 'Fonts',
					type: '(Drawing.Fonts)',
				},

				__children__: {
					Field: {
						UI: {
							kind: CompletionItemKind.EnumMember,
							label: {
								name: "UI",
								type: "(number)"
							},
							documentation: {
								value: 'Drawing.Fonts.UI -> 0'
							}
						},
						System: {
							kind: CompletionItemKind.EnumMember,
							label: {
								name: "System",
								type: "(number)"
							},
							documentation: {
								value: 'Drawing.Fonts.System -> 1'
							}
						},
						Plex: {
							kind: CompletionItemKind.EnumMember,
							label: {
								name: "Plex",
								type: "(number)"
							},
							documentation: {
								value: 'Drawing.Fonts.Plex -> 2'
							}
						},
						Monospace: {
							kind: CompletionItemKind.EnumMember,
							label: {
								name: "Monospace",
								type: "(number)"
							},
							documentation: {
								value: 'Drawing.Fonts.Monospace -> 3'
							}
						},
					}
				}
			},
		}
	}
});