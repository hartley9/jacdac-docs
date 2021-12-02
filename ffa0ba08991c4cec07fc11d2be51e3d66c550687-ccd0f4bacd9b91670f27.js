"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[85],{

/***/ 73390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i_": function() { return /* binding */ checkProgram; },
  "IJ": function() { return /* binding */ compileProgram; },
  "EB": function() { return /* binding */ toIdentifier; },
  "vf": function() { return /* binding */ toMemberExpression; }
});

// UNUSED EXPORTS: getServiceFromRole

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(26799);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/ir.ts
var VMFunctions = [{
  id: "start",
  args: [],
  prompt: "start block",
  context: "command"
}, {
  id: "halt",
  args: [],
  prompt: "terminates the current handler",
  context: "command"
}, {
  id: "nop",
  args: [],
  prompt: "no operation",
  context: "command"
}, {
  id: "label",
  args: ["Identifier"],
  prompt: "label target {1}",
  context: "command"
}, {
  id: "jump",
  args: ["Identifier"],
  prompt: "jump to label {1}",
  context: "command"
}, {
  id: "branchOnCondition",
  args: ["boolean", "Identifier"],
  prompt: "if {1} then jump to label {2}",
  context: "command"
}, {
  id: "wait",
  args: ["number"],
  prompt: "wait for {1} milliseconds",
  context: "command"
}, {
  id: "awaitRegister",
  args: ["register"],
  prompt: "wait on register {1} to change value",
  context: "command"
}, {
  id: "awaitChange",
  args: ["register", "number"],
  prompt: "wait for register {1} to change by {2}",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "awaitCondition",
  args: ["boolean"],
  prompt: "wait for condition {1}",
  context: "command"
}, {
  id: "writeRegister",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "writeLocal",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "watch",
  args: ["number"],
  prompt: "watch expression {1}",
  context: "command"
}, {
  id: "log",
  args: ["number"],
  prompt: "not used",
  context: "command"
}, {
  id: "roleBound",
  args: ["Identifier", "Identifier"],
  prompt: "role {1} {2}",
  context: "command"
}, {
  id: "roleBoundExpression",
  args: ["Identifier"],
  prompt: "is role {1} bound?",
  context: "expression"
}, {
  id: "onRoleConnected",
  args: ["Identifier"],
  prompt: "fires when a role is connected",
  context: "command"
}, {
  id: "onRoleDisconnected",
  args: ["Identifier"],
  prompt: "fires when a role is disconnected",
  context: "command"
}];
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/symutils.ts
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function exprVisitor(parent, current, structVisit) {
  if (Array.isArray(current)) {
    ;
    current.forEach(c => exprVisitor(current, c, structVisit));
  } else if (typeof current === "object") {
    if (parent && current) structVisit(parent, current);
    Object.keys(current).forEach(key => {
      exprVisitor(current, current[key], structVisit);
    });
  }
}
var SpecSymbolResolver = /*#__PURE__*/function () {
  function SpecSymbolResolver(spec, role2spec, error) {
    this.spec = spec;
    this.role2spec = role2spec;
    this.error = error;
    this.reset();
  }

  var _proto = SpecSymbolResolver.prototype;

  _proto.reset = function reset() {
    this.registers = [];
    this.events = [];
    this.roles = [];
  };

  _proto.check = function check(e, type) {
    if (!e) {
      this.error("expression is undefined");
      return false;
    } else if (e.type !== type) {
      this.error("expected " + type + "; got " + e.type);
      return false;
    }

    return true;
  };

  _proto.specResolve = function specResolve(e) {
    var ret = undefined;

    if (this.spec) {
      ret = {
        role: this.spec.shortName,
        spec: this.spec,
        client: true,
        rest: e
      };
    } else if (e.type === "Identifier") {
      return undefined;
    } else if (this.check(e, "MemberExpression") && this.check(e.object, "Identifier") && this.role2spec) {
      var obj = e.object;
      if (obj.name.startsWith("$")) return undefined;

      if (!this.role2spec(obj.name)) {
        this.error("no specification found for " + obj.name);
      }

      var {
        spec: _spec,
        client
      } = this.role2spec(obj.name);
      ret = {
        role: obj.name,
        spec: _spec,
        client,
        rest: e.property
      };
    }

    if (ret && this.roles.indexOf(ret.role) < 0) this.roles.push(ret.role);
    return ret;
  };

  _proto.destructAccessPath = function destructAccessPath(e, expectIdentifier) {
    if (expectIdentifier === void 0) {
      expectIdentifier = false;
    }

    if (e.type === "Identifier") {
      return [e.name, ""];
    } else if (!expectIdentifier && e.type === "MemberExpression") {
      var object = e.object;
      var property = e.property;
      if (this.check(object, "Identifier") && this.check(property, "Identifier")) return [object.name, property.name];
      return undefined;
    } else {
      if (!expectIdentifier) this.error("expected Identifier or MemberExpression; got " + e.type);else this.error("expected Identifier; got " + e.type);
      return undefined;
    }
  };

  _proto.lookupEvent = function lookupEvent(e) {
    var _spec$packets;

    var resolve = this.specResolve(e);
    if (!resolve) return;
    var {
      role,
      spec,
      rest
    } = resolve;
    var [id, _] = this.destructAccessPath(rest, true);
    var events = (_spec$packets = spec.packets) === null || _spec$packets === void 0 ? void 0 : _spec$packets.filter(pkt => pkt.kind === "event");
    var pkt = events.find(p => p.name === id);

    if (!pkt) {
      this.error("no event " + id + " in specification");
      return undefined;
    } else {
      var ev = role + "." + id;
      if (this.events.indexOf(ev) < 0) this.events.push(ev);
      return pkt;
    }
  };

  _proto.lookupRegister = function lookupRegister(e) {
    var resolve = this.specResolve(e);
    if (!resolve) return;
    var {
      role,
      spec,
      rest
    } = resolve;
    var [root, fld] = this.destructAccessPath(rest);
    this.lookupRegisterRaw(spec, root, fld);
    var reg = role + "." + root;
    if (this.registers.indexOf(reg) < 0) this.registers.push(reg);
  };

  _proto.lookupRegisterRaw = function lookupRegisterRaw(spec, root, fld) {
    var reg = getRegister(spec, root, fld);
    if (reg.pkt && (!reg.fld && !isBoolOrNumericFormat(reg.pkt.packFormat) || reg.fld && reg.fld.type && !isBoolOrNumericFormat(reg.fld.type))) this.error("only bool/numeric registers allowed"); // if (!fld && regField.pkt.fields.length > 0)
    //    error(`register ${root} has fields, but no field specified`)
  };

  _proto.lookupReplace = function lookupReplace(events, parent, child) {
    if (Array.isArray(parent)) {
      var replace = this.lookup(events, parent, child);
      parent.forEach(i => {
        if (parent[i] === child) parent[i] = replace;
      });
    } else {
      // don't process identifiers that are callees of CallExpression
      if ((parent === null || parent === void 0 ? void 0 : parent.type) === "CallExpression" && child === parent.callee) return;

      var _replace = this.lookup(events, parent, child);

      if (_replace) {
        Object.keys(parent).forEach(k => {
          if (parent[k] === child) parent[k] = _replace;
        });
      }
    }
  };

  _proto.lookup = function lookup(events, parent, child) {
    var resolve = this.specResolve(child);
    if (!resolve) return;
    var {
      role,
      spec,
      rest
    } = resolve;
    var [root, fld] = this.destructAccessPath(rest);

    try {
      try {
        var val = (0,jdutils/* parseIntFloat */.Qv)(spec, fld ? root + "." + fld : root);
        var lit = {
          type: "Literal",
          value: val,
          raw: val.toString()
        };
        return lit;
      } catch (e) {
        this.lookupRegisterRaw(spec, root, fld);
        var reg = role + "." + root;
        if (this.registers.indexOf(reg) < 0) this.registers.push(reg);
      }
    } catch (e) {
      var pkt = undefined;
      if (events.length) pkt = events.find(pkt => pkt.name === root);else {
        var _spec$packets2;

        // we need a fully qualified name
        pkt = (_spec$packets2 = spec.packets) === null || _spec$packets2 === void 0 ? void 0 : _spec$packets2.find(p => p.kind === "event" && p.name === root);
      }
      if (!pkt) this.error("event " + root + " not bound correctly");else if (!fld && pkt.fields.length > 0) this.error("event " + root + " has fields, but no field specified");else if (fld && !pkt.fields.find(f => f.name === fld)) this.error("Field " + fld + " of event " + root + " not found in specification");
    }
  };

  return SpecSymbolResolver;
}();
var VMChecker = /*#__PURE__*/function () {
  function VMChecker(resolver, supportedExpression, error) {
    this.resolver = resolver;
    this.supportedExpression = supportedExpression;
    this.error = error;
  }

  var _proto2 = VMChecker.prototype;

  _proto2.checkCommand = function checkCommand(root, funs) {
    var _root$callee;

    if (!root || !root.type || root.type != "CallExpression") {
      this.error("a command must be a call expression in JavaScript syntax");
      return;
    } // check for unsupported expression types


    exprVisitor(null, root, (p, c) => {
      if (!this.supportedExpression(c.type)) this.error("Expression of type " + c.type + " not currently supported");
    }); // first lookup in known functions

    var callee = (_root$callee = root.callee) === null || _root$callee === void 0 ? void 0 : _root$callee.name;
    var cmdIndex = funs.findIndex(r => callee === r.id);
    var theCommand = undefined;

    if (cmdIndex < 0) {
      if (root.callee.type === "MemberExpression") {
        var {
          role: _role,
          spec: _spec2,
          rest,
          client
        } = this.resolver.specResolve(root.callee);
        var [command, _] = this.resolver.destructAccessPath(rest);

        if (!_role) {
          this.error("command does not conform to expected call expression");
          return undefined;
        } else {
          var _spec2$packets;

          // we have a spec, now look for command
          var commands = (_spec2$packets = _spec2.packets) === null || _spec2$packets === void 0 ? void 0 : _spec2$packets.filter(pkt => client && pkt.kind === "command" || !client && pkt.kind === "event");
          theCommand = commands.find(c => (c === null || c === void 0 ? void 0 : c.name) === command);

          if (!theCommand) {
            this.error("cannot find command named " + command + " in spec " + _spec2.shortName);
          } else return this.processSpecCommandFunction(root, theCommand);
        }
      } else {
        if (callee) this.error(callee + " is not a registered function.");else this.error("command does not conform to expected call expression");
        return undefined;
      }
    } else return this.processTestFunction(funs, root, cmdIndex);

    return undefined;
  };

  _proto2.processSpecCommandFunction = function processSpecCommandFunction(root, command) {
    var _command$fields;

    if (root.arguments.length !== (command === null || command === void 0 ? void 0 : (_command$fields = command.fields) === null || _command$fields === void 0 ? void 0 : _command$fields.length)) {
      this.error("Command " + command.name + " expects " + command.fields.length + " arguments: got " + root.arguments.length);
    } else {
      var args = root.arguments;
      args.forEach(arg => {
        this.visitReplace(root, arg, []);
      });
    }

    return [undefined, root];
  };

  _proto2.processTestFunction = function processTestFunction(funs, root, cmdIndex) {
    var _root$callee2;

    var callee = (_root$callee2 = root.callee) === null || _root$callee2 === void 0 ? void 0 : _root$callee2.name; // check arguments

    var command = funs[cmdIndex];
    var minArgs = argsRequiredOptional(command.args).length;
    var maxArgs = command.args.length;

    if (root.arguments.length < minArgs) {
      this.error(callee + " expects at least " + minArgs + " arguments; got " + root.arguments.length);
      return undefined;
    } else if (root.arguments.length > maxArgs) {
      this.error(callee + " expects at most " + maxArgs + " arguments; got " + root.arguments.length);
      return undefined;
    } // deal with optional arguments


    var newExpressions = [];

    for (var i = root.arguments.length; i < command.args.length; i++) {
      var [name, def] = command.args[i];
      var lit = {
        type: "Literal",
        value: def,
        raw: def.toString()
      };
      newExpressions.push(lit);
    }

    root.arguments = root.arguments.concat(newExpressions); // type checking of arguments.

    this.processTestArguments(command, root);
    return [command, root];

    function argsRequiredOptional(args, optional) {
      if (optional === void 0) {
        optional = false;
      }

      return args.filter(a => !optional && typeof a === "string" || optional && typeof a === "object");
    }
  };

  _proto2.processTestArguments = function processTestArguments(command, root) {
    var args = root.arguments;
    var eventSymTable = [];
    args.forEach((arg, a) => {
      var argType = command.args[a];
      if (typeof argType === "object") argType = command.args[a][0];

      if (argType === "register" || argType === "event" || argType === "Identifier") {
        if (argType === "Identifier") {
          this.resolver.check(arg, "Identifier");
        } else if (argType === "event" && a === 0) {
          var pkt = this.resolver.lookupEvent(arg);
          if (pkt && eventSymTable.indexOf(pkt) === -1) eventSymTable.push(pkt);
        } else if (argType === "register") {
          try {
            this.resolver.lookupRegister(arg);
          } catch (e) {
            this.error(e.message);
          }
        }
      } else if (argType === "events") {
        if (arg.type != "ArrayExpression") this.error("events function expects a list of service events");else {
          ;
          arg.elements.forEach(e => this.resolver.lookupEvent(e));
        }
      } else if (argType === "number" || argType === "boolean") {
        this.visitReplace(root, arg, eventSymTable);
      } else {
        this.error("unexpected argument type (" + argType + ")");
      }
    });
  };

  _proto2.visitReplace = function visitReplace(root, arg, eventSymTable) {
    if (eventSymTable === void 0) {
      eventSymTable = [];
    }

    exprVisitor(root, arg, (p, c) => {
      if (p.type !== "MemberExpression" && c.type === "Identifier") {
        this.resolver.lookupReplace(eventSymTable, p, c);
      } else if (c.type === "ArrayExpression") {
        this.error("array expression not allowed in this context");
      } else if (p.type !== "MemberExpression" && c.type === "MemberExpression") {
        var member = c; // A member expression must be of form <Identifier>.<memberExpression|Identifier>

        if (member.object.type !== "Identifier" || member.computed) {
          this.error("property access must be of form id.property");
        } else {
          this.resolver.lookupReplace(eventSymTable, p, c);
        }
      }
    });
  };

  return VMChecker;
}(); // private stuff

