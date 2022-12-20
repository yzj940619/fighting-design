# Avatar 头像

用于用户的头像展示

- [源代码](https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/avatar)
- [文档编辑](https://github.com/FightingDesign/fighting-design/blob/master/docs/components/avatar.md)

## 基本使用

使用 `src` 属性设置图片的路径

`round` 属性可以配置圆角头像

::: demo

```vue
<template>
  <f-space>
    <f-avatar src="https://tianyuhao.cn/images/auto/my.jpg" />
    <f-avatar round src="https://tianyuhao.cn/images/auto/my.jpg" />
  </f-space>
</template>
```

:::

## 使用本地图片

参考 [Image 使用本地图片](https://fighting.tianyuhao.cn/components/image.html#使用本地图片)

## 适应容器的方式

`fit` 属性可以配置头像不同适应容器的方式，详见原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性

::: demo

```vue
<template>
  <f-space>
    <f-avatar fit="fill" src="https://tianyuhao.cn/images/auto/4.jpg" />
    <f-avatar fit="contain" src="https://tianyuhao.cn/images/auto/4.jpg" />
    <f-avatar fit="cover" src="https://tianyuhao.cn/images/auto/4.jpg" />
    <f-avatar fit="none" src="https://tianyuhao.cn/images/auto/4.jpg" />
    <f-avatar fit="scale-down" src="https://tianyuhao.cn/images/auto/4.jpg" />
  </f-space>
</template>
```

:::

## 不同大小

`size` 属性可以配置不同大小的头像，也可以传入指定的数字，会自动转换为 `px`

::: demo

```vue
<template>
  <f-space>
    <f-avatar :size="85" src="https://tianyuhao.cn/images/auto/my.jpg" />
    <f-avatar size="large" src="https://tianyuhao.cn/images/auto/my.jpg" />
    <f-avatar size="middle" src="https://tianyuhao.cn/images/auto/my.jpg" />
    <f-avatar size="small" src="https://tianyuhao.cn/images/auto/my.jpg" />
    <f-avatar size="mini" src="https://tianyuhao.cn/images/auto/my.jpg" />
  </f-space>
</template>
```

:::

## 图标头像

`icon` 属性可以配置带有 `icon` 的图标头像

`background` 属性可以配置背景色，`font-color` 属性可以自定义图标颜色

`font-size`可以配置图标大小，后面必须要加入单位

::: demo

```vue
<script lang="ts" setup>
  import { FIconFaceSmile, FIconBug } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-space>
    <f-avatar :icon="FIconFaceSmile" :font-size="30" background="skyblue" />
    <f-avatar background="orange" font-color="#fff" :icon="FIconBug" :font-size="30" />
  </f-space>
</template>
```

:::

## 懒加载

`lazy` 属性可以设置图片懒加载，详情可参考 `DevTools` 的 `Network`

::: demo

```vue
<template>
  <f-avatar width="200px" lazy src="https://tianyuhao.cn/images/auto/5.jpg" />
</template>
```

:::

## 加载失败

默认加载失败会显示 `加载失败`，当然你也可以使用 `alt` 属性自定义加载失败的提示文字

或者使用 `error` 插槽展示

::: demo

```vue
<template>
  <f-space>
    <f-avatar src="https://123.cn/images/auto/my.jpg" />

    <f-avatar src="https://123.cn/images/auto/my.jpg" alt="Err" />

    <f-avatar src="https://123.cn/images/auto/my.jpg">
      <template v-slot:error>
        <f-text type="danger" bold>失败了</f-text>
      </template>
    </f-avatar>
  </f-space>
</template>
```

:::

## Attributes

| 参数          | 说明                                                                                                     | 类型                                                                        | 可选值                                       | 默认值   |
| ------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| `src`         | 图片路径                                                                                                 | string                                                                      | ——                                           | ——       |
| `err-src`     | 加载失败时要显示的地址                                                                                   | string                                                                      | ——                                           | ——       |
| `alt`         | 原生 [alt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt) 属性                  | string                                                                      | ——                                           | 加载失败 |
| `round`       | 是否为圆角                                                                                               | boolean                                                                     | ——                                           | false    |
| `lazy`        | 是否懒加载头像                                                                                           | boolean                                                                     | ——                                           | false    |
| `fit`         | 如何适应容器，原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it) 属性 | <a href="#avatarfit">AvatarFit</a>                                          | `fill` `contain` `cover` `none` `scale-down` | ——       |
| `size`        | 图片大小                                                                                                 | <a href="/components/interface.html#fightingsize">FightingSize</a> / number | `large` `middle` `small` `mini`              | middle   |
| `background`  | 背景色                                                                                                   | string                                                                      | ——                                           | ——       |
| `icon`        | 图标头像                                                                                                 | <a href="/components/interface.html#fightingicon">FightingIcon</a>          | ——                                           | ——       |
| `font-size`   | 字体大小                                                                                                 | string                                                                      | ——                                           | 15px     |
| `font-color`  | 字体的颜色                                                                                               | string                                                                      | ——                                           | #333     |
| `text`        | 文字头像                                                                                                 | string                                                                      | ——                                           | ——       |
| `root-margin` | 触发懒加载的距离                                                                                         | string / number                                                             | ——                                           | 100px    |
| `on-load`     | 图片加载成功触发的回调                                                                                   | <a href="/components/interface.html#handleevent">HandleEvent</a>            | ——                                           | ——       |
| `on-error`    | 图片加载失败触发的回调                                                                                   | <a href="/components/interface.html#handleevent">HandleEvent</a>            | ——                                           | ——       |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| `error`  | 自定义加载失败提示 |
| `icon`   | 自定义 icon 头像   |

## Interface

组件导出以下类型定义：

```ts
import type { AvatarInstance, AvatarProps, AvatarFit } from 'fighting-design'
```

### AvatarFit

```ts
type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
```

## Contributors

<a href="https://github.com/Tyh2001" target="_blank">
  <f-avatar round src="https://avatars.githubusercontent.com/u/73180970?v=4" />
</a>