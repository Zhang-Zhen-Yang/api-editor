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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"root\" (click)=\"click($event)\">\n  <!--<webview id=\"webview\" style=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\" src=\"src/vs/index.html\">\n  </webview>-->\n  <app-layout></app-layout>  \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'app';
        /*if(!String.prototype.endsWith){
          String.prototype.endsWith = function(val):boolean{
            if(this.lastIndexOf(val)<0){
              return false;
            }
            return this.lastIndexOf(val)+val.length == this.length;
          }
        }*/
    }
    AppComponent.prototype.ngOnInit = function () {
        this.apiService.initProjectDir();
        //注册键盘事件
        document.addEventListener('keydown', function (e) {
            switch (e.key) {
                //保存
                case 's':
                    if (e.ctrlKey)
                        console.log('保存');
                    break;
                //打开文件
                case 'o':
                    if (e.ctrlKey)
                        console.log('打开文件');
                    break;
                default:
                    break;
            }
            console.log(e);
        });
        document.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        //注册投放事件
        document.addEventListener('drop', function (e) {
            e.preventDefault();
            //e.stopPropagation();
            console.log(e);
        }, false);
    };
    AppComponent.prototype.keydown = function (e) {
        console.log(e);
    };
    AppComponent.prototype.click = function (e) {
        console.log('click');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_resource_manager_resource_manager_component__ = __webpack_require__("../../../../../src/app/component/resource-manager/resource-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_work_space_work_space_component__ = __webpack_require__("../../../../../src/app/component/work-space/work-space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_tree_tree_component__ = __webpack_require__("../../../../../src/app/component/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_tree_tree_dir_tree_dir_component__ = __webpack_require__("../../../../../src/app/component/tree/tree-dir/tree-dir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_tree_tree_file_tree_file_component__ = __webpack_require__("../../../../../src/app/component/tree/tree-file/tree-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipe_file_icon_pipe__ = __webpack_require__("../../../../../src/app/pipe/file-icon.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipe_folder_icon_pipe__ = __webpack_require__("../../../../../src/app/pipe/folder-icon.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_12__component_resize_layout_display_wiew_host_directive__["a" /* DisplayWiewHostDirective */],
            __WEBPACK_IMPORTED_MODULE_13__component_resource_manager_resource_manager_component__["a" /* ResourceManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_work_space_work_space_component__["a" /* WorkSpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_tree_tree_component__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_tree_tree_dir_tree_dir_component__["a" /* TreeDirComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_tree_tree_file_tree_file_component__["a" /* TreeFileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipe_file_icon_pipe__["a" /* FileIconPipe */],
            __WEBPACK_IMPORTED_MODULE_20__pipe_folder_icon_pipe__["a" /* FolderIconPipe */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__component_test_test_component__["a" /* TestComponent */],
            /*CodeSpaceComponent,
            DisplaySpaceComponent,*/
            __WEBPACK_IMPORTED_MODULE_13__component_resource_manager_resource_manager_component__["a" /* ResourceManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_work_space_work_space_component__["a" /* WorkSpaceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__service_api_service__["a" /* ApiService */]
        ],
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
exports.push([module.i, "#bottom-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tbackground-color:#1ABC9C;\r\n\tcolor:white;\r\n}", ""]);

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

module.exports = "<webview #webview style=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\" src=\"src/vs/index.html\">\n  \n</webview>\n"

/***/ }),

/***/ "../../../../../src/app/component/code-space/code-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeSpaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
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
    function CodeSpaceComponent(apiService) {
        this.apiService = apiService;
    }
    CodeSpaceComponent.prototype.ngOnInit = function () {
    };
    CodeSpaceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiService.firstSpace.subscribe(function (e) {
            var path = e['path'].replace(/\\/g, '/');
            switch (e['action']) {
                //打开文本文件
                case 'openFile':
                    var delimiter = Date.now() + Math.random(), execStr = encodeURI(e['str']);
                    try {
                        _this.webview.nativeElement.executeJavaScript('openFile("' + execStr + '")');
                    }
                    catch (e) {
                        console.log(e);
                    }
                    break;
                //打开图片
                case 'openImage':
                    _this.webview.nativeElement.executeJavaScript('openImage("' + path + '")');
                    break;
                //打开图片
                case 'openPdf':
                    _this.webview.nativeElement.executeJavaScript('openPdf("' + path + '")');
                    break;
                //打开mp4,打开mp3
                case 'openMedia':
                    _this.webview.nativeElement.executeJavaScript('openMedia("' + path + '")');
                    break;
                default:
                    break;
            }
            //console.log(e);
        });
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('webview'),
    __metadata("design:type", Object)
], CodeSpaceComponent.prototype, "webview", void 0);
CodeSpaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-code-space',
        template: __webpack_require__("../../../../../src/app/component/code-space/code-space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/code-space/code-space.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CodeSpaceComponent);

var _a;
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

module.exports = "<div class=\"absolute\" style=\"position:absolute;display:block;width:100%; height:100%;left:0;top:0;\" [title]=\"src()\">\n\t<webview #webview \n\t\tclass=\"display-webview\" \n\t\tstyle=\"position:absolute;display:flex;flex:1;width:100%; height:100%;left:0;top:0;\"\n\t\tsrc=\"src/displayWebview.html\"\n\t\t>\n\t</webview>\n\t<!-- src=\"src/displayWebview.html\" -->\n</div>\n\t\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/display-space/display-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySpaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
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
    function DisplaySpaceComponent(apiService) {
        this.apiService = apiService;
        this.domReady = false;
    }
    DisplaySpaceComponent.prototype.src = function () {
        var url = this.apiService.dispayArea[1].url;
        if (this.domReady) {
            if (this.webview.nativeElement.get) {
            }
            this.webview.nativeElement.loadURL(url);
        }
        return url;
    };
    DisplaySpaceComponent.prototype.ngOnInit = function () {
    };
    DisplaySpaceComponent.prototype.ngAfterViewInit = function () {
        console.log(this.webview);
    };
    DisplaySpaceComponent.prototype.ngAfterContentChecked = function () {
        //this.webview.nativeElement.loadURL('https://www.bilibili.com/');
    };
    DisplaySpaceComponent.prototype.ngAfterContentInit = function () {
        //this.webview.nativeElement.loadURL('http://www.acfun.cn/');
    };
    return DisplaySpaceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('webview'),
    __metadata("design:type", Object)
], DisplaySpaceComponent.prototype, "webview", void 0);
DisplaySpaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-display-space',
        template: __webpack_require__("../../../../../src/app/component/display-space/display-space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/display-space/display-space.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DisplaySpaceComponent);

var _a;
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

module.exports = "\n  <div id=\"layout-top\" class=\"absolute\">\n    <div id=\"layout-left-bar\"  class=\"absolute\">\n      <app-left-bar></app-left-bar>\n    </div>\n    <div id=\"layout-right\"  class=\"absolute\">\n      <!--<app-code-space></app-code-space>-->\n      <app-resize-layout [components]=\"resourcemanger\" [ratio]=\"[{value:250},{value:0.5}]\" [delivery_type]=\"'firstFixed'\"></app-resize-layout>\n      <!--<app-resize-layout [components]=\"components\" [ratio]=\"[{value:0.5},{value:0.5}]\" [delivery_type]=\"'ratio'\"></app-resize-layout>-->\n    </div>\n  </div>\n  <div id=\"layout-bottom\"  class=\"absolute\">\n    <app-bottom-bar></app-bottom-bar>\n  </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/component/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_manager_resource_manager_component__ = __webpack_require__("../../../../../src/app/component/resource-manager/resource-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_space_work_space_component__ = __webpack_require__("../../../../../src/app/component/work-space/work-space.component.ts");
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
 * @Last Modified time: 2017-09-27 17:24:37
 */
//布局



/*import { CodeSpaceComponent } from '../code-space/code-space.component'
import { DisplaySpaceComponent } from '../display-space/display-space.component'*/
var LayoutComponent = (function () {
    //components:Array<any> = [ CodeSpaceComponent , DisplaySpaceComponent ]
    function LayoutComponent() {
        this.resourcemanger = [__WEBPACK_IMPORTED_MODULE_1__resource_manager_resource_manager_component__["a" /* ResourceManagerComponent */], __WEBPACK_IMPORTED_MODULE_2__work_space_work_space_component__["a" /* WorkSpaceComponent */]];
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
    };
    ResizeLayoutComponent.prototype.ngAfterContentInit = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[0]);
        this.host.viewContainerRef.clear();
        this.host.viewContainerRef.createComponent(componentFactory);
        var componentFactory1 = this.componentFactoryResolver.resolveComponentFactory(this.components[1]);
        this.displayHost.viewContainerRef.clear();
        var componentRef = this.displayHost.viewContainerRef.createComponent(componentFactory1);
        //componentRef.instance.src = 'aaaaaaa';
        //salert(typeof this.components[1]);   
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

/***/ "../../../../../src/app/component/resource-manager/resource-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resource-manager{\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n\tbackground-color:#efefef;\r\n\toverflow:auto;\r\n}\r\n.resource-manager-title{\r\n\ttext-align: left;\r\n\ttext-indent: 2em;\r\n\tfont-size:12px;\r\n\tline-height: 3em;\r\n}\r\n.resource-manager-open-directory-btn{\r\n\tdisplay: block;\r\n\tmargin:0 auto;\r\n\tbackground-color:#1ABC9C;\r\n\tcolor:white;\r\n\toutline:none;\r\n\tborder:none;\r\n\twidth:calc(100% - 40px);\r\n\tline-height: 1.7em;\r\n\tfont-size:14px;\r\n\tfont-family: 微软雅黑;\r\n}\r\n.resource-manager-open-directory-btn:hover{\r\n\tbackground-color: #16A085;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/resource-manager/resource-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resource-manager absolute scrollbar-override\">\n  <div class=\"resource-manager-title\">资源管理器</div>\n  <p>\n    resource-manager works!\n  </p>\n  <app-tree ></app-tree>\n  <button \n    *ngIf=\"!apiService.projectDir\"\n    class=\"resource-manager-open-directory-btn pointer\" \n    (click)=\"openDirectory()\">打开文件夹</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/resource-manager/resource-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
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
 * @Date: 2017-09-27 17:29:00
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2017-09-28 11:22:48
 */
//资源管理器


var ResourceManagerComponent = (function () {
    function ResourceManagerComponent(apiService) {
        this.apiService = apiService;
        this.repeatArray = new Array(20);
    }
    ResourceManagerComponent.prototype.ngOnInit = function () {
    };
    /**
     * 打开文件夹
     */
    ResourceManagerComponent.prototype.openDirectory = function () {
        this.apiService.openFile(function (filePaths) {
            console.log(filePaths);
        });
    };
    return ResourceManagerComponent;
}());
ResourceManagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-resource-manager',
        template: __webpack_require__("../../../../../src/app/component/resource-manager/resource-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/resource-manager/resource-manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ResourceManagerComponent);

var _a;
//# sourceMappingURL=resource-manager.component.js.map

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

/***/ "../../../../../src/app/component/tree/tree-dir/tree-dir.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expanded{\r\n\tdisplay: inline-block;\r\n\twidth:16px;\r\n\theight:16px;\r\n\tbackground-position: center center;\r\n\tbackground-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23646465' d='M11 10H5.344L11 4.414V10z'/%3E%3C/svg%3E\");\r\n\t-webkit-transform: translateY(3px);\r\n\t        transform: translateY(3px)\r\n}\r\n.noexpanded{\r\n\tdisplay: inline-block;\r\n\twidth:16px;\r\n\theight:16px;\r\n\tbackground-position: center center;\r\n\tbackground-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23646465' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/%3E%3C/svg%3E\");\r\n\t-webkit-transform: translateY(3px);\r\n\t        transform: translateY(3px)\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/tree/tree-dir/tree-dir.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"tree-item\" (click)=\"toggleExpand($event)\">\n    <div class=\"tree-item-indent\" [style.textIndent]=\"indent+'em'\" title=\"{{ title }}\">\n      <div [ngClass]=\"[expanded?'expanded':'noexpanded']\"></div><img [ngClass]=\"['tree-icon']\" [src]=\"dirName|folderIcon:expanded\" alt=\"\">{{ dirName }}\n    </div>\n  </div> \n  <div class=\"tree-sub-dir\" *ngIf=\"expanded\">\n    <div *ngFor=\"let file of child;let i = index;\">    \n      <!--目录-->\n      <tree-dir *ngIf=\"file.type=='dir'\"\n        [title]=\"file.fullPath\"\n        [dirName]=\"file.name\"\n        [expanded]=\"file.expanded\"\n        [child]=\"file.child\" \n        (fileSelect)=\"select($event)\" \n        [indent]=\"indent+1\" \n        [paths]=\"nextPath()\"\n        [index]=\"i\"\n        [pathsIndexs]=\"nextPathIndexs()\">\n      </tree-dir>\n      <!--文件-->\n      <tree-file *ngIf=\"file.type=='file'\" \n        [title]=\"file.fullPath\"\n        [fileName]=\"file.name\" \n        (fileSelect)=\"select($event)\" \n        [indent]=\"indent+1\"></tree-file>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/tree/tree-dir/tree-dir.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeDirComponent = (function () {
    function TreeDirComponent(apiService) {
        this.apiService = apiService;
        this.fileSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TreeDirComponent.prototype.ngOnInit = function () {
    };
    TreeDirComponent.prototype.select = function (e) {
        var emitArray = e;
        emitArray.unshift(this.dirName);
        this.fileSelect.emit(emitArray);
        //alert('current-dir:'+this.dirName+';total'+emitArray);
    };
    //展开 收缩目录
    TreeDirComponent.prototype.toggleExpand = function ($event) {
        /*alert('expand');
        alert(this.nextPath());
        alert(this.nextPathIndexs());*/
        this.apiService.togglePath(this.nextPathIndexs());
    };
    TreeDirComponent.prototype.nextPath = function () {
        return this.paths.concat([this.dirName]);
    };
    TreeDirComponent.prototype.nextPathIndexs = function () {
        return this.pathsIndexs.concat([this.index]);
    };
    return TreeDirComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "dirName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], TreeDirComponent.prototype, "expanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "child", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TreeDirComponent.prototype, "indent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TreeDirComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "paths", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "pathsIndexs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TreeDirComponent.prototype, "fileSelect", void 0);
TreeDirComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tree-dir',
        template: __webpack_require__("../../../../../src/app/component/tree/tree-dir/tree-dir.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/tree/tree-dir/tree-dir.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TreeDirComponent);

var _a;
//# sourceMappingURL=tree-dir.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/tree/tree-file/tree-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.expanded-space{\r\n\tdisplay: inline-block;\r\n\twidth:16px;\r\n\theight:16px;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/tree/tree-file/tree-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-item\" (click)=\"clickFile()\">  \n  <div class=\"tree-item-indent\" [style.textIndent]=\"indent+'em'\" title=\"{{ title }}\">\n    <!--<div class=\"expanded-space\"></div>-->\n    <img [ngClass]=\"['tree-icon','file-type']\" [src]=\"fileName|fileIcon:expanded\" alt=\"\">{{fileName}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/tree/tree-file/tree-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeFileComponent; });
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

var TreeFileComponent = (function () {
    function TreeFileComponent() {
        this.fileSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TreeFileComponent.prototype.ngOnInit = function () {
    };
    TreeFileComponent.prototype.clickFile = function () {
        var fileName = this.fileName;
        this.fileSelect.emit([fileName]);
    };
    TreeFileComponent.prototype.select = function (e) {
        var emitArray = e;
        e.unshift(this.fileName);
        this.fileSelect.emit(emitArray);
    };
    return TreeFileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeFileComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TreeFileComponent.prototype, "fileName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], TreeFileComponent.prototype, "indent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], TreeFileComponent.prototype, "fileSelect", void 0);
TreeFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tree-file',
        template: __webpack_require__("../../../../../src/app/component/tree/tree-file/tree-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/tree/tree-file/tree-file.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TreeFileComponent);

//# sourceMappingURL=tree-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/tree/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"tree-item\">{{ apiService.projectDir }}</div>\n  <div>\n    <div *ngFor=\"let file of files;let i = index;\">\n      <!--目录-->\n      <tree-dir *ngIf=\"file.type=='dir'\" \n        [title]=\"file.fullPath\"\n        [dirName]=\"file.name\" \n        [expanded]=\"file.expanded\"\n        [child]=\"file.child\" \n        (fileSelect)=\"select($event)\" \n        [indent]=\"1\" \n        [paths]=\"[]\" \n        [index]=\"i\" \n        [pathsIndexs]=\"[]\">\n      </tree-dir>\n      <!--文件-->\n      <tree-file \n        *ngIf=\"file.type=='file'\" \n        [fileName]=\"file.name\"\n        [title]=\"file.fullPath\"\n        [indent]=\"1\" \n        (fileSelect)=\"select($event)\" ></tree-file>\n    </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = (function () {
    function TreeComponent(apiService) {
        this.apiService = apiService;
        this.files = [];
        this.files = apiService.files;
    }
    TreeComponent.prototype.ngOnInit = function () {
    };
    TreeComponent.prototype.select = function (e) {
        var emitArray = e;
        //alert('tree:'+e);
        this.apiService.readFile(e);
    };
    return TreeComponent;
}());
TreeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tree',
        template: __webpack_require__("../../../../../src/app/component/tree/tree.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/tree/tree.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TreeComponent);

var _a;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/work-space/work-space.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/work-space/work-space.component.html":
/***/ (function(module, exports) {

module.exports = "<app-resize-layout [components]=\"components\" [ratio]=\"[{value:0.5},{value:0.5}]\" [delivery_type]=\"'ratio'\"></app-resize-layout>"

/***/ }),

/***/ "../../../../../src/app/component/work-space/work-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkSpaceComponent; });
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



var WorkSpaceComponent = (function () {
    function WorkSpaceComponent() {
        this.components = [__WEBPACK_IMPORTED_MODULE_1__code_space_code_space_component__["a" /* CodeSpaceComponent */], __WEBPACK_IMPORTED_MODULE_2__display_space_display_space_component__["a" /* DisplaySpaceComponent */]];
    }
    WorkSpaceComponent.prototype.ngOnInit = function () {
    };
    return WorkSpaceComponent;
}());
WorkSpaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-work-space',
        template: __webpack_require__("../../../../../src/app/component/work-space/work-space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/work-space/work-space.component.css")],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__code_space_code_space_component__["a" /* CodeSpaceComponent */], __WEBPACK_IMPORTED_MODULE_2__display_space_display_space_component__["a" /* DisplaySpaceComponent */]]
    }),
    __metadata("design:paramtypes", [])
], WorkSpaceComponent);