function isBoolOrNumericFormat(fmt) {
  return fmt === "bool" || /^[ui]\d+/i.test(fmt);
}

function isRegister(pkt) {
  return pkt && (pkt.kind === "const" || pkt.kind === "ro" || pkt.kind === "rw");
}

function lookupRegister(spec, id) {
  return spec.packets.find(pkt => isRegister(pkt) && pkt.name === id);
}

function lookupField(pkt, field) {
  return pkt.fields.find(member => member.name === field);
}

function getRegister(spec, root, fld) {
  if (fld === void 0) {
    fld = "";
  }

  var ret = {
    pkt: undefined,
    fld: undefined
  };
  ret.pkt = lookupRegister(spec, root);

  if (!ret.pkt) {
    throw new Error("no register " + root + " found in service " + spec.shortName);
  } else if (fld) {
    ret.fld = lookupField(ret.pkt, fld);
    if (!ret.fld) throw new Error("no field " + fld + " found in register " + root + " of service " + spec.shortName);
  }

  return ret;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/compile.ts




function toIdentifier(id) {
  return {
    type: "Identifier",
    name: id
  };
}
function toMemberExpression(root, field) {
  return {
    type: "MemberExpression",
    object: toIdentifier(root),
    property: typeof field === "string" ? toIdentifier(field) : field,
    computed: false
  };
}

function handlerVisitor(handler, visitITE, visitCommand) {
  handler.commands.forEach(visitBase);

  function visitBase(base) {
    switch (base.type) {
      case "cmd":
        {
          if (visitCommand) visitCommand(base);
          break;
        }

      case "ite":
        {
          var _ite$else, _ite$then;

          var _ite = base;
          if (visitITE) visitITE(_ite, 0);
          _ite === null || _ite === void 0 ? void 0 : (_ite$else = _ite.else) === null || _ite$else === void 0 ? void 0 : _ite$else.forEach(visitBase);
          if (visitITE) visitITE(_ite, 1);
          _ite === null || _ite === void 0 ? void 0 : (_ite$then = _ite.then) === null || _ite$then === void 0 ? void 0 : _ite$then.forEach(visitBase);
          if (visitITE) visitITE(_ite, 2);
        }
    }
  }
}

function compileProgram(_ref) {
  var {
    roles,
    serverRoles,
    handlers
  } = _ref;
  var newProgram = {
    roles,
    serverRoles,
    handlers: []
  }; // process start blocks

  handlers.forEach(startBlock); // remove if-then-else

  newProgram.handlers = handlers.map(h => {
    return {
      commands: removeIfThenElse(h),
      errors: h === null || h === void 0 ? void 0 : h.errors
    };
  });
  return newProgram;
}

function checkCall(cmd, id) {
  if (cmd.type === "cmd") {
    var callee = cmd.command.callee;

    if (callee.type === "Identifier") {
      var cid = callee.name;
      return id === cid;
    }
  }

  return undefined;
}

function startBlock(handler) {
  if (handler.commands.length && checkCall(handler.commands[0], "start")) {
    handler.commands.shift();
    handler.commands.push({
      type: "cmd",
      command: {
        type: "CallExpression",
        callee: toIdentifier("halt"),
        arguments: []
      }
    });
  }
}

function removeIfThenElse(handler) {
  var newSequence = [];
  var labels = [];
  var labelId = 1;
  handlerVisitor(handler, (ite, time) => {
    switch (time) {
      case 0:
        {
          // create the labels and branch instruction
          var then = "then_" + labelId;
          var end = "end_" + labelId;
          labels.push({
            then,
            end
          });
          labelId++;
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("branchOnCondition"),
              arguments: [ite.expr, toIdentifier(then)]
            }
          });
          break;
        }

      case 1:
        {
          // insert the jump and then label
          var {
            then: _then,
            end: _end
          } = labels[labels.length - 1];
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("jump"),
              arguments: [toIdentifier(_end)]
            }
          });
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_then)]
            }
          });
          break;
        }

      case 2:
        {
          (0,utils/* assert */.hu)(labels.length > 0);
          var {
            end: _end2
          } = labels[labels.length - 1];
          newSequence.push({
            type: "cmd",
            command: {
              type: "CallExpression",
              callee: toIdentifier("label"),
              arguments: [toIdentifier(_end2)]
            }
          });
          labels.pop();
        }
    }
  }, cmd => {
    newSequence.push(cmd);
  });
  return newSequence;
}

