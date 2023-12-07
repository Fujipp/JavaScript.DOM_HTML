function echo(msg) {
  return msg;
}
export function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total
}
const MAX_VALUE = 100

// export {MAX_VALUE, sum, echo}

export {sum as default, echo, MAX_VALUE }