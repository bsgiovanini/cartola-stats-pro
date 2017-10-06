export const SEARCH_TEAM = "SEARCH_TEAM";


export function searchTeam(text) {
	return {
		type: SEARCH_TEAM,
		text
	}
}