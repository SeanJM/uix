var STYLE_NAME = {};
var window     = window || undefined;
var BODY_CSS   = window ? window.getComputedStyle(document.body) : {};
var MOUNTED    = [];

STYLE_NAME.transform = (
  BODY_CSS.webkitTransform
    ? "webkitTransform"
    : BODY_CSS.MozTransform
      ? "MozTransform"
      : BODY_CSS.msTransform
        ? "msTransform"
        : "transform"
);

STYLE_NAME.userSelect = (
  BODY_CSS.webkitUserSelect
    ? "webkitUserSelect"
    : BODY_CSS.MozUserSelect
      ? "MozUserSelect"
      : BODY_CSS.msUserSelect
        ? "msUserSelect"
        : "userSelect"
);

var XLINK_NS = "http://www.w3.org/1999/xlink";
var SVG_NS   = "http://www.w3.org/2000/svg";

var IS_OFFSET = [
  "width",
  "height",
  "top",
  "left"
];

var IS_VALUE_DEG = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ"
];

var IS_VALUE_PX = [
  "left",
  "right",
  "top",
  "bottom",

  "margin",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",

  "height",
  "width",
  "minHeight",
  "minWidth",
  "maxHeight",
  "maxWidth",

  "padding",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",

  "translate",
  "translateX",
  "translateY",
  "translateZ"
];

var IS_TRANSFORM = [
  "rotateX",
  "rotateY",
  "rotateZ",

  "scale",

  "scaleX",
  "scaleY",
  "scaleZ",

  "translateX",
  "translateY",
  "translateZ"
];

module.exports = {
  MOUNTED,
  STYLE_NAME,
  IS_OFFSET,
  XLINK_NS,
  SVG_NS,
  IS_VALUE_DEG,
  IS_VALUE_PX,
  IS_TRANSFORM,
};