"use strict";

var parser = require("@babel/parser");
var traverse = require("@babel/traverse")["default"];
var generate = require("@babel/generator")["default"];

var code = "let a = 5;";

// 코드를 AST로 변환
var ast = parser.parse(code);

// AST를 출력
console.log(JSON.stringify(ast, null, 2));

// AST를 순회
traverse(ast, {
  enter: function enter(path) {
    // 각 노드에 대한 정보를 출력
    console.log("Node:", path.node.type);
  }
});

// AST를 다시 코드로 변환
var output = generate(ast, {}, code);
console.log("Generated code:", output.code);
