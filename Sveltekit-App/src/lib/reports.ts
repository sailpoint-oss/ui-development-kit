export const reports = [
	{
		url: '/home/reports/source-account-create-error',
		name: 'Source Account Create Error',
		description:
			'This report will show all source accounts for which there is a create error associated with the source'
	},
	{
		url: '/home/reports/inactive-identities-with-access',
		name: 'Inactive Identities With Access',
		description:
			'This report will show all identities that are inactive but still have access in sources'
	},
	{
		url: '/home/reports/missing-cloud-life-cycle-state',
		name: 'Missing Cloud Life Cycle State',
		description: 'This report will show all identities that are missing a cloud life cycle state'
	},

	{
		url: '/home/reports/source-owner-configured',
		name: 'Source Owner Configured',
		description: 'This report will show all sources and their configured owners'
	},
	{
		url: '/home/reports/source-aggregations',
		name: 'Source Aggregations',
		description: 'This report will show all sources and their most recent aggregation events'
	}
];
