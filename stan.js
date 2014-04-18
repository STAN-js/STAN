STAN = {
	render: function(_template_, context, logger, escape){
	  var result, _r = "",
	      div = span = {},
	      raw = function(t){return t;}
	  escape == null && (escape = true);
	  function partial(tmp, ctx) { return render(tmp, ctx, logger, false); }
	  escape && (context = JSON.parse(JSON.stringify(context)
	        .replace(/</g,'&lt;')
	        .replace(/>/g,'&gt;')));
	  result = _template_.toString()
	        .replace(/function (\w+)\(\){/,'(function $1(){')
	        .replace(/\}$/, '})()')
	        .replace('partial(', '_r+=partial(')
	        .replace(/(div|span)\.b/g, '_r+="<$1>";')
	        .replace(/(div|span)\.e/g, '_r+="</$1>";')
	        .replace(/(div|span)(?:\['([^.']+)'\])?\./g,"_r+='<$1 $2>'+(")
	        .replace(/\.(div|span)/g,')+"</$1>"')
	        ;
	  logger&&logger(result); eval(result);
	  return _r;
	}
}