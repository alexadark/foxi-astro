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
		title: 'Foxi.',
		aboutText:
			'Cutzai is your partner in digital innovation, blending a decade of front-end expertise with cutting-edge AI technology. We empower digital agencies to optimize workflows, enhance creativity, and deliver unparalleled value to clients. Our mission: to help you work smarter, grow faster, and stay ahead in the digital revolution.',
		logo: {
			src: '/logo.svg',
			alt: 'Cutxai logo',
			text: 'Cutzai.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© Cutzai ${new Date().getFullYear()}.`
	}
}
