// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'WLS.',
		aboutText: 'Izrada web stranica po Vašoj mjeri. Fokusirani smo na male poduzetnike i hobiste.',
		logo: {
			src: '/logo.svg',
			alt: 'Web life support',
			text: 'Web-Life Support.'
		}
	},
	footerColumns: [
		{
			category: 'O nama',
			subCategories: [
				{
					subCategory: 'Opći uvjeti',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Politika privatnosti',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Impressum',
					subCategoryLink: '/'
				}
			]
		},
		{
			category: 'Ostalo',
			subCategories: [
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Cjenik',
					subCategoryLink: '/cjenik'
				}
			]
		},

		{
			category: 'Kontakt',
			subCategories: [
				{
					subCategory: 'Upitnik',
					subCategoryLink: '/kontakt'
				},
				{
					subCategory: 'Mobitel',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Whatsapp',
					subCategoryLink: '/'
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© WLS ${new Date().getFullYear().toString()}.`
	}
}