//# sourceMappingURL=work-space.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/file-icon.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileIconPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supportedExtensions__ = __webpack_require__("../../../../../src/app/pipe/supportedExtensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileFormat__ = __webpack_require__("../../../../../src/app/pipe/fileFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileIconPipe = (function () {
    function FileIconPipe() {
    }
    FileIconPipe.prototype.transform = function (value, args) {
        /*let dotIndex = value.lastIndexOf('.'),
          extname = 'un';
        if(dotIndex>-1){
          return './src/icons/file_type_'+value.slice(dotIndex+1)+'.svg';
        }*/
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_1__supportedExtensions__["a" /* extensions */].supported; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item['languages']) {
                var extName = item['languages'][0].defaultExtension;
                if (extName[0] != '.') {
                    extName = '.' + extName;
                }
                if (value.endsWith(extName)) {
                    return './src/icons/file_type_' + item.icon + '.' + __WEBPACK_IMPORTED_MODULE_2__fileFormat__["a" /* FileFormat */][item.format];
                }
            }
            else {
                for (var _b = 0, _c = item.extensions; _b < _c.length; _b++) {
                    var ext = _c[_b];
                    var extName = ext;
                    if (extName[0] != '.') {
                        extName = '.' + extName;
                    }
                    if (value.endsWith(extName)) {
                        return './src/icons/file_type_' + item.icon + '.' + __WEBPACK_IMPORTED_MODULE_2__fileFormat__["a" /* FileFormat */][item.format];
                    }
                }
            }
        }
        return './src/icons/default_file' + '.' + 'svg';
    };
    return FileIconPipe;
}());
FileIconPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'fileIcon'
    })
], FileIconPipe);

