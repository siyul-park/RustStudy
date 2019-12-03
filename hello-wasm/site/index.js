const js = import('@araxsiyual/hello-wasm');

js.then((js) => {
  js.greet('WebAssembly');
});