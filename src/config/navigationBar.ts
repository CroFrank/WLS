export interface Logo {
	src: string
	alt: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Web Life Support logo'
	},
	navItems: [
		{ name: 'Naslovnica', link: '/' },
		{ name: 'Cjenik', link: '/cjenik-izrade-web-stranice' },
		{ name: 'Blog', link: '/blog' },
		{
			name: 'Ostalo',
			submenu: [
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Opći uvjeti', link: '/terms' }
			],
			link: '#'
		},
		{ name: 'Kontakt', link: 'kontakt-za-izradu-web-stranice' }
	],
	navActions: [{ name: 'Upitnik', link: 'upitnik', style: 'primary', size: 'lg' }]
}