//# sourceMappingURL=file-icon.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/fileFormat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFormat; });
var FileFormat;
(function (FileFormat) {
    FileFormat[FileFormat["svg"] = 0] = "svg";
    FileFormat[FileFormat["png"] = 1] = "png";
    FileFormat[FileFormat["jpg"] = 2] = "jpg";
    FileFormat[FileFormat["gif"] = 3] = "gif";
    FileFormat[FileFormat["bmp"] = 4] = "bmp";
    FileFormat[FileFormat["tiff"] = 5] = "tiff";
    FileFormat[FileFormat["ico"] = 6] = "ico";
})(FileFormat || (FileFormat = {}));
//# sourceMappingURL=fileFormat.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/folder-icon.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderIconPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supportedFolders__ = __webpack_require__("../../../../../src/app/pipe/supportedFolders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileFormat__ = __webpack_require__("../../../../../src/app/pipe/fileFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FolderIconPipe = (function () {
    function FolderIconPipe() {
    }
    FolderIconPipe.prototype.transform = function (value, args) {
        //return args==true?'./src/icons/default_folder_opened.svg':'./src/icons/default_folder.svg';
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_1__supportedFolders__["a" /* extensions */].supported; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, _c = item.extensions; _b < _c.length; _b++) {
                var ext = _c[_b];
                var extName = ext;
                /*if(extName[0]!='.'){
                  extName = '.'+extName;
                }*/
                //console.log(extName);
                if (value.endsWith(extName)) {
                    return './src/icons/folder_type_' + item.icon + (args == true ? '_opened' : '') + '.' + __WEBPACK_IMPORTED_MODULE_2__fileFormat__["a" /* FileFormat */][item.format];
                }
            }
        }
        return args == true ? './src/icons/default_folder_opened.svg' : './src/icons/default_folder.svg';
    };
    return FolderIconPipe;
}());
FolderIconPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'folderIcon'
    })
], FolderIconPipe);

