import db from '../models';

const { recipes, reviews } = db;

export default {
  create(req, res) {
    const { user } = req.decoded;
    recipes.find({
      where: { id: req.params.recipeId }
    })
      .then((found) => {
        if (!found) {
          res.status(400).json({
            message: 'recipe unavailable'
          });
        }
      });
    return reviews
      .create({
        recipeID: req.params.recipeId,
        userId: user.id,
        reviews: req.body.reviews.trim()
      })
      .then(data => res.status(200).json({
        status: 'success',
        message: 'Your recipe has been reviewed',
        data: {
          userId: data.userId,
          recipeId: data.recipeID,
          review: data.reviews
        }
      }))
      .catch(error => res.status(400).json({
        error: error.message
      }));
  },

  list(req, res) {
    return reviews
      .findAll({
        where: { recipeId: req.params.recipeId }
      })
      .then(() => {
        if (reviews.length < 1) {
          res.status(404).json({
            message: 'No review found'
          });
        } else {
          res.status(200).json(reviews);
        }
      })
      .catch(error => res.status(404).json(error));
  }
};
