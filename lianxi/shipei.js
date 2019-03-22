onload = function () {
    var scale = 1 / devicePixelRatio;
    var viewport = document.querySelector('meta[name="viewport"]');
    var value = `initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`;
    viewport.setAttribute('content', value);
    var deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
}