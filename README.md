STAN - Shortest Template Engine
----
For 30 lines of source code you will get:
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
Add script
```html
<script type="text/javascript" src="stan.js"></script>
```
Prepare data
```javascript
var data = {
    somevalue: "Hello World"
};
```
Write template right inside js file
```javascript
function _hello_world_template() {
    div.context.somevalue.div
}
```
Compile template
```javascript
var compiledTemplate = STAN.compile(_hello_world_template);
```
Pass data and run it
```javascript
document.body.innerHTML = STAN.run(compiledTemplate, data);
```

More advanced example
----

```javascript
//this is data
var context = {
  keys:[0,1,2,3,null],
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

document.body.innerHTML = STAN.run(STAN.compile(_hello_world_template), data);
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
