const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../ulti/mongoose');

class SiteController {
  // [Get]/
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     next(err);
    //   }
    // });

    Course.find({})
      .then((courses) =>
        // res.json(courses)
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  search(req, res) {
    res.render('search');
  }
  news(req, res) {
    res.render('news');
  }
}
module.exports = new SiteController();
