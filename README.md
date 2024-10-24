<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

下面是更新后的 TypeScript 基础类型学习笔记，增加了 `implements` 的概念：

---

### TypeScript 基础类型学习笔记

TypeScript 是 JavaScript 的超集，提供了静态类型系统。通过给变量、参数和返回值添加类型，可以避免许多潜在的错误。以下是 TypeScript 类型系统的一些基础知识和示例。

---

### 1. **基础类型**

TypeScript 支持的基本数据类型包括：

- **`number`**：任意数字类型（浮点数、整数等）
- **`string`**：字符串
- **`boolean`**：布尔值，`true` 或 `false`
- **`any`**：可以是任意类型，使用 `any` 相当于关闭了类型检查
- **`unknown`**：表示未知的类型，类似 `any`，但更安全，需要类型检查后才能操作
- **`void`**：表示函数没有返回值
- **`null` 和 `undefined`**：分别表示空值和未定义
- **`never`**：表示那些永远不会有返回值的类型，比如抛出错误的函数

**示例**：
```ts
let num: number = 10;
let str: string = "Hello";
let bool: boolean = true;
let notSure: any = 4;
let nothing: void = undefined;
```

---

### 2. **数组类型**

TypeScript 支持两种数组定义方式：

1. `类型[]`：表示由该类型元素构成的数组
2. `Array<类型>`：使用泛型表示数组

**示例**：
```ts
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["one", "two", "three"];
```

---

### 3. **元组类型 (Tuple)**

元组类型允许定义一个已知长度、已知类型的数组，各元素的类型可以不同。

**示例**：
```ts
let tuple: [string, number];
tuple = ["hello", 10];  // 正确
// tuple = [10, "hello"]; // 错误
```

---

### 4. **枚举类型 (Enum)**

枚举用于定义一组命名的常量。可以为枚举成员指定具体的值，也可以让 TypeScript 自动分配值。

**示例**：
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;  // c = 1

enum Direction {Up = 1, Down, Left, Right}
let dir: Direction = Direction.Left;  // dir = 3
```

---

### 5. **函数类型**

可以为函数参数和返回值指定类型。

**示例**：
```ts
function add(x: number, y: number): number {
    return x + y;
}

let result = add(5, 10);  // result 类型是 number
```

还可以用接口定义函数类型：

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let search: SearchFunc;
search = function(src, sub) {
    return src.includes(sub);
};
```

---

### 6. **对象类型**

可以定义对象中每个属性的类型。

**示例**：
```ts
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};
```

**可选属性**使用 `?` 标记。

```ts
let person: { name: string; age?: number } = {
    name: "John"
};
```

---

### 7. **联合类型 (Union Types)**

联合类型表示一个值可以是多种类型中的一种。

**示例**：
```ts
let value: string | number;
value = "hello";  // 正确
value = 42;       // 也正确
```

使用 **类型保护** 来判断类型：
```ts
function print(value: string | number) {
    if (typeof value === "string") {
        console.log("String:", value);
    } else {
        console.log("Number:", value);
    }
}
```

---

### 8. **类型别名 (Type Alias)**

使用 `type` 关键字为复杂类型创建别名。

**示例**：
```ts
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };
```

---

### 9. **接口 (Interface)**

接口用于定义对象的结构，可以为对象定义必须的属性、可选属性、方法等。

**示例**：
```ts
interface Person {
    name: string;
    age: number;
}

let john: Person = { name: "John", age: 25 };
```

接口也可以扩展其他接口：

```ts
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = { name: "Buddy", breed: "Golden Retriever" };
```

---

### 10. **类 (Class)**

TypeScript 支持面向对象编程。可以定义类、继承类、实现接口等。

**示例**：
```ts
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Rex");
dog.bark();  // Woof! Woof!
dog.move(10);  // Rex moved 10 meters.
```

---

### 11. **泛型 (Generics)**

泛型使得函数、类或接口可以适用于多种类型，而不必重复编写代码。

**示例**：
```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("hello");  // T 被推断为 string
let output2 = identity<number>(42);       // T 被推断为 number
```

---

### 12. **类型推断**

TypeScript 能自动推断变量的类型。如果初始化时提供了值，TypeScript 会根据值推断出类型。

**示例**：
```ts
let num = 10;  // 推断为 number 类型
let str = "hello";  // 推断为 string 类型
```

---

### 13. **类型断言**

类型断言用于告诉 TypeScript 我们比它更清楚值的类型。可以使用 `as` 或尖括号语法。

