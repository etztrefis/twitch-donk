module.exports = {
	Name: "join",
	Author: "trefis",
	Cooldown: 5000,
	Aliases: ["join"],
	Date: "11/21/2020, 11:31:07 PM",
	Description:
		"Bot joins to the channel, that indicated as argument of the command.",
	Code: async function join(database, ctx, client) {
		try {
			const data = await database.query(
				`SELECT * FROM Channels WHERE Channel = "${ctx}"`
			);
			if (data[0].length >= 1) {
				return `Already joined.`;
			} else {
				database.query(
					`INSERT INTO Channels (Channel) VALUES ("${ctx}")`
				);
				try {
					client.join(ctx);
				} catch (error) {
					console.log("Error: timed out Okayeg");
				}
				return `Done.`;
			}
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},
};
