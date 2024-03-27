// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const keys = Object.keys(collection); 
    if (acc === undefined) {
      acc = collection[keys[0]];
      startIdx = 1;
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      for (let i = startIdx; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  