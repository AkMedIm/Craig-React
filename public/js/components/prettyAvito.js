webpackJsonp([0],{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(106);

var _Header = __webpack_require__(272);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(275);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(276);

var _Listings2 = _interopRequireDefault(_Listings);

var _Details = __webpack_require__(274);

var _Details2 = _interopRequireDefault(_Details);

var _Category = __webpack_require__(273);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Akdim"
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: "/:city", component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category/:listing", component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category/:listing/:item", component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(106);

var _axios = __webpack_require__(73);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedCityDropDown = function () {
      _this.setState({
        cityDropDown: !_this.state.cityDropDown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var city = _this.state.citiesData.filter(function (item) {
          return item.title == _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push("/" + city[0].slug);
      });
    };

    _this.loopCities = function () {
      return _this.state.citiesData.map(function (item, i) {
        return _react2.default.createElement(
          "li",
          { key: i, onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      cityDropDown: false,
      selectedCity: 'Marrakech',
      citiesData: []
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get("/api/cities").then(function (response) {
        var _self$props = self.props,
            match = _self$props.match,
            history = _self$props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        });
      }
      // () => { console.log(self.state);}
      // console.log(response.data);
      ).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "left-menu" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" + match.params.city, className: "logo" },
            "Pretty Avito"
          ),
          _react2.default.createElement("div", { className: "vertical" }),
          _react2.default.createElement(
            "div",
            { className: "citydropdown", onClick: this.clickedCityDropDown },
            this.state.selectedCity,
            " ",
            _react2.default.createElement("i", { className: "fa  " + (this.state.cityDropDown ? 'fa-chevron-up' : 'fa-chevron-down') }),
            _react2.default.createElement(
              "div",
              { className: "scroll-area " + (this.state.cityDropDown ? 'active' : '') + " " },
              _react2.default.createElement(
                "ul",
                null,
                this.loopCities()
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "right-menu" },
          _react2.default.createElement(
            "div",
            { className: "user-img" },
            _react2.default.createElement("i", { className: "fa fa-user-circle fa-2x", "aria-hidden": "true" }),
            " "
          ),
          _react2.default.createElement(
            "div",
            { className: "user-dropdown" },
            "My account ",
            _react2.default.createElement("i", { className: "fa fa-chevron-down" })
          ),
          _react2.default.createElement(
            "div",
            { className: "post-btn" },
            "post now!"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(73);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "categories" },
            _react2.default.createElement(
              "div",
              { className: "item" },
              _react2.default.createElement(
                "div",
                { className: "image", style: { "backgroundImage": "url('" + item.images[0] + "')" } },
                _react2.default.createElement(
                  "div",
                  { className: "price" },
                  item.price,
                  " DH"
                ),
                "image"
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "h5",
                  null,
                  item.title,
                  _react2.default.createElement("i", { className: "fa fa-star-o" }),
                  " "
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  item.city
                )
              )
            )
          );
        });
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.showMakeModel = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;

      if (match.params.listing == 'cars-and-trucks') {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: " form-group make" },
            _react2.default.createElement(
              "label",
              { htmlFor: "make" },
              "MAKE"
            ),
            _react2.default.createElement(
              "select",
              { name: "make", className: "make", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "bmw" },
                "BMW"
              ),
              _react2.default.createElement(
                "option",
                { value: "mclaren" },
                "McLaren"
              ),
              _react2.default.createElement(
                "option",
                { value: "tesla" },
                "Tesla"
              ),
              _react2.default.createElement(
                "option",
                { value: "maserati" },
                "Maserati"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " form-group model" },
            _react2.default.createElement(
              "label",
              { htmlFor: "model" },
              "MODEL"
            ),
            _react2.default.createElement(
              "select",
              { name: "model", className: "model", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "All Models" },
                "All Models"
              ),
              _react2.default.createElement(
                "option",
                { value: "x6" },
                "X6"
              ),
              _react2.default.createElement(
                "option",
                { value: "x2" },
                "X2"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " form-group miles" },
            _react2.default.createElement(
              "label",
              { htmlFor: "miles" },
              "Kilometers"
            ),
            _react2.default.createElement(
              "select",
              { name: "miles", className: "miles", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "50 Miles" },
                "8000 KM"
              )
            )
          )
        );
      }
    };

    _this.submitFilter = function () {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          select_view = _this$state.select_view,
          sort = _this$state.sort;
      // history.push( `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`)

      document.location.href = "/" + match.params.city + "/" + match.params.category + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view;
    };

    _this.state = {
      min_price: 0,
      max_price: 100000,
      select_view: 'gallery',
      sort: 'newest'
    };

    return _this;
  }

  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history,
          location = _props.location;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          select_view = queryParams.select_view,
          sort = queryParams.sort;

      if (queryParams.min_price != undefined) {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
          // console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
          // console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: " form-group price" },
              _react2.default.createElement(
                "label",
                { htmlFor: "price" },
                "PRICE"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "min_price", className: "min-price", onChange: this.handleChange, value: this.state.min_price },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "2000" },
                    "2000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "50000" },
                    "50000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "80000" },
                    "80000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "90000" },
                    "90000"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max_price", className: "max-price", onChange: this.handleChange, value: this.state.max_price },
                  _react2.default.createElement(
                    "option",
                    { value: "52650" },
                    "52650"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "100000" },
                    "100000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "1952650" },
                    "1952650"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "2952650" },
                    "2952650"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "3952650" },
                    "3952650"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "20462666" },
                    "20462666"
                  )
                )
              )
            ),
            this.showMakeModel(),
            _react2.default.createElement(
              "div",
              { className: " form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn", onClick: this.submitFilter },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: " form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select_view", className: "select-view", onChange: this.handleChange, value: this.state.gallery },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery view"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List view"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thumb" },
                      "Thumb view"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: " form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort", className: "sort-dropdown", onChange: this.handleChange, value: this.state.sort },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "oldest" },
                      "Oldest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(277);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _axios = __webpack_require__(73);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.showCarInfo = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;


      if (match.params.listing == 'cars-and-trucks') {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "car-info" },
            _react2.default.createElement(
              "div",
              { className: "date" },
              "Posted: Nov 27th "
            ),
            _react2.default.createElement(
              "h3",
              { className: "title" },
              item.title,
              _react2.default.createElement("i", { className: "fa fa-star-o" })
            ),
            _react2.default.createElement(
              "h4",
              { className: "price" },
              item.price
            ),
            _react2.default.createElement(
              "div",
              { className: "more-details" },
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Vin" },
                  "Vin"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.vin
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Mileage" },
                  "Milage"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.milage
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Transmission" },
                  "Transmission"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.transmission
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Vin" },
                  "fuel"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.fuel
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Mileage" },
                  "exterior color"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.exteriorColor
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Transmission" },
                  "drive"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.drive
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Vin" },
                  "type"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.type
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Mileage" },
                  "interior color"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.InteriorColor
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "info" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "Transmission" },
                  "condition"
                ),
                _react2.default.createElement(
                  "h5",
                  null,
                  item.extraDetails.condition
                )
              )
            )
          );
        });
      }
    };

    _this.loopItemDetails = function (item) {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;

      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "details-column" },
            _this.showCarInfo(),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "div",
              { className: "description" },
              _react2.default.createElement(
                "label",
                { htmlFor: "description" },
                "description"
              ),
              _react2.default.createElement(
                "p",
                null,
                item.description
              )
            )
          );
        });
      }
    };

    _this.state = {
      itemsData: []
    };
    return _this;
  }

  _createClass(Details, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history,
          location = _props.location;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + "/" + match.params.listing + "/" + match.params.item).then(function (response) {
        self.setState({
          itemsData: response.data
        }, function () {
          console.log(self.state);
        });
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "details-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "white-box" },
            _react2.default.createElement(
              "section",
              { className: "submenu" },
              _react2.default.createElement(
                "div",
                { className: "direction" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "prev" },
                  "Prev"
                ),
                _react2.default.createElement("div", { className: "vertical" }),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "next" },
                  "Next"
                )
              ),
              _react2.default.createElement(
                "nav",
                { className: "sublinks" },
                _react2.default.createElement(
                  "a",
                  { href: "" },
                  "More Ads by User"
                ),
                _react2.default.createElement("div", { className: "vertical" }),
                _react2.default.createElement(
                  "a",
                  { href: "" },
                  "Print"
                ),
                _react2.default.createElement("div", { className: "vertical" }),
                _react2.default.createElement(
                  "a",
                  { href: "" },
                  "Share"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "" },
                  "Contact Seller ",
                  _react2.default.createElement("i", { className: "fa fa-angle-down" }),
                  " "
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "content-area" },
              _react2.default.createElement(
                "div",
                { className: "media-column" },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              this.loopItemDetails()
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(106);

var _axios = __webpack_require__(73);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.loopcategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      return _this.state.categoriesData.map(function (category, i) {
        var loopListings = function loopListings() {
          return category.listings.map(function (listing, index) {
            return _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/" + match.params.city + "/" + category.slug + "/" + listing.slug, key: index },
              listing.name
            );
          });
        };
        return _react2.default.createElement(
          "div",
          { key: i, className: "categories" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" + match.params.city + "/" + category.slug, className: "title" },
            category.title
          ),
          _react2.default.createElement(
            "div",
            { className: "group-links" },
            loopListings()
          )
        );
      });
    };

    _this.loopTags = function () {
      var testTags = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
      return testTags.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: "tag" },
          " Apple macbook "
        );
      });
    };

    _this.state = {
      categoriesData: []
    };

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push('/marrakech');
      }

      var self = this;
      _axios2.default.get("/api/" + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container2" },
          _react2.default.createElement(
            "h1",
            null,
            "Connecting people ",
            _react2.default.createElement("br", null),
            " everywhere :)"
          ),
          _react2.default.createElement(
            "section",
            { className: "links" },
            this.loopcategories()
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { placeholder: "Search Housing, Jobs, Personal, Services...", type: "text", name: "search", className: "search" }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "fa fa-clock-o" }),
              " Trending now !"
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              this.loopTags()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(106);