//# sourceMappingURL=folder-icon.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/languages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languages; });
var languages = {
    actionscript: { ids: ['nextgenas'], defaultExtension: 'as' },
    al: { ids: ['al'], defaultExtension: 'al' },
    ansible: { ids: ['ansible'], defaultExtension: 'ansible' },
    antlr: { ids: ['antlr'], defaultExtension: 'g4' },
    anyscript: { ids: ['anyscript'], defaultExtension: 'any' },
    apache: { ids: ['apacheconf'], defaultExtension: 'htaccess' },
    apib: { ids: ['apiblueprint'], defaultExtension: 'apib' },
    applescript: { ids: ['applescript'], defaultExtension: 'applescript' },
    asp: { ids: ['asp', 'asp (html)'], defaultExtension: 'asp' },
    assembly: { ids: ['arm'], defaultExtension: 'asm' },
    autohotkey: { ids: ['ahk'], defaultExtension: 'ahk' },
    autoit: { ids: ['autoit'], defaultExtension: 'au3' },
    avro: { ids: ['avro'], defaultExtension: 'avcs' },
    bat: { ids: 'bat', defaultExtension: 'bat' },
    blade: { ids: ['blade', 'laravel-blade'], defaultExtension: 'blade.php' },
    bolt: { ids: ['bolt'], defaultExtension: 'bolt' },
    c: { ids: 'c', defaultExtension: 'c' },
    c_al: { ids: ['c-al'], defaultExtension: 'cal' },
    cabal: { ids: ['cabal'], defaultExtension: 'cabal' },
    cake: { ids: ['cake'], defaultExtension: 'cake' },
    cfc: { ids: ['cfc'], defaultExtension: 'cfc' },
    cfm: { ids: ['cfmhtml'], defaultExtension: 'cfm' },
    clojure: { ids: 'clojure', defaultExtension: 'clojure' },
    cmake: { ids: 'cmake', defaultExtension: 'cmake' },
    cmakecache: { ids: 'cmake-cache', defaultExtension: 'CMakeCache.txt' },
    cobol: { ids: ['cobol'], defaultExtension: 'cbl' },
    coffeescript: { ids: 'coffeescript', defaultExtension: 'coffee' },
    coldfusion: { ids: ['cfml', 'lang-cfml'], defaultExtension: 'cfml' },
    cpp: { ids: 'cpp', defaultExtension: 'cpp' },
    crystal: { ids: ['crystal'], defaultExtension: 'cr' },
    csharp: { ids: ['csharp'], defaultExtension: 'cs' },
    css: { ids: 'css', defaultExtension: 'css' },
    cucumber: { ids: ['feature'], defaultExtension: 'feature' },
    dal: { ids: ['dal'], defaultExtension: 'dal' },
    dart: { ids: ['dart'], defaultExtension: 'dart' },
    diff: { ids: 'diff', defaultExtension: 'diff' },
    dlang: { ids: ['d', 'dscript', 'dml', 'sdl', 'diet'], defaultExtension: 'd' },
    dockerfile: { ids: 'dockerfile', defaultExtension: 'dockerfile' },
    doxygen: { ids: 'doxygen', defaultExtension: 'dox' },
    dylanlang: { ids: ['dylan', 'dylan-lid'], defaultExtension: 'dylan' },
    dustjs: { ids: ['dustjs'], defaultExtension: 'dust' },
    edge: { ids: ['edge'], defaultExtension: 'edge' },
    elixir: { ids: ['elixir', 'Eex', 'HTML (Eex)'], defaultExtension: 'ex' },
    elm: { ids: ['elm'], defaultExtension: 'elm' },
    erb: { ids: ['erb'], defaultExtension: 'erb' },
    erlang: { ids: ['erlang'], defaultExtension: 'erl' },
    fortran: { ids: ['fortran', 'fortran-modern'], defaultExtension: 'f' },
    freemarker: { ids: ['ftl'], defaultExtension: 'ftl' },
    fsharp: { ids: 'fsharp', defaultExtension: 'fs' },
    galen: { ids: 'galen', defaultExtension: 'gspec' },
    gamemaker: { ids: 'gml-gms', defaultExtension: 'gml' },
    gamemaker2: { ids: 'gml-gms2', defaultExtension: 'gml' },
    gamemaker81: { ids: 'gml-gm81', defaultExtension: 'gml' },
    git: { ids: ['git-commit', 'git-rebase'], defaultExtension: 'git' },
    glsl: { ids: 'glsl', defaultExtension: 'glsl' },
    go: { ids: 'go', defaultExtension: 'go' },
    godot: { ids: 'gdscript', defaultExtension: 'gd' },
    graphql: { ids: ['graphql'], defaultExtension: 'gql' },
    graphviz: { ids: ['dot'], defaultExtension: 'gv' },
    groovy: { ids: 'groovy', defaultExtension: 'groovy' },
    haml: { ids: ['haml'], defaultExtension: 'haml' },
    handlebars: { ids: 'handlebars', defaultExtension: 'hbs' },
    harbour: { ids: 'harbour', defaultExtension: 'prg' },
    haskell: { ids: ['haskell'], defaultExtension: 'hs' },
    haxe: { ids: ['haxe', 'hxml', 'Haxe AST dump'], defaultExtension: 'haxe' },
    hlsl: { ids: 'hlsl', defaultExtension: 'hlsl' },
    html: { ids: 'html', defaultExtension: 'html' },
    http: { ids: 'http', defaultExtension: 'http' },
    ini: { ids: 'ini', defaultExtension: 'ini' },
    latex: { ids: ['latex'], defaultExtension: 'tex' },
    java: { ids: 'java', defaultExtension: 'java' },
    javascript: { ids: 'javascript', defaultExtension: 'js' },
    javascriptreact: { ids: 'javascriptreact', defaultExtension: 'jsx' },
    jinja: { ids: ['jinja'], defaultExtension: 'jinja' },
    json: { ids: 'json', defaultExtension: 'json' },
    julia: { ids: ['julia', 'juliamarkdown'], defaultExtension: 'jl' },
    kos: { ids: ['kos'], defaultExtension: 'ks' },
    kotlin: { ids: ['kotlin'], defaultExtension: 'kt' },
    lisp: { ids: ['lisp'], defaultExtension: 'lisp' },
    literatehaskell: { ids: ['literate haskell'], defaultExtension: 'lhs' },
    less: { ids: 'less', defaultExtension: 'less' },
    lua: { ids: 'lua', defaultExtension: 'lua' },
    makefile: { ids: 'makefile', defaultExtension: 'mk' },
    markdown: { ids: 'markdown', defaultExtension: 'md' },
    marko: { ids: ['marko'], defaultExtension: 'marko' },
    matlab: { ids: ['matlab'], defaultExtension: 'mat' },
    mjml: { ids: ['mjml'], defaultExtension: 'mjml' },
    mson: { ids: ['mson'], defaultExtension: 'mson' },
    nim: { ids: ['nim', 'nimble'], defaultExtension: 'nim' },
    nsis: { ids: ['nsis', 'nfl', 'nsl', 'bridlensis'], defaultExtension: 'nsi' },
    nunjucks: { ids: ['nunjucks'], defaultExtension: 'nunjucks' },
    objectivec: { ids: 'objective-c', defaultExtension: 'm' },
    objectivecpp: { ids: 'objective-cpp', defaultExtension: 'mm' },
    ocaml: { ids: ['ocaml', 'ocamllex', 'menhir'], defaultExtension: 'ml' },
    openEdge: { ids: ['abl'], defaultExtension: 'w' },
    openHAB: { ids: ['openhab'], defaultExtension: 'things' },
    pascal: { ids: ['pascal', 'objectpascal'], defaultExtension: 'pas' },
    perl: { ids: ['perl'], defaultExtension: 'pl' },
    perl6: { ids: ['perl6'], defaultExtension: 'pl6' },
    php: { ids: 'php', defaultExtension: 'php' },
    plaintext: { ids: 'plaintext', defaultExtension: 'txt' },
    plsql: { ids: ['plsql', 'oracle'], defaultExtension: 'ddl' },
    polymer: { ids: ['polymer'], defaultExtension: 'polymer' },
    postcss: { ids: ['postcss'], defaultExtension: 'pcss' },
    powershell: { ids: 'powershell', defaultExtension: 'ps1' },
    prolog: { ids: ['prolog'], defaultExtension: 'pro' },
    properties: { ids: 'properties', defaultExtension: 'properties' },
    protobuf: { ids: ['proto3', 'proto'], defaultExtension: 'proto' },
    pug: { ids: 'jade', defaultExtension: 'pug' },
    puppet: { ids: ['puppet'], defaultExtension: 'pp' },
    purescript: { ids: ['purescript'], defaultExtension: 'purs' },
    python: { ids: 'python', defaultExtension: 'py' },
    qlik: { ids: ['qlik'], defaultExtension: 'qvs' },
    r: { ids: 'r', defaultExtension: 'r' },
    razor: { ids: 'razor', defaultExtension: 'cshtml' },
    raml: { ids: ['raml'], defaultExtension: 'raml' },
    reason: { ids: 'reason', defaultExtension: 're' },
    restructuredtext: { ids: ['restructuredtext'], defaultExtension: 'rst' },
    riot: { ids: ['riot'], defaultExtension: 'tag' },
    robot: { ids: ['robot'], defaultExtension: 'robot' },
    ruby: { ids: 'ruby', defaultExtension: 'rb' },
    rust: { ids: 'rust', defaultExtension: 'rs' },
    sbt: { ids: ['sbt'], defaultExtension: 'sbt' },
    scala: { ids: ['scala'], defaultExtension: 'scala' },
    scss: { ids: 'scss', defaultExtension: 'scss' },
    shaderlab: { ids: 'shaderlab', defaultExtension: 'shader' },
    shellscript: { ids: 'shellscript', defaultExtension: 'sh' },
    slim: { ids: ['slim'], defaultExtension: 'slim' },
    smarty: { ids: ['smarty'], defaultExtension: 'tpl' },
    solidity: { ids: ['solidity'], defaultExtension: 'sol' },
    sqf: { ids: 'sqf', defaultExtension: 'sqf' },
    sql: { ids: 'sql', defaultExtension: 'sql' },
    stylus: { ids: ['stylus'], defaultExtension: 'styl' },
    swagger: { ids: ['Swagger', 'swagger'], defaultExtension: 'swagger' },
    swift: { ids: ['swift'], defaultExtension: 'swift' },
    swig: { ids: ['swig'], defaultExtension: 'swig' },
    terraform: { ids: ['terraform'], defaultExtension: 'tf' },
    tex: { ids: 'tex', defaultExtension: 'sty' },
    textile: { ids: ['textile'], defaultExtension: 'textile' },
    textmatejson: { ids: ['json-tmlanguage'], defaultExtension: 'JSON-tmLanguage' },
    textmateyaml: { ids: ['yaml-tmlanguage'], defaultExtension: 'YAML-tmLanguage' },
    toml: { ids: ['toml'], defaultExtension: 'toml' },
    twig: { ids: ['twig'], defaultExtension: 'twig' },
    typescript: { ids: 'typescript', defaultExtension: 'ts' },
    typescriptreact: { ids: 'typescriptreact', defaultExtension: 'tsx' },
    vb: { ids: 'vb', defaultExtension: 'vb' },
    vba: { ids: ['vba'], defaultExtension: 'cls' },
    vbscript: { ids: ['vbscript'], defaultExtension: 'wsf' },
    vhdl: { ids: ['vhdl'], defaultExtension: 'vhdl' },
    viml: { ids: ['viml'], defaultExtension: 'vim' },
    volt: { ids: ['volt'], defaultExtension: 'volt' },
    vue: { ids: ['vue'], defaultExtension: 'vue' },
    wxml: { ids: ['wxml'], defaultExtension: 'wxml' },
    xml: { ids: 'xml', defaultExtension: 'xml' },
    xsl: { ids: 'xsl', defaultExtension: 'xsl' },
    yaml: { ids: 'yaml', defaultExtension: 'yaml' },
    yang: { ids: ['yang'], defaultExtension: 'yang' },
};
//# sourceMappingURL=languages.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/supportedExtensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extensions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__languages__ = __webpack_require__("../../../../../src/app/pipe/languages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileFormat__ = __webpack_require__("../../../../../src/app/pipe/fileFormat.ts");
/* tslint:disable max-line-length */


