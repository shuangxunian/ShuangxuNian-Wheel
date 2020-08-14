//任意范围的随机数生成函数如下。
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5)

//任意范围的随机整数生成函数如下。
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6)

//返回随机字符的例子如下。
function random_str(length) {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
    ALPHABET += '0123456789-_';
    var str = '';
    for (var i = 0; i < length; ++i) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand + 1);
    }
    return str;
}

random_str(6)