"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1018],{

/***/ 91018:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toc; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98348);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66449);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91263);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49308);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20171);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35313);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20509);



 // tslint:disable-next-line: no-submodule-imports





var PREFIX = "Toc";
var classes = {
  root: PREFIX + "-root"
};
var StyledList = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["&." + classes.root]: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  };
});

function treeifyToc(toc) {
  var tree = toc.slice(0); // reconstruct tree

  var tocNodes = {};
  tree.forEach((node, index) => {
    var k = node.path.replace(/\/$/, "");

    if (tocNodes[k]) {
      tree[index] = undefined;
    } else tocNodes[k] = node;
  });
  tree = tree.filter(node => !!node);
  tree.forEach((node, index) => {
    var parts = node.path.replace(/\/$/, "").split("/");
    parts.pop();

    while (parts.length) {
      var parentPath = "" + parts.join("/");
      var parent = tocNodes[parentPath];

      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        tree[index] = undefined;
        break;
      }

      parts.pop();
    }
  });
  var r = {
    tree: tree.filter(node => !!node),
    nodes: tocNodes
  };

  function sortNodes(nodes) {
    nodes.sort((l, r) => l.order - r.order || l.name.localeCompare(r.name));
    nodes.forEach(node => node.children && sortNodes(node.children));
  }

  sortNodes(r.tree);
  return r;
}

function Toc(props) {
  var {
    pagePath
  } = props;
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);
  var {
    mobile
  } = (0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  var data = (0,gatsby__WEBPACK_IMPORTED_MODULE_3__.useStaticQuery)("249313281");
  /*
    site {
      siteMetadata {
        title
      }
  }
     allServicesJson {
      nodes {
        name
        shortId
      }
    } 
  */

  var handleClick = () => {
    if (mobile) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.None */ .jw.None);
  };

  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // convert pages into tree
    var toc = [{
      name: "Home",
      path: "/",
      order: 0
    }, {
      name: "Dashboard",
      path: "/dashboard/",
      order: 0.1
    }, {
      name: "Hardware",
      path: "/hardware/",
      order: 0.2
    }, {
      name: "Software",
      path: "/software/",
      order: 0.3
    }, {
      name: "Devices",
      path: "/devices/",
      order: 0.4
    }, {
      name: "Client SDKs",
      path: "/clients/",
      order: 0.5
    }, {
      name: "Services",
      path: "/services/",
      order: 0.6
    }, {
      name: "Tools",
      path: "/tools/",
      order: 0.7
    }, {
      name: "Protocol",
      path: "/protocol/",
      order: 0.8
    }, {
      name: "Reference",
      path: "/reference/",
      order: 0.81
    }];
    data.allMdx.edges.map(node => node.node).filter(node => {
      var _node$frontmatter;

      return !!((_node$frontmatter = node.frontmatter) !== null && _node$frontmatter !== void 0 && _node$frontmatter.title) || !!node.headings.length && !/404/.test(node.headings[0].value);
    }).filter(node => {
      var _node$frontmatter2;

      return !node.frontmatter || !((_node$frontmatter2 = node.frontmatter) !== null && _node$frontmatter2 !== void 0 && _node$frontmatter2.hideToc);
    }).map(node => {
      var _node$frontmatter3, _node$frontmatter4, _node$frontmatter5;

      var r = {
        name: ((_node$frontmatter3 = node.frontmatter) === null || _node$frontmatter3 === void 0 ? void 0 : _node$frontmatter3.title) || node.headings[0].value,
        path: node.fields.slug,
        order: ((_node$frontmatter4 = node.frontmatter) === null || _node$frontmatter4 === void 0 ? void 0 : _node$frontmatter4.order) !== undefined ? (_node$frontmatter5 = node.frontmatter) === null || _node$frontmatter5 === void 0 ? void 0 : _node$frontmatter5.order : 50
      };
      return r;
    }).forEach(node => toc.push(node));
    var {
      tree
    } = treeifyToc(toc);
    return tree;
  }, []);

  var TocListItem = props => {
    var {
      entry,
      level
    } = props;
    var {
      path,
      children,
      name
    } = entry;
    var selected = pagePath === path;
    var sub = level === 1 || !!(children !== null && children !== void 0 && children.length);
    var showSub = sub && !!(children !== null && children !== void 0 && children.length) && pagePath.startsWith(path);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
      component: "li",
      selected: selected,
      key: "tocitem" + path,
      sx: {
        ml: Math.max(0, level - 1)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
      style: {
        color: theme.palette.text.primary
      },
      onClick: handleClick,
      to: path,
      underline: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        variant: sub ? "button" : "caption"
      }, name)
    }))), showSub && (children === null || children === void 0 ? void 0 : children.map(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TocListItem, {
      key: child.path,
      entry: child,
      level: level + 1
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledList, {
    dense: true,
    className: classes.root
  }, tree.map(entry =>
  /*#__PURE__*/
  // eslint-disable-next-line react/prop-types
  react__WEBPACK_IMPORTED_MODULE_0__.createElement(TocListItem, {
    key: entry.path,
    entry: entry,
    level: 0
  })));
}

/***/ })

}]);
//# sourceMappingURL=1018-0afc796e2afe1fa1feed.js.map