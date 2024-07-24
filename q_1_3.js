const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

const proto = {
  prop11: {
    prop22: null,
  },
};

const commonKeys = [];

// Find common object keys between src and proto
const findCommonKeys = (src, proto) => {
  const srcKeys = Object.keys(src);
  const protoKeys = Object.keys(proto);
  const commonSrcProtoKeys = protoKeys.filter((el) => srcKeys.includes(el));

  commonKeys.push(...commonSrcProtoKeys);

  commonSrcProtoKeys.forEach((key) => {
    if (src[key] && proto[key]) {
      findCommonKeys(src[key], proto[key]);
    } else {
      return;
    }
  });
};

findCommonKeys(src, proto);

const result = {};

let currentResult = result;
let currentSrc = src;
let currentProto = proto;

// After find common keys, to create the projection object
for (let i = 0; i < commonKeys.length; i++) {
  currentSrc = currentSrc[commonKeys[i]];
  currentProto = currentProto[commonKeys[i]];
  if (i === commonKeys.length - 1) {
    currentResult[commonKeys[i]] = currentSrc || currentProto;
  } else {
    currentResult[commonKeys[i]] = {};
    currentResult = currentResult[commonKeys[i]];
  }
}

console.log(result);
