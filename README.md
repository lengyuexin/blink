## 使用

```js
  import {trim} from 'light-func'
  console.log(trim('  hello  world  ',1))//helloworld
```



## API


| 函数名           | 作用                                  |
| ---------------- | ------------------------------------- |
| trim             | 去除空格                              |
| turnCase         | 大小写转换-全大写，全小写，首字母大写 |
| parseCase        | 大小写相互转换                        |
| checkPwdStrength | 验证密码强度                          |
| hexColor         | 随机16进制颜色                        |
| randomCode       | 指定位数随机码                        |
| keywordsCount    | 关键词统计                            |
| caseFormat       | 短横,下划线与小驼峰的相互转化         |
| dateFormat       | 时间格式化                            |
| reverse          | 逆序输出                              |
| onlyArray        | 数组去重                              |
| sort             | 数组排序                              |
| resort           | 数组错乱排序                          |
| totalArr         | 数组求和                              |
| mergeArr         | 数组合并                              |
| lastItem         | 获取数组最后一项                      |
| debounce         | 防抖                                  |
| throttle         | 节流                                  |
| deepClone        | 深拷贝                                |
| clearWebSite     | 让网页变得干净--调试时使用            |
| delInvalidprops  | 去除对象或数组的无效属性              |
| downloadByUrl    | 根据指定url下载文件                   |
| enterEvent       | 回车事件监听                          |
| pastTime         | 已过时间                              |
| isLegalEmail     | 邮箱校验                              |
| isLegalName      | 中文名校验--(2-6)位                   |
| isLegalIdCard    | 身份证校验                            |
| isLegalPhone     | 手机号码校验                          |
| jsonFormat       | 自定义缩进的JSON格式化                |
| setCookie        | 设置cookie                            |
| getCookie        | 获取cookie                            |
| clearCookie      | 清除cookie                            |
| info             | 美化打印--信息                        |
| warn             | 美化打印--警告                        |
| error            | 美化打印--错误                        |


## 安装：npm i light-func

## API

### 字符串常用函数

<p> <b>trim 去除空格</b></p>

* param1  string str 待处理字符串
* param2  number type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
* return  string str 处理后的字符串
 


 ```js
    trim(' hello  world  ',1)//helloworld
 ```

<p> <b>turnCase 大小写转换</b></p>

 * param1 string str 待转换的字符串
 * param2 number type 1-全大写 2-全小写 3-首字母大写 
 * return  string str 处理后的字符串
 

 ```js
    turnCase('hello',1);//HELLO
    turnCase('hello',2);//hello
    turnCase('hello',3);//Hello
 ```


<p> <b>parseCase 大小写相互转换</b></p>

 * param string str 待转换的字符串
 * return  string result 处理后的字符串



 ```js
    parseCase('hello');//HELLO
    parseCase('HELLo');//hellO
 ```

<p> <b>checkPwdStrength 密码强度判断</b></p>

 * param string str 待转换的字符串
 * 低于6为强度为0，字母+1，数字+1，下划线+1，特殊字符!@#$%+1，最高为4
 * return  number lv 密码强度等级


 ```js
    checkPwdStrength('12345');//0
    checkPwdStrength('123456');//1
    checkPwdStrength('123456a');//2
    checkPwdStrength('123456a_');//3
    checkPwdStrength('123456a_#');//4
    checkPwdStrength('123456a_#$');//4
 ```


<p> <b>hexColor 随机16进制颜色</b></p>

 * return  string str 带#号的随机16进制颜色

 ```js
    hexColor();//#2Ecc71
 ```

<p> <b>randomCode 指定位数随机码</b></p>


 * param number count 随机码位数
 * return  string str 指定位数随机码
 
 ```js
    randomCode(6);//anfmk1
 ```


<p> <b>keywordsCount 关键词统计</b></p>

 * param1 string text 进行统计的文本
 * param2 string keywords 进行统计的关键词
 * return number count 关键词出现次数
 * tip:param1 document.body.innerText--全文统计
 
 ```js
    keywordsCount('富强民主文明和谐富强民主文明和谐','和谐');//2
 ```



<p> <b>caseFormat 短横,下划线与小驼峰的相互转化</b></p>

 *  param1 string str 待转换字符串
 *  param2 string type '-'or '_',默认为下划线
 *  return string str 转换后字符串

 ```js
    caseFormat('stuName','-');//stu-name
    caseFormat('stuName','_');//stu_name
 ```



<p> <b>caseFormat 短横,下划线与小驼峰的相互转化</b></p>

 * 时间格式化 dateFormat  形如--"20190803 11:01:07"
 * param1 Date date 待格式化的时间
 * param2 number type 格式化范围 1-精确到月 2-精确到日 3-精确到分钟 4-精确到秒
 * return string time 格式化后的时间
 
```js
    dateFormat(new Date(),1)//201908
    dateFormat(new Date(),2)//20190806
    dateFormat(new Date(),3)//20190806 09:22
    dateFormat(new Date(),4)//20190806 09:23:03
```


<p> <b>reverse 逆序输出</b></p>

 * param string str 源字符串
 * return string result 逆序输出的字符串
 

```js
    reverse('hello');//olleh
```

### 数组常用函数


<p> <b>onlyArray 数组去重</b></p>

 * param Array arr 待去重的数组
 * return Array arr 去重后的数组
 

```js
    onlyArray([1,2,1,1,2,3,3]);//[1,2,3]
```





