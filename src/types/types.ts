type Difficulty = "Easy" | "Medium" | "Hard";

export type Recipe = {
  id: number;
  name: string;
  image: string;
  difficulty: Difficulty;
  cuisine: string;
  mealType: string[];
  tags: string[];
  caloriesPerServings: number;
  servings: number;
  cookTimeMinutes: number;
  instructions: string[];
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  userId: number;
};
