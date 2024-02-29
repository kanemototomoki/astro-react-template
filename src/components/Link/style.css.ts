import { style } from "@vanilla-extract/css";

export const container = style({
	padding: 10,
	transition: ".3s",
	border: "1px solid transparent",
	":hover": {
		opacity: 0.8,
		borderColor: "gray",
	},
});
