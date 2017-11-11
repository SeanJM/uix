import { IS_VALUE_PX, IS_VALUE_DEG } from "./CONSTANTS";

function propertyUnit(property, a) {
  if (IS_VALUE_PX.indexOf(property) > -1) {
    return typeof a === "number" ? a + "px" : a;
  } else if (IS_VALUE_DEG.indexOf(property) > -1) {
    return typeof a === "number" ? a + "deg" : a;
  }

  return a.toString();
}

export default propertyUnit;