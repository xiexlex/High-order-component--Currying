
// 柯里化

// function auto(x, y) {
//   return x + y
// }

// console.log(auto(1, 3))


function auto(x) {
  console.log(x)
  return (y) => {
    console.log(x, y)
    return x + y 
  }
}

auto(1)()