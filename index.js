//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config();
const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const transporter = require("./src/config/nodemailer.js");
const { fillGenres } = require("./src/utils/fillGenres.js");
const { fillFilm } = require("./src/utils/fillFilm.js");
const { fillCharacter } = require("./src/utils/fillCharacter.js");
const { PORT, SYNC_DB } = process.env;
let force = null;
if (SYNC_DB === "false") force = false;
if (SYNC_DB === "true") force = true;
// Syncing all the models at once..
conn.sync({ force }).then(() => {
	server.listen(PORT, async () => {
		try {
			await transporter.verify();
			await fillGenres();
			await fillFilm();
			await fillCharacter();
			console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
		} catch (error) {
			console.log(error);
		}
	});
});
