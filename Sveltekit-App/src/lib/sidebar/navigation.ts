import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';
import MessagesSvg from '$lib/Components/SVGs/MessagesSVG.svelte';
import ReportsSvg from '$lib/Components/SVGs/ReportsSVG.svelte';

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
				url: '/home/Example Pages',
				name: 'Reports',
				description: 'a list of example pages showcasing how to implement the IdentityNow SDK.',
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
