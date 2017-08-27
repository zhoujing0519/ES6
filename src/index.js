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
