import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';
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
				url: '/home/example-pages',
				name: 'Example Pages',
				description: 'a list of example pages showcasing how to implement the IdentityNow SDK.',
				icon: ReportsSvg
			},
			{
				url: '/home/example-form',
				name: 'Example Form',
				description: 'A form example using the IdentityNow SDK.'
			},
			{
				url: '/home/form-integration',
				name: 'SailPoint Form Integration',
				description: 'A form example using the IdentityNow SDK.'
			}
		]
	}
];
