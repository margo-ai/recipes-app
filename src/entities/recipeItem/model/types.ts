import { TDifficulty } from "../../../shared/types/types";

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