**示例**：
```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

---

### 14. **非空断言**

在处理可能为 `null` 或 `undefined` 的值时，可以使用 `!` 进行非空断言，告诉 TypeScript 值不会是 `null` 或 `undefined`。

**示例**：
```ts
let value: string | undefined;
console.log(value!.length);  // 确保 value 不为 undefined
```

---

### 15. **类型守卫 (Type Guards)**

类型守卫是一种在运行时根据某些条件缩小类型范围的方式。

**示例**：
```ts
function isString(value: any): value is string {
    return typeof value === "string";
}

function printValue(value: string | number) {
    if (isString(value)) {
        console.log("String:", value);
    } else {
        console.log("Number:", value);
    }
}
```

---

### 16. **模块和命名空间**

可以使用 `export` 和 `import` 在文件间共享代码。

**示例（模块）**：
```ts
// 在 math.ts 文件中
export function add(a: number, b: number): number {
    return a + b;
}

// 在 main.ts 文件中
import { add } from './math';
console.log(add(10, 20));
```

---

### 17. **实现接口 (implements)**

使用 `implements` 关键字表示一个类实现了某个接口。实现接口的类必须提供接口中定义的所有成员。这在 TypeScript 中是进行类型检查的重要方式。

**示例**：
```ts
interface NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
}

class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void {
        console.log(`Request... ${req.method} ${req.originalUrl}`);
        next(); // 调用下一个中间件
    }
}
```

### 概念解析：

- **接口定义**：`NestMiddleware` 接口定义了中间件必须实现的 `use` 方法。
- **类实现**：`LoggerMiddleware` 类通过 `implements` 关键字实现了 `NestMiddleware` 接口，确保类符合接口的结构。

---

### 18. **交叉类型 (Intersection Types)**

交叉类型用于将多个类型组合成一个类型。可以将多个类型的所有属性合并到一个对象中。

**示例**：
```ts
interface Person {
    name: string;
}

interface Worker {
    job: string;
}

type Employee = Person & Worker;

let employee: Employee = {
    name: "Alice",
    job: "Developer"
};
```

---

### 19. **映射类型 (Mapped Types)**

映射类型可以基于现有类型生成新类型，常用于创建从一种类型到另一种类型的映射。

**示例**：
```ts
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

interface Todo {
    title: string;
    completed: boolean;
}

type ReadonlyTodo = ReadOnly<Todo>;

// ReadonlyTodo 变为 { readonly title: string; readonly completed: boolean; }
```

---

### 20. **条件类型 (Conditional Types)**

条件类型根据某个条件选择类型，语法是 `A extends B ? C : D`。

**示例**：
```ts
type Check<T> = T extends string ? "string" : "not a string";

type Result1 = Check<string>;  // "string"
type Result2 = Check<number>;  // "not a string"
```

---

### 21. **索引类型 (Index Types)**

索引类型用于通过键来获取对象的属性类型。

**示例**：
```ts
interface Person {
    name: string;
    age: number;
}

type PersonName = Person["name"];  // PersonName 类型为 string
```

---

### 22. **元组推断**

TypeScript 支持对元组的推断，能够通过元组的类型推断出具体类型。

**示例**：
```ts
const tuple = [1, "hello"] as const;
// tuple 的类型为 readonly [1, "hello"]
```

---

### 23. **装饰器 (Decorators)**

装饰器是 TypeScript 提供的一种特殊语法，用于添加注释或修改类、方法或属性的行为。需要启用实验性特性。

**示例**：
```ts
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with`, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @log
    add(x: number, y: number): number {
        return x + y;
    }
}

const calc = new Calculator();
calc.add(2, 3);  // 输出：Calling add with [2, 3]
```

---

### 24. **命名空间 (Namespaces)**

命名空间用于将相关的代码分组，避免全局作用域的污染。

**示例**：
```ts
namespace MathUtils {
    export function add(x: number, y: number): number {
        return x + y;
    }
}

let result = MathUtils.add(5, 10);
```

---

### 25. **类型推导中的默认类型参数**

在泛型中，可以为类型参数提供默认类型，这样在使用时可以选择不传递具体类型。

**示例**：
```ts
function identity<T = string>(arg: T): T {
    return arg;
}

let output = identity("hello");  // T 默认为 string
```

---

### 26. **类型映射和约束**

在使用泛型时，可以使用约束来限制泛型类型的范围。

**示例**：
```ts
function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
}

logLength("Hello");  // 输出 5
logLength([1, 2, 3]); // 输出 3
```

---

### 27. **枚举与常量**

可以使用 `const` 定义常量枚举，避免编译后的代码产生多余的常量值。

**示例**：
```ts
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir = Direction.Up;  // 编译后 dir 的值直接为 0
```

---

