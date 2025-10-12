import { Flex, Text, Button } from "@radix-ui/themes";
import { poem, recipes } from '../../lib/data';
import ToolbarDemo from './Componies/toolbar';


export function Poem() {
  let output = [];
  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();
  return (
    <article>
      <ToolbarDemo/>
      {output}
      <hr></hr>
    </article>
  );
}


export function NestedRecipes() {
    return (
        <Flex>
        <Button>Nested Recipes</Button>  
            {recipes.map(recipe =>
            <div key={recipe.id}>
                <h2>{recipe.name}</h2> 
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                        <li key={ingredient}>
                            <Text>{ingredient}</Text>
                        </li>
                        )} 
                    </ul> 
            </div>
            )}  
        </Flex>
    );
}

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export function ExtractedRecipes() {
  return (
    <div>
      <h1>Extracted Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}