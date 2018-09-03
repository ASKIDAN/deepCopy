const deepCopy = (object) => {
  const REGEXP = /function ([a-zA-z]{0,})/;
  return ((obj, copy = null) => {
    if (!obj) return null;
    const c = REGEXP.exec(obj.constructor.toString());
    switch (c[1]) {
      case 'Array': {
        copy = [].concat(obj);
        copy.forEach((e,i) => {
          e = deepCopy(e);
        });
        return copy;
      }
      case 'Object': {
        copy = Object.assign({}, obj);
        for (let i in copy) {
          copy[i] = deepCopy(copy[i]);
        }
        return copy;
      }
      default: return obj;
    }
  })(object);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = deepCopy;
