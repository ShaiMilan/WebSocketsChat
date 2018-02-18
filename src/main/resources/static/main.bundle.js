webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_router_config__ = __webpack_require__("../../../../../src/app/app.router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sock_js_service__ = __webpack_require__("../../../../../src/app/services/sock-js.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat-message/chat-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_message_container_chat_message_container_component__ = __webpack_require__("../../../../../src/app/chat-message-container/chat-message-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__chat_message_container_chat_message_container_component__["a" /* ChatMessageContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_router_config__["a" /* appRoutes */])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__services_socket_service__["b" /* SocketService */], useClass: __WEBPACK_IMPORTED_MODULE_9__services_sock_js_service__["a" /* SockJsService */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");

var appRoutes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/chat-message-container/chat-message-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatMessageContainer {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.messageContainer {\r\n  margin-bottom: 15px;\r\n  text-align: right;\r\n}\r\n\r\n.messageContainer.other {\r\n  text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-message-container/chat-message-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatMessageContainer\">\n  <ng-container *ngFor=\"let chatMessage of chatMessages\">\n    <div class=\"messageContainer\" [class.other]=\"chatMessage.senderName !== this.myName\">\n      <app-chat-message [isMe]=\"chatMessage.senderName === this.myName\"\n                        [message]=\"chatMessage.message\"\n                        [date]=\"chatMessage.sentDate\"\n                        [name]=\"chatMessage.senderName\">\n      </app-chat-message>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-message-container/chat-message-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatMessageContainerComponent = /** @class */ (function () {
    function ChatMessageContainerComponent() {
    }
    ChatMessageContainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ChatMessageContainerComponent.prototype, "chatMessages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatMessageContainerComponent.prototype, "myName", void 0);
    ChatMessageContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-message-container',
            template: __webpack_require__("../../../../../src/app/chat-message-container/chat-message-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-message-container/chat-message-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageContainerComponent);
    return ChatMessageContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textBubble {\r\n  text-align: left;\r\n  position: relative;\r\n  font-family: sans-serif;\r\n  color: #edfdff;\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  max-width: 400px;\r\n}\r\n\r\n.sentText {\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#046ffd), to(#1accef));\r\n  background: linear-gradient(#046ffd, #1accef);\r\n  border-radius: 20px 20px 0px 20px;\r\n  -webkit-box-shadow: -6px 7px 20px -9px black;\r\n          box-shadow: -6px 7px 20px -9px black;\r\n}\r\n\r\n.sentText:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 23px;\r\n  height: 29px;\r\n  top: 6px;\r\n  left: 6px;\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: -4px -5px 6px -4px white;\r\n          box-shadow: -4px -5px 6px -4px white;\r\n  background-color: transparent;\r\n}\r\n\r\n.sentText:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 17px;\r\n  height: 17px;\r\n  bottom: -5px;\r\n  right: -17px;\r\n  border-radius: 20% 50% 50% 50%;\r\n  -webkit-box-shadow: -10px 2px 0px 0px #1accef;\r\n          box-shadow: -10px 2px 0px 0px #1accef;\r\n  background-color: transparent;\r\n  z-index: -1;\r\n}\r\n\r\n.recivedText {\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#1a9b45), to(#81efb3));\r\n  background: linear-gradient(#1a9b45, #81efb3);\r\n  border-radius: 20px 20px 20px 0;\r\n  -webkit-box-shadow: 6px 7px 20px -9px black;\r\n          box-shadow: 6px 7px 20px -9px black;\r\n}\r\n\r\n.recivedText:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 23px;\r\n  height: 29px;\r\n  top: 6px;\r\n  right: 6px;\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: 4px -5px 6px -4px white;\r\n          box-shadow: 4px -5px 6px -4px white;\r\n  background-color: transparent;\r\n}\r\n\r\n.recivedText:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 17px;\r\n  height: 17px;\r\n  bottom: -5px;\r\n  left: -17px;\r\n  border-radius: 20% 20% 50% 50%;\r\n  -webkit-box-shadow: 10px 2px 0px 0px #81efb3;\r\n          box-shadow: 10px 2px 0px 0px #81efb3;\r\n  background-color: transparent;\r\n  z-index: -1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"textBubble\" [class.sentText]=\"isMe\" [class.recivedText]=\"!isMe\">\n  <b>{{name}}</b> - <br/>\n  {{message}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        console.log('Init message: ', this.message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ChatMessageComponent.prototype, "isMe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatMessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Date)
    ], ChatMessageComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatMessageComponent.prototype, "name", void 0);
    ChatMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-message',
            template: __webpack_require__("../../../../../src/app/chat-message/chat-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-message/chat-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatPage {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n  height: 500px;\r\n  border: 3px solid black;\r\n  padding: 20px;\r\n  -webkit-box-shadow: -6px 7px 20px -9px black;\r\n          box-shadow: -6px 7px 20px -9px black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Chat home Yes</h1>\n<button (click)=\"connect()\" [disabled]=\"socketIsOpen\">Connect</button>\n<button (click)=\"disconnect()\" [disabled]=\"!socketIsOpen\">Disconnect</button>\n\n<div *ngIf=\"socketIsOpen\">\n  <label>Your name: </label><input type=\"text\" #nameInput (change)=\"name = nameInput.value\">\n  <label>Echo Message: </label><input type=\"text\" #message>\n  <button (click)=\"sendMessage(message.value)\">Send</button>\n  {{name}}\n  <div class=\"chatPage\">\n    <app-chat-message-container [chatMessages]=\"chatMessagesArray\" [myName]=\"name\">\n    </app-chat-message-container>\n  </div>\n</div>\n\n<p #messages></p>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(socketService) {
        this.socketService = socketService;
        this.socketPath = '/gs-guide-websocket';
        this.subscriptionConnectionArray = [];
        this.socketIsOpen = false;
        this.chatMessagesArray = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.connect = function () {
        var _this = this;
        this.messages.nativeElement.innerHTML += "Connecting to url: " + this.socketPath + "<br/>";
        this.socketMessagesSubject = this.socketService.connectToSocket(this.socketPath, ['/topic/greetings']);
        this.subscriptionConnectionArray.push(this.socketMessagesSubject.subscribe(function (sm) {
            switch (sm.queue) {
                case __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* GENERAL_QUEUE_ID */]:
                    _this.socketIsOpen = true;
                    _this.messages.nativeElement.innerHTML += "General: Socket Opened successfully, url: " + _this.socketPath + "<br/>";
                    console.log("Socket Opened successfully, url: ", _this.socketPath);
                    break;
                case '/topic/greetings':
                    _this.messages.nativeElement.innerHTML += "/topic/greetings: Got message back from server: " + sm.body + "<br/>";
                    console.log("/app/hello: Got message back from server: ", sm.body);
                    var message = sm.body.substring(sm.body.indexOf("Message: ") + 9);
                    var senderName = sm.body.substring(sm.body.indexOf("User: ") + 6, sm.body.lastIndexOf("|"));
                    senderName = senderName.trim();
                    _this.chatMessagesArray.push({
                        id: '111',
                        message: message,
                        senderName: senderName,
                        sentDate: new Date()
                    });
                    break;
                default:
                    console.log(sm);
                    _this.messages.nativeElement.innerHTML += "Default: " + sm.body + "<br/>";
                    break;
            }
        }, function (error) {
            _this.socketIsOpen = false;
            _this.messages.nativeElement.innerHTML += "Socket Closed due to the following error: " + error + "<br/>";
            console.error("Socket Closed due to the following error: " + error);
        }, function () {
            _this.socketIsOpen = false;
            _this.messages.nativeElement.innerHTML += "Socket Closed" + "<br/>";
            console.log("Socket Closed");
        }));
    };
    HomeComponent.prototype.disconnect = function () {
        if (this.socketIsOpen) {
            this.socketService.disconnect();
        }
        for (var _i = 0, _a = this.subscriptionConnectionArray; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    HomeComponent.prototype.sendMessage = function (message) {
        this.socketService.sendMessage('/app/hello', {
            name: this.name,
            message: message,
            date: 'Date'
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptionConnectionArray; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this.subscriptionConnectionArray = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('messages'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeComponent.prototype, "messages", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["b" /* SocketService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/sock-js.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SockJsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stompjs__ = __webpack_require__("../../../../stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_stompjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SocketQueue = /** @class */ (function () {
    function SocketQueue() {
    }
    return SocketQueue;
}());
var SockJsService = /** @class */ (function (_super) {
    __extends(SockJsService, _super);
    function SockJsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpen = false;
        _this.subscribedQueues = [];
        return _this;
    }
    SockJsService.prototype.connectToSocket = function (url, queues, user, password, headers) {
        var _this = this;
        if (queues === void 0) { queues = []; }
        if (user === void 0) { user = ''; }
        if (password === void 0) { password = ''; }
        if (headers === void 0) { headers = {}; }
        // Creating a socket with a given URL
        this.socket = new __WEBPACK_IMPORTED_MODULE_3_sockjs_client__(url);
        // Configuring the Stomp protocol to ride over the given socket
        this.stompClient = __WEBPACK_IMPORTED_MODULE_4_stompjs__["over"](this.socket);
        this.stompClient.debug = function (str) {
            // Do nothing so no console messages will be printed
        };
        console.log("Opening Socket to: ", url, "With the following Queues: ", queues, " and the following Headers: ", headers);
        // Connecting to the socket
        this.stompClient.connect(user, password, 
        // When successfully connected
        function (frame) {
            console.log('Connected to: ', url, 'With frame: ', frame);
            _this.isOpen = true;
            _this.onMessage(__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* GENERAL_QUEUE_ID */], { content: true });
            var _loop_1 = function (queue) {
                queue.subscription = _this.stompClient.subscribe(queue.id, function (message) {
                    _this.onMessage(queue.id, JSON.parse(message.body));
                });
            };
            // subscribing to the queues
            for (var _i = 0, _a = _this.subscribedQueues; _i < _a.length; _i++) {
                var queue = _a[_i];
                _loop_1(queue);
            }
        }, function (error) {
            _this.subject.error(error);
        });
        // Disconnecting from old socket if opened
        if (this.subject && !this.subject.closed) {
            if (this.stompClient.connected) {
                this.disconnect();
            }
        }
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
        for (var _i = 0, queues_1 = queues; _i < queues_1.length; _i++) {
            var queueId = queues_1[_i];
            this.subscribedQueues.push({
                id: queueId
            });
        }
        return this.subject;
    };
    SockJsService.prototype.queueExists = function (queueId) {
        return this.subscribedQueues.filter(function (queue) {
            return queue.id === queueId;
        }).length !== 0;
    };
    SockJsService.prototype.onMessage = function (queueId, body) {
        this.subject.next({
            queue: queueId,
            body: body.content
        });
    };
    SockJsService.prototype.sendMessage = function (queueId, body, headers, mustExist) {
        // // Checking if the queue exists
        // if(!this.queueExists(queueId)) {
        //   // Queue not exists, checking if have to be existed or create a new one
        //   if(mustExist) {
        //     console.error('Queue "' + queueId + '" does not exist, message was not sent');
        //     return;
        //   }
        //   this.subscribedToQueue(queueId);
        // }
        if (headers === void 0) { headers = {}; }
        if (mustExist === void 0) { mustExist = false; }
        // Sending the message
        this.stompClient.send(queueId, headers, JSON.stringify(body));
    };
    SockJsService.prototype.subscribedToQueue = function (queueId) {
        var _this = this;
        if (!this.queueExists(queueId)) {
            this.subscribedQueues.push({
                id: queueId,
                subscription: this.stompClient.subscribe(queueId, function (message) {
                    _this.onMessage(queueId, JSON.parse(message.body));
                })
            });
        }
    };
    SockJsService.prototype.disconnect = function () {
        var _this = this;
        // unsubscribing from all queues
        for (var _i = 0, _a = this.subscribedQueues; _i < _a.length; _i++) {
            var queue = _a[_i];
            queue.subscription.unsubscribe();
        }
        this.subscribedQueues = [];
        // Disconnecting
        this.stompClient.disconnect(function () {
            // Compliting the subject observable
            _this.subject.complete();
        });
        this.isOpen = false;
    };
    SockJsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SockJsService);
    return SockJsService;
}(__WEBPACK_IMPORTED_MODULE_1__socket_service__["b" /* SocketService */]));



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export socketMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GENERAL_QUEUE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var socketMessage = /** @class */ (function () {
    function socketMessage() {
    }
    return socketMessage;
}());

var GENERAL_QUEUE_ID = 'ֹֹֹֹ__general';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map