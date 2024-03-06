import { goto } from '$app/navigation';
import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';

export function formatDate(date: string | null | undefined) {
	if (!date) return 'N/A';
	return new Date(date).toLocaleString();
}

export function getLimit(url: URL) {
	return url.searchParams.get('limit') || '5';
}

export function getFilters(url: URL) {
	return url.searchParams.get('filters') || '';
}

export function getSorters(url: URL) {
	return url.searchParams.get('sorters') || '';
}

export function getPage(url: URL) {
	return url.searchParams.get('page') || '0';
}

export function getPaginationParams(url: URL) {
	return {
		limit: getLimit(url),
		page: getPage(url),
		filters: getFilters(url),
		sorters: getSorters(url)
	};
}

type PaginationParams = {
	limit: string;
	page: string;
	filters: string;
	sorters: string;
};

export function createOnPageChange(params: PaginationParams, path: string) {
	return function onPageChange(e: CustomEvent): void {
		const urlParams = new URLSearchParams();
		urlParams.set('page', e.detail);
		urlParams.set('limit', params.limit);
		urlParams.set('sorters', params.sorters);
		urlParams.set('filters', params.filters);

		console.log(`${path}?${urlParams.toString()}`);

		goto(`${path}?${urlParams.toString()}`);
	};
}

export function createOnAmountChange(params: PaginationParams, path: string) {
	return function onAmountChange(e: CustomEvent): void {
		const urlParams = new URLSearchParams();
		urlParams.set('page', params.page);
		urlParams.set('limit', e.detail);
		urlParams.set('sorters', params.sorters);
		urlParams.set('filters', params.filters);

		console.log(`${path}?${urlParams.toString()}`);

		goto(`${path}?${urlParams.toString()}`);
	};
}

export function createOnGo(params: PaginationParams, path: string) {
	return function onGo(e: KeyboardEvent | MouseEvent): void {
		if (e.type !== 'click' && (e as KeyboardEvent).key !== 'Enter') return;

		const urlParams = new URLSearchParams();
		if (params.page != '') urlParams.set('page', params.page);
		if (params.limit != '') urlParams.set('limit', params.limit);
		if (params.sorters != '') urlParams.set('sorters', params.sorters);
		if (params.filters != '') urlParams.set('filters', params.filters);

		console.log(`${path}?${urlParams.toString()}`);

		goto(`${path}?${urlParams.toString()}`);
	};
}

export function capitalize(s: string) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export function TriggerCodeModal(object: unknown, modalStore: ModalStore) {
	const modal: ModalSettings = {
		type: 'component',
		component: 'codeBlockModal',
		meta: {
			code: JSON.stringify(object, null, 4),
			language: 'json'
		}
	};

	modalStore.trigger(modal);
}

export function parseInitials(name: string) {
	const initials = name.match(/\b(\w)/g) || ['A', 'U'];
	return initials.join('');
}
