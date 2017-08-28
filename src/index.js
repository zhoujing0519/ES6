// 变量声明
{
    var a = 0;
    let b = 1;
    const c = 2;
}

// 解构赋值
// 数组的解构赋值
{
    let [name, age] = ['zhoujing', 25];
    let [foo = 'true'] = []; // => let [foo = 'true'] = [undefined]; => foo = 'true';
    let [bar = 'false'] = [null]; // => let [bar = 'false'] = [undefined]; => bar = null;
}

// 对象的解构赋值
{
    let {id, price, count} = {id: 1, price: 15, count: 1};
    let user;
    ({user} = {user: 'zhoujing'}); // 先声明的变量，需要一对括号包裹，不然会报错

}

// 字符串解构
{
    const [first, second, third] = 'GTO';
}

// 对象扩展运算符
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
}
jspang(1, 2, 3);

{
    let arr1 = ['www', 'jspang', 'com'];
    let arr2 = arr1;
    let arr3 = [...arr1];
    arr2.push('shengHongYu');
    console.log(arr1);
    arr3.push('shengHongYu');
    console.log(arr1);
}

// rest, 剩余运算符
function zhoujing(first, ...arg){
    console.log(arg.length);
    for(let val of arg){
        console.log(val);
    }
}
zhoujing(0, 1, 2, 3, 4, 5, 6, 7);

// 字符串模板
{
    let jspang = '技术胖';
    let count = 999;
    let title = '大家好，我是技术胖';
    let blog = '大家好，我是'+ jspang +'。非常高兴你能看到这篇文章。';
    let article = `<br>大家好，我是${jspang}。非常高兴你能看到这篇文章。当前阅读量${count + 1}`;
    document.write(blog);
    document.write(article);
    console.log(title.indexOf(jspang)); // 包含
    console.log(title.includes(jspang)); // 包含
    console.log(title.startsWith(jspang)); // 以技术胖开始
    console.log(title.endsWith(jspang)); // 以技术胖结尾
    console.log(title.repeat(20)); // 字符串复制
}

// 数字操作
// 二进制声明 Binary
{
    let binary = 0B010101;
    console.log(binary); // => 21
}
// 八进制声明 Octal
{
    let octal = 0o777;
    console.log(octal); // => 511
}
// 数字判断
{
    let a = 11 / 4;
    let b = 10;
    console.log(Number.isFinite(a)); // => true
    console.log(Number.isFinite('jspang')); // => false
    console.log(Number.isFinite(NaN)); // => false
    console.log(Number.isFinite(undefined)); // => false
    console.log(Number.isNaN(NaN)); // => true
    console.log(Number.isInteger(b)); // => true
}

// 新增的数组格式
// Array.from
{
    let json = {
        '0': 'jspang',
        '1': '技术胖',
        '2': '大胖逼逼叨',
        length: 3
    };

    let arr = Array.from(json);
    console.log(json);
    console.log(arr);
}
// Array.of
{
    let arr = Array.of(3, 4, 5, 6);
    console.log(arr);
}
// find(function(val, index, arr){})
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr.find(function(val, index, arr){
        return val > 5; // => 6
    }));
}
// fill(val, from, to)
{
    let arr = ['jspang', '技术胖', '大胖逼逼叨'];
    arr.fill('web', 1, 2);
    console.log(arr);
}
// 数组循环
{
    let arr = ['jspang', '技术胖', '大胖逼逼叨'];
    for(let val of arr){
        console.log(val);
    }
    for(let [key, val] of arr.entries()){
        console.log(key, val);
    }
}

// 箭头函数
{
    let add = (a, b = 1) => a + b;
    console.log(add(1));
    let minus = (a, b = 2) => {
        console.log('minus');
        return a - b;
    };
    console.log(minus(3));
}

// 对象的函数解构
{
    let json = {
        a: 'jspang',
        b: '技术胖'
    };

    function fun({a, b}){
        console.log(a, b);
    }
    fun(json);
}
// 数组的函数解构
{
    let arr = ['jspang', '技术胖', '大胖逼逼叨'];

    function fn(a,b,c){
        console.log(a,b,c);
    }
    fn(...arr);
}
// in的用法
{
    let obj = {
        a: 'jspang',
        b: '技术胖'
    };
    console.log('a' in obj);
}

// 对象赋值
{
    let name = 'jspang';
    let skill = 'web';
    let obj = {name, skill};
    console.log(obj);
}
// key值的构建
{
    let key = 'skill';
    let obj = {
        [key]: 'web'
    };
    console.log(obj);
}
// 自定义对象的方法
{
    let obj = {
        add(a, b){
            return a + b;
        }
    };
    console.log(obj.add(1, 2));
}
// === 同值相等
// Object.is(a, b) 严格相等
{
    let obj1 = {name: 'jspang'};
    let obj2 = {name: 'jspang'};
    console.log(obj1.name === obj2.name); // => true
    console.log(Object.is(obj1.name, obj2.name)); // => true

    console.log(+0 === -0); // => true
    console.log(NaN === NaN); // => false

    console.log(Object.is(+0, -0)); // => false
    console.log(Object.is(NaN, NaN)); // => true
}
// assign
{
    let obj1 = {a: 'jspang'};
    let obj2 = {b: '技术胖'};
    let obj3 = {c: 'web'};
    let obj4 = Object.assign(obj1, obj2, obj3);
    console.log(obj4);
}