var getServiceFromRole = info => role => {
  // lookup in roles first
  var roleFound = info.roles.find(pair => pair.role === role);
  var client = true;

  if (!roleFound) {
    roleFound = info.serverRoles.find(pair => pair.role === role);
    client = false;
  }

  if (roleFound) {
    // must succeed
    var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(roleFound.serviceClass);
    (0,utils/* assert */.hu)(!!spec, "service class " + roleFound.serviceClass + " not resolved");
    return {
      spec,
      client
    };
  } else {
    var _spec = (0,jdom_spec/* serviceSpecificationFromName */.kB)(role);

    return {
      spec: _spec,
      client: true
    };
  }
};
function checkProgram(prog) {
  var allErrors = [];
  var goodHandlers = [];

  var errorFun = e => {
    allErrors.push({
      sourceId: undefined,
      message: e
    });
  };

  var symbolResolver = new SpecSymbolResolver(undefined, getServiceFromRole(prog), errorFun);
  var checker = new VMChecker(symbolResolver, _ => true, errorFun);
  prog.handlers.forEach(h => {
    if (h !== null && h !== void 0 && h.errors.length) {
      h === null || h === void 0 ? void 0 : h.errors.forEach(e => allErrors.push(e));
      return;
    }

    var errorCount = allErrors.length;
    symbolResolver.roles = [];
    handlerVisitor(h, undefined, c => checker.checkCommand(c.command, VMFunctions));

    if ((h === null || h === void 0 ? void 0 : h.errors.length) === 0 && allErrors.length === errorCount) {
      h.roles = symbolResolver.roles;
      goodHandlers.push(h);
    } else {
      h === null || h === void 0 ? void 0 : h.errors.forEach(e => allErrors.push(e));
    }
  });
  prog.handlers = goodHandlers;
  return {
    registers: symbolResolver.registers.map(s => {
      var [root, fld] = s.split(".");
      return {
        role: root,
        register: fld
      };
    }),
    events: symbolResolver.events.map(e => {
      var [root, fld] = e.split(".");
      return {
        role: root,
        event: fld
      };
    }),
    errors: allErrors
  };
}

/***/ }),

/***/ 73595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44393);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16582);
/* harmony import */ var _workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21190);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74602);
/* harmony import */ var _fields_tidy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var _fields_DataTableField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54741);
/* harmony import */ var _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16229);
/* harmony import */ var _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88533);


/* eslint-disable @typescript-eslint/ban-types */








var DATA_ARRANGE_BLOCK = "data_arrange";
var DATA_SELECT_BLOCK = "data_select";
var DATA_DROP_BLOCK = "data_drop";
var DATA_FILTER_COLUMNS_BLOCK = "data_filter_columns";
var DATA_FILTER_STRING_BLOCK = "data_filter_string";
var DATA_MUTATE_COLUMNS_BLOCK = "data_mutate_columns";
var DATA_MUTATE_NUMBER_BLOCK = "data_mutate_number";
var DATA_SLICE_BLOCK = "data_slice";
var DATA_SUMMARIZE_BLOCK = "data_summarize";
var DATA_SUMMARIZE_BY_GROUP_BLOCK = "data_summarize_by_group";
var DATA_COUNT_BLOCK = "data_count";
var DATA_BIN_BLOCK = "data_bin";
var DATA_CORRELATION_BLOCK = "data_correlation";
var DATA_LINEAR_REGRESSION_BLOCK = "data_linear_regression";
var DATA_COMMENT_BLOCK = "data_comment_block";
var [, operatorsColour, computeColour, statisticsColour] = (0,_palette__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
var dataDsl = {
  id: "dataScience",
  createBlocks: () => [{
    kind: "block",
    type: DATA_ARRANGE_BLOCK,
    message0: "sort %1 %2",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "order",
      options: [["ascending", "ascending"], ["descending", "descending"]]
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var order = b.getFieldValue("order");
      var descending = order === "descending";
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "arrange",
        column,
        descending,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_DROP_BLOCK,
    message0: "drop %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column3"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "drop",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SELECT_BLOCK,
    message0: "select %1 %2 %3 %4",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column3"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column4"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2, 3, 4].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      if (!(columns !== null && columns !== void 0 && columns.length)) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "select",
        columns,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_COLUMNS_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column1"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column2"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var columns = [1, 2].map(column => (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column" + column)).filter(c => !!c);
      var logic = b.getFieldValue("logic");
      if (columns.length !== 2) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "filter_columns",
        columns,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_FILTER_STRING_BLOCK,
    message0: "filter %1 %2 %3",
    colour: operatorsColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [[">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: "field_input",
      name: "rhs",
      spellcheck: false,
      text: "0"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var logic = b.getFieldValue("logic");
      var rhs = b.getFieldValue("rhs");
      if (!column) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "filter_string",
        column,
        logic,
        rhs,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_MUTATE_COLUMNS_BLOCK,
    message0: "compute column %1 as %2 %3 %4",
    colour: computeColour,
    args0: [{
      type: "field_input",
      name: "newcolumn",
      spellcheck: false
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "lhs",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "rhs",
      dataType: "number"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "rhs", {
        type: "number"
      });
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs || !rhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "mutate_columns",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_MUTATE_NUMBER_BLOCK,
    message0: "compute column %1 as %2 %3 %4",
    colour: computeColour,
    args0: [{
      type: "field_input",
      name: "newcolumn",
      spellcheck: false
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "lhs",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "logic",
      options: [["+", "plus"], ["-", "minus"], ["*", "mult"], ["/", "div"], [">", "gt"], ["<", "lt"], [">=", "ge"], ["<=", "le"], ["==", "eq"], ["!=", "ne"]]
    }, {
      type: "field_number",
      name: "rhs"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var newcolumn = b.getFieldValue("newcolumn");
      var lhs = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "lhs", {
        type: "number"
      });
      var rhs = b.getFieldValue("rhs");
      var logic = b.getFieldValue("logic");
      if (!newcolumn || !lhs) return Promise.resolve(data);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "mutate_number",
        newcolumn,
        lhs,
        rhs,
        logic,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BLOCK,
    message0: "summarize %1 calculate %2",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .calcOptions */ .B8
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var columns = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumns */ .QZ)(data, b, "column", "number");
      var calc = b.getFieldValue("calc");
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "summarize",
        columns,
        calc,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SUMMARIZE_BY_GROUP_BLOCK,
    message0: "group %1 by %2 calculate %3",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "by"
    }, {
      type: "field_dropdown",
      name: "calc",
      options: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .calcOptions */ .B8
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      var by = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "by");
      var calc = b.getFieldValue("calc");
      if (!by) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "summarize_by_group",
        column,
        by,
        calc,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_SLICE_BLOCK,
    message0: "take %1 rows from %2",
    colour: operatorsColour,
    args0: [{
      type: "field_number",
      name: "count",
      min: 1,
      precision: 1,
      value: 100
    }, {
      type: "field_dropdown",
      name: "operator",
      options: [["head", "head"], ["tail", "tail"], ["sample", "sample"]]
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var count = b.getFieldValue("count");
      var operator = b.getFieldValue("operator");
      return (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidySlice */ .HA)(data, {
        sliceHead: operator === "head" ? count : undefined,
        sliceTail: operator === "tail" ? count : undefined,
        sliceSample: operator === "sample" ? count : undefined
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_COUNT_BLOCK,
    message0: "count distinct %1",
    colour: computeColour,
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column"
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    dataPreviewField: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformData: (b, data) => {
      var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column");
      if (!column) return Promise.resolve([]);
      return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        type: "count",
        column,
        data
      });
    },
    template: "meta"
  }, {
    kind: "block",
    type: DATA_BIN_BLOCK,
    message0: "bin by %1",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "column",
      dataType: "number"
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: computeColour,
    template: "meta",
    dataPreviewField: true,
    transformData: function () {
      var _transformData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "column", {
          type: "number"
        });
        if (!column) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "bin",
          column,
          data
        });
      });

      function transformData(_x, _x2) {
        return _transformData.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_CORRELATION_BLOCK,
    message0: "correlation of %1 %2 %3 %4 %5",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_DataTableField__WEBPACK_IMPORTED_MODULE_4__/* ["default"].KEY */ .Z.KEY,
      name: "table",
      transformed: true,
      small: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "correlation",
          column1,
          column2,
          data
        });
      });

      function transformData(_x3, _x4) {
        return _transformData2.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_LINEAR_REGRESSION_BLOCK,
    message0: "linear regression of x %1 y %2 %3 %4 %5",
    args0: [{
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "x",
      dataType: "number"
    }, {
      type: _fields_DataColumnChooserField__WEBPACK_IMPORTED_MODULE_0__/* ["default"].KEY */ .Z.KEY,
      name: "y",
      dataType: "number"
    }, {
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview",
      compare: true
    }, {
      type: "input_dummy"
    }, {
      type: _fields_chart_ScatterPlotField__WEBPACK_IMPORTED_MODULE_6__/* ["default"].KEY */ .Z.KEY,
      name: "plot",
      linearRegression: true
    }],
    inputsInline: false,
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: statisticsColour,
    template: "meta",
    dataPreviewField: false,
    passthroughData: true,
    transformData: function () {
      var _transformData3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function* (b, data) {
        var column1 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "x", {
          type: "number"
        });
        var column2 = (0,_fields_tidy__WEBPACK_IMPORTED_MODULE_3__/* .tidyResolveFieldColumn */ .Fy)(data, b, "y", {
          type: "number"
        });
        if (!column1 || !column2) return Promise.resolve([]);
        return (0,_workers_data_proxy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
          type: "linear_regression",
          column1,
          column2,
          data
        });
      });

      function transformData(_x5, _x6) {
        return _transformData3.apply(this, arguments);
      }

      return transformData;
    }()
  }, {
    kind: "block",
    type: DATA_COMMENT_BLOCK,
    message0: "comment %1 %2 %3",
    args0: [{
      type: _fields_DataPreviewField__WEBPACK_IMPORTED_MODULE_5__/* ["default"].KEY */ .Z.KEY,
      name: "preview"
    }, {
      type: "input_dummy"
    }, {
      type: "field_multilinetext",
      name: "text",
      text: "And then...",
      spellcheck: true
    }],
    previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .DATA_SCIENCE_STATEMENT_TYPE */ .zN,
    colour: operatorsColour,
    template: "meta",
    inputsInline: false,
    dataPreviewField: false,
    transformData: _toolbox__WEBPACK_IMPORTED_MODULE_1__/* .identityTransformData */ .FW
  }],
  createCategory: () => [{
    kind: "category",
    name: "Organize",
    colour: operatorsColour,
    contents: [
    /*<BlockReference>{
        kind: "block",
        type: DATA_COMMENT_BLOCK,
    },*/
    {
      kind: "block",
      type: DATA_ARRANGE_BLOCK
    }, {
      kind: "block",
      type: DATA_SELECT_BLOCK
    }, {
      kind: "block",
      type: DATA_DROP_BLOCK
    }, {
      kind: "block",
      type: DATA_FILTER_COLUMNS_BLOCK
    }, {
      kind: "block",
      type: DATA_FILTER_STRING_BLOCK
    }, {
      kind: "block",
      type: DATA_SLICE_BLOCK
    }]
  }, {
    kind: "category",
    name: "Compute",
    colour: computeColour,
    contents: [{
      kind: "block",
      type: DATA_MUTATE_COLUMNS_BLOCK
    }, {
      kind: "block",
      type: DATA_MUTATE_NUMBER_BLOCK
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BLOCK
    }, {
      kind: "block",
      type: DATA_SUMMARIZE_BY_GROUP_BLOCK
    }, {
      kind: "block",
      type: DATA_COUNT_BLOCK
    }, {
      kind: "block",
      type: DATA_BIN_BLOCK
    }]
  }, {
    kind: "category",
    name: "Statistics",
    colour: statisticsColour,
    contents: [{
      kind: "block",
      type: DATA_CORRELATION_BLOCK
    }, {
      kind: "block",
      type: DATA_LINEAR_REGRESSION_BLOCK
    }]
  }]
};
/* harmony default export */ __webpack_exports__["Z"] = (dataDsl);

