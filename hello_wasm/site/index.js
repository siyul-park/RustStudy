const js = import('@araxsiyual/hello-wasm');

js.then(({greet}) => {
  greet('WebAssembly');
});