import React from "react";

import image from "../../assets/card-image.png";
import icon from "../../assets/time-icon.svg";
import filledStar from "../../assets/filled-star-icon.svg";
import notFilledStar from "../../assets/star-icon.svg";

import "./recipesList.scss";

type Props = {
  difficulty: "Easy" | "Medium" | "Hard";
};

export const RecipesList = ({ difficulty }: Props) => {
  return (
    <div className="recipes">
      <div className="recipes__count">
        Найденные рецепты<span>299</span>
      </div>
      <div className="recipes__list list">
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
        <div className="list__item item">
          <div className="item__left">
            <div className="item__title">Наименование блюда </div>
            <div className="item__image">
              <img src={image} alt="Dish image" />
            </div>
          </div>
          <div className="item__right">
            <p className="item__description">
              Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху
              начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие
              продукты. Небольшую пиццу иногда называют пиццеттой.
            </p>
            <div className="item__time time">
              <div className="time__icon">
                <img src={icon} alt="Timer icon" />
              </div>
              <div className="time__text">30 минут</div>
            </div>
            <div className="item__difficulty difficulty">
              <div className="difficulty__text">Сложность:</div>
              {difficulty === "Easy" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : difficulty === "Medium" ? (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={notFilledStar} alt="Filled star" />
                  </div>
                </div>
              ) : (
                <div className="difficulty__stars">
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                  <div className="difficulty__star">
                    <img src={filledStar} alt="Filled star" />
                  </div>
                </div>
              )}
            </div>
            <div className="item__cuisine">Европейская кухня</div>
            <div className="item__meal-type">Завтрак, Обед, Ужин</div>
          </div>
        </div>
      </div>
    </div>
  );
};
