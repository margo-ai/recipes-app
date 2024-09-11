export type TDifficulty = "Easy" | "Medium" | "Hard";

export type TRecipe = {
  id: number;
  name: string;
  image: string;
  difficulty: TDifficulty;
  cuisine: string;
  mealType: string[];
  tags: string[];
  caloriesPerServing: number;
  servings: number;
  cookTimeMinutes: number;
  instructions: string[];
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  userId: number;
};

export type TTransformedRecipe = {
  id: number;
  name: string;
  image: string;
  description: string;
  instructions: string[];
  cookingTime: number;
  preparingTime: number;
  servings: number;
  difficulty: TDifficulty;
  cuisine: string;
  mealType: string[];
  tags: string[];
  caloriesPerServing: number;
};
