import { EditorRED } from "node-red";
import { TransformTextEditorNodeProperties } from "./modules/types";
import { TransformTextOperation, TransformTextSeparator } from "../shared/types";

declare const RED: EditorRED;

RED.nodes.registerType<TransformTextEditorNodeProperties>("transform-text", {
  category: "function",
  color: "#37C7A3",
  defaults: {
    operation: { value: TransformTextOperation.UpperCase },
    name: { value: "" },
    separator: {value: TransformTextSeparator.Space}
  },
  inputs: 1,
  outputs: 1,
  icon: "transform-text.png",
  paletteLabel: "transform text",
  label: function () {
    if (this.name) {
      return this.name;
    }
    switch (this.operation) {
      case TransformTextOperation.UpperCase: {
        return "to upper case";
      }
      case TransformTextOperation.LowerCase: {
        return "to lower case";
      }
      case TransformTextOperation.Split: {
        return "split";
      }
    }
  },
});
