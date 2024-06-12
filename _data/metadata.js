let data = {
	username: "michaelsbecker", // No leading @ here
	homeLabel: "tweets.msb.fyi",
	homeUrl: "https://tweets.msb.fyi/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;