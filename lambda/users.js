(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1)

/**
 * reads api.json and generates a matching javascript object
 * the leaf nodes bind the method name to the passed in exec function
 */
module.exports = function _bind(ns, exec) {

  // walks the generated api.json keys dynamically constructing the client
  Object.keys(api).forEach(key=> {

    // each key is namespaced so we break up into an array to work with 
    // example: api.test --> ['api', 'test']
    var parts = key.split('.')

    // then we get the root part of the namespace
    // example: 'api'
    var root = parts.shift() 
  
    // initialize the root namespace object if it wasn't already
    var init = typeof ns[root] === 'undefined'
    if (init) {
      ns[root] = {} 
    }

    // walks the remaining namespace parts assigning the _exec function at the end
    ;(function _iterator(o) {
      var bit = parts.shift()
      var last = parts.length === 0
      if (last) {
        o[bit] = exec.bind({}, key)
      }
      else {
        var init = typeof o[bit] === 'undefined'
        if (init) {
          o[bit] = {}
        }
        // keep iterating
        _iterator(o[bit])
      }
    })(ns[root])
  })

  return ns
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"api.test":[],"apps.permissions.info":["token"],"apps.permissions.request":["token","scopes","trigger_id"],"auth.revoke":["token"],"auth.test":["token"],"bots.info":["token"],"channels.archive":["token","channel"],"channels.create":["token","name"],"channels.history":["token","channel"],"channels.info":["token","channel"],"channels.invite":["token","channel","user"],"channels.join":["token","name"],"channels.kick":["token","channel","user"],"channels.leave":["token","channel"],"channels.list":["token"],"channels.mark":["token","channel","ts"],"channels.rename":["token","channel","name"],"channels.replies":["token","channel","thread_ts"],"channels.setPurpose":["token","channel","purpose"],"channels.setTopic":["token","channel","topic"],"channels.unarchive":["token","channel"],"chat.delete":["token","channel","ts"],"chat.getPermalink":["token","channel","message_ts"],"chat.meMessage":["token","channel","text"],"chat.postEphemeral":["token","channel","text","user"],"chat.postMessage":["token","channel","text"],"chat.unfurl":["token","channel","ts","unfurls"],"chat.update":["token","channel","text","ts"],"conversations.archive":["token","channel"],"conversations.close":["token","channel"],"conversations.create":["token","name"],"conversations.history":["token","channel"],"conversations.info":["token","channel"],"conversations.invite":["token","channel","users"],"conversations.join":["token","channel"],"conversations.kick":["token","channel","user"],"conversations.leave":["token","channel"],"conversations.list":["token"],"conversations.members":["token","channel"],"conversations.open":["token"],"conversations.rename":["token","channel","name"],"conversations.replies":["token","channel","ts"],"conversations.setPurpose":["token","channel","purpose"],"conversations.setTopic":["token","channel","topic"],"conversations.unarchive":["token","channel"],"dialog.open":["token","dialog","trigger_id"],"dnd.endDnd":["token"],"dnd.endSnooze":["token"],"dnd.info":["token"],"dnd.setSnooze":["token","num_minutes"],"dnd.teamInfo":["token"],"emoji.list":["token"],"files.comments.add":["token","comment","file"],"files.comments.delete":["token","file","id"],"files.comments.edit":["token","comment","file","id"],"files.delete":["token","file"],"files.info":["token","file"],"files.list":["token"],"files.revokePublicURL":["token","file"],"files.sharedPublicURL":["token","file"],"files.upload":["token"],"groups.archive":["token","channel"],"groups.create":["token","name"],"groups.createChild":["token","channel"],"groups.history":["token","channel"],"groups.info":["token","channel"],"groups.invite":["token","channel","user"],"groups.kick":["token","channel","user"],"groups.leave":["token","channel"],"groups.list":["token"],"groups.mark":["token","channel","ts"],"groups.open":["token","channel"],"groups.rename":["token","channel","name"],"groups.replies":["token","channel","thread_ts"],"groups.setPurpose":["token","channel","purpose"],"groups.setTopic":["token","channel","topic"],"groups.unarchive":["token","channel"],"im.close":["token","channel"],"im.history":["token","channel"],"im.list":["token"],"im.mark":["token","channel","ts"],"im.open":["token","user"],"im.replies":["token","channel","thread_ts"],"migration.exchange":["token","users"],"mpim.close":["token","channel"],"mpim.history":["token","channel"],"mpim.list":["token"],"mpim.mark":["token","channel","ts"],"mpim.open":["token","users"],"mpim.replies":["token","channel","thread_ts"],"oauth.access":["client_id","client_secret","code"],"oauth.token":["client_id","client_secret","code"],"pins.add":["token","channel"],"pins.list":["token","channel"],"pins.remove":["token","channel"],"reactions.add":["token","name"],"reactions.get":["token"],"reactions.list":["token"],"reactions.remove":["token","name"],"reminders.add":["token","text","time"],"reminders.complete":["token","reminder"],"reminders.delete":["token","reminder"],"reminders.info":["token","reminder"],"reminders.list":["token"],"rtm.connect":["token"],"rtm.start":["token"],"search.all":["token","query"],"search.files":["token","query"],"search.messages":["token","query"],"stars.add":["token"],"stars.list":["token"],"stars.remove":["token"],"team.accessLogs":["token"],"team.billableInfo":["token"],"team.info":["token"],"team.integrationLogs":["token"],"team.profile.get":["token"],"usergroups.create":["token","name"],"usergroups.disable":["token","usergroup"],"usergroups.enable":["token","usergroup"],"usergroups.list":["token"],"usergroups.update":["token","usergroup"],"usergroups.users.list":["token","usergroup"],"usergroups.users.update":["token","usergroup","users"],"users.deletePhoto":["token"],"users.getPresence":["token","user"],"users.identity":["token"],"users.info":["token","user"],"users.list":["token"],"users.lookupByEmail":["token","email"],"users.setActive":["token"],"users.setPhoto":["token","image"],"users.setPresence":["token","presence"],"users.profile.get":["token"],"users.profile.set":["token"]}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(8)
var validate = __webpack_require__(3)
var promisify = __webpack_require__(4)
var origin = __webpack_require__(5)

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function exec(url, form, callback) {
  if (!callback) {
    var pfy = promisify(_exec)
    return pfy(url, form)
  }
  else {
    _exec(url, form, callback)
  }
}

