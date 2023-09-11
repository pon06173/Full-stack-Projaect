func add (a:Int, b:Int) -> Int {
    var result: Int = 0
    for i in a...b {
        result += i;
    }
    return result
}
let a:Int = 1;
let b:Int = 10;
let sum = add(a:a, b:b)
print("sum: \(sum)")