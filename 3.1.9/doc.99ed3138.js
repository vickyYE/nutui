import{e as a,o as t,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>Swiper \u8F6E\u64AD</h1><h3>\u4ECB\u7ECD</h3><p>\u5E38\u7528\u4E8E\u4E00\u7EC4\u56FE\u7247\u6216\u5361\u7247\u8F6E\u64AD\uFF0C\u5F53\u5185\u5BB9\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u53EF\u4EE5\u7528\u8D70\u9A6C\u706F\u7684\u5F62\u5F0F\u8FDB\u884C\u6536\u7EB3\uFF0C\u8FDB\u884C\u8F6E\u64AD\u5C55\u73B0\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Swiper,SwiperItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Swiper);
app.use(SwiperItem);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p><code>auto-play</code> \u81EA\u52A8\u8F6E\u64AD\u7684\u65F6\u957F <code>init-page</code> \u521D\u59CB\u7D22\u5F15\u503C <code>pagination-visible</code> \u662F\u5426\u663E\u793A\u5206\u9875\u6307\u793A\u5668 <code>pagination-color</code> \u6307\u793A\u5668\u989C\u8272\u81EA\u5B9A\u4E49</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span> <span class="hljs-attr">:init-page</span>=<span class="hljs-string">&quot;state.page&quot;</span> <span class="hljs-attr">:pagination-visible</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">pagination-color</span>=<span class="hljs-string">&quot;#426543&quot;</span> <span class="hljs-attr">auto-play</span>=<span class="hljs-string">&quot;3000&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg&#39;&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/welcomenutui.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/fristfabu.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5927\u5C0F</h3><p><code>width</code> \u81EA\u5B9A\u4E49\u8F6E\u64AD\u5927\u5C0F</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span> <span class="hljs-attr">:init-page</span>=<span class="hljs-string">&quot;state.page2&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg&#39;&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/welcomenutui.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/fristfabu.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5206\u9875\u6307\u793A\u5668</h3><p><code>v-slot:page</code> \u8868\u793A\u81EA\u5B9A\u4E49\u6307\u793A\u5668</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span> <span class="hljs-attr">:init-page</span>=<span class="hljs-string">&quot;state.page3&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg&#39;&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/welcomenutui.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/fristfabu.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:page</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;page&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span>
</code></pre><h3>\u5782\u76F4\u65B9\u5411</h3><p><code>direction</code> \u81EA\u5B9A\u4E49\u8F6E\u64AD\u65B9\u5411</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper</span> <span class="hljs-attr">:init-page</span>=<span class="hljs-string">&quot;state.page4&quot;</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">auto-play</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;150&quot;</span> <span class="hljs-attr">:pagination-visible</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg&#39;&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/welcomenutui.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-swiper-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://storage.360buyimg.com/jdc-article/fristfabu.jpg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swiper</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u8F6E\u64AD\u5361\u7247\u7684\u5BBD\u5EA6</td><td>Number\u3001String</td><td>window.innerWidth</td></tr><tr><td>height</td><td>\u8F6E\u64AD\u5361\u7247\u7684\u9AD8\u5EA6</td><td>String\u3001Number</td><td>0</td></tr><tr><td>direction</td><td>\u8F6E\u64AD\u65B9\u5411,\u53EF\u9009\u503C<code>horizontal</code>,<code>vertical</code></td><td>String</td><td>\u2018horizontal\u2019</td></tr><tr><td>pagination-visible</td><td>\u5206\u9875\u6307\u793A\u5668\u662F\u5426\u5C55\u793A</td><td>Boolean</td><td>false</td></tr><tr><td>pagination-color</td><td>\u5206\u9875\u6307\u793A\u5668\u9009\u4E2D\u7684\u989C\u8272</td><td>String</td><td>\u2018#fff\u2019</td></tr><tr><td>loop</td><td>\u662F\u5426\u5FAA\u73AF\u8F6E\u64AD</td><td>Boolean</td><td>true</td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF08\u5355\u4F4D\u662Fms\uFF09</td><td>Number\u3001String</td><td>500</td></tr><tr><td>auto-play</td><td>\u81EA\u52A8\u8F6E\u64AD\u65F6\u957F\uFF0C0\u8868\u793A\u4E0D\u4F1A\u81EA\u52A8\u8F6E\u64AD</td><td>Number\u3001String</td><td>0</td></tr><tr><td>init-page</td><td>\u521D\u59CB\u5316\u7D22\u5F15\u503C</td><td>Number\u3001String</td><td>0</td></tr><tr><td>touchable</td><td>\u662F\u5426\u53EF\u89E6\u6478\u6ED1\u52A8</td><td>Boolean</td><td>true</td></tr><tr><td>is-preventDefault</td><td>\u6ED1\u52A8\u8FC7\u7A0B\u4E2D\u662F\u5426\u7981\u7528\u9ED8\u8BA4\u4E8B\u4EF6</td><td>Boolean</td><td>true</td></tr><tr><td>is-stopPropagation</td><td>\u6ED1\u52A8\u8FC7\u7A0B\u4E2D\u662F\u5426\u7981\u6B62\u5192\u6CE1</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6ED1\u52A8\u4E4B\u540E\u7684\u56DE\u8C03</td><td>\u5F53\u524D\u7D22\u5F15\u503Cindex</td></tr></tbody></table><h3>API</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>prev</td><td>\u5207\u6362\u5230\u4E0A\u4E00\u9875</td><td>-</td></tr><tr><td>next</td><td>\u5207\u6362\u5230\u4E0B\u4E00\u9875</td><td>-</td></tr><tr><td>to</td><td>\u5207\u6362\u5230\u6307\u5B9A\u8F6E\u64AD</td><td>index:number</td></tr></tbody></table>`,25),c=[p],j={setup(e,{expose:s}){return s({frontmatter:{}}),(h,g)=>(t(),a("div",l,c))}};export{j as default};