/***/ }),

/***/ 98474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": function() { return /* binding */ createIFrameDSL; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9809);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80303);
/* harmony import */ var _jsongenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97428);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16582);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89801);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var IFrameDomainSpecificLanguage = /*#__PURE__*/function () {
  function IFrameDomainSpecificLanguage(id, targetOrigin) {
    this.dslid = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_2__/* .randomDeviceId */ .b_)();
    this.blocks = [];
    this.category = [];
    this.pendings = {};
    this.id = id;
    this.targetOrigin = targetOrigin;
    this.handleMessage = this.handleMessage.bind(this);
  } // eslint-disable-next-line @typescript-eslint/ban-types


  var _proto = IFrameDomainSpecificLanguage.prototype;

  _proto.post = function post(action, extras) {
    var payload = _objectSpread({
      id: Math.random() + "",
      type: "dsl",
      dslid: this.dslid,
      action
    }, extras || {});

    window.parent.postMessage(payload, this.targetOrigin);
    return payload;
  };

  _proto.mount = function mount(workspace) {
    this._workspace = workspace;
    window.addEventListener("message", this.handleMessage, false);
    this.post("mount");
    return () => {
      this.post("unmount");
      this._workspace = undefined;
      window.removeEventListener("message", this.handleMessage);
    };
  };

  _proto.handleMessage = function handleMessage(msg) {
    var {
      data
    } = msg;

    if (data.type === "dsl" && data.dslid === this.dslid) {
      var {
        id: _id,
        action
      } = data; // check for pending request

      var pending = _id !== undefined && this.pendings[_id];

      if (pending) {
        delete this.pendings[_id];
        pending(data);
      } // trigger recomputation


      switch (action) {
        case "change":
          {
            //console.log(`iframedsl: change requested`)
            this._workspace.getTopBlocks(false).filter(b => {
              var _resolveBlockDefiniti;

              return ((_resolveBlockDefiniti = (0,_toolbox__WEBPACK_IMPORTED_MODULE_4__/* .resolveBlockDefinition */ .Pq)(b.type)) === null || _resolveBlockDefiniti === void 0 ? void 0 : _resolveBlockDefiniti.dsl) === this.id;
            }).forEach(b => {
              //console.log(`change ${b.id}`)
              var {
                jacdacServices
              } = b;
              jacdacServices.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver);
            });

            break;
          }

        case "workspace":
          {
            break;
          }
      }
    }
  };

  _proto.createTransformData = function createTransformData() {
    return (blockWithServices, dataset) => new Promise(resolve => {
      // TODO fix event ordering
      var workspace = (0,_jsongenerator__WEBPACK_IMPORTED_MODULE_3__/* .workspaceToJSON */ .v)(blockWithServices.workspace, [], // TODO pass dsls
      [blockWithServices]);
      var {
        id
      } = this.post("transform", {
        blockId: blockWithServices.id,
        workspace,
        dataset
      });
      setTimeout(() => {
        if (this.pendings[id]) {
          delete this.pendings[id];
          console.warn("iframedsl: transform timeouted");
          resolve(undefined);
        }
      }, 10000);

      this.pendings[id] = data => {
        var {
          dataset,
          warning
        } = data;
        if (warning) (0,_WorkspaceContext__WEBPACK_IMPORTED_MODULE_5__/* .setBlockDataWarning */ .Vm)(blockWithServices, warning);
        resolve(dataset);
      };
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;

  _proto.createBlocks = function createBlocks(options) {
    return new Promise(resolve => {
      var {
        id
      } = this.post("blocks");
      setTimeout(() => {
        if (this.pendings[id]) {
          delete this.pendings[id];
          console.warn("iframedsl " + this.id + ": no blocks returned, giving up");
          resolve(this.blocks);
        }
      }, 3000);

      this.pendings[id] = data => {
        var _this$blocks, _this$category;

        var bdata = data;
        this.blocks = bdata.blocks;
        this.category = bdata.category;
        console.debug("iframedsl " + this.id + ": loaded " + ((_this$blocks = this.blocks) === null || _this$blocks === void 0 ? void 0 : _this$blocks.length) + " blocks, " + ((_this$category = this.category) === null || _this$category === void 0 ? void 0 : _this$category.length) + " categories");
        var transformData = this.createTransformData();
        this.blocks.forEach(block => block.transformData = transformData);
        resolve(this.blocks);
      };
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ;

  _proto.createCategory = function createCategory(options) {
    return this.category;
  };

  _proto.onWorkspaceJSONChange = function onWorkspaceJSONChange(json) {
    this.post("workspace", {
      workspace: json
    });
  };

  _proto.onSave = function onSave(file) {
    this.post("save", file);
  };

  return IFrameDomainSpecificLanguage;
}();
/**
 * Creates an iframe DSL if applicable
 * @param targetOrigin
 * @returns
 */


function createIFrameDSL(id, targetOrigin) {
  if (targetOrigin === void 0) {
    targetOrigin = "*";
  }

  return (0,_jacdac_ts_src_jdom_iframeclient__WEBPACK_IMPORTED_MODULE_6__/* .inIFrame */ .H)() && new IFrameDomainSpecificLanguage(id, targetOrigin);
}

/***/ }),

/***/ 21910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tT": function() { return /* binding */ toRoleType; },
/* harmony export */   "eS": function() { return /* binding */ parseRoleType; },
/* harmony export */   "GB": function() { return /* binding */ fieldsToFieldInputs; },
/* harmony export */   "ki": function() { return /* binding */ fieldsToValues; },
/* harmony export */   "Bo": function() { return /* binding */ fieldsToMessage; },
/* harmony export */   "me": function() { return /* binding */ serviceHelp; },
/* harmony export */   "JO": function() { return /* binding */ createServiceColor; },
/* harmony export */   "xH": function() { return /* binding */ roleVariable; },
/* harmony export */   "wi": function() { return /* binding */ getServiceInfo; },
/* harmony export */   "Hy": function() { return /* binding */ ServicesBaseDSL; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15785);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86535);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99244);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35313);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13996);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21258);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26799);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73390);
/* harmony import */ var _fields_NoteField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50585);
/* harmony import */ var _fields_ServoAngleField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(891);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16582);
/* harmony import */ var _vm_VMgenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15056);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74602);
















