define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	const domain = 'https://scriptblox.com/api';
	
	const default_headers = {
        'Accept': 'application/json',
		'Access-Control': '*',
		'Content-Type': 'application/json'
    };

	async function pend_response(url) {
		const key = crypto.randomUUID();
		let _data;
		exports[key] = function(data) {
			_data = data;
			exports[key] = undefined;
		}

		CefSharp.PostMessage(`request:${url}|"${key}"|ScriptBlox`);

		while (typeof exports[key] === 'function') await wait(.1);

		return _data;
	}

    function request(url, headers = {}, method = 'GET', data = undefined) {
        return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.open(method, url);

			xhr.onload = async function(r) {
				r = r.target;

				if (r?.status === 200) return resolve(r.response || r.responseText);

				reject();
			}

			xhr.onabort = xhr.onerror = xhr.ontimeout = reject;

			for (const [key, value] of Object.entries(Object.assign(headers, default_headers))) {
				try {
					xhr.setRequestHeader(key, value);
				} catch { }
			}

			xhr.send(data);
        });
    }

    request.get = (url) => request(url);

	const wait = (n = 0) => new Promise(resolve => setTimeout(resolve, n * 1e3));

	async function getscript(id) {
		// const data = JSON.parse(await request.get(`${domain}/script/${id}`));
		const data = await pend_response(`${domain}/script/${id}`);
		const loadstring = data?.script?.script;
		if (typeof loadstring !== 'string' || !loadstring) throw new Error('not a script');

		return { loadstring, tags: (data.script.tags || []).map(o => o.name), owner_name: data.script.owner.username, owner_pfp: `https://scriptblox.com${data.script.owner.profilePicture}` };
	}

	// async function getscriptsbysearch(content = '', max = 40) {

	// }

	// async function parse_scripts
	exports.request = request;

	exports.get = async function (n = 1) {
		const data = (await pend_response(`${domain}/script/fetch?page=${n}`))?.result;
		console.log(JSON.stringify(data));
		const length = data.scripts.length;
		let count = 0;
		// let now = Date.now();

		const scripts = []

		for (const script of data.scripts) {
			setTimeout(async () => {
				try {
					const { loadstring, owner_name, owner_pfp, tags } = await getscript(script._id || script.id);
					scripts.push({
						patched: !!script.isPatched,
						universal: !!script.isUniversal,
						key: !!script.key,
						type: script.scriptType,
						verified: !!script.verified,

						title: script.title || 'N/A',
						gamename: script.game.name,
						script: loadstring,
						thumbnail: `https://scriptblox.com${script.game.imageUrl}`,
						createdAt: new Date(script.createdAt).toLocaleString(),
						tags,

						owner_name,
						owner_pfp
					});
				} catch (e) {
					console.error(`ripperoni ${e}`);
				} finally {
					count++;
				}
			});
		}

		while (length !== count) await wait(.2);
		// console.log(`Done in ${Date.now() - now} ms`);
		// console.log(scripts, length, count);

		return JSON.stringify(scripts);
	}

	exports.search = async function (s = '') {
		const data = (await pend_response(`${domain}/script/search?q=${encodeURIComponent(s)}`)).result;
		const length = data.scripts.length;
		let count = 0;
		// let now = Date.now();

		const scripts = []

		for (const script of data.scripts) {
			setTimeout(async () => {
				try {
					const { loadstring, owner_name, owner_pfp, tags } = await getscript(script._id || script.id);
					scripts.push({
						patched: !!script.isPatched,
						universal: !!script.isUniversal,
						key: !!script.key,
						type: script.scriptType,
						verified: !!script.verified,

						title: script.title || 'N/A',
						gamename: script.game.name,
						script: loadstring,
						thumbnail: `https://scriptblox.com${script.game.imageUrl}`,
						createdAt: new Date(script.createdAt).toLocaleString(),
						tags,

						owner_name,
						owner_pfp
					});
				} catch (e) {
					console.error(e);
				} finally {
					count++;
				}
			});
		}

		while (length !== count) await wait(.2);
		return JSON.stringify(scripts);
	}
});