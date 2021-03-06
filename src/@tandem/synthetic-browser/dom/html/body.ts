import { BoundingRect } from "@tandem/common";
import { SyntheticHTMLElement } from "./element";

export class SyntheticTextRange {
  getBoundingClientRect() {
    return  BoundingRect.zeros();
  }
}

export class SyntheticHTMLBodyElement extends SyntheticHTMLElement {
  createTextRange() {
    return new SyntheticTextRange();
  }
}