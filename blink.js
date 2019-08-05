
/* 字符串常用函数--start*/

/**
 * trim 去除空格
 * param1  string str 待处理字符串
 * param2  number type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 * return  string str 处理后的字符串
 */
function trim(str, type = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
}



/**
 * 大小写转换
 * param1 string str 待转换的字符串
 * param2 number type 1-全大写 2-全小写 3-首字母大写 
 * return  string str 处理后的字符串
 */

function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase()
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase()
        default:
            return str;
    }
}

/**
 * 大小写相互转换
 * param string str 待转换的字符串
 * return  string result 处理后的字符串
 */


function parseCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let temp = str.charAt(i);
        let code = temp.charCodeAt();
        if ('a' <= temp && temp <= 'z') {
            temp = String.fromCharCode(code - 32);
        } else if ('A' <= temp && temp <= 'Z') {
            temp = String.fromCharCode(code + 32);
        }

        result += temp;
    }
    return result;
}



/**
 * 密码强度判断 checkPwdStrength
 * param string str 待转换的字符串
 * 低于6为强度为0，字母+1，数字+1，下划线+1，特殊字符!@#$%+1，最高为4
 * return  number lv 密码强度等级
 */

function checkPwdStrength(password) {
    //定义一个变量存储密码强度等级，默认为0
    let lv = 0;
    if (password.match(/[a-z]/g)) { lv++; } //密码包含字母
    if (password.match(/[0-9]/g)) { lv++; } //密码包含数字
    if (password.match(/_/g)) { lv++; } //密码包含下划线
    if (password.match(/[!@#$%]/g)) { lv++; } //密码包含!@#$%任意特殊字符
    if (password.length < 6) { lv = 0; }
    if (lv > 4) { lv = 4; }

    return lv;
}

/**
 * 随机16进制颜色 hexColor
 * return  string str 带#号的随机16进制颜色
 */

function hexColor() {

    let str = '#';
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        let index = Number.parseInt(Math.random() * 16);
        str += arr[index]
    }
    return str;
}


/**
 * 指定位数随机码 randomCode
 * param number count 随机码位数
 * return  string str 指定位数随机码
 */

function randomCode(count) {

    let str = '';
    let number_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let string_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = [...number_arr, ...string_arr];

    for (let i = 0; i < count; i++) {
        let index = Number.parseInt(Math.random() * arr.length);
        str += arr[index];
    }
    return str;
}


/**
 * 关键词统计：统计一段文字中指定文字出现次数 keywordsCount
 * param1 string text 进行统计的文本
 * param2 string keywords 进行统计的关键词
 * return number count 关键词出现次数
 * tip:param1 document.body.innerText--全文统计
 */

function keywordsCount(text, keywords) {
    return text.split(keywords).length - 1
}


/**
 *  短横,下划线与小驼峰的相互转化 caseFormat
 *  param1 string str 待转换字符串
 *  param2 string type '-'or '_',默认为下划线
 *  return string str 转换后字符串
 */

function caseFormat(str, type = '_') {

    if (type && type !== '-' && type !== '_') return;
    let result = '';
    if (str.includes(type)) {
        let arr = str.split(type);
        result = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            result += arr[i + 1][0].toUpperCase() + arr[i + 1].substr(1).toLowerCase()
        }
    } else {
        result = str.replace(/[A-Z]/g, function (match) {
            return type + match.toLowerCase();
        });

    }

    return result;
}




/**
 * 时间格式化 dateFormat  形如--"20190803 11:01:07"
 * param1 Date date 待格式化的时间
 * param2 number type 格式化范围 1-精确到月 2-精确到日 3-精确到分钟 4-精确到秒
 * return string time 格式化后的时间
 */

function dateFormat(date, type = 4) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    let y = date.getFullYear().toString();
    let m = (date.getMonth() + 1).toString().padStart(2, '0');
    let d = date.getDate().toString().padStart(2, '0');
    let h = date.getHours().toString().padStart(2, '0');
    let M = date.getMinutes().toString().padStart(2, '0');
    let s = date.getSeconds().toString().padStart(2, '0');
    if (type === 1) return y + m;
    if (type === 2) return y + m + d;
    if (type === 3) return y + m + d + " " + h + ":" + M;
    if (type === 4) return y + m + d + " " + h + ":" + M + ":" + s;

}

