const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const bodyParser = require('body-parser');
/**
 * App Routes 
*/
router.use(bodyParser.json());
var urlencoded_body_parser = bodyParser.urlencoded({
  extended: true
});
router.use(urlencoded_body_parser);
router.get('/', recipeController.homepage);;
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

router.get('/admin/recipe', recipeController.exploreRecipeAdmin);
router.get('/admin/categories', recipeController.exploreCategoriesAdmin);
router.get('/admin/login', recipeController.AdminLogin);
router.post('/admin/categories/add', recipeController.addCategories);
router.get('/admin/categories/delete/:id', recipeController.deleteCategoriesById);
module.exports = router;