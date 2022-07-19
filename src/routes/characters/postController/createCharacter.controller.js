const createCharacterController = async (req, res, next) => {
	try {
		res.status(200).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = createCharacterController;
