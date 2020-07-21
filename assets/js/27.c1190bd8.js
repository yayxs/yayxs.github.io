(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{605:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-什么是hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是hook"}},[t._v("#")]),t._v(" 1 什么是Hook")]),t._v(" "),e("p",[t._v("首先我们要明白的是React 16.8 的新增特性。它可以让我们在不编写 class 的情况下使用 state 以及其他的 React 特性。那么就会有一个问题，当我们处理业务需求的时候，还需要用class吗？在这里告诉大家，还是需要的，因为Hook目前还不能完全满足我们的业务需求，这点，下文会讲到，那么让我们来看一下劲爆的React Hook吧！（React 16.8.0 是第一个支持 Hook 的版本。升级时，请注意更新所有的 package，包括 React DOM。React Native 将在下一个稳定版本中支持 Hook。）")]),t._v(" "),e("p",[t._v("第一个Hook：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState } from 'react';\n\nfunction Example() {\n  // 声明一个新的叫做 “count” 的 state 变量\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("p",[t._v("在这里，说一下，useState 便是一个Hook,你是不是很好奇，一个计时器不同于我们以往的写法。")]),t._v(" "),e("p",[t._v("在这里，useState 就是一个 Hook 。通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。")]),t._v(" "),e("p",[t._v("useState 唯一的参数就是初始 state。在上面的例子中，我们的计数器是从零开始的，所以初始 state 就是 0。值得注意的是，不同于 this.state，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是。这个初始 state 参数只有在第一次渲染的会被用到。")]),t._v(" "),e("h4",{attrs:{id:"这里推荐大家一个视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这里推荐大家一个视频"}},[t._v("#")]),t._v(" 这里推荐大家一个视频")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/av37035438?from=search&seid=16190894249445170065",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 的今天和明天中英文双字幕"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/bVbuqBH",alt:"clipboard.png"}})]),t._v(" "),e("h3",{attrs:{id:"那些年我们开发中的痛点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那些年我们开发中的痛点"}},[t._v("#")]),t._v(" 那些年我们开发中的痛点")]),t._v(" "),e("ul",[e("li",[t._v("在组件之间复用状态逻辑很难")]),t._v(" "),e("li",[t._v("复杂组件变得难以理解")]),t._v(" "),e("li",[t._v("难以理解的 class")])]),t._v(" "),e("h3",{attrs:{id:"那么hook能在哪些方面帮助我们呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那么hook能在哪些方面帮助我们呢"}},[t._v("#")]),t._v(" 那么Hook能在哪些方面帮助我们呢")]),t._v(" "),e("ul",[e("li",[t._v("你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。")]),t._v(" "),e("li",[t._v("Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。")]),t._v(" "),e("li",[t._v("Hook 使你在非 class 的情况下可以使用更多的 React 特性。 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术")])]),t._v(" "),e("h1",{attrs:{id:"_2-走进hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-走进hook"}},[t._v("#")]),t._v(" 2 走进Hook")]),t._v(" "),e("p",[t._v("在上一章节我们提到过一个简单的计数器，那么究竟什么是Hook呢？Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。那么说白了，Hook并不是什么神奇的”人物“，只是一个我们每天都在接触实用的函数。")]),t._v(" "),e("h4",{attrs:{id:"我们仍然可以声明多个state变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我们仍然可以声明多个state变量"}},[t._v("#")]),t._v(" 我们仍然可以声明多个state变量")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function ExampleWithManyStates() {\n  // 声明多个 state 变量！\n  const [age, setAge] = useState(42);\n  const [fruit, setFruit] = useState('banana');\n  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);\n  // ...\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("如上所提到的useState 便是我们在处理数据时的操作，那么有没有什么好的办法可以让我对行为进行方便的处理呢。显然是有的。当我们做一些行为的时候必然会有一些副作用的产生，这里的副作用并不是我们生活中所提到的给一件事情带来不好的影响，或者不好的效果。那么究竟什么是副作用呢？")]),t._v(" "),e("h4",{attrs:{id:"关于副作用的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于副作用的理解"}},[t._v("#")]),t._v(" 关于副作用的理解")]),t._v(" "),e("ul",[e("li",[t._v("理解副作用，我们首先理解一下什么是纯函数：给一个 function 相同的参数，永远会返回相同的值，并且没有副作用；这个概念拿到 React 中，就是给一个 Pure component 相同的 props, 永远渲染出相同的视图，并且没有其他的副作用；纯组件的好处是，容易监测数据变化、容易测试、提高渲染性能等；")]),t._v(" "),e("li",[t._v("副作用（Side Effect）是指一个 function 做了和本身运算返回值无关的事，比如：修改了全局变量、修改了传入的参数、甚至是 console.log()，所以 ajax 操作，修改 dom 都是算作副作用的")])]),t._v(" "),e("p",[t._v("那么，当我们理解了副作用后，那么我们的useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // 相当于 componentDidMount 和 componentDidUpdate:\n  useEffect(() => {\n    // 使用浏览器的 API 更新页面标题\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br")])]),e("p",[t._v("当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。")]),t._v(" "),e("h3",{attrs:{id:"不得不注意的是"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不得不注意的是"}},[t._v("#")]),t._v(" 不得不注意的是")]),t._v(" "),e("p",[t._v('我们能在所有的地"肆无忌惮"的使用如此之方便的Hook吗，答案是暂时不可以的，因为')]),t._v(" "),e("ul",[e("li",[t._v("只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。")]),t._v(" "),e("li",[t._v("只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（自定义Hook也可以）")])]),t._v(" "),e("h4",{attrs:{id:"如何自定义hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义hook"}},[t._v("#")]),t._v(" 如何自定义Hook")]),t._v(" "),e("p",[t._v("自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。 useSomething 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。")]),t._v(" "),e("p",[t._v("你可以创建涵盖各种场景的自定义 Hook，如表单处理、动画、订阅声明、计时器，甚至可能还有更多我们没想到的场景。我们很期待看到 React 社区会出现什么样的自定义 Hook。")]),t._v(" "),e("h1",{attrs:{id:"_3-分析hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析hook"}},[t._v("#")]),t._v(" 3 分析Hook")]),t._v(" "),e("p",[t._v("首先让Demo")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" 1:  import React, { useState } from 'react'; //引入 React 中的 useState Hook。它让我们在函数组件中存储内部 state。\n 2:\n 3:  function Example() {\n 4:    const [count, setCount] = useState(0); //在 Example 组件内部，我们通过调用 useState Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。我们把变量命名为 count，因为它存储的是点击次数。我们通过传 0 作为 useState 唯一的参数来将其初始化为 0。第二个返回的值本身就是一个函数。它让我们可以更新 count 的值，所以我们叫它 setCount\n 5:\n 6:    return (\n 7:      <div>\n 8:        <p>You clicked {count} times</p>\n 9:        <button onClick={() => setCount(count + 1)}> //当用户点击按钮后，我们传递一个新的值给 setCount。React 会重新渲染 Example 组件，并把最新的 count 传给它。\n10:         Click me\n11:        </button>\n12:      </div>\n13:    );\n14:  }\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("useState():它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数。")])]),t._v(" "),e("li",[e("p",[t._v("count, setCount:它意味着我们同时创建了 count 和 setCount 两个变量，count 的值为 useState 返回的第一个值，setCount 是返回的第二个值。")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("h4",{attrs:{id:"useeffect-做了什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-做了什么？"}},[t._v("#")]),t._v(" useEffect 做了什么？")]),t._v(" "),e("p",[t._v("通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。")]),t._v(" "),e("h4",{attrs:{id:"为什么在组件内部调用-useeffect？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么在组件内部调用-useeffect？"}},[t._v("#")]),t._v(" 为什么在组件内部调用 useEffect？")]),t._v(" "),e("p",[t._v("将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。")]),t._v(" "),e("h4",{attrs:{id:"useeffect-会在每次渲染后都执行吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useeffect-会在每次渲染后都执行吗？"}},[t._v("#")]),t._v(" useEffect 会在每次渲染后都执行吗？")]),t._v(" "),e("p",[t._v("是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的时，DOM 都已经更新完毕。")]),t._v(" "),e("h1",{attrs:{id:"_4-hook-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-hook-api"}},[t._v("#")]),t._v(" 4 Hook API")]),t._v(" "),e("p",[t._v("###基础 Hook")]),t._v(" "),e("ul",[e("li",[t._v("useState")]),t._v(" "),e("li",[t._v("useEffect")]),t._v(" "),e("li",[t._v("useContext")])]),t._v(" "),e("h3",{attrs:{id:"额外的-hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#额外的-hook"}},[t._v("#")]),t._v(" 额外的 Hook")]),t._v(" "),e("ul",[e("li",[t._v("useReducer")]),t._v(" "),e("li",[t._v("useCallback")]),t._v(" "),e("li",[t._v("useMemo")]),t._v(" "),e("li",[t._v("useRef")]),t._v(" "),e("li",[t._v("useImperativeHandle")]),t._v(" "),e("li",[t._v("useLayoutEffect")]),t._v(" "),e("li",[t._v("useDebugValue")])])])}),[],!1,null,null,null);s.default=n.exports}}]);