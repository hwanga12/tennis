function route(pathname, handle, response, productId) {
    console.log('pathname : ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, productId);
    } else {
        console.log("No request handler found for " + pathname);
        // 기본 동작 추가, 예: 404 Not Found 응답 등
    }
    
}

exports.route = route;