/**
 * performs the http request to the Slack Web API
 */
function _exec(url, form, callback) {

  var err = validate(url, form)
  if (err) {
    callback(err)
  }
  else {
  
    // api.slack.com/files.upload requires multipart/form-data post
    // which means we need to do a few things differently…
    var isUploading = /files.upload/.test(url)

    // stringify any objects under keys when application/x-www-form-urlencoded
    if (!isUploading) {
      Object.keys(form).forEach(function (key) {
        if (typeof form[key] === 'object') {
          form[key] = JSON.stringify(form[key])
        }
      })
    }

    // always post to slack
    http.post({
      url: `${origin}/api/${url}`,
      headers: {
        'Content-Type': isUploading? 'multipart/form-data' : 'application/x-www-form-urlencoded'
      },
      data: form
    }, 
    function _res(err, res) {
      if (err && err.message === 'POST failed with: 429') {
        // workaround Slacks lack of symmetry not ours…
        var e = Error('ratelimited')
        e.retry = err.raw.headers['retry-after']
        callback(e)
      }
      else if (err) {
        callback(err)
      }
      else if (res.body && res.body.error) {
        var e = Error(res.body.error)
        if (res.body.response_metadata && res.body.response_metadata.messages) {
          e.messages = res.body.response_metadata.messages
        }
        callback(e)
      }
      else {
        callback(null, res.body)
      }
    })
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1)

module.exports = function validate(method, params) {
  // get all the requried params for this method
  let required = api[method]
  // collect any missing params
  let missing = required.filter(param=> typeof params[param] === 'undefined')
  // optimistic: assume the best but have a plan for the worst
  return missing.length? Error(`${method} missing params: ${missing.join(', ')}`) : false
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function _promisify(orig) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      function errback(err, result) {
        if (err) {
          reject(err)
        }
        else {
          resolve(result)
        }
      }
      args.push(errback)
      orig.apply({}, args)
    })
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var origin = 'https://slack.com'

// allow configuring the url if steno is running on a non-standard port/host
if (process.env.STENO_URL) {
  origin = process.env.STENO_URL
}

module.exports = origin


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const slack = __webpack_require__(7);

