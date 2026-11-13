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
		text: "nav.home",
		link: "/",
	},
	{
		text: "nav.breathwork",
		link: "/breathwork/",
	},
	{
		text: "nav.photographie",
		link: "/photographie/",
	},
];

export default navConfig;
