import {db} from '../models/recipes';

class Recipe{
  addRecipe(req, res) {
    const {recipeName, description, name} = req.body;
    if (!recipeName){ 
        return res.status(400).send({message: 'supply recipe'});
    }
    if (!description){
      return res.status(400).send({message: 'Description your recipe'});
    }
    if (!name){
      return res.status(400).send({message: 'Input a valid name'});
    }
    
      let newRecipe = {
        name: name,
        recipeName: recipeName,
        description: description,
      }
    db.recipes.push(newRecipe);
    res.status(200)
      .send(newRecipe);
    }

  getRecipe(req, res) {
      res.status(200).send(db.recipes);
    }



  deleteRecipe(req, res) {
    for (let i = 0; i < db.recipes.length; i++) {
      if (parseInt(db.recipes[i].id, 10) === parseInt(req.params.Id, 10)){
        db.recipes.splice(i, 1);
        return res.status(200).json({
          status: "success",
          message: "Recipe Deleted",
          recipe: db.recipes[i]


        })
      }
    }
    return res.status(404).send({
      message: 'Recipe Not found!'
    });    
}

put(req, res) {
  let id = req.params.Id;
  if (!id){
    return res.status(404).json({
    message: 'Recipe Not found!'
  });
  const { recipeName, description, name } = req.body;
  for (let i = 0; i < db.recipes.length; i++) {
    if (db.recipes[i].id === parseInt(id, 10)){
      db.recipes[i].userId = userId || db.recipes[i].userId;
      db.recipes[i].Name = Name || db.recipes[i].Name;
      db.recipes[i].recipeName = recipeName || db.recipes[i].recipeName;
      db.recipes[i].description = description || db.recipes[i].description;
      return res.status(200).send(db.recipes[i]);   
    } 
  }
  return res.status(404).send('incomplete data')
}

    
}
}
  
export {Recipe};

