var a = 1
function outer () {
  var a = 2
  function inner () {
    console.log(this.a) // 1
  }
  inner()
}
outer()