var SET_STATUS_LIGHT_BLOCK = "jacdac_set_status_light";
var ROLE_BOUND_EVENT_BLOCK = "jacdac_role_bound_event";
var ROLE_BOUND_BLOCK = "jacdac_role_bound";

function isBooleanField(field) {
  return field.type === "bool";
}

function isStringField(field) {
  return field.type === "string";
}

function toBlocklyType(field) {
  return field.encoding === "JSON" ? _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .JSON_TYPE */ .oj : isBooleanField(field) ? _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .BOOLEAN_TYPE */ .lu : isStringField(field) ? _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .STRING_TYPE */ .jt : (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .isNumericType */ .FV)(field) ? _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .NUMBER_TYPE */ .sS : undefined;
}

function enumInfo(srv, field) {
  var _srv$enums;

  var e = (_srv$enums = srv.enums) === null || _srv$enums === void 0 ? void 0 : _srv$enums[field.type];
  return e;
}

var ignoredServices = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_CONTROL */ .gm9, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_LOGGER */ .w9j, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_ROLE_MANAGER */ .igi, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_PROTO_TEST */ .$Bn, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_BOOTLOADER */ .PWm];
var customMessages = [{
  service: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_JOYSTICK */ .vRO,
  register: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .JoystickReg.Direction */ .ztd.Direction,
  field: "buttons",
  get: "is %1 %2 pressed"
}]; // internal helper functions

var customShadows = [{
  serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_SERVO */ .$X_,
  kind: "rw",
  identifier: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .ServoReg.Angle */ .pmu.Angle,
  field: "_",
  shadow: {
    kind: "block",
    type: _fields_ServoAngleField__WEBPACK_IMPORTED_MODULE_10__/* ["default"].SHADOW.type */ .Z.SHADOW.type
  }
}, {
  serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SRV_BUZZER */ .J1$,
  kind: "command",
  identifier: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .BuzzerCmd.PlayNote */ .Rv2.PlayNote,
  field: "frequency",
  shadow: {
    kind: "block",
    type: _fields_NoteField__WEBPACK_IMPORTED_MODULE_9__/* ["default"].SHADOW.type */ .Z.SHADOW.type
  }
}];

var lookupCustomShadow = (service, info, field) => {
  var _customShadows$find;

  return (_customShadows$find = customShadows.find(cs => cs.serviceClass === service.classIdentifier && cs.kind == info.kind && cs.identifier === info.identifier && cs.field == field.name)) === null || _customShadows$find === void 0 ? void 0 : _customShadows$find.shadow;
};

var fieldsSupported = pkt => pkt.fields.every(toBlocklyType);

var fieldName = (reg, field) => field.name === "_" ? reg.name : field.name;

var fieldToShadow = (service, info, field) => lookupCustomShadow(service, info, field) || (isBooleanField(field) ? {
  kind: "block",
  type: "jacdac_on_off"
} : isStringField(field) ? {
  kind: "block",
  type: "text"
} : field.unit === "°" ? {
  kind: "block",
  type: "jacdac_angle"
} : field.unit === "/" ? {
  kind: "block",
  type: "jacdac_ratio"
} : /^%/.test(field.unit) ? {
  kind: "block",
  type: "jacdac_percent"
} : field.type === "u8" ? {
  kind: "block",
  type: "jacdac_byte"
} : {
  kind: "block",
  type: "math_number",
  value: field.defaultValue || 0,
  min: field.typicalMin || field.absoluteMin,
  max: field.typicalMax || field.absoluteMax
});

var variableName = (srv, client) => "" + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(srv.camelName).toLowerCase() + (client ? "" : " server") + " 1";

var isEnabledRegister = info => info.fields.length === 1 && info.fields[0].type === "bool" && info.name === "enabled";

var customMessage = (srv, reg, field) => customMessages.find(m => m.service === srv.classIdentifier && m.register === reg.identifier && m.field === field.name);

