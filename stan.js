var STAN_regexp = [ /function\s+([\d\w_]+)\s*\(\s*\)\s*{([\S\s]+)}/, /(\w+)(?:\[(['"]?[^\]]*?['"]?)\])?\.(e|b)\s*[\n;}]/g, /(\w+)(?:\[(['"]?[^\]]*?['"]?)\])?\.(.+)\.(\w+)\s*[\n;}]/g, /([\n;{]\s*)(\w+)(\s*[\n;}])/g, /partial\([_\w\d\.]+/g ];
var STAN = {
    compile: function(_template_) {
        var ms, result = _template_.toString()
            .replace( STAN_regexp[0], 'function compiled_$1(context,r){\n\tr=r||"";\n$2\n\treturn r\n}')
            .replace( STAN_regexp[1], function(m,t,x,e){ 
                return "r+='<" + (e=="b"?"":"/") + t + " '+(" + (x||'""') + ")+'>';" })
            .replace( STAN_regexp[2], function(m,s,x,b,e){
                if(s==e) {return "r+='<" + s + " '+(" + (x||'""') + ")+'>'+(" + b + ")+'</" + e + ">';"} else return m })
            .replace( STAN_regexp[3], "$1r+='<$2/>'$3;")
        while (ms = result.match(STAN_regexp[4])) {
            for (var i=0; i< ms.length; i++) {
                var tn = ms[i].replace('partial(','')
                result = result.replace(tn, '(' + STAN.compile(eval(tn)) + ')')
            }
        }
        return result
    },
    run: function(result, context, escape) {
        var r = "", raw = function(t){r+=t;return t}
        if (escape !== false) { 
            context = JSON.parse(JSON.stringify(context)
                .replace(/</g,'&lt;').replace(/&/g,'&amp;').replace(/>/g,'&gt;'))
        }
        function partial(fn, ctx) {
            var oldCtx = context; context = ctx; fn(ctx, ''); context = oldCtx
        }
        return eval('(' + result.replace(/context,r/g,'') + ')()'),r
    }
}
try { exports.STAN = STAN; } catch (e){}