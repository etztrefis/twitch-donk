INSERT INTO Commands 

(
    Name,
    Author,
    Cooldown,
    Aliases, 
    Date, 
    Description,
    Code
)

VALUES

(
    "vanish",
	"trefis",
	null,
	"vanish, vanishme",
	"11/2/2020, 7:56:08 PM",
    "Times out user for 1 second. Only works if FeelsOkayegBot is a twitch moderator.",
	"async function vanish(context) {
		if (context.badges.hasModerator) {
			return `I cannot time moderators out! monkaS`;
		} else if (context.badges.hasBroadcaster) {
			return `Why are you trying to vanish in your own channel? 4Head`;
		} else if (context.badges.hasStaff) {
			return 'I cannot time Twitch staff out! monkaS';
		} else if (context.badges.hasGlobalMod) {
			return { reply: 'I cannot time global moderators out! monkaS' };
		} else if (context.badges.hasAdmin) {
			return { reply: 'I cannot time Twitch administrators out! monkaS' };
		} else {
			return `/timeout ${context.displayName} 1 vanished`;
		}
	},"
)