var eventFieldGroups = [{
  output: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .NUMBER_TYPE */ .sS,
  filter: _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .isNumericType */ .FV
}, {
  output: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .BOOLEAN_TYPE */ .lu,
  filter: isBooleanField
}, {
  output: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .STRING_TYPE */ .jt,
  filter: f => isStringField(f) && f.encoding !== "JSON"
}, {
  output: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .JSON_TYPE */ .oj,
  filter: f => isStringField(f) && f.encoding === "JSON"
}];
// exports
function toRoleType(service, client) {
  if (client === void 0) {
    client = true;
  }

  return service.classIdentifier + ":" + (client ? "client" : "server");
}
function parseRoleType(v) {
  var split = v.type.split(":");
  return {
    role: v.name,
    serviceClass: parseInt(split[0]),
    client: split.length === 2 ? split[1] === "client" : true
  };
}
var fieldsToFieldInputs = info => info.fields.map(field => ({
  type: "input_value",
  name: fieldName(info, field),
  check: toBlocklyType(field)
}));
var fieldsToValues = (service, info) => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .toMap */ .qL)(info.fields, field => fieldName(info, field), field => fieldToShadow(service, info, field));
var fieldsToMessage = info => info.fields.map((field, i) => (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(field.name) + " %" + (2 + i)).join(" ");
var serviceHelp = service => {
  return (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)("/services/" + service.shortId);
};
var sensorColor = (0,_palette__WEBPACK_IMPORTED_MODULE_14__/* .paletteColorByIndex */ .W)(1);
var otherColor = (0,_palette__WEBPACK_IMPORTED_MODULE_14__/* .paletteColorByIndex */ .W)(3); // eslint-disable-next-line @typescript-eslint/no-unused-vars

var createServiceColor = theme => {
  var serviceColor = srv => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isSensor */ .rq)(srv) ? sensorColor : otherColor;

  return serviceColor;
};
var roleVariable = function roleVariable(service, client) {
  if (client === void 0) {
    client = true;
  }

  return {
    type: "field_variable",
    name: "role",
    variable: variableName(service, client),
    variableTypes: [toRoleType(service, client)],
    defaultType: toRoleType(service, client)
  };
};
var getServiceInfo = () => {
  var allServices = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .serviceSpecifications */ .Le)();
  var supportedServices = allServices.filter(service => !/^_/.test(service.shortId) && service.status !== "deprecated").filter(service => ignoredServices.indexOf(service.classIdentifier) < 0);
  var registers = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)(supportedServices.map(service => service.packets.filter(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isHighLevelRegister */ .vr).map(register => ({
    service,
    register
  }))));
  var [registerSimples, registerComposites] = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .splitFilter */ .ap)(registers, reg => reg.register.fields.length == 1);
  var [registerSimpleTypes, registerSimpleOthers] = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .splitFilter */ .ap)(registerSimples, _ref => {
    var {
      register
    } = _ref;
    return !!toBlocklyType(register.fields[0]);
  });
  var registerSimpleEnumTypes = registerSimpleOthers.filter(_ref2 => {
    var {
      service,
      register
    } = _ref2;
    return !!enumInfo(service, register.fields[0]);
  }).map(_ref3 => {
    var {
      service,
      register
    } = _ref3;
    return {
      service,
      register,
      field: register.fields[0],
      einfo: enumInfo(service, register.fields[0])
    };
  });
  var registerCompositeEnumTypes = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)(registerComposites.map(_ref4 => {
    var {
      service,
      register
    } = _ref4;
    return register.fields.map(field => ({
      service,
      register,
      field,
      einfo: enumInfo(service, field)
    })).filter(_ref5 => {
      var {
        einfo
      } = _ref5;
      return !!einfo;
    });
  }));
  return {
    allServices,
    supportedServices,
    registers,
    registerSimpleTypes,
    registerComposites,
    registerSimpleEnumTypes,
    registerCompositeEnumTypes,
    events: supportedServices.map(service => ({
      service,
      events: service.packets.filter(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isHighLevelEvent */ .jl)
    })).filter(kv => !!kv.events.length),
    commands: (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)(supportedServices.map(service => service.packets.filter(pkt => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isCommand */ .ao)(pkt) && !pkt.lowLevel && fieldsSupported(pkt)).map(pkt => ({
      service,
      command: pkt
    }))))
  };
};
var ServicesBaseDSL = /*#__PURE__*/function () {
  function ServicesBaseDSL() {
    this._serviceBlocks = [];
    this._eventFieldBlocks = [];
  }

  var _proto = ServicesBaseDSL.prototype;

  _proto.makeRegisterSimpleGetBlocks = function makeRegisterSimpleGetBlocks(registers, client) {
    if (client === void 0) {
      client = true;
    }

    return registers.map(_ref6 => {
      var _customMessage;

      var {
        service,
        register
      } = _ref6;
      return {
        kind: "block",
        type: "jacdac_get_simple_" + service.shortId + "_" + register.name + (client ? "" : "_server"),
        message0: ((_customMessage = customMessage(service, register, register.fields[0])) === null || _customMessage === void 0 ? void 0 : _customMessage.get) || "%1 " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(register.name),
        args0: [roleVariable(service, client)],
        inputsInline: true,
        output: toBlocklyType(register.fields[0]),
        colour: this.serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service,
        register,
        field: register.fields[0],
        template: "register_get"
      };
    });
  };

  _proto.makeRegisterSetBlocks = function makeRegisterSetBlocks(registers, client) {
    if (client === void 0) {
      client = true;
    }

    return registers.filter(_ref7 => {
      var {
        register
      } = _ref7;
      return !client || register.kind === "rw";
    }).filter(_ref8 => {
      var {
        register
      } = _ref8;
      return fieldsSupported(register);
    }).map(_ref9 => {
      var {
        service,
        register
      } = _ref9;
      return {
        kind: "block",
        type: "jacdac_set_" + service.shortId + "_" + register.name + (client ? "" : "_server"),
        message0: isEnabledRegister(register) ? "set %1 %2" : "set %1 " + register.name + " to " + (register.fields.length === 1 ? "%2" : fieldsToMessage(register)),
        args0: [roleVariable(service, client)].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(fieldsToFieldInputs(register))),
        values: fieldsToValues(service, register),
        inputsInline: true,
        colour: this.serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service,
        register,
        previousStatement: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .CODE_STATEMENT_TYPE */ .lL,
        nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .CODE_STATEMENT_TYPE */ .lL,
        template: "register_set"
      };
    });
  };

  _proto.makeRegisterChangeByEventBlocks = function makeRegisterChangeByEventBlocks(registers, client) {
    if (client === void 0) {
      client = true;
    }

    return registers.filter(_ref10 => {
      var {
        service
      } = _ref10;
      return !service.packets.some(_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .isHighLevelEvent */ .jl);
    }).filter(_ref11 => {
      var {
        register
      } = _ref11;
      return register.fields.length === 1 && (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .isNumericType */ .FV)(register.fields[0]) && register.identifier !== _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .SystemReg.Intensity */ .ZJq.Intensity;
    }).map(_ref12 => {
      var {
        service,
        register
      } = _ref12;
      return {
        kind: "block",
        type: "jacdac_change_by_events_" + service.shortId + "_" + register.name + (client ? "" : "_server"),
        message0: "on %1 " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(register.name) + " change by %2",
        args0: [roleVariable(service, client)].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(fieldsToFieldInputs(register))).filter(v => !!v),
        values: fieldsToValues(service, register),
        inputsInline: true,
        nextStatement: _toolbox__WEBPACK_IMPORTED_MODULE_11__/* .CODE_STATEMENT_TYPE */ .lL,
        colour: this.serviceColor(service),
        tooltip: "Event raised when " + register.name + " changes",
        helpUrl: serviceHelp(service),
        service,
        register,
        template: "register_change_event"
      };
    });
  };

  _proto.makeRegisterNumericsGetBlocks = function makeRegisterNumericsGetBlocks(registers, client) {
    if (client === void 0) {
      client = true;
    }

    return registers.filter(re => re.register.fields.some(_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .isNumericType */ .FV)).map(_ref13 => {
      var {
        service,
        register
      } = _ref13;
      return {
        kind: "block",
        type: "jacdac_get_numerics_" + service.shortId + "_" + register.name + (client ? "" : "_server"),
        message0: "%1 " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(register.name) + (register.fields.length > 1 ? " %2" : ""),
        args0: [roleVariable(service, client), register.fields.length > 1 ? {
          type: "field_dropdown",
          name: "field",
          options: register.fields.filter(f => (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .isNumericType */ .FV)(f)).map(field => [(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(field.name), fieldName(register, field)])
        } : undefined].filter(v => !!v),
        inputsInline: true,
        output: "Number",
        colour: this.serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service,
        register,
        template: "register_get"
      };
    });
  };

  _proto.makeRegisterEnumGetBlocks = function makeRegisterEnumGetBlocks(registers, client) {
    if (client === void 0) {
      client = true;
    }

    return registers.map(_ref14 => {
      var _customMessage2;

      var {
        service,
        register,
        field,
        einfo
      } = _ref14;
      return {
        kind: "block",
        type: "jacdac_get_enum_" + service.shortId + "_" + register.name + "_" + field.name + (client ? "" : "_server"),
        message0: ((_customMessage2 = customMessage(service, register, field)) === null || _customMessage2 === void 0 ? void 0 : _customMessage2.get) || "%1 " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(register.name) + (field.name === "_" ? "" : " " + field.name) + " %2",
        args0: [roleVariable(service, client), {
          type: "field_dropdown",
          name: field.name,
          options: Object.keys(einfo.members).map(member => [(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(member), member])
        }],
        inputsInline: true,
        output: "Boolean",
        colour: this.serviceColor(service),
        tooltip: register.description,
        helpUrl: serviceHelp(service),
        service,
        register,
        field,
        template: "register_get"
      };
    });
  } // generate accessor blocks for event/command data with numbers
  ;

  _proto.makeFieldBlocks = function makeFieldBlocks(sps, client) {
    if (client === void 0) {
      client = true;
    }

    var worker = (sp, output, filter) => {
      var {
        service,
        packets
      } = sp;
      return packets.filter(pkt => pkt.fields.filter(filter).length > 0).map(pkt => ({
        service,
        pkt
      })).map(_ref15 => {
        var {
          service,
          pkt
        } = _ref15;
        return {
          kind: "block",
          type: "jacdac_event_field_" + output.toLowerCase() + "_" + service.shortId + "_" + pkt.name + (client ? "" : "_server"),
          message0: pkt.name + " %1",
          args0: [{
            type: "field_dropdown",
            name: "field",
            options: pkt.fields.map(field => [(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_3__/* .humanify */ .lW)(field.name), field.name])
          }],
          colour: this.serviceColor(service),
          inputsInline: true,
          tooltip: "Data fields of the " + pkt.name + " " + (client ? "event" : "command"),
          helpUrl: serviceHelp(service),
          service,
          event: pkt,
          output,
          template: "event_field"
        };
      });
    };

    return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .arrayConcatMany */ .ue)(eventFieldGroups.map(_ref16 => {
      var {
        output,
        filter
      } = _ref16;
      return sps.map(sp => worker(sp, output, filter));
    })));
  };

  _proto.createCategoryHelper = function createCategoryHelper(options) {
    var _source$blocks;

    var {
      theme,
      source,
      liveServices
    } = options;
    this.serviceColor = createServiceColor(theme);
    var blockServices = (source === null || source === void 0 ? void 0 : source.variables.map(parseRoleType).filter(vt => !!(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_6__/* .serviceSpecificationFromClassIdentifier */ .d5)(vt.serviceClass))) || [];
    var usedEvents = new Set(source === null || source === void 0 ? void 0 : (_source$blocks = source.blocks) === null || _source$blocks === void 0 ? void 0 : _source$blocks.map(block => ({
      block,
      definition: (0,_toolbox__WEBPACK_IMPORTED_MODULE_11__/* .resolveBlockDefinition */ .Pq)(block.type)
    })).filter(_ref17 => {
      var {
        definition
      } = _ref17;
      return (definition === null || definition === void 0 ? void 0 : definition.template) === "event";
    }).map(_ref18 => {
      var {
        block,
        definition
      } = _ref18;
      var {
        events
      } = definition;
      if (events.length === 1) return events[0];else {
        var eventName = block.inputs[0].fields["event"].value;
        return events.find(ev => ev.name === eventName);
      }
    }).filter(ev => !!ev));

    var jdBlocks = this._serviceBlocks.filter(block => !!block.service);

    var services = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .uniqueMap */ .EM)(jdBlocks, block => block.service.shortId, block => block.service);
    var toolboxServices = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .uniqueMap */ .EM)(_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_5__/* ["default"].diagnostics */ .Z.diagnostics ? services : [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(blockServices.map(pair => services.find(service => service.classIdentifier === pair.serviceClass)).filter(srv => !!srv)), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(liveServices.map(s => s.specification))), srv => srv.shortId, srv => srv).filter(srv => srv && ignoredServices.indexOf(srv.classIdentifier) < 0).sort((l, r) => l.name.localeCompare(r.name));

    var getFieldBlocks = (service, fieldBlocks) => fieldBlocks.filter(ev => ev.service === service && usedEvents.has(ev.event)).map(block => ({
      kind: "block",
      type: block.type,
      values: block.values
    }));

    var makeCategory = (service, isClient, serviceBlocks, eventFieldBLocks) => {
      return {
        kind: "category",
        name: service.name + (isClient ? "" : " Server"),
        colour: this.serviceColor(service),
        contents: [{
          kind: "button",
          text: "Add " + service.name + " " + (isClient ? "role" : "server"),
          callbackKey: "jacdac_add_role_callback_" + toRoleType(service, isClient),
          callback: workspace => blockly__WEBPACK_IMPORTED_MODULE_13__.Variables.createVariableButtonHandler(workspace, null, toRoleType(service, isClient))
        }].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(serviceBlocks.map(block => ({
          kind: "block",
          type: block.type,
          values: block.values
        }))), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(getFieldBlocks(service, eventFieldBLocks)))
      };
    };

    return function (serviceBlocks, eventFieldBlocks, client) {
      if (client === void 0) {
        client = true;
      }

      return toolboxServices.map(serviceClient => ({
        serviceClient,
        serviceBlocks: serviceBlocks.filter(block => block.service === serviceClient)
      })).map(sc => makeCategory(sc.serviceClient, client, sc.serviceBlocks, eventFieldBlocks));
    };
  };

  _proto.compileEventToVM = function compileEventToVM(options) {
    var makeAwaitEvent = (cmd, role, eventName) => {
      return {
        expression: {
          type: "CallExpression",
          arguments: cmd == "awaitEvent" ? [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(role.toString(), eventName.toString())] : [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)(role.toString()), (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)(eventName.toString())],
          callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)(cmd)
        },
        event: {
          role: role.toString(),
          event: eventName.toString()
        }
      };
    };

    var {
      block,
      definition,
      blockToExpression
    } = options;
    var {
      inputs
    } = block;
    var {
      template
    } = definition;

    switch (template) {
      case "event":
        {
          var {
            value: role
          } = inputs[0].fields["role"];
          var {
            value: eventName
          } = inputs[0].fields["event"];
          return makeAwaitEvent("awaitEvent", role.toString(), eventName.toString());
        }

      case "register_change_event":
        {
          var {
            value: _role
          } = inputs[0].fields["role"];
          var {
            register
          } = definition;
          var {
            expr,
            errors
          } = blockToExpression(undefined, inputs[0].child);
          return {
            expression: {
              type: "CallExpression",
              arguments: [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(_role.toString(), register.name), expr],
              callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)("awaitChange")
            },
            errors
          };
        }

      default:
        {
          var {
            type
          } = block;

          switch (type) {
            case ROLE_BOUND_EVENT_BLOCK:
              {
                var {
                  value: _role2
                } = inputs[0].fields["role"];
                var {
                  value: _eventName
                } = inputs[0].fields["event"];
                return makeAwaitEvent("roleBound", _role2.toString(), _eventName.toString());
              }
          }
        }
    }

    return undefined;
  };

  _proto.compileExpressionToVM = function compileExpressionToVM(options) {
    var {
      event,
      definition,
      block
    } = options;
    var {
      inputs,
      id
    } = block;
    var {
      template
    } = definition;

    switch (template) {
      case "register_get":
        {
          var {
            register
          } = definition;
          var {
            value: role
          } = inputs[0].fields["role"];
          var _field = inputs[0].fields["field"];
          return {
            expr: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(role, _field ? (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(register.name, _field.value) : register.name),
            errors: []
          };
        }

      case "event_field":
        {
          var {
            event: eventInfo
          } = definition;
          var errors = [];

          if (event.event !== eventInfo.name) {
            errors.push({
              sourceId: id,
              message: "Event " + eventInfo.name + " is not available in this handler."
            });
          }

          var _field2 = inputs[0].fields["field"];
          return {
            expr: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(event.role, (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(event.event, _field2.value)),
            errors
          };
        }

      default:
        {
          var {
            type
          } = block;
          var _errors = [];

          switch (type) {
            case ROLE_BOUND_BLOCK:
              {
                var {
                  value: _role3
                } = inputs[0].fields["role"];
                return {
                  expr: {
                    type: "CallExpression",
                    arguments: [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)(_role3.toString())],
                    callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)("$fun", "roleBoundExpression")
                  },
                  errors: _errors
                };
              }
          }
        }
    }

    return undefined;
  };

  _proto.compileCommandToVM = function compileCommandToVM(options) {
    var {
      event,
      block,
      definition,
      blockToExpression
    } = options;
    var {
      template
    } = definition;
    var {
      inputs
    } = block;

    switch (template) {
      case "register_set":
        {
          // TODO: need to handle the case of writing a register with fields
          var {
            register
          } = definition;
          var exprsErrors = inputs.map(a => {
            return blockToExpression(event, a.child);
          });
          var {
            value: role
          } = inputs[0].fields.role;
          return {
            cmd: (0,_vm_VMgenerator__WEBPACK_IMPORTED_MODULE_12__/* .makeVMBase */ .IZ)(block, {
              type: "CallExpression",
              arguments: [(0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(role, register.name)].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(exprsErrors.map(p => p.expr))),
              callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)("writeRegister")
            }),
            errors: exprsErrors.flatMap(p => p.errors)
          };
        }

      case "raiseNo":
      case "raiseArgs":
      case "command":
        {
          var {
            command: serviceCommand
          } = definition;
          var {
            value: _role4
          } = inputs[0].fields.role;
          var eventName = template === "raiseNo" ? inputs[0].fields["event"].value.toString() : "";

          var _exprsErrors = template === "raiseNo" ? [] : inputs.map(a => {
            return blockToExpression(event, a.child);
          });

          return {
            cmd: (0,_vm_VMgenerator__WEBPACK_IMPORTED_MODULE_12__/* .makeVMBase */ .IZ)(block, {
              type: "CallExpression",
              arguments: _exprsErrors.map(p => p.expr),
              callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toMemberExpression */ .vf)(_role4, eventName ? eventName : serviceCommand.name)
            }),
            errors: _exprsErrors.flatMap(p => p.errors)
          };
        }

      case "server":
        {
          return {
            cmd: (0,_vm_VMgenerator__WEBPACK_IMPORTED_MODULE_12__/* .makeVMBase */ .IZ)(block, {
              type: "CallExpression",
              arguments: [],
              callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_8__/* .toIdentifier */ .EB)("nop")
            }),
            errors: []
          };
        }

      default:
        {
          var {
            type
          } = block;

          switch (type) {
            case SET_STATUS_LIGHT_BLOCK:
              {
                console.log("SET_STATUS");
              }
          }
        }
    }

    return undefined;
  };

  return ServicesBaseDSL;
}();

