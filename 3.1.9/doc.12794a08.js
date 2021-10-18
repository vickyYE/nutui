import{e as a,o as t,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>Tabbar \u6807\u7B7E\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u5E95\u90E8\u5BFC\u822A\u5E38\u7528\u573A\u666F</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Tabbar,TabbarItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Tabbar,TabbarItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Tabbar);
app.use(TabbarItem);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> @<span class="hljs-attr">tab-switch</span>=<span class="hljs-string">&quot;tabSwitch&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tabSwitch</span>(<span class="hljs-params">item: object, index: number</span>) </span>{
    <span class="hljs-built_in">console</span>.log(item, index);
  }
  <span class="hljs-keyword">return</span> {
    tabSwitch,
  };
},
</code></pre><h3>\u8DEF\u7531\u8DF3\u8F6C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> @<span class="hljs-attr">tab-switch</span>=<span class="hljs-string">&quot;tabSwitch&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &#39;/home&#39;, query: { plan: &#39;private&#39; }}&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u7247\u94FE\u63A5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> @<span class="hljs-attr">tab-switch</span>=<span class="hljs-string">&quot;tabSwitch&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span>
          <span class="hljs-attr">img</span>= <span class="hljs-string">&#39;http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg&#39;</span>
           <span class="hljs-attr">activeImg</span>=<span class="hljs-string">&#39;http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg&#39;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> 
          <span class="hljs-attr">img</span>=<span class="hljs-string">&quot;http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg&quot;</span>
          <span class="hljs-attr">activeImg</span>=<span class="hljs-string">&#39;http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg&#39;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> 
          <span class="hljs-attr">img</span>=<span class="hljs-string">&quot;http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg&quot;</span>
          <span class="hljs-attr">activeImg</span>=<span class="hljs-string">&#39;http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg&#39;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> 
         <span class="hljs-attr">img</span>=<span class="hljs-string">&quot;http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg&quot;</span>
         <span class="hljs-attr">activeImg</span>=<span class="hljs-string">&#39;http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg&#39;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> 
         <span class="hljs-attr">img</span>=<span class="hljs-string">&quot;http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg&quot;</span>
         <span class="hljs-attr">activeImg</span>=<span class="hljs-string">&#39;http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg&#39;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u4E2D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> active = ref(<span class="hljs-number">2</span>)
  <span class="hljs-keyword">return</span> {
    active
  };
},
</code></pre><h3>\u5FBD\u6807\u63D0\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;11&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span> <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;110&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> <span class="hljs-attr">unactive-color</span>=<span class="hljs-string">&quot;#7d7e80&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>\u4E09\u4E2A\u56FE\u6807\u7684\u6807\u7B7E\u680F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> <span class="hljs-attr">unactive-color</span>=<span class="hljs-string">&quot;#7d7e80&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>\u56FA\u5B9A\u5E95\u90E8\uFF0C\u53EF\u81EA\u7531\u8DF3\u8F6C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar</span> <span class="hljs-attr">:bottom</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9996\u9875&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5206\u7C7B&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;category&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u53D1\u73B0&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;find&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span>
    <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://m.jd.com&quot;</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabbar-item</span>
    <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u6211\u7684&quot;</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;######&quot;</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;my&quot;</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabbar</span>&gt;</span>
</code></pre><h3>Prop</h3><h3>nut-tabbar</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u9009\u4E2D\u6807\u7B7E\u7684\u7D22\u5F15\u503C</td><td>number</td><td>0</td></tr><tr><td>bottom</td><td>\u662F\u5426\u56FA\u5B9A\u5728\u9875\u9762\u5E95\u90E8</td><td>Booble</td><td>false</td></tr><tr><td>size</td><td>icon\u7684\u5C3A\u5BF8/\u56FE\u7247\u7684\u5BBD\u9AD8</td><td>string</td><td>\u201820px\u2019</td></tr><tr><td>unactive-color</td><td>icon\u672A\u6FC0\u6D3B\u7684\u989C\u8272</td><td>string</td><td>#7d7e80</td></tr><tr><td>active-color</td><td>icon\u6FC0\u6D3B\u7684\u989C\u8272</td><td>string</td><td>#1989fa</td></tr></tbody></table><h3>tabbar-item</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tab-title</td><td>\u6807\u7B7E\u9875\u7684\u6807\u9898</td><td>String</td><td>\u2013</td></tr><tr><td>icon</td><td>\u6807\u7B7E\u9875\u663E\u793A\u7684<a href="#/icon">\u56FE\u6807\u540D\u79F0</a></td><td>String</td><td>\u2013</td></tr><tr><td>img</td><td>\u6807\u7B7E\u9875\u663E\u793A\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>\u2013</td></tr><tr><td>activeImg</td><td>\u6FC0\u6D3B\u4EE5\u540E\u7684\u6807\u7B7E\u9875\u663E\u793A\u56FE\u7247\u94FE\u63A5\uFF08\u540C\u4E00\u4E2Aitem\u4E2Dicon\u548Cimg\u53EA\u80FD\u9009\u62E9\u4E00\u4E2A\uFF09</td><td>String</td><td>\u2013</td></tr><tr><td>href</td><td>\u6807\u7B7E\u9875\u7684\u8DF3\u8F6C\u94FE\u63A5</td><td>String</td><td>\u2013</td></tr><tr><td>to <code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301</code></td><td>\u6807\u7B7E\u9875\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u4E8E vue-router \u7684 <a href="https://router.vuejs.org/zh/api/#to">to \u5C5E\u6027</a> \u5C5E\u6027</td><td>String\uFF5CObject</td><td>\u2013</td></tr><tr><td>num</td><td>\u9875\u7B7E\u53F3\u4E0A\u89D2\u7684\u6570\u5B57\u89D2\u6807\uFF0C\u8D85\u51FA99\u4E4B\u540E\u4E3A99+</td><td>Number</td><td>\u2013</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>tab-switch</td><td>\u5207\u6362\u9875\u7B7E\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u70B9\u51FB\u7684\u6570\u636E\u548C\u7D22\u5F15\u503C</td></tr></tbody></table>`,30),c=[p],i={setup(h,{expose:s}){return s({frontmatter:{}}),(j,e)=>(t(),a("div",l,c))}};export{i as default};
