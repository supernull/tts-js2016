function foo() {
  var bar;
  quux = 'y';
  function zip() {
    var quux = 'x';
    bar = true;
  };
  return zip;
}