/**
 * 逆序输出 reverse 
 * param string str 源字符串
 * return string result 逆序输出的字符串
 */

function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};





/* 字符串常用函数--end*/



/* 数组常用函数--start*/

/**
 * 数组去重 onlyArray  
 * param1 Array arr 待去重的数组
 * return Array arr 去重后的数组
 */

function onlyArray(arr) {
    if (!Array.isArray(arr)) return;
    return Array.from(new Set([...arr]))
}

/**
 * 数组扁平化 flat  
 * param1 Array arr 待扁平化的数组
 * return Array arr 扁平化后的数组
 */

function flat(arr) {
    if (!Array.isArray(arr)) return;
    return arr.reduce((initValue, cur) => {
        return initValue.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}


/**
 * 数组排序 sort  
 * param1 Array arr 待排序的数组
 * param2 number rule  排序规则 1-升序 0-降序,默认升序
 * return Array arr 排序后的数组
 */

function sort(arr, rule = 1) {
    if (!Array.isArray(arr)) return;
    if (rule && rule !== 1 && rule !== 0) return;
    return rule === 1 ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)

}

/**
 * 冒泡排序 bubble_sort  
 * param1 Array arr 要进行排序的数组
 * param2 number rule 排序规则 1-升序 0-降序,默认升序
 * return Array arr 排序后的数组
 */

function bubble_sort(arr, rule = 1) {
    if (!Array.isArray(arr)) return;
    if (rule && rule !== 1 && rule !== 0) return;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            let expression1 = arr[j] > arr[j + 1]
            let expression2 = arr[j] < arr[j + 1]

            if (rule === 1 ? expression1 : expression2) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}

/**
 * 数组错乱排序 resort  
 * param1 Array arr 待排序的数组
 * return Array arr 排序后的数组
 */


function resort(arr) {
    if (!Array.isArray(arr)) return;
    return arr.sort(function () {
        return Math.random() - 0.5
    });
}

/**
 * 数组求和 totalArr  
 * param1 Array arr 待求和的数组
 * return Array arr 求和后的数组
 */

function totalArr(arr) {
    if (!Array.isArray(arr)) return;
    return arr.reduce(function (pre, cur) {
        return pre + cur
    })
}

/**
 * 数组合并 mergeArr  
 * param1 Array arr 待合并数组
 * ...params Array arr 合并数组,可放置多个
 * return Array arr 合并后的数组
 */

function mergeArr(arr, ...everyArr) {
    if (!Array.isArray(arr)) return;
    return arr.concat(...everyArr)

}

/**
 * 获取数组最后一项 lastItem 
 * param Array arr 源数组
 * return <> item 数组最后一项
 */

function lastItem(arr) {
    if (!Array.isArray(arr)) return;
    return arr[arr.length - 1]

}





/* 数组常用函数--end*/




/* 其他常用函数--start*/


/**
 * 防抖 preventShake  
 * param function fn 要进行防抖的函数
 */

const preventShake = (fn) => {
    let timer = null; // 创建定时器id
    return () => {
        clearTimeout(timer); //事件频繁触发，清除之前定时器 
        timer = setTimeout(() => { // 创建新定时器，保证限定时间间隔fn只执行一次
            fn();
        }, 500);
    };
}

/**
 * 节流 throttle  
 * param function fn 要进行节流的函数
 */

const throttle = (fn) => {
    let lock = true; // 函数外设置状态锁，默认开启
    return () => {
        if (!lock) return; // 在函数开头判断标记是否为true，不为true则return,阻止后续程序进行
        lock = false; // 改变状态锁
        setTimeout(() => {
            fn()
            // 函数执行完，回调中改变状态锁
            lock = true;
        }, 1000);
    };
}


/**
 * 深拷贝 deepCopy  
 * param Object obj 要进行拷贝的对象
 * return Object obj 拷贝后的对象
 */

function deepCopy(obj) {
    let o = obj instanceof Array ? [] : {};
    for (let i in obj) {
        let val = obj[i];
        if (typeof val === "object") {
            o[i] = deepCopy(val);
        } else {
            o[i] = val;
        }
    }
    return o;
}



/**
 * 让网页变得干净   clearWebSite
 * tip:本质是将html-body内容隐藏并清除控制台
 */

function clearWebSite() {
    document.body.setAttribute('hidden', true);
    window.clear();//清除控制台
}

/**
 * 去除对象或数组的无效属性   delInvalidprops
 * param Object obj 待处理对象或数组
 * return <> obj 处理后的对象或数组
 */

function delInvalidprops(source) {
    if (typeof source !== 'object') return;
    const invalidProps = [undefined, null, '']

    if (Array.isArray(source)) {
        invalidProps.forEach(invalidProp => {
            source.forEach((item, idx) => {
                if (item === invalidProp) source.splice(idx, 1);
                if (typeof item === 'object') delInvalidprops(item);//递归删除--数组>对象
                
            })

        })


    } else {

        for (let key in source) {
            if (source[key] === invalidProps[0]) { delete source[key] };
            if (source[key] === invalidProps[1]) { delete source[key] };
            if (source[key] === invalidProps[2]) { delete source[key] };

        }
    }
    return source;

}



/**
 * 根据指定url下载文件   downloadByUrl
 * param1 string url 待下载文件url
 * param2 string name 指定下载文件的名称 --默认为'下载'
 * tip:html5新特性 --a 标签 download属性  部分浏览器不支持
 */


function downloadByUrl(url, name = '下载') {
    if (typeof url !== "string" || url.length === 0) return;
    const parseUrl = url.split('.');
    const extensionName = parseUrl.pop();
    let a = document.createElement("a");
    a.href = url;
    a.download = name + '.' + extensionName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

/**
 * enterEvent 回车事件监听
 * param  function  fn  业务函数
 */


function enterEvent(fn) {
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            fn();
        }
    }
}



