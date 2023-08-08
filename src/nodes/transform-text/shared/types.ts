export enum TransformTextOperation {
  UpperCase = "upper",
  LowerCase = "lower",
  Split = "split",
}

export enum TransformTextSeparator {
  Space = " ",
  Comma = ",",
  Semicolon = ";",
  Colon = ":",
  VerticalBar = "|",
  Slash = "/",
  Backslash = "\\",
  Underscore = "_",
  Hyphen = "-",
  Plus = "+",
  Asterisk = "*",
  Ampersand = "&",
  Dollar = "$",
}

export interface TransformTextOptions {
  operation: TransformTextOperation;
  separator: TransformTextSeparator;
}
