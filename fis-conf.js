
fis.set('project.ignore', ['node_modules/**','components/**', 'widget/**', 'output/**','less/**', '.git/**','vendor/**', 'fis-conf.js']); // set 为覆盖不是叠加

//fis.match('*', {
//    release: '/static/$0'
//});

fis.match('/map.json', {
    release: '/config/$0'
});

//fis.match('/page/*.{tpl,html}', {
//    release: '/template/$0'
//});

fis.match('/widget/**/img/*.{jpg,jpeg,png}', {
    release: '/static/img/$0'
});

fis.match('/widget/**/*.{js,css}', {
    isMod: true
});

fis.match('/widget/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'amd'
    })
});


fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        //allInOne: true
    })
});

//fis.match('/static/less/*.{css,less}', {
//    packTo: '/static/css/main.css'
//});
//
//fis.match('/widget/**/*.{css,less}', {
//    packTo: '/static/css/widget.css'
//});
//
//fis.match('/static/js/*.js', {
//    packTo: '/static/js/app.js'
//});


/*******************         文件指纹    ******************************/
fis.media('prod').match('*.{js,css,png,gif}', {
    useHash: true // 开启 md5 戳
});

fis.media('prod').match('*.html', {
    useMap: true
});

// 启用 fis-spriter-csssprites 插件
fis.media('prod').match('::package', {
    spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.media('prod').match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});


/*******************         压缩资源    ******************************/
// 多种状态 发布环境开启资源压缩
fis.media('prod').match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

// 压缩 index.tpl 内联的 js
fis.media('prod').match('index.tpl:js', {
    optimizer: fis.plugin('uglify-js')
});


fis.media('prod').match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.media('prod').match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});


// 调试环境
fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
    useSprite: false,
    optimizer: null
});


/*******************         内置语法    ******************************/
// FIS 中前端模板推荐预编译为 js，所以应该使用 js 的内置语法
fis.match('*.tmpl,*.tpl', {
    isJsLike: true
});

fis.match('*.{sass,less}', {
    isCssLike: true
});

fis.match('*.xxhtml', {
    isHtmlLike: true
});

/*******************         预处理    ******************************/
fis.match('::package', {
    //postpackager: fis.plugin('loader', {
    //    allInOne: true //只包含本页面用到的
    //})
});

//fis.match('*.less', {
//    // fis-parser-less 插件进行解析
//    parser: fis.plugin('less'),
//    // .less 文件后缀构建后被改成 .css 文件
//    rExt: '.css'
//});



/**************************** 数据Mock *************************************/
fis.match('/test/**', {
    release: '$0'
});

fis.match('/test/server.conf', {
    release: '/config/server.conf'
});


/*******************         远端推送    ******************************/

// release 目录设置
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: '../output/newgelei/'
    })
});


//fis3 release qa push 到 QA 的远端机器上

fis.media('qa').match('/static/files/*',{
    release:false
});

//fis.media('qa').match('*', {
//    deploy: fis.plugin('http-push', {
//        receiver: '',
//        to: ''
//    })
//});

fis.media('qa').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: '/receiver.php',
        to: '/'
    })
});