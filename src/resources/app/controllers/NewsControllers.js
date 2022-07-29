class NewsController {
  // [Get => news]
  index(req, res) {
    res.render('news');
  }

  show() {
    res.render('nfdf');
  }
}
module.exports = new NewsController();
