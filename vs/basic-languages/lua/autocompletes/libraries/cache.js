define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Function: {
			'invalidate': {
				insertText: 'invalidate(${1: Instance})',
			},
			'replace': {
				insertText: 'replace(${1: Instance}, ${2: Instance})',
			},
			'iscached': {
				insertText: 'iscached(${1: Instance})'
			}
		},
	};
});