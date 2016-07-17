import { mergeBoundingRects } from 'common/utils/geom';
import { calculateBoundingRect } from './utils';
import CoreObject from 'common/object';

export default class GroupPreview extends CoreObject {
  constructor(entity) {
    super();
    this.entity = entity;
  }

  getBoundingRect(zoomProperties) {
    var rect = mergeBoundingRects(this.entity.section.childNodes.map((node) => {

      // need to account for DOM elements that are not visible, but can still be calculated for bounding rect.
      // This includes things like style, link, and others.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
      return node.nodeType === 1 && node.offsetParent !== null ? calculateBoundingRect(this.entity, node, zoomProperties) : void 0;
    }));
    return rect;
  }

  getCapabilities() {
    return {
      movable: false,
      resizable: false
    };
  }
}