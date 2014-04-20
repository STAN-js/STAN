STAN = {
	compile: function(_template_) {
		var ms, result = _template_.toString()
        	.replace(/function (\w+)\(\){/,'(function $1(){')
        	.replace(/\}$/, '})()')
        	.replace(/(div|span)\.b/g, 'r+="<$1>";')
        	.replace(/(div|span)\.e/g, 'r+="</$1>";')
        	.replace(/(div|span)(?:\['([^.']+)'\])?\./g,"r+='<$1 $2>'+(")
        	.replace(/\.(div|span)/g,')+"</$1>"')
  		while (ms = result.match(/partial\([_\w\d\.]+/g)) {
     		for (var i=0; i< ms.length; i++) {
       			var tn = ms[i].replace('partial(','');
       			result = result.replace(tn, compile(eval(tn), context).replace('})()','})'));
     		}
  		}
  		return result;
	},
	run: function(result, context, escape) {
		var r = "", raw = function(t){return t;}
  		if (escape == null || escape == true) { 
    		context = JSON.parse(JSON.stringify(context)
        		.replace(/</g,'&lt;')
        		.replace(/>/g,'&gt;'))};
  		function partial(fn, ctx) {
      		var oldCtx = context; 
      		context = ctx; fn(); context = oldCtx;
 		}
  		return eval(result), r;
	}
}