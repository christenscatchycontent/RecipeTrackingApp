/* Import react*/
import React from "react";

/* Function to View Recipe */
function RecipeView({recipe, RecipeDelete}) {
  return (
        <tr className="row">
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td className="photoFit">
            <img src={recipe.photo} alt="" className="photoFit"/>
          </td>
          <td className="content_td"><p>{(recipe.ingredients)}</p></td>
          <td className="content_td"><p>{(recipe.preparation)}</p></td>
          <td>
            <button name="delete" onClick={RecipeDelete}>Delete</button>
          </td>
        </tr>
  )}
/* Function for Recipe List */
function RecipeList({recipes, RecipeDelete}) {
  const rows = recipes.map((recipe, index) => (
    <RecipeView
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}/>
  )) 
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
          {rows}
        </tbody>
      </table>
    </div>
  )}

export default RecipeList;