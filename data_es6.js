


// chkData(`
// ##### (data_es6.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_es6.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_es6.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_es6.js) 主旨放這裡 #####
// 內容放這裡
// `)






chkData(`
##### (data_es6.js) class test #####
###  Python ES6 class test ####
### file: mainCode_ES6

// ### ES5 #####################################################
function Person (name,age){
    this.name = name
    this.age = age
}

Person.prototype.sayHi = function(){
    console.log(\`Hi I am \${this.name} , I am \${this.age} years old\`)
}
var Mary = new Person( "Mary NN" , "46")

Mary.sayHi()
console.log(Mary)

// ### ES6 #####################################################
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(\`I am \${this.name} , I am \${this.age} years old\`)
    }
}

class Boy extends Person{
    onlyBoy(){
        console.log(\`\${this.name} is boy\`)
    }
}

var f = new Boy("Danny", "30")

// super 範例
class BoyNew extends Person{
    constructor(name, age, gender){
        super(name, age)
        this.gender = gender
    }
}
var g = new BoyNew("Peter" , "20", "male")
console.log(g)

// ########################################################

class Square{
    constructor(width){
        this.width = width
        this.hegit = width
    }

    get area(){
        return this.width * this.height
    }
}

let Square1 = new Square(5)
console.log(Square1)

`)