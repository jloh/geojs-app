// Functions
function getResults(ip) {
    clearResults();
    updateResultsIp(ip);
    getNew(ip).then(userShrug);
};

function submitForm(ip) {
    var ipInput = document.getElementById('lookup');
    if (validateIP(ip) === false) {
        ipInput.classList.add('is-invalid');
    } else {
        ipInput.classList.remove('is-invalid');
        ipInput.classList.add('was-validated');
        getResults(ip);
        changeUrl(ip, '/s/' + ip);
    }
};

function clearResults() {
    $('[geo-id]').text('Searching...');
    $('[geo-id]').attr('geo-id', 'blank');
};

function userShrug() {
    $('[geo-id="blank"]').text('¯\\_(ツ)_/¯ - No data found');
};

function updateResultsIp(ip) {
    $('#results_ip').text('for ' + ip)
};

function printResult(k, v) {
    $('#geojs_' + k).text(v);
    $('#geojs_' + k).attr('geo-id', 'found');
};

function getNew(refresh) {
    var reverse = $.getJSON("https://get.geojs.io/v1/dns/ptr/" + refresh + ".js?callback=?").then(function(ptr) {
        _.forOwn(ptr, function(geoValue, geoKey) {
            printResult(geoKey, geoValue)
        });
    });
    var geo = $.getJSON("https://get.geojs.io/v1/ip/geo/" + refresh + ".js?callback=?").then(function(geo) {
        _.forOwn(geo, function(geoValue, geoKey) {
            printResult(geoKey, geoValue)
        });
    });
    return $.when(reverse, geo)
};

function changeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        console.log("Browser does not support HTML5 - not changing URL");
    }
};

function loadIp() {
    var reverse = $.getJSON("https://get.geojs.io/v1/dns/ptr.js?callback=?").then(function(ptr) {
        _.forOwn(ptr, function(geoValue, geoKey) {
            printResult(geoKey, geoValue)
        });
    });
    var geo = $.getJSON("https://get.geojs.io/v1/ip/geo.js?callback=?").then(function(geo) {
        updateResultsIp(geo.ip)
        _.forOwn(geo, function(geoValue, geoKey) {
            printResult(geoKey, geoValue)
        });
    });
    return $.when(reverse, geo);
};

function runApp() {
    if (document.location.pathname.indexOf("/s/") == 0) {
        var ip = document.location.pathname.match('/s/(.*)')[1]
        if (validateIP(ip) === false) {
            changeUrl('geojs-home', '/')
            clearResults();
            loadIp().then(userShrug);
        } else {
            getResults(ip);
        }
    } else {
        clearResults();
        loadIp().then(userShrug);
    }
};

// Main app
$("#ip-lookup").submit(function(event) {
    // cancels the form submission
    event.preventDefault();
    var ip = $("#lookup").val();
    submitForm(ip);
});

$(document).ready(function() {
    var $extend = $("#user_ip");
    $.getJSON('https://get.geojs.io/v1/ip.js?callback=?',
        function(json) {
            $extend.append(' ' + json.ip);
        }
    )
    runApp();
});

addEventListener("popstate", function (event) {
    runApp();
});
