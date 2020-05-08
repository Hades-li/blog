---
title: 一个前端学习IOS开发采坑记-1
date: "2018-12-28T22:12:03.284Z"
---

## 前言
这是用来记录我一个前端如何学习ios开发的经历，更多的是从一个前端的角度来理解ios开发。和一些框架思想的转变。

## 语言的选择
大多数人都很清楚，oc是ios开发的第一大语言。即便swift已经到了第4版。在目前的项目中，
依然是oc为主力语言。其优点是非常完善的第三方框架库。
网上能找到各种各样的问题解决方案的样例都是基于oc的。这对于开发一个项目帮助非常大。
但如果那你用了swift，你会发现很多问题，你不得不去看人家是用oc怎么解决的，然后自己仿造用swift来实现。
自然开发效率就下降了。

但是作为一个前端开发者，当你第一眼看到oc的语法时，你一定是懵逼的。当然，就连从事多年oc开发的
人来说，也是觉得oc的语法很变态。这也就是苹果为什么会创建swift语言的原因了。
作为前端来说，选择swift来作为开发ios语言，其学习难度要比oc小很多。因为它和js有很多相似的地方。
比如实例化一个对象：

oc的：
```
A *a = [A init]
NSString *str = [NSString stringWithFormat:@"字符串%d",a]
```
swift的:
```
var a = A()
var str:String = "hello world"
```
如果你是一个前端开发者，当你第一次看见oc的语法，估计可能会认为那在实例化一个数组。oc的特色就是各种"中挂号"。
很明显，swift语法更接近js。

需要注意的是，swift是一门强类型的语言，而js是弱类型的。这是两者最大的区别。
不过，如果你是一个精通ts的前端，那么恭喜你，你掌握swift的时间又可以缩短了。
因为，两者不但都是强类型的语言，并且你会发现，两者在部分语法结构上几乎雷同。

因此，我从能够快速上手的角度来判断。作为一个前端来说，选择swift作为基础语言是利大于弊的。

> 目前，swift语言已经更新到第4版，已经不像前3版，每一次更新都能带来满屏红叉的效果。api基本已经稳定了。