var extensions = {
    default: {
        file: { icon: 'file', format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
    },
    supported: [
        { icon: 'access', extensions: ['accdb', 'accdt', 'mdb', 'accda', 'accdc', 'accde', 'accdp', 'accdr', 'accdu', 'ade', 'adp', 'laccdb', 'ldb', 'mam', 'maq', 'mdw'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'actionscript', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].actionscript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ai', extensions: ['ai'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ai2', extensions: ['ai'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'al', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].al], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'angular', extensions: ['.angular-cli.json', 'angular-cli.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ng_component_ts', extensions: ['component.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_component_js', extensions: ['component.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_controller_ts', extensions: ['controller.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_controller_js', extensions: ['controller.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_directive_ts', extensions: ['directive.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_directive_js', extensions: ['directive.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_guard_ts', extensions: ['guard.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_guard_js', extensions: ['guard.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_module_ts', extensions: ['module.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_module_js', extensions: ['module.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_pipe_ts', extensions: ['pipe.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_pipe_js', extensions: ['pipe.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_ts', extensions: ['routing.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_js', extensions: ['routing.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_ts', extensions: ['app-routing.module.ts'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_js', extensions: ['app-routing.module.js'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_smart_component_ts', extensions: ['page.ts', 'container.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_smart_component_js', extensions: ['page.js', 'container.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_service_ts', extensions: ['service.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_service_js', extensions: ['service.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_component_ts2', extensions: ['component.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_component_js2', extensions: ['component.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_directive_ts2', extensions: ['directive.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_directive_js2', extensions: ['directive.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_module_ts2', extensions: ['module.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_module_js2', extensions: ['module.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_pipe_ts2', extensions: ['pipe.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_pipe_js2', extensions: ['pipe.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_ts2', extensions: ['routing.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_js2', extensions: ['routing.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_ts2', extensions: ['app-routing.module.ts'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_routing_js2', extensions: ['app-routing.module.js'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_smart_component_ts2', extensions: ['page.ts', 'container.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_smart_component_js2', extensions: ['page.js', 'container.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_service_ts2', extensions: ['service.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ng_service_js2', extensions: ['service.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ansible', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].ansible], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'antlr', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].antlr], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'anyscript', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].anyscript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'apache', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].apache], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'apib', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].apib], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'applescript', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].applescript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'arduino', extensions: ['ino', 'pde'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'asp', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].asp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'aspx', extensions: ['aspx', 'ascx'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'assembly', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].assembly], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'audio',
            extensions: ['aac', 'act', 'aiff', 'amr', 'ape', 'au', 'dct', 'dss', 'dvf', 'flac', 'gsm',
                'iklax', 'ivs', 'm4a', 'm4b', 'm4p', 'mmf', 'mogg', 'mp3', 'mpc', 'msv', 'oga', 'ogg', 'opus',
                'ra', 'raw', 'tta', 'vox', 'wav', 'wma'],
            format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'aurelia', extensions: ['aurelia.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'autohotkey', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].autohotkey], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'autoit', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].autoit], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'avro', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].avro], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'aws', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'babel', extensions: ['.babelrc', 'babelrc.js'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'babel2', extensions: ['.babelrc', 'babelrc.js'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'bat', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].bat], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'binary',
            extensions: ['a', 'app', 'bin', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi', 'dll', 'exe', 'hl', 'ilk',
                'lib', 'n', 'ndll', 'o', 'obj', 'pyc', 'pyd', 'pyo', 'pdb', 'scpt', 'scptd', 'so'],
            format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'bithound', extensions: ['.bithoundrc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'blade', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].blade], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'bolt', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].bolt], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'c', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].c], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'c2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].c], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'c_al', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].c_al], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cabal', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cabal], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cake', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cake], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cakephp', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cert', extensions: ['csr', 'crt', 'cer', 'der', 'pfx', 'p12', 'p7b', 'p7r', 'src', 'crl', 'sst', 'stl'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cf', extensions: ['lucee'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].coldfusion], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cf2', extensions: ['lucee'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].coldfusion], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'cfc', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cfc], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cfc2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cfc], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'cfm', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cfm], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cfm2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cfm], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'cheader', extensions: ['h'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'chef', extensions: ['chefignore', 'berksfile', 'berksfile.lock', 'policyfile'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'class', extensions: ['class'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'circleci', extensions: ['circle.yml'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].clojure], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cmake', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cmake, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cmakecache], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cobol', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cobol], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'codeclimate', extensions: ['.codeclimate.yml'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'codecov', extensions: ['codecov.yml', '.codecov.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'codekit', extensions: ['kit'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'codekit', extensions: ['config.codekit', 'config.codekit2', 'config.codekit3'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'coffeescript', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].coffeescript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'config', extensions: ['env'], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].properties], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'config', extensions: ['.env.example'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'compass', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'coveralls', extensions: ['.coveralls.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cpp', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cpp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cpp2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cpp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'cppheader', extensions: ['hpp'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'crowdin', extensions: ['crowdin.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'crystal', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].crystal], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'csharp', extensions: ['csx'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].csharp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'csproj', extensions: ['csproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'css', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].css], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'csslint', extensions: ['.csslintrc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cssmap', extensions: ['css.map'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cucumber', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].cucumber], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'dal', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].dal], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'dartlang', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].dart], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'db', extensions: ['db'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'dependencies', extensions: ['dependencies.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'delphi', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].pascal], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'dlang', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].dlang], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'diff', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].diff], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-compose.ci-build.yml', 'docker-compose.override.yml', 'docker-compose.vs.debug.yml', 'docker-compose.vs.release.yml', 'docker-cloud.yml'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].dockerfile], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'docker2', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-compose.ci-build.yml', 'docker-compose.override.yml', 'docker-compose.vs.debug.yml', 'docker-compose.vs.release.yml', 'docker-cloud.yml'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].dockerfile], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'doxygen', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].doxygen], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'drone', extensions: ['.drone.yml', '.drone.yml.sig'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'edge', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].edge], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'edge2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].edge], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'ejs', extensions: ['ejs'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'elasticbeanstalk', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'elixir', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].elixir], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'elm', extensions: ['elm-package.json'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].elm], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'elm2', extensions: ['elm-package.json'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].elm], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'emacs', extensions: ['el', 'elc'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ember', extensions: ['.ember-cli'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ensime', extensions: ['ensime'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'eps', extensions: ['eps'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'erb', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].erb], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].erlang], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'erlang2', extensions: ['emakefile', '.emakerfile'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].erlang], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintcache', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'eslint2', extensions: ['.eslintrc', '.eslintignore', '.eslintcache', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'excel', extensions: ['xls', 'xlsx', 'xlsm', 'ods'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'favicon', extensions: ['favicon.ico'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'firebase', extensions: ['.firebaserc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'flash', extensions: ['swf', 'swc'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'flow', extensions: ['js.flow'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'flow', extensions: ['.flowconfig'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'fortran', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].fortran], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'fsharp', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].fsharp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'fsproj', extensions: ['fsproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'freemarker', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].freemarker], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'fusebox', extensions: ['fuse.js'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'galen', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].galen], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'galen2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].galen], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].git], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gamemaker', extensions: ['gmx'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].gamemaker], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gamemaker2', extensions: ['yy', 'yyp'], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].gamemaker2], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gamemaker81', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].gamemaker81], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'glsl', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].glsl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'go', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].go], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'godot', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].godot], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gradle', extensions: ['gradle'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'graphql', extensions: ['.gqlconfig'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].graphql], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'graphviz', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].graphviz], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'groovy', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].groovy], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'groovy2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].groovy], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        {
            icon: 'grunt', extensions: [
                'gruntfile.coffee',
                'gruntfile.babel.coffee',
                'gruntfile.js',
                'gruntfile.babel.js',
                'gruntfile.ts',
                'gruntfile.babel.ts',
            ],
            filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        {
            icon: 'gulp', extensions: [
                'gulpfile.coffee',
                'gulpfile.babel.coffee',
                'gulpfile.js',
                'gulpfile.babel.js',
                'gulpfile.ts',
                'gulpfile.babel.ts',
            ],
            filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'haml', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].haml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'handlebars', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].handlebars], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'handlebars2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].handlebars], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'harbour', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].harbour], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'haskell', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].haskell, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].literatehaskell], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'haskell2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].haskell, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].literatehaskell], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'haxe', extensions: ['haxelib.json'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].haxe], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'haxedevelop', extensions: ['hxproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'hlsl', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].hlsl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'html', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].html], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'htmlhint', extensions: ['.htmlhintrc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'http', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].http], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'idris', extensions: ['idr', 'lidr'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'idrisbin', extensions: ['ibc'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'idrispkg', extensions: ['ipkg'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'tiff', 'ico'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ini', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].ini], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'infopath', extensions: ['infopathxml', 'xsn', 'xsf', 'xtp2'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ionic', extensions: ['ionic.project', 'ionic.config.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jar', extensions: ['jar'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'java', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].java], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jbuilder', extensions: ['jbuilder'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jenkins', extensions: ['jenkinsfile'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jest', extensions: ['jest.config.js', 'jest.json', 'jest.config.json', '.jestrc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jinja', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].jinja], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'js', extensions: [], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].javascript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'js_official', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].javascript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'jsconfig', extensions: ['jsconfig.json'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jshint', extensions: ['.jshintrc', '.jshintignore'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jsmap', extensions: ['js.map'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'json', extensions: [], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].json, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].textmatejson], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'json_official', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].json, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].textmatejson], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'json2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].json, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].textmatejson], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'jsonld', extensions: ['jsonld', 'json-ld'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'jsp', extensions: ['jsp'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'julia', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].julia], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'julia2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].julia], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'key', extensions: ['key', 'pem'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'kite', extensions: ['.kiteignore'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'kitchenci', extensions: ['.kitchen.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'kotlin', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].kotlin], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'layout', extensions: ['master', 'layout.html', 'layout.htm'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'layout', extensions: ['layout.html', 'layout.htm'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lerna', extensions: ['lerna.json'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'less', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].less], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'license', extensions: ['enc'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md', 'license.txt', 'licence.txt'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lisp', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].lisp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lime', extensions: ['hxp'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lime', extensions: ['include.xml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'liquid', extensions: ['liquid'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'locale', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'log', extensions: ['log'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lsl', extensions: ['lsl'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lua', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].lua], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'lync', extensions: ['crec', 'ocrec'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'makefile', extensions: ['makefile'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'makefile', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].makefile], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'manifest', extensions: ['manifest'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'manifest_skip', extensions: ['manifest.skip'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'manifest_bak', extensions: ['manifest.bak'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'map', extensions: ['map'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].markdown], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'markdownlint', extensions: ['.markdownlint.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'marko', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].marko], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'markojs', extensions: ['marko.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'matlab', extensions: ['fig', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].matlab], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].png },
        { icon: 'meteor', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'mjml', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].mjml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'mson', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].mson], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'mustache', extensions: ['mustache', 'mst'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'nim', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].nim], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'njsproj', extensions: ['njsproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'node', extensions: ['.node-version', '.nvmrc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'node2', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json', 'package-lock.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'nsi', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].nsis], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'nunjucks', extensions: ['nunj', 'njs'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].nunjucks], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'objectivec', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].objectivec], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'objectivecpp', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].objectivecpp], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ocaml', extensions: ['.merlin'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].ocaml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'onenote', extensions: ['one', 'onepkg', 'onetoc', 'onetoc2', 'sig'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'opencl', extensions: ['cl', 'opencl'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'openHAB', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].openHAB], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'org', extensions: ['org'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'outlook', extensions: ['pst', 'bcmx', 'otm', 'msg', 'oft'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'package', extensions: ['pkg'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'patch', extensions: ['patch'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'pcl', extensions: ['pcd'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'pdf', extensions: ['pdf'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'pdf2', extensions: ['pdf'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'perl', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].perl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'perl2', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].perl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'perl6', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].perl6], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'photoshop', extensions: ['psd'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'photoshop2', extensions: ['psd'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].php], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'php2', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].php], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'php3', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].php], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'phpunit', extensions: ['phpunit', 'phpunit.xml', 'phpunit.xml.dist'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plsql', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].plsql], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plsql_package', extensions: ['pck'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plsql_package_body', extensions: ['pkb'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plsql_package_header', extensions: ['pkh'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plsql_package_spec', extensions: ['pks'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'poedit', extensions: ['po', 'mo'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'polymer', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].polymer], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'postcss', extensions: ['.postcssrc.js', 'postcss.config.js'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].postcss], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'powerpoint', extensions: ['pot', 'potx', 'potm', 'pps', 'ppsx', 'ppsm', 'ppt', 'pptx', 'pptm', 'pa', 'ppa', 'ppam', 'sldm', 'sldx'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'powershell', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].powershell], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'procfile', extensions: ['procfile'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'progress', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].openEdge], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'prolog', extensions: ['pro', 'P'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].prolog], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'protobuf', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].protobuf], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'publisher', extensions: ['pub', 'puz'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'puppet', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].puppet], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'pug', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].pug], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'purescript', extensions: [], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].purescript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'python', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].python], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'qlikview', extensions: ['qvd', 'qvw'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].qlik], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'r', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].r], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rails', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rake', extensions: ['rake'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rake', extensions: ['rakefile'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'raml', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].raml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'razor', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].razor], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'reactjs', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].javascriptreact], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'reacttemplate', extensions: ['rt'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'reactts', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].typescriptreact], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'reason', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].reason], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rest', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].restructuredtext], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'registry', extensions: ['reg'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'riot', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].riot], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'robotframework', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].robot], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rollup', extensions: ['rollup.config.js', 'rollup.config.ts'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rspec', extensions: ['.rspec'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ruby', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].ruby], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'rust', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].rust], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'saltstack', extensions: ['sls'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sass', extensions: ['sass'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sbt', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].sbt], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'scala', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].scala], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'script', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].vbscript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'scss', extensions: ['scssm'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].scss], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sequelize', extensions: ['.sequelizerc'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'shaderlab', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].shaderlab], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'shell', extensions: ['fish'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].shellscript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'slim', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].slim], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sln', extensions: ['sln'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'smarty', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].smarty], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'snyk', extensions: ['.snyk'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'solidity', extensions: [], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].solidity], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'source', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sqf', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].sqf], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sql', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].sql], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sss', extensions: ['sss'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'style', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js', '.stylelintignore'], light: true, filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'stylus', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].stylus], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'storyboard', extensions: ['storyboard'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'storybook', extensions: ['story.js', 'stories.js'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'svg', extensions: ['svg'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'swagger', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].swagger], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'swift', extensions: ['package.pins'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].swift], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'tcl', extensions: ['tcl', 'exp'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'terraform', extensions: ['tfstate'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].terraform], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'test', extensions: ['tst'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'testjs', extensions: ['test.js', 'spec.js', 'test.jsx', 'spec.jsx'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'testts', extensions: ['test.ts', 'test.tsx', 'spec.ts', 'spec.tsx'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'tex', extensions: ['texi'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].tex, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].latex], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'text', extensions: ['csv'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].plaintext], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'textile', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].textile], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'tfs', extensions: ['.tfignore'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'todo', extensions: ['todo'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'toml', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].toml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'travis', extensions: ['.travis.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'tsconfig', extensions: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.spec.json', 'tsconfig.e2e.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'tslint', extensions: ['tslint.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'twig', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].twig], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typescript', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].typescript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typescript_official', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].typescript], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'typescriptdef', extensions: ['d.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typescriptdef_official', extensions: ['d.ts'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'vagrant', extensions: ['vagrantfile'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vash', extensions: ['vash'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vb', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].vb], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vba', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].vba], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vbhtml', extensions: ['vbhtml'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vbproj', extensions: ['vbproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vcxproj', extensions: ['vcxproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vhdl', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].vhdl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'video',
            extensions: ['3g2', '3gp', 'asf', 'amv', 'avi', 'divx', 'qt', 'f4a', 'f4b', 'f4p', 'f4v', 'flv',
                'm2v', 'm4v', 'mkv', 'mk3d', 'mov', 'mp2', 'mp4', 'mpe', 'mpeg', 'mpeg2', 'mpg', 'mpv', 'nsv',
                'ogv', 'rm', 'rmvb', 'svi', 'vob', 'webm', 'wmv'],
            format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'view', extensions: [], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].viml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'volt', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].volt], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'vscode',
            extensions: [
                'vscodeignore.json',
                'launch.json',
                'tasks.json',
                '.vscodeignore',
            ],
            filename: true,
            format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'vsix', extensions: ['vsix'], light: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vue', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].vue], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'watchmanconfig', extensions: ['.watchmanconfig'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'webpack',
            extensions: [
                'webpack.base.conf.coffee',
                'webpack.base.conf.js',
                'webpack.base.conf.ts',
                'webpack.common.coffee',
                'webpack.common.js',
                'webpack.common.ts',
                'webpack.config.coffee',
                'webpack.config.base.coffee',
                'webpack.config.common.coffee',
                'webpack.config.dev.coffee',
                'webpack.config.development.coffee',
                'webpack.config.staging.coffee',
                'webpack.config.test.coffee',
                'webpack.config.prod.coffee',
                'webpack.config.production.coffee',
                'webpack.config.js',
                'webpack.config.base.js',
                'webpack.config.common.js',
                'webpack.config.dev.js',
                'webpack.config.development.js',
                'webpack.config.staging.js',
                'webpack.config.test.js',
                'webpack.config.prod.js',
                'webpack.config.production.js',
                'webpack.config.ts',
                'webpack.config.base.ts',
                'webpack.config.common.ts',
                'webpack.config.dev.ts',
                'webpack.config.development.ts',
                'webpack.config.staging.ts',
                'webpack.config.test.ts',
                'webpack.config.prod.ts',
                'webpack.config.production.ts',
                'webpack.config.babel.js',
                'webpack.config.base.babel.js',
                'webpack.config.common.babel.js',
                'webpack.config.dev.babel.js',
                'webpack.config.development.babel.js',
                'webpack.config.staging.babel.js',
                'webpack.config.test.babel.js',
                'webpack.config.prod.babel.js',
                'webpack.config.production.babel.js',
                'webpack.dev.coffee',
                'webpack.dev.js',
                'webpack.dev.ts',
                'webpack.dev.conf.coffee',
                'webpack.dev.conf.js',
                'webpack.dev.conf.ts',
                'webpack.prod.coffee',
                'webpack.prod.js',
                'webpack.prod.ts',
                'webpack.prod.conf.coffee',
                'webpack.prod.conf.js',
                'webpack.prod.conf.ts',
                'webpack.mix.coffee',
                'webpack.mix.js',
                'webpack.mix.ts',
                'webpack.test.conf.coffee',
                'webpack.test.conf.js',
                'webpack.test.conf.ts',
            ],
            filename: true,
            format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'wercker', extensions: ['wercker.yml'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'word', extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'wxml', extensions: ['wxml'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'wxss', extensions: ['wxss'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'xcode', extensions: ['xcodeproj'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'xib', extensions: ['xib'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'xliff', extensions: ['xliff', 'xlf'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'xml', extensions: ['pex', 'tmlanguage'], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].xml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'xsl', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].xsl], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'yaml', extensions: ['yml'], light: true, languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].yaml, __WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].textmateyaml], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'yang', extensions: [], languages: [__WEBPACK_IMPORTED_MODULE_0__languages__["a" /* languages */].yang], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'yarn', extensions: ['yarn.lock', '.yarnrc', '.yarnclean', '.yarn-integrity', '.yarn-metadata.json', '.yarnignore'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'yeoman', extensions: ['.yo-rc.json'], filename: true, format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'zip2', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: __WEBPACK_IMPORTED_MODULE_1__fileFormat__["a" /* FileFormat */].svg, disabled: true },
    ],
};
//# sourceMappingURL=supportedExtensions.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/supportedFolders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extensions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileFormat__ = __webpack_require__("../../../../../src/app/pipe/fileFormat.ts");
/* tslint:disable max-line-length */

