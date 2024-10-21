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

以下是一些可能的补充内容，涵盖 TypeScript 的更多高级特性和概念：

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

### 结语

这些补充内容展示了 TypeScript 中的一些更高级和实用的特性，帮助你更好地理解和利用 TypeScript 的类型系统。随着对 TypeScript 的深入学习，你将能更高效地编写出可维护和可扩展的代码。
