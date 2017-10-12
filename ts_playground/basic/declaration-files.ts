/// <reference path="./jQuery.d.ts" />
//当使用第三方库时，我们需要引用它的声明文件。

//1、声明语句
//假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 id 是 foo 的元素：
//但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：
//这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：
declare var jQuery: (string) => any;
jQuery('#foo')

//2、声明文件
//通常我们会把类型声明放到一个单独的文件中，这就是声明文件：

// jQuery.d.ts
declare var jQuery: (string) => any;
//我们约定声明文件以 .d.ts 为后缀。

//然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：

//社区已经有多种方式引入声明文件，不过 TypeScript 2.0 推荐使用 @types 来管理。

//@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
//npm install @types/jquery --save-dev