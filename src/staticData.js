const staticData = {
	actions: {
		"Applied": ["Interviewing", "Rejected"],
		"Rejected": ["Undo"],
		"Interviewing": ["Offer", "Rejected", "Undo"],
		"Offer": ["Undo"]
	},

	conversions: {
		"Interviewing": "Interviewing",
		"Rejected": "Rejected",
		"Undo": "Applied",
		"Offer": "Offer"
	},

	emojis: {
		"Applied": "✏️",
		"Rejected": "😓",
		"Interviewing": "📞",
		"Offer": "💰"
	},

	isFiltered: {
		"Applied": true,
		"Rejected": true,
		"Interviewing": false,
		"Offer": true
	},

	stylesheet: {
		"Applied": { backgroundColor: "#ace7ff" },
		"Rejected": { backgroundColor: "#ffabab" },
		"Interviewing": { backgroundColor: "#ffffb5" },
		"Offer": { backgroundColor: "#bffcc6" }
	},

	buttonStylesheet: {
		"Applied": {
			border: "none",
			fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
			color: "#333333",
			marginLeft: ".25em",
			marginRight: ".25em",
			marginTop: ".5em",
			fontSize: "calc(5px + 2vmin)",
			padding: ".25em",
			paddingRight: ".5em",
			paddingLeft: ".3em",
			borderRadius: "0.2em",
			fontWeight: "bold",
			backgroundColor: "#97cadf"
		},
		"Rejected": {
			border: "none",
			fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
			color: "#333333",
			marginLeft: ".25em",
			marginRight: ".25em",
			marginTop: ".5em",
			fontSize: "calc(5px + 2vmin)",
			padding: ".25em",
			paddingRight: ".5em",
			paddingLeft: ".3em",
			borderRadius: "0.2em",
			backgroundColor: "#df9696",
			fontWeight: "bold"
		},
		"Interviewing": {
			border: "none",
			fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
			color: "#333333",
			marginLeft: ".25em",
			marginRight: ".25em",
			marginTop: ".5em",
			fontSize: "calc(5px + 2vmin)",
			padding: ".25em",
			paddingRight: ".5em",
			paddingLeft: ".3em",
			borderRadius: "0.2em",
			fontWeight: "bold",
			backgroundColor: "#dfdf9e"
		},
		"Offer": {
			border: "none",
			fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
			color: "#333333",
			marginLeft: ".25em",
			marginRight: ".25em",
			marginTop: ".5em",
			fontSize: "calc(5px + 2vmin)",
			padding: ".25em",
			paddingRight: ".5em",
			paddingLeft: ".3em",
			borderRadius: "0.2em",
			fontWeight: "bold",
			backgroundColor: "#a7ddad"
		}
	}
}

export default staticData
