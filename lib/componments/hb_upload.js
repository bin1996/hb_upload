'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('./upload.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upload = function (_PureComponent) {
    _inherits(Upload, _PureComponent);

    function Upload(props) {
        _classCallCheck(this, Upload);

        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

        _this.state = {
            files: _this.props.files
        };
        return _this;
    }

    _createClass(Upload, [{
        key: 'changes',
        value: function changes() {
            var files = document.querySelector('#mine_uploads').files;
            var arr = this.state.files;
            var that = this;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var file = _step.value;

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        arr = arr.concat(e.target.result);
                        that.setState({
                            files: arr
                        });
                    };
                    // Read in the image file as a data URL.
                    reader.readAsDataURL(file);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            document.querySelector('#mine_uploads').value = '';
        }
    }, {
        key: 'appear',
        value: function appear(e) {
            var target = e.target;
            console.log(target.className);
            while (target.className !== 'hb_delete') {
                target = target.parentNode;
                var previews = document.getElementsByClassName('hb_preview');
                for (var i = 0; i < previews.length; i++) {
                    if (target.parentNode === previews[i]) {
                        var that = this;
                        var arr = that.state.files;
                        if (arr.length === 1) {
                            that.setState({
                                files: []
                            });
                        } else {
                            var newArr = [];
                            for (var j = 0; j < arr.length; j++) {
                                if (j !== i) {
                                    newArr.push(arr[j]);
                                }
                            }
                            that.setState({
                                files: newArr
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var files = this.state.files;

            this.props.onChange(files);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var files = this.state.files;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'con_upload' },
                    files.length > 0 ? files.map(function (v, i) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'hb_preview', key: i },
                            _react2.default.createElement('img', { className: 'mineImgs', src: v, alt: '' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'hb_delete', onClick: _this2.appear.bind(_this2) },
                                _react2.default.createElement(_icon2.default, { type: 'close' })
                            )
                        );
                    }) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'upload' },
                        _react2.default.createElement(_icon2.default, { type: 'plus' }),
                        _react2.default.createElement('input', { type: 'file', multiple: 'multiple', onChange: this.changes.bind(this), id: 'mine_uploads', accept: 'image/gif,image/jpeg,image/jpg,image/png' })
                    )
                )
            );
        }
    }]);

    return Upload;
}(_react.PureComponent);

exports.default = Upload;