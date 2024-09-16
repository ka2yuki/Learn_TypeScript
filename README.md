# Table of Contents
- JavaScriptで発生しうる問題
  - インクリメントして返すだけのもの
  - 999からstring型の"999"に書き換え
- JavaScriptをTypeScriptに変換する

# contents
## [JavaScriptで発生しうる問題](https://typescriptbook.jp/tutorials/make-a-simple-function-via-cli#javascript%E3%81%A7%E7%99%BA%E7%94%9F%E3%81%97%E3%81%86%E3%82%8B%E5%95%8F%E9%A1%8C)


### インクリメントして返すだけのもの
```js
function increment(num) {
  return num + 1;
}

console.log(increment(999));
```
```js
$ node increment.js
1000
```


### 999からstring型の"999"に書き換え
```js
function increment(num) {
  return num + 1;
}

console.log(increment("999"));
//                    ^^^^^
``` 
```bash
$ node increment.js
9991
```
> 足し算ではなく文字列結合になったからです。JavaScriptは"999" + 1を"999" + "1"と解釈します。...  
> もしもこれが金額の計算だったら大問題です。

感想：文字と数字は見た目では判断できない。


### JavaScriptをTypeScriptに変換する
```bash
mv increment.js increment.ts
```
> TypeScriptはざっくり言って、JavaScriptに型関連の構文を追加したにすぎない言語です。なので、JavaScriptのコードはそのままでもTypeScriptとして扱えます。


### コンパイラを働かせる
```ts
function increment(num: number) {
//                 ^^^^^^^^型注釈
  return num + 1;
}
 
console.log(increment("999"));
```
```bash
> tsc increment.ts
6 console.log(increment("999"));
                        ~~~~~
Found 1 error in increment.ts:6
```
潜んでいる危険を、コーディング時点で知らせてくれる


### コンパイルを通す
```ts
function increment(num: number) {
  return num + 1;
}
 
console.log(increment(999));
//                    ^^^直す箇所
```
```bash
tsc increment.ts
```
> 今度は何も表示されずに処理が終わる




