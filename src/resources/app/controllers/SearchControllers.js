class SearchController {
  // [Get => Search]
  index(req, res) {
    res.render('search');
  }
}

module.exports = new SearchController();
