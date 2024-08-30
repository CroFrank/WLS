// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Web Life Support',
	siteDescription:
		'Izrada brzih i modernih web stranica za male poduzetnike i startupove. Predstavite svoje ideje svijetu uz pomoć najnovijih tehnologija. Kontaktirajte nas danas!',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
