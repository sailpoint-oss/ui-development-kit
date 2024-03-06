export const tenantLinks: { label: string; slug: string }[] = [
	{ label: '🔑 Grant Tenant Access', slug: '/ui/a/admin/global/grant-tenant-access' },
	{
		label: '🏠 Dashboard',
		slug: '/ui/admin#admin:dashboard:overview'
	},
	{ label: '🙂 Identity Profiles', slug: '/ui/admin#admin:identities:profiles' },
	{ label: '📋 Identity List', slug: '/ui/a/admin/identities/all-identities' },
	{ label: '🎭 Access Profiles', slug: '/ui/a/admin/access/access-profiles/landing' },
	{ label: '📦 Roles', slug: '/ui/a/admin/access/roles/landing-page' },
	{ label: '🔗  Sources', slug: '/ui/a/admin/connections/sources-list/configured-sources' },
	{
		label: '💻 Virtual Appliances',
		slug: '/ui/a/admin/connections/virtual-appliances/clusters-list'
	}
];

export const resourcelinks: { label: string; href: string }[] = [
	{
		label: '💁 Developer Community',
		href: 'https://developer.sailpoint.com/discuss/'
	},
	{ label: '📖 API Documentation', href: 'https://developer.sailpoint.com/idn/api/v3' },
	{ label: '💻 CLI Documentation', href: 'https://developer.sailpoint.com/idn/tools/cli' },
	{
		label: '🔌 Connector Reference',
		href: 'https://community.sailpoint.com/t5/IdentityNow-Connectors/IdentityNow-Connectors/ta-p/80019'
	},
	{
		label: '🧮 Transform Guides',
		href: 'https://community.sailpoint.com/t5/Search/bd-p/search?searchString=%22IdentityNow+Transforms+-%22'
	},
	{
		label: '📚 Rules Documentation',
		href: 'https://developer.sailpoint.com/idn/docs/rules/'
	},
	{
		label: '🔒 User Level Access Matrix',
		href: 'https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html'
	}
];

export const supportLinks: { label: string; href: string }[] = [
	{
		label: '🎫 Submit a ticket',
		href: 'https://support.sailpoint.com/csm?id=sc_cat_item&sys_id=a78364e81bec151050bcc8866e4bcb5c&referrer=popular_items'
	},
	{
		label: '🔭  Scope of SaaS Support',
		href: 'https://community.sailpoint.com/t5/IdentityNow-Wiki/What-is-supported-by-SaaS-Support/ta-p/198779'
	},
	{ label: '🔖  Support Knowledge Base', href: 'https://support.sailpoint.com/' }
];
