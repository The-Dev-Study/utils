function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' && value === '') {
    return true;
  }
  
  if (typeof value !== 'object') {
    return false;
  }
  
  if (Array.isArray(value)) {
    return value.every(item => isEmpty(item));
  }
  
  const keys = Object.keys(value);
  
  if (keys.length === 0) {
    return true;
  }
  
  return keys.every(key => isEmpty(value[key]));
}




/*

1. 객체의 모든 속성 값이 비어있거나, 속성 자체가 없으면 true
2. 배열의 모든 요소가 비어있으면 true
3. 원시 타입은 false
4. 빈 문자열은 true
5. null과 undefined는 true. null과 undefined를 제외한 falsey value는 false
6. 비어있는 경우만 true, 아니면 false

isEmpty(null) === true;
isEmpty(undefined) === true;
isEmpty('') === true;
isEmpty({}) === true;
isEmpty(0) === false;
isEmpty({ a: [] }) === true;
isEmpty([{ a: [] }, { b: {} }]) === true;

*/