/***/ }),

/***/ 15056:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IZ": function() { return /* binding */ makeVMBase; },
/* harmony export */   "cC": function() { return /* binding */ processErrors; },
/* harmony export */   "ZP": function() { return /* binding */ workspaceJSONToVMProgram; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94578);
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52146);
/* harmony import */ var _jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73390);
/* harmony import */ var _blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16582);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74640);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94113);
/* harmony import */ var _blockly_dsl_servicesbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21910);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);









var makeVMBase = (block, command) => {
  return {
    sourceId: block.id,
    type: "cmd",
    command
  };
};
var processErrors = (block, errors) => {
  return errors.map(e => {
    return {
      sourceId: e.sourceId ? e.sourceId : block.id,
      message: e.message
    };
  });
};
function workspaceJSONToVMProgram(workspace, dsls) {
  //console.debug(`compile vm`, { workspace, dsls })
  if (!workspace) return undefined;
  var [roles, serverRoles] = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .splitFilter */ .ap)(workspace.variables.filter(v => _blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .BUILTIN_TYPES.indexOf */ .Nd.indexOf(v.type) < 0).map(_blockly_dsl_servicesbase__WEBPACK_IMPORTED_MODULE_4__/* .parseRoleType */ .eS), r => r.client);

  var EmptyExpression = /*#__PURE__*/function (_Error) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(EmptyExpression, _Error);

    function EmptyExpression() {
      return _Error.apply(this, arguments) || this;
    }

    return EmptyExpression;
  }( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(Error));

  var blockToExpression = (ev, blockIn) => {
    var errors = [];

    var blockToExpressionInner = (ev, block) => {
      if (!block) {
        throw new EmptyExpression();
      }

      var {
        type,
        value,
        inputs
      } = block;
      console.log("block2e", {
        ev,
        block,
        type,
        value,
        inputs
      });
      if (value !== undefined) // literal
        return {
          type: "Literal",
          value: value,
          raw: value + ""
        };
      var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);

      if (!dsl) {
        console.warn("unknown block " + type, {
          type,
          ev,
          block,
          d: (blockly__WEBPACK_IMPORTED_MODULE_2___default().Blocks)[type]
        });
        errors.push({
          sourceId: block.id,
          message: "unknown block " + type
        });
      } else {
        var _dsl$compileExpressio;

        var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);
        var res = (_dsl$compileExpressio = dsl.compileExpressionToVM) === null || _dsl$compileExpressio === void 0 ? void 0 : _dsl$compileExpressio.call(dsl, {
          event: ev,
          definition,
          block,
          blockToExpressionInner
        });

        if (res) {
          if (res.errors) res.errors.forEach(e => errors.push(e));
          return res.expr;
        }

        var {
          template
        } = definition;

        if (template === "shadow") {
          var field = inputs[0].fields["value"];
          var v = field.value;
          return {
            type: "Literal",
            value: v,
            raw: v + ""
          };
        }

        errors.push({
          sourceId: block.id,
          message: "unknown block " + type
        });
        console.warn("unsupported expression block " + type, {
          ev,
          block,
          definition
        });
      }

      throw new EmptyExpression();
    };

    return {
      expr: blockToExpressionInner(ev, blockIn),
      errors
    };
  };

  var blockToCommand = (event, block) => {
    var {
      type,
      inputs
    } = block;
    console.debug("block2c", {
      event,
      type,
      block,
      inputs
    });

    switch (type) {
      case "dynamic_if":
        {
          var _inputs$, _inputs$2;

          var thenHandler = {
            commands: [],
            errors: []
          };
          var elseHandler = {
            commands: [],
            errors: []
          };
          var t = (_inputs$ = inputs[1]) === null || _inputs$ === void 0 ? void 0 : _inputs$.child;
          var e = (_inputs$2 = inputs[2]) === null || _inputs$2 === void 0 ? void 0 : _inputs$2.child;

          if (t) {
            addCommands(event, [t].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(t.children ? t.children : [])), thenHandler);
          }

          if (e) {
            addCommands(event, [e].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(e.children ? e.children : [])), elseHandler);
          }

          var exprErrors = undefined;

          try {
            var _inputs$3;

            exprErrors = blockToExpression(event, (_inputs$3 = inputs[0]) === null || _inputs$3 === void 0 ? void 0 : _inputs$3.child);
          } catch (e) {
            if (e instanceof EmptyExpression) {
              exprErrors = {
                expr: {
                  type: "Literal",
                  value: false,
                  raw: "false "
                },
                errors: []
              };
            } else {
              throw e;
            }
          }

          var {
            expr,
            errors
          } = exprErrors;
          var ifThenElse = {
            sourceId: block.id,
            type: "ite",
            expr,
            then: thenHandler.commands,
            else: elseHandler.commands
          };
          console.log("dynamic if");
          return {
            cmd: ifThenElse,
            errors: processErrors(block, errors.concat(thenHandler.errors).concat(elseHandler.errors))
          };
        }
      // more builts

      default:
        {
          var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);

          if (dsl) {
            var _dsl$compileCommandTo;

            var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);
            var template = definition === null || definition === void 0 ? void 0 : definition.template;
            if (template === "meta") return undefined;
            var dslRes = (_dsl$compileCommandTo = dsl.compileCommandToVM) === null || _dsl$compileCommandTo === void 0 ? void 0 : _dsl$compileCommandTo.call(dsl, {
              event,
              block,
              definition,
              blockToExpression
            });

            if (dslRes) {
              dslRes.errors = processErrors(block, dslRes.errors);
              return dslRes;
            }
          }

          console.warn("unsupported command block " + type, {
            block
          });
          return {
            cmd: undefined,
            errors: [{
              sourceId: block.id,
              message: "unsupported command block " + type
            }]
          };
        }
    }
  };

  var nop = {
    type: "CallExpression",
    arguments: [],
    callee: (0,_jacdac_ts_src_vm_compile__WEBPACK_IMPORTED_MODULE_0__/* .toIdentifier */ .EB)("nop")
  };

  var addCommands = (event, blocks, handler) => {
    blocks === null || blocks === void 0 ? void 0 : blocks.filter(child => !!child).forEach(child => {
      try {
        var {
          cmd,
          errors
        } = blockToCommand(event, child) || {};
        if (cmd) handler.commands.push(cmd);
        errors === null || errors === void 0 ? void 0 : errors.forEach(e => handler.errors.push(e));
      } catch (e) {
        if (e instanceof EmptyExpression) {
          handler.commands.push({
            sourceId: child.id,
            type: "cmd",
            command: nop
          });
        } else {
          console.debug(e);
        }
      }
    });
  };

  var handlers = workspace.blocks.map(top => {
    var _topErrors2;

    var {
      type
    } = top;
    var command;
    var topEvent;
    var topErrors;
    var topMeta = false;

    try {
      var _dsl$compileEventToVM, _topErrors;

      var dsl = (0,_blockly_dsl_dsl__WEBPACK_IMPORTED_MODULE_3__/* .resolveDsl */ .u)(dsls, type);
      var definition = (0,_blockly_toolbox__WEBPACK_IMPORTED_MODULE_1__/* .resolveBlockDefinition */ .Pq)(type);
      var {
        expression,
        errors,
        event,
        meta
      } = (dsl === null || dsl === void 0 ? void 0 : (_dsl$compileEventToVM = dsl.compileEventToVM) === null || _dsl$compileEventToVM === void 0 ? void 0 : _dsl$compileEventToVM.call(dsl, {
        block: top,
        definition,
        blockToExpression
      })) || {};
      command = expression;
      topErrors = errors;
      topEvent = event;
      topMeta = meta; // if dsl didn't compile anything try again

      var {
        template
      } = definition || {};

      if (!command && !((_topErrors = topErrors) !== null && _topErrors !== void 0 && _topErrors.length)) {
        switch (template) {
          case "meta":
            {
              break;
            }

          default:
            {
              topErrors = [{
                sourceId: top.id,
                message: "unsupported handler block " + type
              }];
              console.debug("unsupported handler template " + template + " for " + type, {
                top
              });
              break;
            }
        }
      }
    } catch (e) {
      console.debug(e);

      if (e instanceof EmptyExpression) {
        return undefined;
      } else {
        throw e;
      }
    } // nothing to compile here


    if (!command && !((_topErrors2 = topErrors) !== null && _topErrors2 !== void 0 && _topErrors2.length)) return undefined;
    var handler = {
      commands: [{
        sourceId: top.id,
        type: "cmd",
        command
      }],
      errors: topErrors || [],
      meta: !!topMeta
    };
    addCommands(topEvent, top.children, handler);
    return handler;
  }).filter(handler => !!handler);
  return {
    roles,
    serverRoles,
    handlers
  };
}

/***/ })

}]);
//# sourceMappingURL=ffa0ba08991c4cec07fc11d2be51e3d66c550687-ccd0f4bacd9b91670f27.js.map