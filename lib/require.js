const dispatchMap = new WeakMap()

module.exports = function RequireMod(dispatch, path) {
	const Mod = require(path),
		base = dispatch.base

	let modMap = dispatchMap.get(base)
	if(!modMap) dispatchMap.set(base, modMap = new Map())

	let instance = modMap.get(Mod)
	if(!instance) modMap.set(Mod, instance = new Mod(dispatch))

	return instance
}