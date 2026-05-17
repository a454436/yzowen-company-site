# 扬州欧雯生物科技有限公司静态独立站

## 已写入的公司信息

公司名称：扬州欧雯生物科技有限公司  
主营产品：酒店洗护用品、洗发露、沐浴露、护发素、身体乳、牙具、拖鞋、酒店客房一次性用品  
客户对象：酒店、民宿、经销商、贸易商、礼品公司、跨境客户  
优势：工厂直供、支持OEM/ODM、支持包装定制、生产环境规范、适合批量采购  
风格：高端酒店用品、国际化、简洁大气、白色/黑色/金色/深蓝色为主  
联系方式：页面顶部和底部均已预留  

## 文件结构

```text
yzowen-company-site/
├─ index.html          首页
├─ about.html          关于我们
├─ products.html       产品中心
├─ factory.html        工厂实力
├─ quality.html        质量合规
├─ contact.html        联系我们
├─ styles.css          全站样式
├─ script.js           手机端菜单
├─ robots.txt          搜索引擎抓取规则
├─ sitemap.xml         网站地图
└─ assets/             图片文件夹
```

## 需要你替换的信息

在所有页面中搜索以下文字并替换：

```text
请替换为你的联系方式
请替换为你的企业邮箱
请替换为你的公司地址
```

## 后期添加图片

把图片放到 assets 文件夹，例如：

```text
assets/factory.jpg
assets/products.jpg
assets/qrcode.jpg
```

然后在页面中引用：

```html
<img src="assets/factory.jpg" alt="扬州欧雯生物科技有限公司工厂环境">
```

## 推荐部署

优先推荐 Cloudflare Pages，也可以使用 GitHub Pages。
