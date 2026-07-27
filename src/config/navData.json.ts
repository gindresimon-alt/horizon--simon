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

// Simple and clear menu: Home, Real Estate, Pros & Events, Portraits, Portfolio, About, Contact
const navConfig: navItem[] = [
	{
		text: "nav.home",
		link: "/",
	},
	{
		text: "nav.immobilier",
		link: "/immobilier/",
	},
	{
		text: "nav.portfolio",
		link: "/portfolio/",
	},
	{
		text: "nav.about",
		link: "/about/",
	},
	{
		text: "nav.contact",
		link: "/contact/",
	},
];

export default navConfig;
