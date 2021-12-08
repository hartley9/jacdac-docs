"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8270,6141],{

/***/ 51606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Autocomplete_Autocomplete; }
});

// UNUSED EXPORTS: createFilterOptions

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(95025);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useControlled.js
var useControlled = __webpack_require__(35833);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback.js
var useEventCallback = __webpack_require__(13634);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/setRef.js
var setRef = __webpack_require__(96386);
;// CONCATENATED MODULE: ./node_modules/@mui/base/AutocompleteUnstyled/useAutocomplete.js

/* eslint-disable no-constant-condition */


 // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false
  } = config;
  return (options, _ref) => {
    var {
      inputValue,
      getOptionLabel
    } = _ref;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(option => {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE11 support.

function findIndex(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    disabled: disabledProp,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = option => {
      var _option$label;

      return (_option$label = option.label) != null ? _option$label : option;
    },
    isOptionEqualToValue = (option, value) => option === value,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  var id = (0,useId/* default */.Z)(idProp);
  var getOptionLabel = getOptionLabelProp;

  getOptionLabel = option => {
    var optionLabel = getOptionLabelProp(option);

    if (typeof optionLabel !== 'string') {
      if (false) { var erroneousReturn; }

      return String(optionLabel);
    }

    return optionLabel;
  };

  var ignoreFocus = react.useRef(false);
  var firstFocus = react.useRef(true);
  var inputRef = react.useRef(null);
  var listboxRef = react.useRef(null);
  var [anchorEl, setAnchorEl] = react.useState(null);
  var [focusedTag, setFocusedTag] = react.useState(-1);
  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = react.useRef(defaultHighlighted);
  var [value, setValueState] = (0,useControlled/* default */.Z)({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  var [inputValue, setInputValueState] = (0,useControlled/* default */.Z)({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  });
  var [focused, setFocused] = react.useState(false);
  var resetInputValue = react.useCallback((event, newValue) => {
    // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
    // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
    var isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;

    if (!isOptionSelected && !clearOnBlur) {
      return;
    }

    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValueState(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  var prevValue = react.useRef();
  react.useEffect(() => {
    var valueChange = value !== prevValue.current;
    prevValue.current = value;

    if (focused && !valueChange) {
      return;
    } // Only reset the input's value when freeSolo if the component's value changes.


    if (freeSolo && !valueChange) {
      return;
    }

    resetInputValue(null, value);
  }, [value, resetInputValue, focused, prevValue, freeSolo]);
  var [open, setOpenState] = (0,useControlled/* default */.Z)({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  });
  var [inputPristine, setInputPristine] = react.useState(true);
  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(option => {
    if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && isOptionEqualToValue(option, value2))) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
    getOptionLabel
  }) : [];
  var listboxAvailable = open && filteredOptions.length > 0;

  if (false) { var missingValue; }

  var focusTag = (0,useEventCallback/* default */.Z)(tagToFocus => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = (0,useEventCallback/* default */.Z)(_ref2 => {
    var {
      event,
      index,
      reason = 'auto'
    } = _ref2;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[role="option"].Mui-focused');

    if (prev) {
      prev.classList.remove('Mui-focused');
      prev.classList.remove('Mui-focusVisible');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.classList.add('Mui-focused');

    if (reason === 'keyboard') {
      option.classList.add('Mui-focusVisible');
    } // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });


    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = (0,useEventCallback/* default */.Z)(_ref3 => {
    var {
      event,
      diff,
      direction = 'next',
      reason = 'auto'
    } = _ref3;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = () => {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = react.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, val => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }

      var itemIndex = findIndex(filteredOptions, optionItem => isOptionEqualToValue(optionItem, valueItem));

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  filteredOptions.length, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = (0,useEventCallback/* default */.Z)(node => {
    (0,setRef/* default */.Z)(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });

  if (false) {}

  react.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = event => {
    if (open) {
      return;
    }

    setOpenState(true);
    setInputPristine(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = (event, reason) => {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = (event, newValue, reason, details) => {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValueState(newValue);
  };

  var isTouch = react.useRef(false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'selectOption';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (false) { var matches; }

      var itemIndex = findIndex(newValue, valueItem => isOptionEqualToValue(option, valueItem));

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'removeOption';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option
    });

    if (!disableCloseOnSelect && !event.ctrlKey && !event.metaKey) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = event => {
    ignoreFocus.current = true;
    setInputValueState('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = other => event => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }

    if (event.defaultMuiPrevented) {
      return;
    }

    if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    } // Wait until IME is settled.


    if (event.which !== 229) {
      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // Avoid early form validation, let the end-users continue filling the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'selectOption'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'createOption', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
              option: value[index]
            });
          }

          break;

        default:
      }
    }
  };

  var handleFocus = event => {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = event => {
    // Ignore the event when using the scrollbar with IE11
    if (listboxRef.current !== null && listboxRef.current.parentElement.contains(document.activeElement)) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = event => {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = event => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = () => {
    isTouch.current = true;
  };

  var handleOptionClick = event => {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'selectOption');
    isTouch.current = false;
  };

  var handleTagDelete = index => event => {
    var newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, 'removeOption', {
      option: value[index]
    });
  };

  var handlePopupIndicator = event => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = event => {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = () => {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = event => {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (false) {}

        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  if (disabledProp && focused) {
    handleBlur();
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0,esm_extends/* default */.Z)({
        'aria-owns': listboxAvailable ? "".concat(id, "-listbox") : null,
        role: 'combobox',
        'aria-expanded': listboxAvailable
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: () => ({
      id: "".concat(id, "-label"),
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperativeley so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': listboxAvailable ? "".concat(id, "-listbox") : null,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false'
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator
    }),
    getTagProps: _ref4 => {
      var {
        index
      } = _ref4;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: () => ({
      role: 'listbox',
      id: "".concat(id, "-listbox"),
      'aria-labelledby': "".concat(id, "-label"),
      ref: handleListboxRef,
      onMouseDown: event => {
        // Prevent blur
        event.preventDefault();
      }
    }),
    getOptionProps: _ref5 => {
      var {
        index,
        option
      } = _ref5;
      var selected = (multiple ? value : [value]).some(value2 => value2 != null && isOptionEqualToValue(option, value2));
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(67663);
// EXTERNAL MODULE: ./node_modules/@mui/material/Popper/Popper.js + 53 modules
var Popper = __webpack_require__(36693);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListSubheader/listSubheaderClasses.js

function getListSubheaderUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiListSubheader', slot);
}
var listSubheaderClasses = (0,generateUtilityClasses/* default */.Z)('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);
/* harmony default export */ var ListSubheader_listSubheaderClasses = ((/* unused pure expression or super */ null && (listSubheaderClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListSubheader/ListSubheader.js


var _excluded = ["className", "color", "component", "disableGutters", "disableSticky", "inset"];









var useUtilityClasses = ownerState => {
  var {
    classes,
    color,
    disableGutters,
    inset,
    disableSticky
  } = ownerState;
  var slots = {
    root: ['root', color !== 'default' && "color".concat((0,capitalize/* default */.Z)(color)), !disableGutters && 'gutters', inset && 'inset', !disableSticky && 'sticky']
  };
  return (0,composeClasses/* default */.Z)(slots, getListSubheaderUtilityClass, classes);
};

var ListSubheaderRoot = (0,styled/* default */.ZP)('li', {
  name: 'MuiListSubheader',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.Z)(ownerState.color))], !ownerState.disableGutters && styles.gutters, ownerState.inset && styles.inset, !ownerState.disableSticky && styles.sticky];
  }
})(_ref => {
  var {
    theme,
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    boxSizing: 'border-box',
    lineHeight: '48px',
    listStyle: 'none',
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  }, ownerState.color === 'primary' && {
    color: theme.palette.primary.main
  }, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, !ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, ownerState.inset && {
    paddingLeft: 72
  }, !ownerState.disableSticky && {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: theme.palette.background.paper
  });
});
var ListSubheader = /*#__PURE__*/react.forwardRef(function ListSubheader(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiListSubheader'
  });

  var {
    className,
    color = 'default',
    component = 'li',
    disableGutters = false,
    disableSticky = false,
    inset = false
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    component,
    disableGutters,
    disableSticky,
    inset
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListSubheaderRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m["default"])(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var ListSubheader_ListSubheader = (ListSubheader);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(98953);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(90581);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(75985);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/inputClasses.js
var inputClasses = __webpack_require__(15717);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(23660);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
var outlinedInputClasses = __webpack_require__(49118);
// EXTERNAL MODULE: ./node_modules/@mui/material/FilledInput/filledInputClasses.js
var filledInputClasses = __webpack_require__(56154);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/svg-icons/Close.js
var Close = __webpack_require__(47402);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(89275);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Autocomplete/autocompleteClasses.js

function getAutocompleteUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAutocomplete', slot);
}
var autocompleteClasses = (0,generateUtilityClasses/* default */.Z)('MuiAutocomplete', ['root', 'fullWidth', 'focused', 'focusVisible', 'tag', 'tagSizeSmall', 'tagSizeMedium', 'hasPopupIcon', 'hasClearIcon', 'inputRoot', 'input', 'inputFocused', 'endAdornment', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'popper', 'popperDisablePortal', 'paper', 'listbox', 'loading', 'noOptions', 'option', 'groupLabel', 'groupUl']);
/* harmony default export */ var Autocomplete_autocompleteClasses = (autocompleteClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Autocomplete/Autocomplete.js



var _ClearIcon, _ArrowDropDownIcon;

var Autocomplete_excluded = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"];























var Autocomplete_useUtilityClasses = ownerState => {
  var {
    classes,
    disablePortal,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused,
    popupOpen,
    size
  } = ownerState;
  var slots = {
    root: ['root', focused && 'focused', fullWidth && 'fullWidth', hasClearIcon && 'hasClearIcon', hasPopupIcon && 'hasPopupIcon'],
    inputRoot: ['inputRoot'],
    input: ['input', inputFocused && 'inputFocused'],
    tag: ['tag', "tagSize".concat((0,capitalize/* default */.Z)(size))],
    endAdornment: ['endAdornment'],
    clearIndicator: ['clearIndicator'],
    popupIndicator: ['popupIndicator', popupOpen && 'popupIndicatorOpen'],
    popper: ['popper', disablePortal && 'popperDisablePortal'],
    paper: ['paper'],
    listbox: ['listbox'],
    loading: ['loading'],
    noOptions: ['noOptions'],
    option: ['option'],
    groupLabel: ['groupLabel'],
    groupUl: ['groupUl']
  };
  return (0,composeClasses/* default */.Z)(slots, getAutocompleteUtilityClass, classes);
};

var AutocompleteRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAutocomplete',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    var {
      fullWidth,
      hasClearIcon,
      hasPopupIcon,
      inputFocused,
      size
    } = ownerState;
    return [{
      ["& .".concat(Autocomplete_autocompleteClasses.tag)]: styles.tag
    }, {
      ["& .".concat(Autocomplete_autocompleteClasses.tag)]: styles["tagSize".concat((0,capitalize/* default */.Z)(size))]
    }, {
      ["& .".concat(Autocomplete_autocompleteClasses.inputRoot)]: styles.inputRoot
    }, {
      ["& .".concat(Autocomplete_autocompleteClasses.input)]: styles.input
    }, {
      ["& .".concat(Autocomplete_autocompleteClasses.input)]: inputFocused && styles.inputFocused
    }, styles.root, fullWidth && styles.fullWidth, hasPopupIcon && styles.hasPopupIcon, hasClearIcon && styles.hasClearIcon];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    ["&.".concat(Autocomplete_autocompleteClasses.focused, " .").concat(Autocomplete_autocompleteClasses.clearIndicator)]: {
      visibility: 'visible'
    },

    /* Avoid double tap issue on iOS */
    '@media (pointer: fine)': {
      ["&:hover .".concat(Autocomplete_autocompleteClasses.clearIndicator)]: {
        visibility: 'visible'
      }
    }
  }, ownerState.fullWidth && {
    width: '100%'
  }, {
    ["& .".concat(Autocomplete_autocompleteClasses.tag)]: (0,esm_extends/* default */.Z)({
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    }, ownerState.size === 'small' && {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    }),
    ["& .".concat(Autocomplete_autocompleteClasses.inputRoot)]: {
      flexWrap: 'wrap',
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 26 + 4
      },
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 52 + 4
      },
      ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
        width: 0,
        minWidth: 30
      }
    },
    ["& .".concat(inputClasses/* default.root */.Z.root)]: {
      paddingBottom: 1,
      '& .MuiInput-input': {
        padding: '4px 4px 4px 0px'
      }
    },
    ["& .".concat(inputClasses/* default.root */.Z.root, ".").concat(inputBaseClasses/* default.sizeSmall */.Z.sizeSmall)]: {
      ["& .".concat(inputClasses/* default.input */.Z.input)]: {
        padding: '2px 4px 3px 0'
      }
    },
    ["& .".concat(outlinedInputClasses/* default.root */.Z.root)]: {
      padding: 9,
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 26 + 4 + 9
      },
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 52 + 4 + 9
      },
      ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
        padding: '7.5px 4px 7.5px 6px'
      },
      ["& .".concat(Autocomplete_autocompleteClasses.endAdornment)]: {
        right: 9
      }
    },
    ["& .".concat(outlinedInputClasses/* default.root */.Z.root, ".").concat(inputBaseClasses/* default.sizeSmall */.Z.sizeSmall)]: {
      padding: 6,
      ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
        padding: '2.5px 4px 2.5px 6px'
      }
    },
    ["& .".concat(filledInputClasses/* default.root */.Z.root)]: {
      paddingTop: 19,
      paddingLeft: 8,
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 26 + 4 + 9
      },
      [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
        paddingRight: 52 + 4 + 9
      },
      ["& .".concat(filledInputClasses/* default.input */.Z.input)]: {
        padding: '7px 4px'
      },
      ["& .".concat(Autocomplete_autocompleteClasses.endAdornment)]: {
        right: 9
      }
    },
    ["& .".concat(filledInputClasses/* default.root */.Z.root, ".").concat(inputBaseClasses/* default.sizeSmall */.Z.sizeSmall)]: {
      paddingBottom: 1,
      ["& .".concat(filledInputClasses/* default.input */.Z.input)]: {
        padding: '2.5px 4px'
      }
    },
    ["& .".concat(inputBaseClasses/* default.hiddenLabel */.Z.hiddenLabel)]: {
      paddingTop: 8
    },
    ["& .".concat(Autocomplete_autocompleteClasses.input)]: (0,esm_extends/* default */.Z)({
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    }, ownerState.inputFocused && {
      opacity: 1
    })
  });
});
var AutocompleteEndAdornment = (0,styled/* default */.ZP)('div', {
  name: 'MuiAutocomplete',
  slot: 'EndAdornment',
  overridesResolver: (props, styles) => styles.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: 'absolute',
  right: 0,
  top: 'calc(50% - 14px)' // Center vertically

});
var AutocompleteClearIndicator = (0,styled/* default */.ZP)(IconButton/* default */.Z, {
  name: 'MuiAutocomplete',
  slot: 'ClearIndicator',
  overridesResolver: (props, styles) => styles.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: 'hidden'
});
var AutocompletePopupIndicator = (0,styled/* default */.ZP)(IconButton/* default */.Z, {
  name: 'MuiAutocomplete',
  slot: 'PopupIndicator',
  overridesResolver: (_ref2, styles) => {
    var {
      ownerState
    } = _ref2;
    return (0,esm_extends/* default */.Z)({}, styles.popupIndicator, ownerState.popupOpen && styles.popupIndicatorOpen);
  }
})(_ref3 => {
  var {
    ownerState
  } = _ref3;
  return (0,esm_extends/* default */.Z)({
    padding: 2,
    marginRight: -2
  }, ownerState.popupOpen && {
    transform: 'rotate(180deg)'
  });
});
var AutocompletePopper = (0,styled/* default */.ZP)(Popper/* default */.Z, {
  name: 'MuiAutocomplete',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [{
      ["& .".concat(Autocomplete_autocompleteClasses.option)]: styles.option
    }, styles.popper, ownerState.disablePortal && styles.popperDisablePortal];
  }
})(_ref4 => {
  var {
    theme,
    ownerState
  } = _ref4;
  return (0,esm_extends/* default */.Z)({
    zIndex: theme.zIndex.modal
  }, ownerState.disablePortal && {
    position: 'absolute'
  });
});
var AutocompletePaper = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiAutocomplete',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})(_ref5 => {
  var {
    theme
  } = _ref5;
  return (0,esm_extends/* default */.Z)({}, theme.typography.body1, {
    overflow: 'auto'
  });
});
var AutocompleteLoading = (0,styled/* default */.ZP)('div', {
  name: 'MuiAutocomplete',
  slot: 'Loading',
  overridesResolver: (props, styles) => styles.loading
})(_ref6 => {
  var {
    theme
  } = _ref6;
  return {
    color: theme.palette.text.secondary,
    padding: '14px 16px'
  };
});
var AutocompleteNoOptions = (0,styled/* default */.ZP)('div', {
  name: 'MuiAutocomplete',
  slot: 'NoOptions',
  overridesResolver: (props, styles) => styles.noOptions
})(_ref7 => {
  var {
    theme
  } = _ref7;
  return {
    color: theme.palette.text.secondary,
    padding: '14px 16px'
  };
});
var AutocompleteListbox = (0,styled/* default */.ZP)('div', {
  name: 'MuiAutocomplete',
  slot: 'Listbox',
  overridesResolver: (props, styles) => styles.listbox
})(_ref8 => {
  var {
    theme
  } = _ref8;
  return {
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
    ["& .".concat(Autocomplete_autocompleteClasses.option)]: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto'
      },
      ["&.".concat(Autocomplete_autocompleteClasses.focused)]: {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&[aria-disabled="true"]': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none'
      },
      ["&.".concat(Autocomplete_autocompleteClasses.focusVisible)]: {
        backgroundColor: theme.palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        ["&.".concat(Autocomplete_autocompleteClasses.focused)]: {
          backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected
          }
        },
        ["&.".concat(Autocomplete_autocompleteClasses.focusVisible)]: {
          backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  };
});
var AutocompleteGroupLabel = (0,styled/* default */.ZP)(ListSubheader_ListSubheader, {
  name: 'MuiAutocomplete',
  slot: 'GroupLabel',
  overridesResolver: (props, styles) => styles.groupLabel
})(_ref9 => {
  var {
    theme
  } = _ref9;
  return {
    backgroundColor: theme.palette.background.paper,
    top: -8
  };
});
var AutocompleteGroupUl = (0,styled/* default */.ZP)('ul', {
  name: 'MuiAutocomplete',
  slot: 'GroupUl',
  overridesResolver: (props, styles) => styles.groupUl
})({
  padding: 0,
  ["& .".concat(Autocomplete_autocompleteClasses.option)]: {
    paddingLeft: 24
  }
});

var Autocomplete = /*#__PURE__*/react.forwardRef(function Autocomplete(inProps, ref) {
  var _componentsProps$clea;

  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAutocomplete'
  });
  /* eslint-disable @typescript-eslint/no-unused-vars */

  var {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    ChipProps,
    className,
    clearIcon = _ClearIcon || (_ClearIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Close/* default */.Z, {
      fontSize: "small"
    })),
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    clearText = 'Clear',
    closeText = 'Close',
    componentsProps = {},
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    disablePortal = false,
    filterSelectedOptions = false,
    forcePopupIcon = 'auto',
    freeSolo = false,
    fullWidth = false,
    getLimitTagsText = more => "+".concat(more),
    getOptionLabel = option => {
      var _option$label;

      return (_option$label = option.label) != null ? _option$label : option;
    },
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    includeInputInList = false,
    limitTags = -1,
    ListboxComponent = 'ul',
    ListboxProps,
    loading = false,
    loadingText = 'Loading…',
    multiple = false,
    noOptionsText = 'No options',
    openOnFocus = false,
    openText = 'Open',
    PaperComponent = Paper/* default */.Z,
    PopperComponent = Popper/* default */.Z,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})),
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    selectOnFocus = !props.freeSolo,
    size = 'medium'
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, Autocomplete_excluded);
  /* eslint-enable @typescript-eslint/no-unused-vars */


  var {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete((0,esm_extends/* default */.Z)({}, props, {
    componentName: 'Autocomplete'
  }));
  var hasClearIcon = !disableClearable && !disabled && dirty;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disablePortal,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedTag === -1,
    popupOpen,
    size
  });

  var classes = Autocomplete_useUtilityClasses(ownerState);
  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = params => (0,esm_extends/* default */.Z)({
      className: (0,clsx_m["default"])(classes.tag),
      disabled
    }, getTagProps(params));

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map((option, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.Z, (0,esm_extends/* default */.Z)({
        label: getOptionLabel(option),
        size: size
      }, getCustomizedTagProps({
        index
      }), ChipProps)));
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: classes.tag,
        children: getLimitTagsText(more)
      }, startAdornment.length));
    }
  }

  var defaultRenderGroup = params => /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteGroupLabel, {
      className: classes.groupLabel,
      ownerState: ownerState,
      component: "div",
      children: params.group
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteGroupUl, {
      className: classes.groupUl,
      ownerState: ownerState,
      children: params.children
    })]
  }, params.key);

  var renderGroup = renderGroupProp || defaultRenderGroup;

  var defaultRenderOption = (props2, option) => /*#__PURE__*/(0,jsx_runtime.jsx)("li", (0,esm_extends/* default */.Z)({}, props2, {
    children: getOptionLabel(option)
  }));

  var renderOption = renderOptionProp || defaultRenderOption;

  var renderListOption = (option, index) => {
    var optionProps = getOptionProps({
      option,
      index
    });
    return renderOption((0,esm_extends/* default */.Z)({}, optionProps, {
      className: classes.option
    }), option, {
      selected: optionProps['aria-selected'],
      inputValue
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteRoot, (0,esm_extends/* default */.Z)({
      ref: ref,
      className: (0,clsx_m["default"])(classes.root, className),
      ownerState: ownerState
    }, getRootProps(other), {
      children: renderInput({
        id,
        disabled,
        fullWidth: true,
        size: size === 'small' ? 'small' : undefined,
        InputLabelProps: getInputLabelProps(),
        InputProps: {
          ref: setAnchorEl,
          className: classes.inputRoot,
          startAdornment,
          endAdornment: /*#__PURE__*/(0,jsx_runtime.jsxs)(AutocompleteEndAdornment, {
            className: classes.endAdornment,
            ownerState: ownerState,
            children: [hasClearIcon ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteClearIndicator, (0,esm_extends/* default */.Z)({}, getClearProps(), {
              "aria-label": clearText,
              title: clearText,
              ownerState: ownerState
            }, componentsProps.clearIndicator, {
              className: (0,clsx_m["default"])(classes.clearIndicator, (_componentsProps$clea = componentsProps.clearIndicator) == null ? void 0 : _componentsProps$clea.className),
              children: clearIcon
            })) : null, hasPopupIcon ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompletePopupIndicator, (0,esm_extends/* default */.Z)({}, getPopupIndicatorProps(), {
              disabled: disabled,
              "aria-label": popupOpen ? closeText : openText,
              title: popupOpen ? closeText : openText,
              className: (0,clsx_m["default"])(classes.popupIndicator),
              ownerState: ownerState,
              children: popupIcon
            })) : null]
          })
        },
        inputProps: (0,esm_extends/* default */.Z)({
          className: (0,clsx_m["default"])(classes.input),
          disabled
        }, getInputProps())
      })
    })), popupOpen && anchorEl ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompletePopper, {
      as: PopperComponent,
      className: (0,clsx_m["default"])(classes.popper),
      disablePortal: disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      ownerState: ownerState,
      role: "presentation",
      anchorEl: anchorEl,
      open: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(AutocompletePaper, {
        as: PaperComponent,
        className: classes.paper,
        ownerState: ownerState,
        children: [loading && groupedOptions.length === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteLoading, {
          className: classes.loading,
          ownerState: ownerState,
          children: loadingText
        }) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteNoOptions, {
          className: classes.noOptions,
          ownerState: ownerState,
          role: "presentation",
          onMouseDown: event => {
            // Prevent input blur when interacting with the "no options" content
            event.preventDefault();
          },
          children: noOptionsText
        }) : null, groupedOptions.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(AutocompleteListbox, (0,esm_extends/* default */.Z)({
          as: ListboxComponent,
          className: classes.listbox,
          ownerState: ownerState
        }, getListboxProps(), ListboxProps, {
          children: groupedOptions.map((option, index) => {
            if (groupBy) {
              return renderGroup({
                key: option.key,
                group: option.group,
                children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
              });
            }

            return renderListOption(option, index);
          })
        })) : null]
      })
    }) : null]
  });
});
 false ? 0 : void 0;
/* harmony default export */ var Autocomplete_Autocomplete = (Autocomplete);

/***/ }),

/***/ 79675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(49408);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(98348);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(47761);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(48416);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(62194);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js

function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
var cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


var _excluded = ["disableSpacing", "className"];








var useUtilityClasses = ownerState => {
  var {
    classes,
    disableSpacing
  } = ownerState;
  var slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};

var CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    var {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(_ref => {
  var {
    ownerState
  } = _ref;
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    alignItems: 'center',
    padding: 8
  }, !ownerState.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: 8
    }
  });
});
var CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  var props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });

  var {
    disableSpacing = false,
    className
  } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  var ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
  var hasDrawer = drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;

  if (!drawerType && itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (hasDrawer) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ })

}]);
//# sourceMappingURL=baf0fd2d778787cec7104fdce75a778b8b7a3d97-963a18b53e4d926fab43.js.map