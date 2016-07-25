/**
 * Used for actors that need to filter for particular actions. Usage:
 *
 * @filterAction(sift({ $type: DBAction }))
 * update(action:UpdateAction) { }
 */

export default (filter:Function) => (
  (proto, name, inf) => {
    var oldValue = inf.value;
    inf.value = function (action) {
      if (filter(action)) {
        return oldValue.call(this, action);
      }
    };
  }
);