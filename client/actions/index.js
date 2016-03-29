// Define an action type, it's used for reducer switching
export const WELCOME = 'WELCOME';

// Define the corresponding action creator, must return an object
export function getStarted() {
	return {
		type: WELCOME
	};
}
