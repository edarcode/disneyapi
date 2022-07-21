module.exports = {
	destroyTuple: async ({ id, model }) => {
		const isDestroy = await model.destroy({ where: { id } });
		return isDestroy; /* return 0 o 1 */
	}
};
