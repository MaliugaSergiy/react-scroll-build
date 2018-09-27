"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var replaceHash = function replaceHash(hash) {
  hash = hash ? hash.indexOf("#") === 0 ? hash : "#" + hash : "";

  if (history.replaceState) {
    var loc = window.location;
    history.replaceState(null, null, hash ? loc.pathname + loc.search + hash : // remove hash
    loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position === "relative" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  replaceHash: replaceHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};