export function isArray(o: any) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

export function warn(val: any) {
  console.warn(val)
}

export function error(val: any) {
  console.error(val)
}
