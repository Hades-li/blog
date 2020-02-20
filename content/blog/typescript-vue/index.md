---
title: 浅谈typescript用于vue开发的优点和坑
date: "2019-10-26T23:03:03.284Z"
---

## typescript的两个核心,面向对象和强类型

typescript目前主要应用的方向

web：angular,react,vue?

游戏：白鹭引擎,LayaAir引擎

## typescript用于vue开发是否合适
有点鸡肋，但可以使项目变得更健壮，也可以使你变得更强。

### 原因1：由于vue本身用自己的一套格式为.vue文件做了一个面向对象的封装，因此，typescript的面向对象特性并没有发挥其优势，仅仅是改变了一个形态。

typescript代码
```typescript
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Page404'
})
export default class home extends Vue {
  private message = 'home'
  get name() {
    return this.$route.query.name 
  }
  created() {

  }
}
```

js代码
```javascript
export default {
  name: 'Page404',
  data: {
    return {
        message = 'home'
    }
  },
  computed: {
    name() {
        return this.$route.query.name 
    }
  },
  created() {
      
  }
}
```
以上的一段简单代码，可以看出，js代码中data对象和computed的对像属性被变形成为了class中的成员函数和成员变量。这样的改变，为此你需要引入typescript中的一个重要第三方库vue-property-decorator，没有这个第三方库，你就不能以class的形式来写vue。而两者仅仅是形态上发生了一些变化，而开发上并没有产生什么新的思路和便利。

### 原因2：由于typescript是强类型语言，类型定义的工作量增加了。你再也不能无脑使用对象了。

typescript代码
```typescript
// 类型申明
declare interface Person {
    name: string
    id: number
}

function show(person: Person) {
   console.log(`姓名:${person.name} 工号:${person.id}`)
}
```

js代码
```javascript
function show(person) {
   console.log(`姓名:${person.name} 工号:${person.id}`)
}
```
js代码看上去会更简洁。只要你心里面知道有person对象有name和id两个参数，你就可以进行打印输出。但ts的编译器会进行类型检查，如果你没有申明Person这个接口对象，那么程序将会在编译阶段报错。（当然对于anyscript大神，这些都不是问题。）


## ts在vue中开发的优点

### 优点1：同样强类型使得你的代码增加的同时，但也使得程序变得更加健壮。当你给一个变量传值时，你可以很清楚的知道传string还是number，并且IDE工具可以更好进行代码提示。


### 优点2：vuex-module-decorators
这是一个让你的状态管理store调用起来很爽的第三方库，也是我认为在ts下开发vue感到便捷的东西。

store初始化
```typescript
interface StoreType {
  mm: MyModule
}
// Declare empty store first
const store = new Vuex.Store<StoreType>({})

@Module({ dynamic: true, store: store, name: 'mm' })
class MyModule extends VuexModule {
  count = 0 // state

  @Mutation
  incrCount(delta) { // mutation
    this.count += delta
  }
  @Action
  add(delta) { // action
    this.incrCount(1)
  }
}
```
store的调用
```typescript
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import MyModule from '~/store/modules/myModule'

@Component
export default class extends Vue {
    public created() {
        const MyModule = getModule(MyStoreModule);
        console.log('count:' + MyModule.count) // 打印myModule的变量值
    }
}
```
初始化时，module的定义和js时变化较大，说白了，也是同样将module定义成了一个class。action, mutation, state这些对象全都变成了class中的成员函数和变量。

但调用store时变的无比简单，getModule可以直接把store中的module作为对象取出来，然后你就可以直接访问module中的state和action函数等。比起原来的写法中要写大量的map是不是爽了很多。