<p> <b>sort 数组排序</b></p>

 
 * param1 Array arr 待排序的数组
 * param2 number rule  排序规则 1-升序 0-降序,默认升序
 * return Array arr 排序后的数组
 

```js
    sort([1,5,3],1);//[1,3,5]
    sort([1,5,3],0);//[5,3,1]
```





<p> <b>resort 数组错乱排序</b></p>

 * param Array arr 待排序的数组
 * return Array arr 排序后的数组

```js
    resort([1,2,3,4,5,6]);//[2, 1, 5, 3, 4, 6]
```


<p> <b>totalArr 数组求和</b></p>

 * param Array arr 待求和的数组
 * return Number num 求和结果

```js
    totalArr([1,2,3]);//6
```

<p> <b>mergeArr 数组合并</b></p>

 * param1 Array arr 待合并数组
 * ...params Array arr 合并数组,可放置多个
 * return Array arr 合并后的数组

```js
    mergeArr([],[1,2],[3]);//[1,2,3]
```


<p> <b>lastItem 获取数组最后一项</b></p>

* param Array arr 源数组
* return <> item 数组最后一项

```js
    lastItem([1,2,3]);//3
```

### 其他常用函数


<p> <b>debounce 防抖</b></p>

* param1 function fn 要进行防抖的函数
* param2 delay 延迟时间

```js
    function fn(){};
    var debounceFn=debounce(fn,1000);//返回一个新的防抖函数
    debounceFn(参数列表)
```

<p> <b>throttle 节流</b></p>

* param1 function fn 要进行节流的函数
* param2 delay 延迟时间

```js
    function fn(){};
    var throttleFn=throttle(fn,1000);//返回一个新的节流函数
    throttleFn(参数列表)
```

<p> <b>deepClone 深拷贝</b></p>

  
 * param Object obj 要进行拷贝的对象
 * return Object obj 拷贝后的对象
 

```js
   deepClone({name:'tom',age:18});//{name:'tom',age:18}
```

<p> <b>clearWebSite 让网页变得干净</b></p>

 * tip:本质是将html-body内容隐藏并清除控制台
 

```js
   clearWebSite();
```

<p> <b>delInvalidprops 去除对象或数组的无效属性</b></p>

 * param Object obj 待处理对象或数组
 * return <> obj 处理后的对象或数组
 

```js
   delInvalidprops([undefined,null,'',1]);//[1]
   delInvalidprops({name:undefined,age:null,hobby:'',sex:'boy');//{sex: "boy"}
```


<p> <b>downloadByUrl 根据指定url下载文件</b></p>


 * param1 string url 待下载文件url
 * param2 string name 指定下载文件的名称 --默认为'下载'
 * tip:html5新特性 --a 标签 download属性  部分浏览器不支持
 

```js
   downloadByUrl('url','desc');
```


<p> <b>enterEvent 回车事件监听</b></p>


 * param  function  fn  业务函数
 

```js
   function fn(){console.log('hello')};
   enterEvent(fn);
```


<p> <b>pastTime 已过时间</b></p>

* param  Date  startTime  起始时间
* return string 时间节点描述
 

```js

    pastTime(new Date());//刚刚

```

<p> <b>jsonFormat 自定义缩进的JSON格式化</b></p>

 * param1  Object/Array  obj 待格式化的对象或数组
 * param2  number  space 缩进数
 * return string  jsonStr 格式化后的json字符串 
 

```js

    jsonFormat([{name:'tom',age:18},{name:'jack',age:20},{name:'merry',age:19}],4);
    /*"[
    {
        "name": "tom",
        "age": 18
    },
    {
        "name": "jack",
        "age": 20
    },
    {
        "name": "merry",
        "age": 19
    }
]"
*/
```


<p> <b>setCookie 设置cookie</b></p>

* param1  String  name  要设置的cookie名称
* param2   *      value 要设置的cookie值
 

```js

    setCookie("name","gaoqian");

```
<p> <b>getCookie 获取cookie</b></p>

* param    String  name  要获取的cookie名
* return   String  value 要获取的cookie值
 

```js

    getCookie("name");//"gaoqian"

```
<p> <b>clearCookie 清除cookie</b></p>

* param    String  name  要清除的cookie名
 

```js

    clearCookie("name");

```

<p> <b>info,warn,error美化打印</b></p>

 * ...param  String  msg 要输出的信息
 * return String 美化后的信息

```js

    info("hello");//hello 背景色#2ecc71
    warn("hello");//hello 背景色orange
    error("hello");//hello 背景色#FF0000

```



### 正则表达式 

<p> <b>isLegalEmail 邮箱校验</b></p>

 * param  string  email 待校验邮箱
 * return boolean 校验结果 

 

```js

  isLegalEmail(yourEmail);//true or false

```

<p> <b>isLegalName 中文名校验--(2-6)位  </b></p>

* param  string  name 待校验中文名
* return boolean 校验结果 


```js

  isLegalName(yourName);//true or false

```

<p> <b>isLegalIdCard 身份证校验  </b></p>

 * param  string  idCard 待校验身份证
 * return boolean 校验结果 


```js

  isLegalIdCard(yourIdCard);//true or false

```

<p> <b>isLegalPhone 手机号码校验  </b></p>

 * param  string  phone 待校验手机号码
 * return boolean 校验结果 

```js

  isLegalPhone(yourPhone);//true or false

```






