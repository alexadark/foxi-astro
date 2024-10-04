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
	siteTitle: 'Cutzi: AI Automation for Digital Agencies',
	siteDescription:
		'Revolutionize your digital agency with cutting-edge AI automation and expert front-end development. Cutzai brings you the perfect blend of innovative technology and seasoned expertise to elevate your projects and skyrocket your efficiency.',
	ogImage: '/og-2.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Cutzi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
