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
	siteTitle: 'Izrada modernih web stranica – brzo, povoljno, uz podršku!',
	siteDescription:
		'Izrada modernih i brzih web stranica. Besplatno savjetovanje i tehnička podrška za vaše prve digitalne korake. WebLifeSupport – vaš web stručnjak!',
	ogImage: '/logo.svg',
	logo: {
		src: '/logo.svg',
		alt: 'Web Life Support logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