var _axios = __webpack_require__(73);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.showMakeModel = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;

      if (match.params.listing == 'cars-and-trucks') {
        return _react2.default.createElement(
          "div",
          { className: "showingMake" },
          _react2.default.createElement(
            "div",
            { className: " form-group make" },
            _react2.default.createElement(
              "label",
              { htmlFor: "make" },
              "MAKE"
            ),
            _react2.default.createElement(
              "select",
              { name: "make", className: "make", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "bmw" },
                "BMW"
              ),
              _react2.default.createElement(
                "option",
                { value: "mclaren" },
                "McLaren"
              ),
              _react2.default.createElement(
                "option",
                { value: "tesla" },
                "Tesla"
              ),
              _react2.default.createElement(
                "option",
                { value: "maserati" },
                "Maserati"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " form-group model" },
            _react2.default.createElement(
              "label",
              { htmlFor: "model" },
              "MODEL"
            ),
            _react2.default.createElement(
              "select",
              { name: "model", className: "model", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "All Models" },
                "All Models"
              ),
              _react2.default.createElement(
                "option",
                { value: "x6" },
                "X6"
              ),
              _react2.default.createElement(
                "option",
                { value: "x2" },
                "X2"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " form-group miles" },
            _react2.default.createElement(
              "label",
              { htmlFor: "miles" },
              "Kilometers"
            ),
            _react2.default.createElement(
              "select",
              { name: "miles", className: "miles", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "50 Miles" },
                "8000 KM"
              )
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.loopItems = function () {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          history = _this$props2.history,
          location = _this$props2.location;

      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "categories" },
            _react2.default.createElement(
              "div",
              { className: "item" },
              _react2.default.createElement(
                "div",
                { className: "image", style: { "backgroundImage": "url('" + item.images[0] + "')" } },
                _react2.default.createElement(
                  "div",
                  { className: "price" },
                  item.price,
                  " DH"
                ),
                "image"
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: "/" + match.params.city + "/" + match.params.category + "/" + match.params.listing + "/" + item.title, key: i },
                  _react2.default.createElement(
                    "h5",
                    null,
                    item.title,
                    _react2.default.createElement("i", { className: "fa fa-star-o" })
                  )
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  item.city
                )
              )
            )
          );
        });
      }
    };

    _this.state = {
      itemsData: [],
      min_price: 0,
      max_price: 100000,
      select_view: 'gallery',
      sort: 'newest',
      make: ''

    };
    return _this;
  }

  _createClass(Listings, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history,
          location = _props.location;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          select_view = queryParams.select_view,
          sort = queryParams.sort;

      if (queryParams.min_price != undefined) {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + "/" + match.params.listing + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
          // console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + "/" + match.params.listing).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
          // console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }

      //   const {match, history} = this.props
      //   const self = this;
      //   axios.get(`/api/${match.params.city}/${match.params.category}/${match.params.listing}`)
      // .then(function (response) {
      //   self.setState({
      //     itemsData:response.data,
      //   },
      //   () => { console.log(self.state);}
      // )
      //   // console.log(response.data);
      // })
      // .catch(function (error) {
      //   console.log(error)
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: " form-group price" },
              _react2.default.createElement(
                "label",
                { htmlFor: "price" },
                "PRICE"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "min-price", className: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max-price", className: "max-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "1000" },
                    "1000"
                  )
                )
              )
            ),
            this.showMakeModel(),
            _react2.default.createElement(
              "div",
              { className: " form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: " form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select-view", className: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "galery" },
                      "Gallery view"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List view"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thumb" },
                      "Gallery view"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: " form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort-dropdown", className: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "galery" },
                      "Newest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.allImgsloop = function () {
      // console.log(this.state.allImgs)
      return _this.state.allImgs.map(function (item, k) {
        return _react2.default.createElement("div", { onClick: _this.clickedThumb.bind(null, k), key: k, className: "thumb-img", style: { "backgroundImage": "url('" + item + "')" } });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0

    };

    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var allImgs = ['/img/maserati-granturismo.jpg', '/img/maserati-granturismo-interior.jpg', '/img/seats.jpg', '/img/maserati.jpg', '/img/mass.jpg', '/img/MASERATI_front.jpg'];

      this.setState({
        allImgs: allImgs,
        currentImg: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "slider" },
          _react2.default.createElement(
            "div",
            { className: "main-image" },
            _react2.default.createElement(
              "div",
              { className: "arrows left-arrow", onClick: this.prevBtn },
              _react2.default.createElement("i", { className: "fa fa-chevron-left", "aria-hidden": "true" })
            ),
            _react2.default.createElement(
              "div",
              { className: "arrows right-arrow", onClick: this.nextBtn },
              _react2.default.createElement("i", { className: "fa fa-chevron-right", "aria-hidden": "true" })
            ),
            _react2.default.createElement("div", { className: "image-1", style: { "backgroundImage": "url('" + this.state.allImgs[this.state.currentIndex] + "')" } })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "thumbnails" },
          this.allImgsloop()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(251);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ })

},[278]);