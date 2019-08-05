## blink.js

> 一个简单的js常用函数库 created by 2019-08-03

|--|--|--|
|函数名|作用|
|trim|去除空格
|turnCase|大小写转换-全大写，全小写，首字母大写
|parseCase|大小写相互转换
|checkPwdStrength|验证密码强度
|hexColor|随机16进制颜色
|randomCode|指定位数随机码
|keywordsCount|关键词统计
|caseFormat|短横,下划线与小驼峰的相互转化 
|dateFormat|时间格式化
|reverse|逆序输出
|onlyArray|数组去重
|flat|数组扁平化
|sort|数组排序
|bubble_sort|冒泡排序
|resort|数组错乱排序
|totalArr|数组求和
|mergeArr|数组合并
|lastItem|获取数组最后一项
|preventShake|防抖
|throttle|节流 
|deepCopy|深拷贝 
|clearWebSite|让网页变得干净--调试时使用 
|delInvalidprops|去除对象或数组的无效属性 
|downloadByUrl|根据指定url下载文件
|enterEvent|回车事件监听
|pastTime|已过时间
|isLegalEmail|邮箱校验
|isLegalName|中文名校验--(2-6)位
|isLegalIdCard|身份证校验
|isLegalPhone|手机号码校验 


## 安装：npm i sparkle-blink

## 使用

```js
  import {Blink} from 'sparkle-blink'
  const {trim}=Blink;
  console.log(trim('  hello  world  ',1))
```


<p><a href='./blink.js'>获取</a></p>
