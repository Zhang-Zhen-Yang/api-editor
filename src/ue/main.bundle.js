webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#root{\r\n\tposition:fixed;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n\tmargin:0;\r\n\tbackground-color:yellowgreen;\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"root\" style=\"text-align:center\">\n  <!--<webview id=\"webview\" style=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\" src=\"src/vs/index.html\">\n  </webview>-->\n  <app-layout></app-layout>  \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_bottom_bar_bottom_bar_component__ = __webpack_require__("../../../../../src/app/component/bottom-bar/bottom-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_code_space_code_space_component__ = __webpack_require__("../../../../../src/app/component/code-space/code-space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_left_bar_left_bar_component__ = __webpack_require__("../../../../../src/app/component/left-bar/left-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_layout_layout_component__ = __webpack_require__("../../../../../src/app/component/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_resize_layout_resize_layout_component__ = __webpack_require__("../../../../../src/app/component/resize-layout/resize-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_resize_layout_host_directive__ = __webpack_require__("../../../../../src/app/component/resize-layout/host.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_test_test_component__ = __webpack_require__("../../../../../src/app/component/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_display_space_display_space_component__ = __webpack_require__("../../../../../src/app/component/display-space/display-space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_resize_layout_display_wiew_host_directive__ = __webpack_require__("../../../../../src/app/component/resize-layout/display-wiew-host.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__component_bottom_bar_bottom_bar_component__["a" /* BottomBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_code_space_code_space_component__["a" /* CodeSpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_left_bar_left_bar_component__["a" /* LeftBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_resize_layout_resize_layout_component__["a" /* ResizeLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_resize_layout_host_directive__["a" /* HostDirective */],
            __WEBPACK_IMPORTED_MODULE_10__component_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_display_space_display_space_component__["a" /* DisplaySpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_resize_layout_display_wiew_host_directive__["a" /* DisplayWiewHostDirective */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__component_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_code_space_code_space_component__["a" /* CodeSpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_display_space_display_space_component__["a" /* DisplaySpaceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/bottom-bar/bottom-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#bottom-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tbackground-color:#5ADBD5;\r\n\tcolor:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/bottom-bar/bottom-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bottom-bar\">\n  bottom-bar works!\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/bottom-bar/bottom-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomBarComponent = (function () {
    function BottomBarComponent() {
    }
    BottomBarComponent.prototype.ngOnInit = function () {
    };
    return BottomBarComponent;
}());
BottomBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-bottom-bar',
        template: __webpack_require__("../../../../../src/app/component/bottom-bar/bottom-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/bottom-bar/bottom-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BottomBarComponent);

//# sourceMappingURL=bottom-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/code-space/code-space.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/code-space/code-space.component.html":
/***/ (function(module, exports) {

module.exports = "<webview id=\"webview\" style=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\" src=\"src/vs/index.html\">\n  \n</webview>\n"

/***/ }),

/***/ "../../../../../src/app/component/code-space/code-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeSpaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeSpaceComponent = (function () {
    function CodeSpaceComponent() {
    }
    CodeSpaceComponent.prototype.ngOnInit = function () {
    };
    CodeSpaceComponent.prototype.ngAfterViewInit = function () {
        var webView = document.getElementById('webview');
        //webViewContent = webView['getWebContents']();
        //webViewContent.style.height = '500px';
        /*alert('afterInit');
        setTimeout(()=>{
          alert('123');
          let title = webView['getTitle']();
          webView['executeJavaScript']('editor.layout();');
          alert(title);
        },5000)*/
    };
    return CodeSpaceComponent;
}());
CodeSpaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-code-space',
        template: __webpack_require__("../../../../../src/app/component/code-space/code-space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/code-space/code-space.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CodeSpaceComponent);

//# sourceMappingURL=code-space.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/display-space/display-space.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/display-space/display-space.component.html":
/***/ (function(module, exports) {

module.exports = "<webview class=\"display-webview\" style=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\" src=\"src/displayWebview.html\">\n  \n</webview>\n"

/***/ }),

/***/ "../../../../../src/app/component/display-space/display-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySpaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplaySpaceComponent = (function () {
    function DisplaySpaceComponent() {
    }
    DisplaySpaceComponent.prototype.ngOnInit = function () {
    };
    return DisplaySpaceComponent;
}());
DisplaySpaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-display-space',
        template: __webpack_require__("../../../../../src/app/component/display-space/display-space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/display-space/display-space.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DisplaySpaceComponent);

//# sourceMappingURL=display-space.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-layout{\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n#layout-bottom{\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:25px;\r\n}\r\n#layout-top{\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:100%;\r\n\theight:calc( 100% - 25px);\r\n}\r\n#layout-left-bar{\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:50px;\r\n\theight:100%;\r\n}\r\n#layout-right{\r\n\tleft:50px;\r\n\ttop:0;\r\n\twidth:calc( 100% - 50px);\r\n\theight:100%;\r\n\tbackground-color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"layout-top\" class=\"absolute\">\n    <div id=\"layout-left-bar\"  class=\"absolute\">\n      <app-left-bar></app-left-bar>\n    </div>\n    <div id=\"layout-right\"  class=\"absolute\">\n      <!--<app-code-space></app-code-space>-->\n      <app-resize-layout [components]=\"components\" [ratio]=\"[{value:0.5},{value:0.5}]\" [delivery_type]=\"'ratio'\"></app-resize-layout>\n    </div>\n  </div>\n  <div id=\"layout-bottom\"  class=\"absolute\">\n    <app-bottom-bar></app-bottom-bar>\n  </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_space_code_space_component__ = __webpack_require__("../../../../../src/app/component/code-space/code-space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_space_display_space_component__ = __webpack_require__("../../../../../src/app/component/display-space/display-space.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * @Author: zhangzhenyang
 * @Date: 2017-09-27 10:59:25
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-27 14:44:47
 */
//布局



var LayoutComponent = (function () {
    function LayoutComponent() {
        this.components = [__WEBPACK_IMPORTED_MODULE_1__code_space_code_space_component__["a" /* CodeSpaceComponent */], __WEBPACK_IMPORTED_MODULE_2__display_space_display_space_component__["a" /* DisplaySpaceComponent */]];
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/component/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/left-bar/left-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:50px;\r\n\theight:100%;\r\n\tbackground-color:#2B2B2B;\r\n\tcolor:#aaa;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/left-bar/left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"left-bar\">\n  left-bar works!\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/left-bar/left-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftBarComponent = (function () {
    function LeftBarComponent() {
    }
    LeftBarComponent.prototype.ngOnInit = function () {
    };
    return LeftBarComponent;
}());
LeftBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-left-bar',
        template: __webpack_require__("../../../../../src/app/component/left-bar/left-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/left-bar/left-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeftBarComponent);

//# sourceMappingURL=left-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/resize-layout/display-wiew-host.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayWiewHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayWiewHostDirective = (function () {
    function DisplayWiewHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return DisplayWiewHostDirective;
}());
DisplayWiewHostDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appDisplayWiewHost]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */]) === "function" && _a || Object])
], DisplayWiewHostDirective);

