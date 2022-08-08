export default function useAssets() {
	const images = import.meta.glob('/assets/images/**');

	return {
		images,
	};
}