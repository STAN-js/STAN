STAN - Shortest Template Engine
----
For 30 lines of source code (no dependencies) you will get:
- First class support of JavaScript inside of templates
- Ability to call any JS function or JS librery
- DOM access while rendering template ( so you can add some crazyness to your templates )
- Data escaping ( can be turned off )
- Template grammar validation
- Tracing ( throu console.log method )
- Debugging ( throu debugger statement )
- Template Partials ( call one template from another and pass any arguments )
- Template Compilation ( for good speed )
- Unlike other 'short' template engines - this one can be used in real project :)

How to use
----
Install via bower
```
bower install STAN
```
Use it
```html
<!DOCTYPE HTML>
<html>
<head>
  <title>Hello STAN</title>
  <!-- add STAN refrence -->
  <script src="bower_components/STAN/stan.js" type="text/javascript"></script>
  <script type="text/javascript">
    //prepare some data
    var data = {
        somevalue: "Hello STAN"
    };

    //write template
    function _hello_world_template() {
        div.context.somevalue.div
    }

    window.onload = function(){
      //compile
      var compiledTemplate = STAN.compile(_hello_world_template);
      //execute
      document.body.innerHTML = STAN.run(compiledTemplate, data);
    }
  </script>
</head>
<body>
</body>
</html>
```

More advanced example
----

```javascript
//noprotect //this line disable jsbin jsfiddle protection

//this is data
var data = {
  keys:[3,0,2,3,null],
  key:"<b>test</b>"
};

//this is template
function _template(){
  for (var i=0; i < context.keys.length; i++) {
    div.b;
      if (context.keys[i] === 0) {
        span.raw('zero').span;
      } else {
        partial(_item, context.keys[i]);
      }
      span.raw(", index: " + i).span;
    div.e;
  }
  with (context){
    div.key.div;
  }
}

//this is also a template but it will be called as a sub template
function _item(){
  span['class="red"'].
     context!==null?context:'null value'
  .span;
}

document.body.innerHTML = STAN.run(STAN.compile(_template), data);
```


BTW
----
This template engine is called STAN in a honor of Stan Marsh - "a normal, average, American, mixed-up kid", from South Park :)

![alt tag](http://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png)
( *image and a character itself are belong to South Park authors, I don't own it* )

And a main question.. why?
----
> Science isn't about WHY. It's about WHY NOT. Why is so much of our science dangerous? Why not marry safe science if you love it so much. In fact, why not invent a special safety door that won't hit you on the butt on the way out, because you are fired.

(c) Cave Johnson - Portal 2
