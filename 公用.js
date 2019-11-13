/* 数组去零 */
var arr = [1, 0, 2, 0, 3, 0, 4, 0, 5];
var temp = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        temp[temp.length] = arr[i];
    }
}
console.log(temp);

/* 翻转数组 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* 方法1 */
var temp = [];
for (var i = arr.length - 1; i >= 0; i--) {
    temp[temp.length] = arr[i];
}
console.log(temp);

/* 方法2 */
for (var j = 0; j < arr.length / 2; j++) {
    var m = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = m;
}
console.log(arr);

/*
  冒泡排序
    依次比较两个相邻的元素，如果顺序（如从小到大）错误就把他们交换过来。
 */

var arr = [20, 18, 27, 19, 35];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        // 相邻元素两两对比，元素交换，大的元素交换到后面
        if (arr[j] > arr[j + 1]) { // 如果需要从大到小排列，则将if判断里的 > 改为 < 即可
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

/*
  使用函数求n的阶乘

    n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1
*/
function jc(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
  使用函数求阶乘和

    求 n! + (n-1)! + ... 3! + 2! + 1!;

*/
function jch(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += jc(i);
    }
    return sum;
}


/*
  求数组中的最大值
*/
var arr = [44, 99, 66, 77, 11, 55, 44, 22, 33, 44, 77];

function getMaxFormArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        max = max < arr[i] ? arr[i] : max;
    }
    return max;
}
console.log(getMaxFormArray(arr));

/*
  判断一个数字是否是素数

    素数 = 质数
      素数
        一个数字，只能被1和自己本身整除
*/

function isPrime(n) {
    // 先假设n是素数
    var flag = true;
    // 从2开始，到 n-1 结束，只要找到一个数字能被n整除，n就不是素数
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            // 如果满足了条件，就是找到了反例
            flag = false; // 把假设推倒
            break; // 没必要继续判断了
        }
    }
    // 但是循环里面最终有没有找到反例，并不知道，所以我们判断一下
    if (flag = true) {
        // 如果flag仍然是true，证明没有找到反例
        console.log(n + '是一个素数');
    } else {
        // 如果flag是false，证明找到了反例
        console.log(n + '不是一个素数');
    }
}
isPrime(23);


/* 查找一个字符串中出现最多的字符和统计出现的次数 */
var str = 'adlkgid123k3dwe123dasad553ldkd33j5ddfaidgggsdadkjgisdfaksd';

var obj = {};
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    // console.log(str[i]);
    /* 使用字符作为对象以键，出现的次数为值 */
    if (obj[char]) {
        // 出现过了则次数++
        obj[char]++;
    } else {
        // 第一次出现则是1
        obj[char] = 1;
    }
}
// console.log(obj[char]);
// 遍历对象，得到出现次数最多的字符和次数
var max = 0;
var maxChar = '';
for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        maxChar = key;
    }
}
console.log(maxChar, max);


/* 模拟实现Math.max() 方法 */
function max() {
    var maxNum = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (maxNum < arguments[i]) {
            maxNum = arguments[i];
        }
    }
    return maxNum;
}
console.log(max(1, 9, 3, 6, 8, 12));


/* 编写一个方法去掉一个数组的重复元素 */

function removeRepeat() {
    var o = {};
    // 先统计出第个元素出现的次数
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (o[item]) {
            o[item]++;
        } else {
            o[item] = 1;
        }
    }
    // 根据统计的次数，把元素放进一个新数组
    var tmpArray = [];
    for (var key in o) {
        if (o[key] == 1) {
            tmpArray.push(key);
        } else {
            if (tmpArray.indexOf(key) == -1) {
                tmpArray.push(key);
            }
        }
    }
    return tmpArray;
}

var array = ['c', 'a', 'z', 'a', 'x', 'a'];
console.log(removeRepeat(array));


/* 计算两个时间的时间差，返回 相差的 天/时/分/秒 */
function getInterval(start, end) {
    var day, hour, minute, second, interval;
    interval = end - start;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}

console.log(getInterval(new Date(2019, 0, 1), new Date()));


/* 演示鼠标的点下和松开 */
document.onmousedown = function () {
    console.log('鼠标按下了');
}
document.onclick = function () {
    console.log('鼠标点击了');
}
document.onmouseup = function () {
    console.log('鼠标松开');
}


// 事件源.addEventListener(事件类型,事件处理程序,false);
//当第3个参数为false时，事件为捕获事件  当为true时，事件为冒泡事件;