/**
 * pastTime 已过时间
 * param  Date  startTime  起始时间
 * return string 时间节点描述
 */

function pastTime(startTime) {

    let currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    return '刚刚'

}


/**
 * jsonFormat  自定义缩进的JSON格式化
 * param1  Object/Array  obj 待格式化的对象或数组
 * param2  number  space 缩进数
 * return string  jsonStr 格式化后的json字符串 
 */
function jsonFormat(obj, space) {
   
    return JSON.stringify(obj, null, space);
}



/* 其他常用函数--end*/






/*正则表达式 start*/

/**
 * 邮箱校验   isLegalEmail
 * param  string  email 待校验邮箱
 * return boolean 校验结果 
 */
function isLegalEmail(email) {
    return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email);
}


/**
 * 中文名校验--(2-6)位    isLegalName
 * param  string  name 待校验中文名
 * return boolean 校验结果 
 */
function isLegalName(name) {
    return /^[\u4e00-\u9fa5]{2,6}$/.test(name);
}



/**
 * 身份证校验   isLegalIdCard
 * param  string  idCard 待校验身份证
 * return boolean 校验结果 
 */
function isLegalIdCard(idCard) {
    return /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(idCard);
}

/**
 * 手机号码校验   isLegalPhone
 * param  string  phone 待校验手机号码
 * return boolean 校验结果 
 */
function isLegalPhone(phone) {
    return /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(phone);
}


/*正则表达式 end*/


export const Blink= {
    trim,//去除空格
    turnCase,//大小写转换-全大写，全小写，首字母大写
    parseCase,//大小写相互转换
    checkPwdStrength,//验证密码强度
    hexColor,//随机16进制颜色
    randomCode,//指定位数随机码
    keywordsCount,//关键词统计：统计一段文字中指定文字出现次数  
    caseFormat,// 短横,下划线与小驼峰的相互转化 caseFormat
    dateFormat,//时间格式化   形如--"20190803 11:01:07"
    reverse, //逆序输出
    onlyArray,//数组去重
    flat,//数组扁平化  
    sort,//数组排序
    bubble_sort,//冒泡排序    
    resort,//数组错乱排序  
    totalArr,//数组求和  
    mergeArr,//数组合并 
    lastItem,//获取数组最后一项  
    preventShake,//防抖   
    throttle,//节流 
    deepCopy,//深拷贝 
    clearWebSite,//让网页变得干净--调试时使用 
    delInvalidprops,//去除对象或数组的无效属性
    downloadByUrl,//根据指定url下载文件 
    enterEvent,//回车事件监听
    pastTime,//已过时间
    isLegalEmail,//邮箱校验
    isLegalName,//中文名校验--(2-6)位
    isLegalIdCard,//身份证校验
    isLegalPhone, //手机号码校验    
    jsonFormat,//自定义缩进的JSON格式化  
}
