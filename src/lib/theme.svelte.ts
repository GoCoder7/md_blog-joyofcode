import { browser } from '$app/environment';

export const theme = () => {
	type Theme = 'light' | 'dark';
	const theme = browser ? (localStorage.getItem('color-scheme') as Theme) : 'dark';
	let userTheme = $state(theme);
	const toggleTheme = () => {
		userTheme = userTheme === 'light' ? 'dark' : 'light';
		localStorage.setItem('color-scheme', userTheme);
		document.documentElement.setAttribute('color-scheme', userTheme);
	};

	const setTheme = (newTheme: Theme) => {
		localStorage.setItem('color-scheme', newTheme);
		document.documentElement.setAttribute('color-scheme', newTheme);
	};
	return {
		get userTheme() {
			return userTheme;
		},
		toggleTheme,
		setTheme
	};
};