var _a;
//# sourceMappingURL=display-wiew-host.directive.js.map

/***/ }),

/***/ "../../../../../src/app/component/resize-layout/host.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HostDirective = (function () {
    function HostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return HostDirective;
}());
HostDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appHost]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */]) === "function" && _a || Object])
], HostDirective);

var _a;
//# sourceMappingURL=host.directive.js.map

/***/ }),

/***/ "../../../../../src/app/component/resize-layout/resize-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n.resize-layout{\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n}\r\n.resize-layout-divider{\r\n\twidth:10px;\r\n\theight:10px;\r\n\tbackground-color:red;\r\n}\r\n.resize-layout-first{\r\n\twidth:50%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n\tbackground-color:pink;\r\n}\r\n.resize-layout-second{\r\n\twidth:50%;\r\n\theight:100%;\r\n\tleft:50%;\r\n\ttop:0;\r\n\tbackground-color: royalblue;\r\n}\r\n.resize-layout-delimiter{\r\n\tposition: absolute;\r\n\twidth:5px;\r\n\theight:100%;\r\n\tright:0px;\r\n\ttop:0;\r\n\t/*background-color:orange;*/\r\n}\r\n.resize-layout-delimiter.left{\r\n\tleft:0;\r\n\t/*background-color: red;*/\r\n}\r\n.resize-layout-delimiter:hover{\r\n\tcursor: e-resize;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/resize-layout/resize-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resize-layout absolute\" [class]=\"'dirction'+direction\" (mousemove)=\"mousemove($event)\" (mouseup)=\"mouseup($event)\" (mouseleave)=\"mouseup($event)\">\n  <div class=\"resize-layout-first absolute\" [style.width]=\"ratioStyle()[0]\">\n    <div appHost>\n\n    </div>\n    <div class=\"resize-layout-delimiter right\" (mousedown)=\"resizeStart($event)\"></div>\n  </div>\n  <div class=\"resize-layout-second absolute\"  [style.width]=\"ratioStyle()[1]\" [style.left]=\"ratioStyle()[0]\">\n      <div appDisplayWiewHost>\n      </div>\n      <div class=\"resize-layout-delimiter left\" (mousedown)=\"resizeStart($event)\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/resize-layout/resize-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__host_directive__ = __webpack_require__("../../../../../src/app/component/resize-layout/host.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_wiew_host_directive__ = __webpack_require__("../../../../../src/app/component/resize-layout/display-wiew-host.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * @Author: zhangzhenyang
 * @Date: 2017-09-27 10:58:03
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-27 17:11:51
 */
//调整左右上下占比 组件



var resizeDirection;
(function (resizeDirection) {
    resizeDirection[resizeDirection["vertical"] = 0] = "vertical";
    resizeDirection[resizeDirection["horizontal"] = 1] = "horizontal";
})(resizeDirection || (resizeDirection = {}));
var ResizeLayoutComponent = (function () {
    function ResizeLayoutComponent(componentFactoryResolver, elememtRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.elememtRef = elememtRef;
        this.setRatio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resizeOn = false;
        this.pageX = 0;
        this.currentPageX = 0;
        this.prevRatios = [0.5, 0.5];
        console.log(elememtRef.nativeElement.offsetWidth);
    }
    ResizeLayoutComponent.prototype.ngOnInit = function () {
        this.ratios = JSON.parse(JSON.stringify(this.ratio));
    };
    ResizeLayoutComponent.prototype.ngAfterViewInit = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[0]);
        this.host.viewContainerRef.clear();
        this.host.viewContainerRef.createComponent(componentFactory);
        var componentFactory1 = this.componentFactoryResolver.resolveComponentFactory(this.components[1]);
        this.displayHost.viewContainerRef.clear();
        this.displayHost.viewContainerRef.createComponent(componentFactory1);
        /*setTimeout(()=>{
          for(let i in this.elememtRef){
            console.log(i,this.elememtRef[i]);
          };
        },2000)*/
    };
    ResizeLayoutComponent.prototype.ratioStyle = function () {
        if (this.ratios && this.delivery_type) {
            if (this.delivery_type == 'ratio') {
                return [this.ratios[0].value * 100 + '%', this.ratios[1].value * 100 + '%'];
            }
            if (this.delivery_type == 'firstFixed') {
                return [this.ratios[0].value + 'px', "calc( 100% - " + this.ratios[0].value + "px)"];
            }
            if (this.delivery_type == 'secondFixed') {
                return ["calc( 100% - " + this.ratios[1].value + "px)", this.ratios[1].value + 'px'];
            }
        }
        return ['50%', '50%'];
    };
    /**
     * 开始调整占比
     * @param e
     */
    ResizeLayoutComponent.prototype.resizeStart = function (e) {
        //console.log(e);
        this.resizeOn = true;
        this.pageX = e.pageX;
        this.prevRatios[0] = this.ratios[0]['value'];
        this.prevRatios[1] = this.ratios[1]['value'];
    };
    ResizeLayoutComponent.prototype.mousemove = function (e) {
        if (this.resizeOn) {
            this.currentPageX = e.pageX;
            var pxChange = this.currentPageX - this.pageX, ratioChange = (pxChange) / this.elememtRef.nativeElement.offsetWidth;
            if (this.delivery_type == 'ratio') {
                this.ratios[0]['value'] = this.prevRatios[0] + ratioChange;
                this.ratios[1]['value'] = this.prevRatios[1] - ratioChange;
            }
            if (this.delivery_type == 'firstFixed') {
                this.ratios[0]['value'] = this.prevRatios[0] + pxChange;
            }
            if (this.delivery_type == 'secondFixed') {
                this.ratios[1]['value'] = this.prevRatios[1] - pxChange;
            }
        }
    };
    ResizeLayoutComponent.prototype.mouseup = function (e) {
        this.resizeOn = false;
    };
    return ResizeLayoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__host_directive__["a" /* HostDirective */]),
    __metadata("design:type", Object)
], ResizeLayoutComponent.prototype, "host", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__display_wiew_host_directive__["a" /* DisplayWiewHostDirective */]),
    __metadata("design:type", Object)
], ResizeLayoutComponent.prototype, "displayHost", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ResizeLayoutComponent.prototype, "direction", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ResizeLayoutComponent.prototype, "components", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ResizeLayoutComponent.prototype, "ratio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ResizeLayoutComponent.prototype, "delivery_type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ResizeLayoutComponent.prototype, "setRatio", void 0);
ResizeLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-resize-layout',
        template: __webpack_require__("../../../../../src/app/component/resize-layout/resize-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/resize-layout/resize-layout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], ResizeLayoutComponent);

var _a, _b;
//# sourceMappingURL=resize-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n  dfadfsadf dafsg afdg adsfg afsdg afsdgsadfg a\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/component/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map