const { SLACK_API_TOKEN } = process.env;

const getProfilesWith192Image = arrayOfUsers => arrayOfUsers.filter(users => users.profile['image_192'].lastIndexOf('gravatar') === -1).map(user => ({
  username: user.name,
  image: user.profile['image_192']
}));

exports.handler = function (event, context, callback) {
  slack.users.list({ token: SLACK_API_TOKEN }).then(({ members }) => {
    const filteredMembers = getProfilesWith192Image(members);
    callback(null, {
      statusCode: 200,
      body: filteredMembers
    });
  }).catch(error => {
    callback(null, {
      statusCode: 500,
      body: 'Error getting users'
    });
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

let bind = __webpack_require__(0)
let exec = __webpack_require__(2)
let factory = __webpack_require__(9)

/**
 * bind accepts an object, in this case the factory function, and
 * applies exec to the Slack API methods as defined in api.json
 */
module.exports = bind(factory, exec)


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tiny=f()}}(function(){return function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}}()({1:[function(require,module,exports){var http=require("http"),https=require("https"),url=require("url"),qs=require("querystring");module.exports=function(options,callback){if(!options.url)throw Error("options.url required");var promise;callback||(promise=new Promise(function(res,rej){callback=function(err,result){err?rej(err):res(result)}}));var opts=url.parse(options.url);if(options.data){var isSearch=!!opts.search;options.url+=(isSearch?"&":"?")+qs.stringify(options.data),opts=url.parse(options.url)}var method="https:"===opts.protocol?https.get:http.get;return opts.headers=options.headers||{},opts.headers["User-Agent"]=opts.headers["User-Agent"]||"tiny-http",opts.headers["Content-Type"]=opts.headers["Content-Type"]||"application/json",method(opts,function(res){var raw=[];if(!(res.statusCode>=200&&res.statusCode<300))return callback(Error("GET failed with: "+res.statusCode)),void res.resume();res.on("data",function(chunk){raw.push(chunk)}),res.on("end",function(){var err=null,result=null;try{var isJSON=res.headers["content-type"].startsWith("application/json");if(result=Buffer.concat(raw),!options.buffer){var strRes=result.toString();result=strRes&&isJSON?JSON.parse(strRes):strRes}}catch(e){err=e}callback(err,{body:result,headers:res.headers})})}).on("error",callback),promise}},{http:void 0,https:void 0,querystring:void 0,url:void 0}],2:[function(require,module,exports){var qs=require("querystring"),http=require("http"),https=require("https"),FormData=require("@brianleroux/form-data"),url=require("url");module.exports=function(httpMethod,options,callback){if(!options.url)throw Error("options.url required");var promise;callback||(promise=new Promise(function(res,rej){callback=function(err,result){err?rej(err):res(result)}}));var opts=url.parse(options.url),method="https:"===opts.protocol?https.request:http.request;if("DELETE"===httpMethod&&options.data){var isSearch=!!opts.search;options.url+=(isSearch?"&":"?")+qs.stringify(options.data),opts=url.parse(options.url)}opts.method=httpMethod,opts.headers=options.headers||{},opts.headers["User-Agent"]=opts.headers["User-Agent"]||"tiny-http",opts.headers["Content-Type"]=opts.headers["Content-Type"]||"application/json; charset=utf-8";var postData=qs.stringify(options.data||{});function is(headers,type){var isU=headers["Content-Type"]&&headers["Content-Type"].startsWith(type),isL=headers["content-type"]&&headers["content-type"].startsWith(type);return isU||isL}is(opts.headers,"application/json")&&(postData=JSON.stringify(options.data||{})),opts.headers["Content-Length"]=postData.length;var isMultipart=is(opts.headers,"multipart/form-data");isMultipart&&(method=function(params,streamback){var form=new FormData;Object.keys(options.data).forEach(k=>{form.append(k,options.data[k])}),delete opts.headers["Content-Type"],delete opts.headers["content-type"],delete opts.headers["Content-Length"],delete opts.headers["content-length"],form.submit(opts,function(err,res){err?callback(err):streamback(res)})});var req=method(opts,function(res){var raw=[],ok=res.statusCode>=200&&res.statusCode<300;res.on("data",function(chunk){raw.push(chunk)}),res.on("end",function(){var err=null,result=null;try{if(result=Buffer.concat(raw),!options.buffer){var isJSON=is(res.headers,"application/json"),strRes=result.toString();result=strRes&&isJSON?JSON.parse(strRes):strRes}}catch(e){err=e}ok?callback(err,{body:result,headers:res.headers}):((err=Error(httpMethod+" failed with: "+res.statusCode)).raw=res,err.body=result,callback(err))})});return isMultipart||(req.on("error",callback),req.write(postData),req.end()),promise}},{"@brianleroux/form-data":4,http:void 0,https:void 0,querystring:void 0,url:void 0}],3:[function(require,module,exports){var _read=require("./_read"),_write=require("./_write");module.exports={get:_read,post:_write.bind({},"POST"),put:_write.bind({},"PUT"),del:_write.bind({},"DELETE")}},{"./_read":1,"./_write":2}],4:[function(require,module,exports){var CombinedStream=require("combined-stream"),util=require("util"),path=require("path"),http=require("http"),https=require("https"),parseUrl=require("url").parse,fs=require("fs"),mime={lookup:require("tiny-mime-lookup")},asynckit=require("asynckit"),populate=require("./populate.js");function FormData(options){if(!(this instanceof FormData))return new FormData;for(var option in this._overheadLength=0,this._valueLength=0,this._valuesToMeasure=[],CombinedStream.call(this),options=options||{})this[option]=options[option]}module.exports=FormData,util.inherits(FormData,CombinedStream),FormData.LINE_BREAK="\r\n",FormData.DEFAULT_CONTENT_TYPE="application/octet-stream",FormData.prototype.append=function(field,value,options){"string"==typeof(options=options||{})&&(options={filename:options});var append=CombinedStream.prototype.append.bind(this);if("number"==typeof value&&(value=""+value),util.isArray(value))this._error(new Error("Arrays are not supported."));else{var header=this._multiPartHeader(field,value,options),footer=this._multiPartFooter();append(header),append(value),append(footer),this._trackLength(header,value,options)}},FormData.prototype._trackLength=function(header,value,options){var valueLength=0;null!=options.knownLength?valueLength+=+options.knownLength:Buffer.isBuffer(value)?valueLength=value.length:"string"==typeof value&&(valueLength=Buffer.byteLength(value)),this._valueLength+=valueLength,this._overheadLength+=Buffer.byteLength(header)+FormData.LINE_BREAK.length,value&&(value.path||value.readable&&value.hasOwnProperty("httpVersion"))&&(options.knownLength||this._valuesToMeasure.push(value))},FormData.prototype._lengthRetriever=function(value,callback){value.hasOwnProperty("fd")?void 0!=value.end&&value.end!=1/0&&void 0!=value.start?callback(null,value.end+1-(value.start?value.start:0)):fs.stat(value.path,function(err,stat){var fileSize;err?callback(err):(fileSize=stat.size-(value.start?value.start:0),callback(null,fileSize))}):value.hasOwnProperty("httpVersion")?callback(null,+value.headers["content-length"]):value.hasOwnProperty("httpModule")?(value.on("response",function(response){value.pause(),callback(null,+response.headers["content-length"])}),value.resume()):callback("Unknown stream")},FormData.prototype._multiPartHeader=function(field,value,options){if("string"==typeof options.header)return options.header;var header,contentDisposition=this._getContentDisposition(value,options),contentType=this._getContentType(value,options),contents="",headers={"Content-Disposition":["form-data",'name="'+field+'"'].concat(contentDisposition||[]),"Content-Type":[].concat(contentType||[])};for(var prop in"object"==typeof options.header&&populate(headers,options.header),headers)headers.hasOwnProperty(prop)&&null!=(header=headers[prop])&&(Array.isArray(header)||(header=[header]),header.length&&(contents+=prop+": "+header.join("; ")+FormData.LINE_BREAK));return"--"+this.getBoundary()+FormData.LINE_BREAK+contents+FormData.LINE_BREAK},FormData.prototype._getContentDisposition=function(value,options){var filename,contentDisposition;return"string"==typeof options.filepath?filename=path.normalize(options.filepath).replace(/\\/g,"/"):options.filename||value.name||value.path?filename=path.basename(options.filename||value.name||value.path):value.readable&&value.hasOwnProperty("httpVersion")&&(filename=path.basename(value.client._httpMessage.path)),filename&&(contentDisposition='filename="'+filename+'"'),contentDisposition},FormData.prototype._getContentType=function(value,options){var contentType=options.contentType;return!contentType&&value.name&&(contentType=mime.lookup(value.name)),!contentType&&value.path&&(contentType=mime.lookup(value.path)),!contentType&&value.readable&&value.hasOwnProperty("httpVersion")&&(contentType=value.headers["content-type"]),contentType||!options.filepath&&!options.filename||(contentType=mime.lookup(options.filepath||options.filename)),contentType||"object"!=typeof value||(contentType=FormData.DEFAULT_CONTENT_TYPE),contentType},FormData.prototype._multiPartFooter=function(){return function(next){var footer=FormData.LINE_BREAK;0===this._streams.length&&(footer+=this._lastBoundary()),next(footer)}.bind(this)},FormData.prototype._lastBoundary=function(){return"--"+this.getBoundary()+"--"+FormData.LINE_BREAK},FormData.prototype.getHeaders=function(userHeaders){var header,formHeaders={"content-type":"multipart/form-data; boundary="+this.getBoundary()};for(header in userHeaders)userHeaders.hasOwnProperty(header)&&(formHeaders[header.toLowerCase()]=userHeaders[header]);return formHeaders},FormData.prototype.getBoundary=function(){return this._boundary||this._generateBoundary(),this._boundary},FormData.prototype._generateBoundary=function(){for(var boundary="--------------------------",i=0;i<24;i++)boundary+=Math.floor(10*Math.random()).toString(16);this._boundary=boundary},FormData.prototype.getLengthSync=function(){var knownLength=this._overheadLength+this._valueLength;return this._streams.length&&(knownLength+=this._lastBoundary().length),this.hasKnownLength()||this._error(new Error("Cannot calculate proper length in synchronous way.")),knownLength},FormData.prototype.hasKnownLength=function(){var hasKnownLength=!0;return this._valuesToMeasure.length&&(hasKnownLength=!1),hasKnownLength},FormData.prototype.getLength=function(cb){var knownLength=this._overheadLength+this._valueLength;this._streams.length&&(knownLength+=this._lastBoundary().length),this._valuesToMeasure.length?asynckit.parallel(this._valuesToMeasure,this._lengthRetriever,function(err,values){err?cb(err):(values.forEach(function(length){knownLength+=length}),cb(null,knownLength))}):process.nextTick(cb.bind(this,null,knownLength))},FormData.prototype.submit=function(params,cb){var request,options,defaults={method:"post"};return"string"==typeof params?(params=parseUrl(params),options=populate({port:params.port,path:params.pathname,host:params.hostname,protocol:params.protocol},defaults)):(options=populate(params,defaults)).port||(options.port="https:"==options.protocol?443:80),options.headers=this.getHeaders(params.headers),request="https:"==options.protocol?https.request(options):http.request(options),this.getLength(function(err,length){err?this._error(err):(request.setHeader("Content-Length",length),this.pipe(request),cb&&(request.on("error",cb),request.on("response",cb.bind(this,null))))}.bind(this)),request},FormData.prototype._error=function(err){this.error||(this.error=err,this.pause(),this.emit("error",err))},FormData.prototype.toString=function(){return"[object FormData]"}},{"./populate.js":5,asynckit:6,"combined-stream":16,fs:void 0,http:void 0,https:void 0,path:void 0,"tiny-mime-lookup":18,url:void 0,util:void 0}],5:[function(require,module,exports){module.exports=function(dst,src){return Object.keys(src).forEach(function(prop){dst[prop]=dst[prop]||src[prop]}),dst}},{}],6:[function(require,module,exports){module.exports={parallel:require("./parallel.js"),serial:require("./serial.js"),serialOrdered:require("./serialOrdered.js")}},{"./parallel.js":13,"./serial.js":14,"./serialOrdered.js":15}],7:[function(require,module,exports){module.exports=function(state){Object.keys(state.jobs).forEach(function(key){"function"==typeof this.jobs[key]&&this.jobs[key]()}.bind(state)),state.jobs={}}},{}],8:[function(require,module,exports){var defer=require("./defer.js");module.exports=function(callback){var isAsync=!1;return defer(function(){isAsync=!0}),function(err,result){isAsync?callback(err,result):defer(function(){callback(err,result)})}}},{"./defer.js":9}],9:[function(require,module,exports){module.exports=function(fn){var nextTick="function"==typeof setImmediate?setImmediate:"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick:null;nextTick?nextTick(fn):setTimeout(fn,0)}},{}],10:[function(require,module,exports){var async=require("./async.js"),abort=require("./abort.js");module.exports=function(list,iterator,state,callback){var key=state.keyedList?state.keyedList[state.index]:state.index;state.jobs[key]=function(iterator,key,item,callback){var aborter;aborter=2==iterator.length?iterator(item,async(callback)):iterator(item,key,async(callback));return aborter}(iterator,key,list[key],function(error,output){key in state.jobs&&(delete state.jobs[key],error?abort(state):state.results[key]=output,callback(error,state.results))})}},{"./abort.js":7,"./async.js":8}],11:[function(require,module,exports){module.exports=function(list,sortMethod){var isNamedList=!Array.isArray(list),initState={index:0,keyedList:isNamedList||sortMethod?Object.keys(list):null,jobs:{},results:isNamedList?{}:[],size:isNamedList?Object.keys(list).length:list.length};sortMethod&&initState.keyedList.sort(isNamedList?sortMethod:function(a,b){return sortMethod(list[a],list[b])});return initState}},{}],12:[function(require,module,exports){var abort=require("./abort.js"),async=require("./async.js");module.exports=function(callback){if(!Object.keys(this.jobs).length)return;this.index=this.size,abort(this),async(callback)(null,this.results)}},{"./abort.js":7,"./async.js":8}],13:[function(require,module,exports){var iterate=require("./lib/iterate.js"),initState=require("./lib/state.js"),terminator=require("./lib/terminator.js");module.exports=function(list,iterator,callback){var state=initState(list);for(;state.index<(state.keyedList||list).length;)iterate(list,iterator,state,function(error,result){error?callback(error,result):0!==Object.keys(state.jobs).length||callback(null,state.results)}),state.index++;return terminator.bind(state,callback)}},{"./lib/iterate.js":10,"./lib/state.js":11,"./lib/terminator.js":12}],14:[function(require,module,exports){var serialOrdered=require("./serialOrdered.js");module.exports=function(list,iterator,callback){return serialOrdered(list,iterator,null,callback)}},{"./serialOrdered.js":15}],15:[function(require,module,exports){var iterate=require("./lib/iterate.js"),initState=require("./lib/state.js"),terminator=require("./lib/terminator.js");function ascending(a,b){return a<b?-1:a>b?1:0}module.exports=function(list,iterator,sortMethod,callback){var state=initState(list,sortMethod);return iterate(list,iterator,state,function iteratorHandler(error,result){error?callback(error,result):(state.index++,state.index<(state.keyedList||list).length?iterate(list,iterator,state,iteratorHandler):callback(null,state.results))}),terminator.bind(state,callback)},module.exports.ascending=ascending,module.exports.descending=function(a,b){return-1*ascending(a,b)}},{"./lib/iterate.js":10,"./lib/state.js":11,"./lib/terminator.js":12}],16:[function(require,module,exports){var util=require("util"),Stream=require("stream").Stream,DelayedStream=require("delayed-stream");function CombinedStream(){this.writable=!1,this.readable=!0,this.dataSize=0,this.maxDataSize=2097152,this.pauseStreams=!0,this._released=!1,this._streams=[],this._currentStream=null}module.exports=CombinedStream,util.inherits(CombinedStream,Stream),CombinedStream.create=function(options){var combinedStream=new this;for(var option in options=options||{})combinedStream[option]=options[option];return combinedStream},CombinedStream.isStreamLike=function(stream){return"function"!=typeof stream&&"string"!=typeof stream&&"boolean"!=typeof stream&&"number"!=typeof stream&&!Buffer.isBuffer(stream)},CombinedStream.prototype.append=function(stream){if(CombinedStream.isStreamLike(stream)){if(!(stream instanceof DelayedStream)){var newStream=DelayedStream.create(stream,{maxDataSize:1/0,pauseStream:this.pauseStreams});stream.on("data",this._checkDataSize.bind(this)),stream=newStream}this._handleErrors(stream),this.pauseStreams&&stream.pause()}return this._streams.push(stream),this},CombinedStream.prototype.pipe=function(dest,options){return Stream.prototype.pipe.call(this,dest,options),this.resume(),dest},CombinedStream.prototype._getNext=function(){this._currentStream=null;var stream=this._streams.shift();void 0!==stream?"function"==typeof stream?stream(function(stream){CombinedStream.isStreamLike(stream)&&(stream.on("data",this._checkDataSize.bind(this)),this._handleErrors(stream)),this._pipeNext(stream)}.bind(this)):this._pipeNext(stream):this.end()},CombinedStream.prototype._pipeNext=function(stream){if(this._currentStream=stream,CombinedStream.isStreamLike(stream))return stream.on("end",this._getNext.bind(this)),void stream.pipe(this,{end:!1});var value=stream;this.write(value),this._getNext()},CombinedStream.prototype._handleErrors=function(stream){var self=this;stream.on("error",function(err){self._emitError(err)})},CombinedStream.prototype.write=function(data){this.emit("data",data)},CombinedStream.prototype.pause=function(){this.pauseStreams&&(this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.pause&&this._currentStream.pause(),this.emit("pause"))},CombinedStream.prototype.resume=function(){this._released||(this._released=!0,this.writable=!0,this._getNext()),this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.resume&&this._currentStream.resume(),this.emit("resume")},CombinedStream.prototype.end=function(){this._reset(),this.emit("end")},CombinedStream.prototype.destroy=function(){this._reset(),this.emit("close")},CombinedStream.prototype._reset=function(){this.writable=!1,this._streams=[],this._currentStream=null},CombinedStream.prototype._checkDataSize=function(){if(this._updateDataSize(),!(this.dataSize<=this.maxDataSize)){var message="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this._emitError(new Error(message))}},CombinedStream.prototype._updateDataSize=function(){this.dataSize=0;var self=this;this._streams.forEach(function(stream){stream.dataSize&&(self.dataSize+=stream.dataSize)}),this._currentStream&&this._currentStream.dataSize&&(this.dataSize+=this._currentStream.dataSize)},CombinedStream.prototype._emitError=function(err){this._reset(),this.emit("error",err)}},{"delayed-stream":17,stream:void 0,util:void 0}],17:[function(require,module,exports){var Stream=require("stream").Stream,util=require("util");function DelayedStream(){this.source=null,this.dataSize=0,this.maxDataSize=1048576,this.pauseStream=!0,this._maxDataSizeExceeded=!1,this._released=!1,this._bufferedEvents=[]}module.exports=DelayedStream,util.inherits(DelayedStream,Stream),DelayedStream.create=function(source,options){var delayedStream=new this;for(var option in options=options||{})delayedStream[option]=options[option];delayedStream.source=source;var realEmit=source.emit;return source.emit=function(){return delayedStream._handleEmit(arguments),realEmit.apply(source,arguments)},source.on("error",function(){}),delayedStream.pauseStream&&source.pause(),delayedStream},Object.defineProperty(DelayedStream.prototype,"readable",{configurable:!0,enumerable:!0,get:function(){return this.source.readable}}),DelayedStream.prototype.setEncoding=function(){return this.source.setEncoding.apply(this.source,arguments)},DelayedStream.prototype.resume=function(){this._released||this.release(),this.source.resume()},DelayedStream.prototype.pause=function(){this.source.pause()},DelayedStream.prototype.release=function(){this._released=!0,this._bufferedEvents.forEach(function(args){this.emit.apply(this,args)}.bind(this)),this._bufferedEvents=[]},DelayedStream.prototype.pipe=function(){var r=Stream.prototype.pipe.apply(this,arguments);return this.resume(),r},DelayedStream.prototype._handleEmit=function(args){this._released?this.emit.apply(this,args):("data"===args[0]&&(this.dataSize+=args[1].length,this._checkIfMaxDataSizeExceeded()),this._bufferedEvents.push(args))},DelayedStream.prototype._checkIfMaxDataSizeExceeded=function(){if(!(this._maxDataSizeExceeded||this.dataSize<=this.maxDataSize)){this._maxDataSizeExceeded=!0;var message="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this.emit("error",new Error(message))}}},{stream:void 0,util:void 0}],18:[function(require,module,exports){var types=require("./types"),extname=require("path").extname,db={};Object.keys(types).forEach(mime=>{types[mime].forEach(extn=>{db[extn]=mime})}),module.exports=function(path){if(!path||"string"!=typeof path)return!1;var extension=extname("x."+path).toLowerCase().substr(1);return extension&&db[extension]||!1}},{"./types":19,path:void 0}],19:[function(require,module,exports){module.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/font-woff":["woff"],"application/font-woff2":["*woff2"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["*woff"],"font/woff2":["woff2"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/g3fax":["g3"],"image/gif":["gif"],"image/ief":["ief"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/tiff":["tiff","tif"],"image/webp":["webp"],"message/rfc822":["eml","mime"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["x3db","x3dbz"],"model/x3d+vrml":["x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}},{}]},{},[3])(3)});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(0)
var exec = __webpack_require__(2)
var electronExec = __webpack_require__(10)

/** 
 * factory returns a new instance of Slack
 * 
 * things to understand:
 *
 * - this function is the root object exported 
 * - can be a constuctor for creating oo style instances of Slack 
 * - requires named params to allow for future flexability in the function sig
 * - all methods have token pre applied
 * - all methods either accept a callback or return a promise
 */
module.exports = function factory(xxx) {
  
  // allow for empty params
  if (!xxx) xxx = {}

  // override exec to use electron.net via explicit opt-in
  if (xxx.useElectronNet) {
    exec = electronExec(xxx)
  }

  // Slack instance applies the token param to all the api methods
  class Slack {
    constructor() {
      function _execWithToken(method, params={}, callback) {
        params.token = params && params.token || xxx.token
        return exec(method, params, callback)
      }
      // bind applies the above method to this obj
      // bind also returns all methods promisified
      bind(this, _execWithToken)
    }
  }

  return new Slack
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var qs = __webpack_require__(11)
var url = __webpack_require__(12)
var validate = __webpack_require__(3)
var promisify = __webpack_require__(4)
var origin = __webpack_require__(5)

/**
 * returns a promise if callback isn't defined; _exec is the actual impl
 */
module.exports = function electronFactory(options) {
  var exec = _execFactory(options)
  return function _execElectron(url, form, callback) {
    if (!callback) {
      var pfy = promisify(exec)
      return pfy(url, form)
    }
    else {
      exec(url, form, callback)
    }
  }
}

/**
 * performs the http request to the Slack Web API
 */
function _execFactory(options) {
  // returns an exec function with options.username and options.password passed in
  return function __exec(url, form, callback) {
    var err = validate(url, form)
    if (err) {
      callback(err)
    }
    else {
      // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
      Object.keys(form).forEach(function (key) {
        if (typeof form[key] === 'object') {
          form[key] = JSON.stringify(form[key])
        }
      })
      // setup post params
      var params = {
        url: `${origin}/api/${url}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: form
      }
      // add optionals
      if (options) {
        params = Object.assign({}, params, options) 
      }
      _post(params, function _res(err, res) {
        if (err) {
          callback(err)
        }
        else if (res.statusCode === 429) {
          var e = Error('ratelimited')
          e.retry = res.headers['retry-after']
          callback(e)
        }
        else if (res.body && res.body.error) {
          var e = Error(res.body.error)
          if (res.body.response_metadata && res.body.response_metadata.messages) {
            e.messages = res.body.response_metadata.messages
          }
          callback(e)
        }
        else {
          callback(null, res.body)
        }
      })
    }
  }
}

/**
 * this method uses electron.net or electron.remote.net
 * it also does not fire the 'end' if it is registered after 'data' 
 */
function _post(options, callback) {
  // parse out the options from options.url
  var opts = url.parse(options.url)
  opts.method = 'POST'
  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = 'tiny-http'

  var req = options.useElectronNet.request(opts) 
  var raw = []

  req.on('response', function _req(response) {
    // these are order dependent??
    response.on('abort', callback)
    response.on('error', callback)
    response.on('login', function _login(auth, login) {
      // if the dev passes in a login function delegate to that
      if (options.login) {
        options.login(auth, login)
      }
      else {
        // otherwise fallback to ctor params if they exist
        // if these are undefined abort gets called
        login(options.username, options.password)
      }
    })
    response.on('end', function _end() {
      var body = JSON.parse(raw.join(''))
      callback(null, {body})
    })
    response.on('data', chunk=> raw.push(chunk))
  })
  req.write(qs.stringify(options.data))
  req.end()
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ])));