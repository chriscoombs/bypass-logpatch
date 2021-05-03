const ignorer = {
  set: () => true,
};
console = new Proxy(console, ignorer);
