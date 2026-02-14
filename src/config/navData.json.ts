export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "nav.photographie",
		link: "/photographie/",
	},
	{
		text: "nav.therapie",
		link: "/therapie/",
	},
	{
		text: "nav.articles",
		link: "/articles/",
	},
	{
		text: "nav.about",
		link: "/about/", // Changed from /#about
	},
	{
		text: "nav.contact",
		link: "/contact/",
	},
];

export default navConfig;
