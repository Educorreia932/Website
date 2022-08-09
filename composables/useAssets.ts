export default function useAssets() {
	const images = import.meta.globEager('/assets/images/**');

	return {
		images,
	};
}