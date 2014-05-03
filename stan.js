STAN = {
    compile: function(_template_) {
        var ms, result = _template_.toString()
            .replace(/function\s+([\d\w_]+)\s*\(\s*\)\s*{([\S\s]+)}/,'(function $1(){$2})')
            .replace(/(\w+)(?:\[['"]([^\]]*)['"]\])?\.(e|b)\s*[\n;}]/g, function(m,t,x,e){ return "r+='<" + (e=="b"?"":"/") + t + " " + (x||'') + ">';" })
            .replace(/(\w+)(?:\[['"]([^\]]*)['"]\])?\.(.+)\.(\w+)\s*[\n;}]/g, function(m,s,x,b,e){
                if(s==e) {return "r+='<" + s + " " + (x||'') + ">'+(" + b + ")+'</" + e + ">';"} else return m })
            .replace(/([\n;{]\s*)(\w+)(\s*[\n;}])/g, "$1r+='<$2/>'$3;")
        while (ms = result.match(/partial\([_\w\d\.]+/g)) {
            for (var i=0; i< ms.length; i++) {
                var tn = ms[i].replace('partial(','')
                result = result.replace(tn, STAN.compile(eval(tn)))
            }
        }
        return result + '()'
    },
    run: function(result, context, escape) {
        var r = "", raw = function(t){return t}
        if (escape !== false) { 
            var div = document.createElement('div')
            div.appendChild(document.createTextNode(JSON.stringify(context)))
            context = JSON.parse(div.innerHTML)
        }
        function partial(fn, ctx) {
            var oldCtx = context
            context = ctx; fn(); context = oldCtx
        }
        return eval(result), r
    }
}