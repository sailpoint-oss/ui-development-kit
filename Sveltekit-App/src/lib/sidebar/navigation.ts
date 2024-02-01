import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';
import IdentitiesSvg from '$lib/Components/SVGs/IdentitiesSVG.svelte';
import MessagesSvg from '$lib/Components/SVGs/MessagesSVG.svelte';
import ReportsSvg from '$lib/Components/SVGs/ReportsSVG.svelte';
import SourcesSvg from '$lib/Components/SVGs/SourcesSVG.svelte';

export const navigation = [
	{
		name: 'Main',
		content: [
			{
				url: '/home',
				name: 'Home',
				description: 'Home page for the application.',
				icon: HomeSvg
			},
			{
				url: '/home/sources',
				name: 'Sources',
				description: 'a list of Sources in IdentityNow.',
				icon: SourcesSvg
			},
			{
				url: '/home/identities',
				name: 'Identities',
				description: 'a list of Identities in IdentityNow.',
				icon: IdentitiesSvg
			},
			{
				url: '/home/reports',
				name: 'Reports',
				description: 'a list of Reports for IdentityNow.',
				icon: ReportsSvg
			},
			{
				url: '/home/courier',
				name: 'Courier',
				description: 'an API client for IdentityNow with authentication baked right in.',
				icon: MessagesSvg
			}
		]
	}
];
