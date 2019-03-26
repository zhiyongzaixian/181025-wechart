## 小程序开发流程
  1. 创建应用:  
    1. app.js 全局的逻辑 ---> App({})
    2. app.json 全局的配置 ---> json对象 ---> [pages(放置页面路径), window(窗口的表现)]
  2. 创建页面:
    1. index.wxml ---> view
    2. index.wxss ---> css
    3. index.js ---> 页面的逻辑 ---> Page({})
    4. index.json ---> 页面的配置
    

## 小程序特点
  1. 没有DOM对象
  2. 一切基于组件化
  3. 体积特别小，刚发布的时候1M， 2017年四月份提升到2M
  4. 小程序适配方案: viewport + rpx(物理像素单位)
  5. 小程序推荐使用flex布局

## 小程序语法
  1. 数据绑定
    1. 单项数据流： M ---> V
    2. 修改数据状态: this.setData({})
  2. 绑定事件
    1. 冒泡事件 ---> bind
    2. 非冒泡事件 ---> catch
  3. template
    1. 定义： template ---> name
    2. 引用: template ---> is
    3. 导入数据: data=''
  4. 如何给事件的event对象传递数据
    1. 传递: data-key = value
    2. event.target || event.currentTarget.dataset.key ---> 传递的value值
  5. 如何通过路由跳转传递数据
    1. 语法: 路由路径?key=value
    2. 获取: 目标页面onLoad获取实参options ---> 默认是{} ---> {key: value}