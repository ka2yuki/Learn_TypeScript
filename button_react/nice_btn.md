# Reactでいいねボタンを作ろう
## Reactの3大特徴
### 特徴その1: 仮想DOM
DOM(document object model)とは、HTMLをJavaScriptから参照・操作する仕組みです。  
これのおかげで、HTMLを文字列操作ではなく、オブジェクトとして処理できます。  
DOMはHTMLを操作するためのAPIのようなものです。  
少し変更するくらいなら実用的です。

**複雑なUI** を作ろうとすると途端に難しくなります。  
注意深く実装しないと、表示や状態の変更し忘れといったバグを生みやすくなります。  
操作の方法が悪くパフォーマンス面で問題が出たりします。
  
**仮想DOMは** リアルDOMのプロキシのようなもの  
リアルDOMと比べて、状態管理上のバグを起こしにくい設計になっています。  
画面表示を変えたければ、仮想DOMを操作します。  仮想DOMに起こった変更はリアルDOMに伝わり、画面に現れてきます。
  
  
### 特徴その2: 宣言的UI
Reactの2つ目の特徴は <u>***UIを宣言的に書ける点***</u>  
Reactを使わずにUIを実装すると、**命令的なコード** になります。命令的なコードでは、何かを表示したい場合でもどのように表示するかのhowの部分を細かく書く必要があります。  
```js
const list = document.createElement("ul"); // <ul></ul>
const apple = document.createElement("li"); // <li></li>
apple.innerText = "リンゴ"; // <li></li>
list.append(apple);
const orange = document.createElement("li");
orange.innerText = "オレンジ";
list.append(orange);
const grape = document.createElement("li");
grape.innerText = "ぶどう";
list.append(grape);
/** 日本語：
 - ul要素を作り、変数listに代入する
 - li要素を作り、変数appleに代入する
 - appleのテキストは「リンゴ」にする
 - listにappleを追加する
 - li要素を作り、変数orangeに代入する
 - orangeのテキストは「オレンジ」にする
 - listにorangeを追加する
 */
```
宣言的な書き方
```js
function Fruits() {
    return (
        <ul>
            <li>リンゴ</li>
            <li>オレンジ</li>
            <li>ぶどう</li>
        </ul>
    )
}
```  
> どのように表示するかの部分はなく、「このような表示になってほしい」という目標だけが書かれています。  
**宣言的UI** では、実装の細部やアルゴリズムを気にしなくてよい  
  
  
### 特徴その3: コンポーネントベース
> Reactには、小さいコンポーネントを組み合わせ、大きなアプリケーションを成すという思想   
ゼロからコンポーネントを作らなくても、公開されているコンポーネントを利用することもできます。  
カレンダーUIのような自力で作ると面倒なコンポーネントも種類豊富に公開されている