var extensions = {
    default: {
        folder: { icon: 'folder', format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        root_folder: { icon: 'root_folder', format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
    },
    supported: [
        { icon: 'aurelia', extensions: ['aurelia_project'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'aws', extensions: ['aws', '.aws'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'binary', extensions: ['bin', '.bin'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'bower', extensions: ['bower_components'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'cake', extensions: ['cake', '.cake'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'chef', extensions: ['chef', '.chef'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'circleci', extensions: ['.circleci'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'composer', extensions: ['composer', '.composer'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'client', extensions: ['client'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'config', extensions: ['config', '.config', 'ini', '.ini', 'initializers', '.initializers'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'css', extensions: ['css', '_css'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'debian', extensions: ['debian'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'dist', extensions: ['dist', 'out', 'export', 'build', 'release'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'docker', extensions: ['docker', '.docker'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'docs', extensions: ['docs', 'doc'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'elasticbeanstalk', extensions: ['.elasticbeanstalk', '.ebextensions'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'flow', extensions: ['flow'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'fonts', extensions: ['fonts', 'font', 'fnt'], light: true, format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'git', extensions: ['.git', 'submodules', '.submodules'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'github', extensions: ['.github'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gitlab', extensions: ['.gitlab'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'gcp', extensions: ['gcp', '.gcp'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'haxelib', extensions: ['haxelib'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'js', extensions: ['js'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'kubernetes', extensions: ['kubernetes', 'k8s', 'kube', 'kuber'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'idea', extensions: ['.idea'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'images', extensions: ['images', 'image', 'img', 'icons', 'icon', 'ico'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'include', extensions: ['include', 'includes', 'incl'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'less', extensions: ['less', '_less'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'library', extensions: ['lib', '.lib'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'locale', extensions: ['locale', 'locales', 'i18n', 'g11n'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'log', extensions: ['log', 'logs'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'mjml', extensions: ['mjml', '.mjml'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'mongodb', extensions: ['mongodb'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'node', extensions: ['node_modules'], light: true, format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'nuget', extensions: ['.nuget'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'package', extensions: ['package', 'packages', '.package', '.packages'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'paket', extensions: ['.paket'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'php', extensions: ['php'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'plugin', extensions: ['plugin', '.plugin', 'plugins', '.plugins'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'private', extensions: ['private', '.private'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'public', extensions: ['public', '.public'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'redis', extensions: ['redis'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'ravendb', extensions: ['ravendb'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'meteor', extensions: ['.meteor'], light: true, format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'sass', extensions: ['sass', 'scss', '_sass', '_scss'], light: true, format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'script', extensions: ['script', 'scripts'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'src', extensions: ['src', 'source', 'sources'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'server', extensions: ['server'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'style', extensions: ['style', 'styles'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        {
            icon: 'test', extensions: [
                'tests',
                '.tests',
                'test',
                '.test',
                '__tests__',
                '__test__',
                'spec',
                '.spec',
                'specs',
                '.specs'
            ],
            format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg,
        },
        { icon: 'tools', extensions: ['tools', '.tools'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typescript', extensions: ['typescript', 'ts'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typings', extensions: ['typings'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'typings2', extensions: ['typings'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg, disabled: true },
        { icon: 'vagrant', extensions: ['vagrant', '.vagrant'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'view', extensions: ['html', 'view', 'views'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vs', extensions: ['.vs'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vscode', extensions: ['.vscode'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'vscode_test', extensions: ['.vscode-test'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'webpack', extensions: ['webpack'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
        { icon: 'www', extensions: ['www', 'wwwroot'], format: __WEBPACK_IMPORTED_MODULE_0__fileFormat__["a" /* FileFormat */].svg },
    ],
};
//# sourceMappingURL=supportedFolders.js.map

/***/ }),

/***/ "../../../../../src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var path = window['path'], glob = window['glob'], fs = window['fs'];
var ApiService = (function () {
    function ApiService() {
        /**
         * 工作目录
         */
        this.projectDir = null;
        /**
         * 目录下的所有目录，文件
         */
        this.files = [];
        this.dispayArea = [{
                open: true,
                active: true,
                type: 'code',
                url: 'https://www.bilibili.com/'
            }, {
                open: false,
                active: false,
                type: 'display',
                url: 'src/displayWebview.html'
            }];
        this.firstSpace = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /**
     * 打开软件时自动加载工作目录
     */
    ApiService.prototype.initProjectDir = function () {
        var _this = this, dir = localStorage.getItem('projectDir');
        if (dir) {
            fs.stat(dir, function (er, stat) {
                if (er) {
                    console.error(er);
                    return;
                }
                if (stat.isDirectory()) {
                    _this.projectDir = dir;
                    _this.readDir(dir, _this.files);
                }
            });
        }
    };
    /**
     * 打开目录
     * @param callback
     */
    ApiService.prototype.openFile = function (callback) {
        var _this = this;
        window['remote'].dialog.showOpenDialog({
            title: '请选择文件目录',
            properties: ['openDirectory', 'multiSelections']
        }, function (filePaths) {
            callback(filePaths);
            //this.getCurrentDirFiles(filePaths[0],result);
            _this.projectDir = filePaths[0];
            _this.readDir(filePaths[0], _this.files);
            localStorage.setItem('projectDir', filePaths[0]);
            /*let homePath = window['remote'].app.getPath('userData');
            console.log('userData ',homePath);*/
        });
    };
    ApiService.prototype.getCurrentDirFiles = function (filePath, result) {
        glob(path.join(filePath, '*'), function (er, files) {
            if (er) {
                throw er;
            }
            console.log(files);
        });
    };
    /**
     * 读取目录
     * @param filePath
     * @param fileList
     */
    ApiService.prototype.readDir = function (filePath, fileList) {
        var _this = this;
        fs.readdir(filePath, function (er, files) {
            if (er) {
                console.error(er);
                return;
            }
            files.forEach(function (file) {
                var fullPath = path.join(filePath, file);
                fs.stat(fullPath, function (er, stat) {
                    if (er) {
                        console.error(er);
                        return;
                    }
                    //console.log(stat);
                    //如果是文件
                    if (stat.isFile()) {
                        fileList.push({
                            fullPath: fullPath,
                            type: 'file',
                            name: file,
                            opened: false
                        });
                    }
                    //如果是目录
                    if (stat.isDirectory()) {
                        var child = [];
                        fileList.push({
                            fullPath: fullPath,
                            type: 'dir',
                            name: file,
                            expanded: false,
                            child: child
                        });
                        _this.readDir(path.join(filePath, file), child);
                    }
                });
                //console.log(file);
            });
        });
    };
    /**
     * 展开收缩目录
     * @param pathIndex
     */
    ApiService.prototype.togglePath = function (pathIndex) {
        var paths = this.files;
        pathIndex.forEach(function (pathIndex, index) {
            if (index == 0) {
                paths = paths[pathIndex];
            }
            else {
                paths = paths['child'][pathIndex];
            }
        });
        //alert(JSON.stringify(paths));
        paths['expanded'] = !paths['expanded'];
    };
    /**
     * 读取文件
     */
    ApiService.prototype.readFile = function (filePath) {
        var _this = this, fullPath = path.join.apply(null, [this.projectDir].concat(filePath));
        //alert('打开文件'+fullPath);
        var imageExt = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', 'ico', '.svg'], mediaExt = ['.mp4', '.mp3'], pdfExt = ['.pdf'], action = 'openFile';
        imageExt.forEach(function (item) {
            if (fullPath.toLowerCase().endsWith(item)) {
                action = 'openImage';
            }
        });
        pdfExt.forEach(function (item) {
            if (fullPath.toLowerCase().endsWith(item)) {
                action = 'openPdf';
            }
        });
        mediaExt.forEach(function (item) {
            if (fullPath.toLowerCase().endsWith(item)) {
                action = 'openMedia';
            }
        });
        if (action == 'openFile') {
            fs.stat(fullPath, function (er, stat) {
                if (er) {
                    console.error(er);
                    return;
                }
                if (stat.isFile()) {
                    if (stat.size > 1 << 22) {
                    }
                    else {
                        fs.readFile(fullPath, 'utf8', function (err, str) {
                            _this.firstSpace.next({
                                str: str,
                                action: action,
                                path: fullPath
                            });
                        });
                    }
                }
                else {
                }
            });
        }
        else {
            this.firstSpace.next({
                action: action,
                path: fullPath
            });
        }
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

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