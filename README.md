STAN - Shortest Template Engine
----

This template engine is called STAN in a honor of Stan Marsh - "a normal, average, American, mixed-up kid", from South Park :)

![alt tag](http://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png)
( image and a character itself are belong to South Park authors, I don't own it )

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
Render it
```javascript
document.body.innerHTML = STAN.render(_hello_world_template, data);
```


And a main question.. why?
----
> Science isn't about WHY. It's about WHY NOT. Why is so much of our science dangerous? Why not marry safe science if you love it so much. In fact, why not invent a special safety door that won't hit you on the butt on the way out, because you are fired.

(c) Cave Johnson - Portal 2
