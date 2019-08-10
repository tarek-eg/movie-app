
export interface Movie {
		"id": number,
		"key": string,
		"name": string,
		"description": string,
		"genres": Array<string>,
		"rate":string,
		"length": string,
		"img": string
};

export function generateMockMovie(): Movie {
	return {
		id: 1,
		key: "deadpool",
		name: "Deadpool",
		description: "desc",
		genres: [
			"action",
			"adventure",
			"comedy"
		],
		rate: "8.6",
		length: "1hr 48mins",
		img: "deadpool.jpg"
	}
  }


export enum GenreType {
	Action = "action",
	Adventure = "adventure",
	Biography = "biography",
	Comedy = "comedy",
	Crime = "crime",
	Drama = "drama",
	History = "history",
	Mystery = "mystery",
	Scifi = "scifi",
	Sport = "sport",
	Thriller = "thriller"
};
