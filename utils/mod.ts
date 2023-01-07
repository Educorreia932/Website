const mod = (n: number, m: number) => {
	const remain = n % m;

	return Math.floor(remain >= 0 ? remain : remain + m);
};

export default mod;