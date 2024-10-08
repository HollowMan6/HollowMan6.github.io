/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

goog.provide("Blockly.Blocks.data");
goog.provide("Blockly.Constants.Data");

goog.require("Blockly.Blocks");
goog.require("Blockly.Colours");
goog.require("Blockly.constants");
goog.require("Blockly.ScratchBlocks.VerticalExtensions");

Blockly.Blocks["data_variable"] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1",
      lastDummyAlign0: "CENTRE",
      args0: [
        {
          type: "field_variable_getter",
          text: "",
          name: "VARIABLE",
          variableType: "",
        },
      ],
      category: Blockly.Categories.data,
      checkboxInFlyout: true,
      extensions: [
        "contextMenu_getVariableBlock",
        "colours_data",
        "output_string",
      ],
    });
  },
};

Blockly.Blocks["data_setvariableto"] = {
  /**
   * Block to set variable to a certain value
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "set %1 to %2",
      args0: [
        {
          type: "field_variable",
          name: "VARIABLE",
        },
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      category: Blockly.Categories.data,
      extensions: ["colours_data", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_changevariableby"] = {
  /**
   * Block to change variable by a certain value
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "change %1 by %2",
      args0: [
        {
          type: "field_variable",
          name: "VARIABLE",
        },
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      category: Blockly.Categories.data,
      extensions: ["colours_data", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_showvariable"] = {
  /**
   * Block to show a variable
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "show variable %1",
      args0: [
        {
          type: "field_variable",
          name: "VARIABLE",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.data,
      colour: Blockly.Colours.data.primary,
      colourSecondary: Blockly.Colours.data.secondary,
      colourTertiary: Blockly.Colours.data.tertiary,
    });
  },
};

Blockly.Blocks["data_hidevariable"] = {
  /**
   * Block to hide a variable
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "hide variable %1",
      args0: [
        {
          type: "field_variable",
          name: "VARIABLE",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      category: Blockly.Categories.data,
      colour: Blockly.Colours.data.primary,
      colourSecondary: Blockly.Colours.data.secondary,
      colourTertiary: Blockly.Colours.data.tertiary,
    });
  },
};

Blockly.Blocks["data_listcontents"] = {
  /**
   * List reporter.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_variable_getter",
          text: "",
          name: "LIST",
          variableType: Blockly.LIST_VARIABLE_TYPE,
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "output_string"],
      checkboxInFlyout: true,
    });
  },
};

Blockly.Blocks["data_listindexall"] = {
  /**
   * List index menu, with all option.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_numberdropdown",
          name: "INDEX",
          value: "1",
          min: 1,
          precision: 1,
          options: [
            ["1", "1"],
            ["last", "last"],
            ["all", "all"],
          ],
        },
      ],
      category: Blockly.Categories.data,
      extensions: ["colours_textfield", "output_string"],
    });
  },
};

Blockly.Blocks["data_listindexrandom"] = {
  /**
   * List index menu, with random option.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_numberdropdown",
          name: "INDEX",
          value: "1",
          min: 1,
          precision: 1,
          options: [
            ["1", "1"],
            ["last", "last"],
            ["random", "random"],
          ],
        },
      ],
      category: Blockly.Categories.data,
      extensions: ["colours_textfield", "output_string"],
    });
  },
};

Blockly.Blocks["data_addtolist"] = {
  /**
   * Block to add item to list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "add %1 to %2",
      args0: [
        {
          type: "input_value",
          name: "ITEM",
        },
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_deleteoflist"] = {
  /**
   * Block to delete item from list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "delete %1 of %2",
      args0: [
        {
          type: "input_value",
          name: "INDEX",
        },
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_insertatlist"] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "insert %1 at %2 of %3",
      args0: [
        {
          type: "input_value",
          name: "ITEM",
        },
        {
          type: "input_value",
          name: "INDEX",
        },
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_replaceitemoflist"] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "replace item %1 of %2 with %3",
      args0: [
        {
          type: "input_value",
          name: "INDEX",
        },
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
        {
          type: "input_value",
          name: "ITEM",
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_itemoflist"] = {
  /**
   * Block for reporting item of list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "item %1 of %2",
      args0: [
        {
          type: "input_value",
          name: "INDEX",
        },
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      output: null,
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists"],
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
    });
  },
};

Blockly.Blocks["data_lengthoflist"] = {
  /**
   * Block for reporting length of list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "length of %1",
      args0: [
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "output_number"],
    });
  },
};

Blockly.Blocks["data_listcontainsitem"] = {
  /**
   * Block to report whether list contains item.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "%1 contains %2?",
      args0: [
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
        {
          type: "input_value",
          name: "ITEM",
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "output_boolean"],
    });
  },
};

Blockly.Blocks["data_showlist"] = {
  /**
   * Block to show a list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "show list %1",
      args0: [
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

Blockly.Blocks["data_hidelist"] = {
  /**
   * Block to hide a list.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "hide list %1",
      args0: [
        {
          type: "field_variable",
          name: "LIST",
          variableTypes: [Blockly.LIST_VARIABLE_TYPE],
        },
      ],
      category: Blockly.Categories.dataLists,
      extensions: ["colours_data_lists", "shape_statement"],
    });
  },
};

/**
 * Mixin to add a context menu for a data_variable block.  It adds one item for
 * each variable defined on the workspace.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN = {
  /**
   * Add context menu option to create getter block for the loop's variable.
   * (customContextMenu support limited to web BlockSvg.)
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function (options) {
    if (this.isCollapsed()) {
      return;
    }
    if (!this.isInFlyout) {
      var variablesList = this.workspace.getVariablesOfType("");
      for (var i = 0; i < variablesList.length; i++) {
        var option = { enabled: true };
        option.text = variablesList[i].name;

        option.callback =
          Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY(
            this,
            option.text
          );
        options.push(option);
      }
    } else {
      var renameOption = {
        text: Blockly.Msg.RENAME_VARIABLE,
        enabled: true,
        callback: Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY(this),
      };
      var name = this.getField("VARIABLE").text_;
      var deleteOption = {
        text: Blockly.Msg.DELETE_VARIABLE.replace("%1", name),
        enabled: true,
        callback: Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY(this),
      };
      options.push(renameOption);
      options.push(deleteOption);
    }
  },
};

Blockly.Extensions.registerMixin(
  "contextMenu_getVariableBlock",
  Blockly.Constants.Data.CUSTOM_CONTEXT_MENU_GET_VARIABLE_MIXIN
);

/**
 * Callback factory for dropdown menu options associated with a variable getter
 * block.  Each variable on the workspace gets its own item in the dropdown
 * menu, and clicking on that item changes the text of the field on the source
 * block.
 * @param {!Blockly.Block} block The block to update.
 * @param {string} name The new name to display on the block.
 * @return {!function()} A function that updates the block with the new name.
 */
Blockly.Constants.Data.VARIABLE_OPTION_CALLBACK_FACTORY = function (
  block,
  name
) {
  return function () {
    var variableField = block.getField("VARIABLE");
    if (!variableField) {
      console.log("Tried to get a variable field on the wrong type of block.");
    }
    variableField.setText(name);
  };
};

/**
 * Callback for rename variable dropdown menu option associated with a
 * variable getter block.
 * @param {!Blockly.Block} block The block with the variable to rename.
 * @return {!function()} A function that renames the variable.
 */
Blockly.Constants.Data.RENAME_OPTION_CALLBACK_FACTORY = function (block) {
  return function () {
    var workspace = block.workspace;
    var variable = block.getField("VARIABLE").getVariable();
    Blockly.Variables.renameVariable(workspace, variable);
  };
};

/**
 * Callback for delete variable dropdown menu option associated with a
 * variable getter block.
 * @param {!Blockly.Block} block The block with the variable to delete.
 * @return {!function()} A function that deletes the variable.
 */
Blockly.Constants.Data.DELETE_OPTION_CALLBACK_FACTORY = function (block) {
  return function () {
    var workspace = block.workspace;
    var variable = block.getField("VARIABLE").getVariable();
    workspace.deleteVariableById(variable.getId());
  };
};
