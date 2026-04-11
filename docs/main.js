"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
    },
    {
        path: 'reviews',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reviews_reviews_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reviews/reviews.module */ 9764)).then(m => m.ReviewsModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _home_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/about-me/about-me.component */ 8031);
/* harmony import */ var _home_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/skills/skills.component */ 3470);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _projects_about_projects_about_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/about-projects/about-projects.component */ 3093);
/* harmony import */ var _projects_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/project-list/project-list.component */ 7723);
/* harmony import */ var _home_about_website_about_website_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/about-website/about-website.component */ 5205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__.HashLocationStrategy }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _home_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__.AboutMeComponent,
        _home_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent,
        _projects_about_projects_about_projects_component__WEBPACK_IMPORTED_MODULE_8__.AboutProjectsComponent,
        _projects_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_9__.ProjectListComponent,
        _home_about_website_about_website_component__WEBPACK_IMPORTED_MODULE_10__.AboutWebsiteComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [["id", "footer", 1, "footer", "has-background-black"], [1, "content", "has-text-centered"], [1, "is-italic", "has-text-white"], ["href", "https://www.linkedin.com/in/rodrigo-alonso-garc\u00EDa-amorena/", "target", "_blank", 1, "is-bold", "has-text-white", "mx-3"], ["href", "mailto:rodrigoalonso@rocketmail.com", 1, "is-bold", "has-text-white", "mx-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Made by Rodrigo Alonso in 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n  position: relative;\n  top: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxrQkFBQTtFQUFvQixTQUFBO0FBRzlCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDEwMCV9Il19 */", "*[_ngcontent-%COMP%] {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSSxXQUFBO0FBRUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIiogeyBjbGVhcjpib3RoOyB9Il19 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = ["navBurger"];
const _c1 = ["navMenu"];
class HeaderComponent {
    toggleNavbar() {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navBurger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navMenu = _t.first);
    } }, decls: 22, vars: 0, consts: [["id", "header", "role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-black", "py-1"], [1, "navbar-brand"], ["routerLink", "", 1, "navbar-item", "ml-2", "p-4"], ["src", "assets/icons/Kaoser.png"], ["routerLink", "projects", 1, "navbar-item", "mx-4", "small-text", "is-italic"], ["routerLink", "reviews", 1, "navbar-item", "mx-4", "small-text", "is-italic"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarSocials", 1, "navbar-burger", 3, "click"], ["navBurger", ""], ["aria-hidden", "true"], ["id", "navbarSocials", 1, "navbar-menu"], ["navMenu", ""], ["id", "socials"], ["href", "https://github.com/TheKaoser", "target", "_blank", 1, "navbar-item", "p-4", "mr-3", "is-pulled-right"], ["src", "assets/icons/GitHub.png"], ["href", "https://www.twitch.tv/thekaoser", "target", "_blank", 1, "navbar-item", "p-4", "mr-3", "is-pulled-right"], ["src", "assets/icons/Twitch.png"], ["href", "https://www.youtube.com/channel/UCVJ3aNNjDRFC-OzKfaAbTrQ", "target", "_blank", 1, "navbar-item", "p-4", "mr-3", "is-pulled-right"], ["src", "assets/icons/Youtube.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "REVIEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8)(11, "span", 8)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9, 10)(15, "div", 11)(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["#header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxnQkFBQTtFQUFrQixRQUFBO0FBRzVCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwcHg7IH0iXX0= */", "#navbarSocials[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsVUFBQTtFQUFZLHlCQUFBO0FBRzdCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFyU29jaWFscyB7IHBhZGRpbmc6IDA7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH0iXX0= */", "#socials[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxhQUFBO0VBQWUseUJBQUE7RUFBMkIsU0FBQTtFQUFXLHVCQUFBO0FBS2hFIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjc29jaWFscyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IG1hcmdpbjogMDsgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH0iXX0= */", ".navbar-item[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsNkJBQUE7RUFBK0IscUJBQUE7RUFBdUIsc0NBQUE7QUFJM0UiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItaXRlbTpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0OyB9Il19 */"] });


/***/ }),

/***/ 8031:
/*!*****************************************************!*\
  !*** ./src/app/home/about-me/about-me.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMeComponent": () => (/* binding */ AboutMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutMeComponent {
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 25, vars: 0, consts: [[1, "splashart"], ["src", "assets/imgs/SplashArt.png", 1, "main-img"], [1, "title"], ["id", "about-me"], ["id", "me-text"], [1, "is-bold", "big-text"], [1, "is-italic", "small-text"], ["id", "photo-div"], ["id", "photo-img", "src", "assets/imgs/Rodrigo.png"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rodrigo Alonso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DEVELOPER & PLAYER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " From Playmobil, Magic: The Gathering and Warhammer, I've always loved playing games and imagining new worlds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br")(12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Even before studying Computer Science, I knew I wanted to build a career creating immersive experiences limited only by imagination. That passion led me to pursue a Master's degree in Game Development immediately after earning my degree. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br")(15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Currently, I'm part of my biggest game project: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fatal: Unleashed Darkness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", where I lead the programming team and contribute to the game design. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Over the years, I've built more than 10 games from scratch, often participating in game jams along the way. Each project has been a valuable lesson in game design, team collaboration, art, and development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["#about-me[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: auto;\n  margin-bottom: 5%;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQUE7RUFBWSxhQUFBO0VBQWUsWUFBQTtFQUFjLGlCQUFBO0VBQW1CLHVCQUFBO0VBQXlCLG1CQUFBO0VBQXFCLE9BQUE7QUFRdEgiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0LW1lIHsgd2lkdGg6IDkwJTsgZGlzcGxheTogZmxleDsgbWFyZ2luOiBhdXRvOyBtYXJnaW4tYm90dG9tOiA1JTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNSU7IH0iXX0= */", "#me-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 45%;\n  color: white;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGFBQUE7RUFBZSxzQkFBQTtFQUF3Qix1QkFBQTtFQUF5QixVQUFBO0VBQVksWUFBQTtFQUFjLG1CQUFBO0FBT3JHIiwiZmlsZSI6ImFib3V0LW1lLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIiNtZS10ZXh0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiA0NSU7IGNvbG9yOiB3aGl0ZTsgdGV4dC1hbGlnbjoganVzdGlmeTsgfSJdfQ== */", "#photo-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGFBQUE7RUFBZSxzQkFBQTtFQUF3Qix1QkFBQTtFQUF5QixVQUFBO0VBQVksU0FBQTtBQU16RiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG8tZGl2IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiAzMCU7IG1hcmdpbjogMDsgfSJdfQ== */", "#photo-img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLG1CQUFBO0VBQXFCLFdBQUE7QUFHbEMiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bob3RvLWltZyB7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHdpZHRoOiAxMDAlOyB9Il19 */", "@media screen and (max-width: 1200px) {\n  #about-me[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  #me-text[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n\n  #photo-div[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF1QztJQUFZLHNCQUFBO0VBR2pEOztFQUgyRTtJQUFVLFVBQUE7SUFBWSxZQUFBO0VBUWpHOztFQVJpSDtJQUFZLFlBQUE7SUFBYyxVQUFBO0VBYTNJO0FBQ0YiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXsgI2Fib3V0LW1lIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSAjbWUtdGV4dHsgd2lkdGg6IDkwJTsgbWFyZ2luOiBhdXRvOyB9ICNwaG90by1kaXZ7IG1hcmdpbjogYXV0bzsgd2lkdGg6IDkwJTsgfX0iXX0= */"] });


/***/ }),

/***/ 5205:
/*!***************************************************************!*\
  !*** ./src/app/home/about-website/about-website.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutWebsiteComponent": () => (/* binding */ AboutWebsiteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AboutWebsiteComponent {
}
AboutWebsiteComponent.ɵfac = function AboutWebsiteComponent_Factory(t) { return new (t || AboutWebsiteComponent)(); };
AboutWebsiteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutWebsiteComponent, selectors: [["app-about-website"]], decls: 19, vars: 0, consts: [["id", "about-list"], [1, "about-element"], ["routerLink", "projects"], [1, "about-components"], ["id", "about-text-left", 1, "about-texts"], [1, "big-text", "is-bold"], [1, "small-text", "is-italic"], ["src", "assets/imgs/SuckedSouls.png", 1, "about-image"], ["routerLink", "reviews"], ["src", "assets/imgs/ReviewsCut.png", 1, "about-image"], ["id", "about-text-right", 1, "about-texts"]], template: function AboutWebsiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EXPLORE MY PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Whatever your taste in video games is, you will find something for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "a", 8)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "READ MY REVIEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read my thoughts on some of the most iconic games of all times.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["#about-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLFdBQUE7QUFLMUUiLCJmaWxlIjoiYWJvdXQtd2Vic2l0ZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlIH0iXX0= */", ".about-element[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  background-color: #6f56ff;\n  border-radius: 10px;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSx5QkFBQTtFQUEyQixtQkFBQTtFQUFxQixrQkFBQTtBQU1qRyIsImZpbGUiOiJhYm91dC13ZWJzaXRlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1lbGVtZW50IHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogNzAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY1NmZmOyBib3JkZXItcmFkaXVzOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxMCU7IH0iXX0= */", ".about-element[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVCLHNCQUFBO0VBQXdCLHNDQUFBO0FBRy9DIiwiZmlsZSI6ImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWVsZW1lbnQ6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDsgfSJdfQ== */", ".about-components[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9CLGFBQUE7RUFBZSw4QkFBQTtBQUduQyIsImZpbGUiOiJhYm91dC13ZWJzaXRlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb21wb25lbnRzIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9Il19 */", ".about-texts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5%;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFVBQUE7RUFBWSxVQUFBO0FBS2xFIiwiZmlsZSI6ImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXRleHRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgbWFyZ2luOiA1JTsgd2lkdGg6IDI1JTsgfSJdfQ== */", "#about-text-left[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW1CLFlBQUE7QUFFbkIiLCJmaWxlIjoiYWJvdXQtd2Vic2l0ZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQtdGV4dC1sZWZ0IHsgY29sb3I6IHdoaXRlOyB9Il19 */", "#about-text-right[_ngcontent-%COMP%] {\n  color: white;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9CLFlBQUE7RUFBYyxpQkFBQTtBQUdsQyIsImZpbGUiOiJhYm91dC13ZWJzaXRlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC10ZXh0LXJpZ2h0IHsgY29sb3I6IHdoaXRlOyB0ZXh0LWFsaWduOiByaWdodDsgfSJdfQ== */", ".about-image[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 10px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsVUFBQTtFQUFZLG1CQUFBO0VBQXFCLG1CQUFBO0FBSWhEIiwiZmlsZSI6ImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWltYWdlIHsgd2lkdGg6IDUwJTsgYm9yZGVyLXJhZGl1czogMTBweDsgb2JqZWN0LWZpdDogY29udGFpbjsgfSJdfQ== */", "@media screen and (max-width: 1200px) {\n  .about-components[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .about-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .about-texts[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  #about-text-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVDO0lBQW9CLHNCQUFBO0VBR3pEOztFQUhtRjtJQUFlLFdBQUE7RUFPbEc7O0VBUGlIO0lBQWMsVUFBQTtFQVcvSDs7RUFYNkk7SUFBbUIsZ0JBQUE7RUFlaEs7QUFDRiIsImZpbGUiOiJhYm91dC13ZWJzaXRlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7IC5hYm91dC1jb21wb25lbnRzIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSAuYWJvdXQtaW1hZ2UgeyB3aWR0aDogMTAwJTsgfSAuYWJvdXQtdGV4dHN7IHdpZHRoOiA5MCU7IH0gI2Fib3V0LXRleHQtcmlnaHR7IHRleHQtYWxpZ246IGxlZnQ7IH19Il19 */", "@media screen and (min-width: 1200px) {\n  .about-image[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .about-texts[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXVDO0lBQWUsVUFBQTtFQUdwRDs7RUFIa0U7SUFBYyxVQUFBO0VBT2hGO0FBQ0YiLCJmaWxlIjoiYWJvdXQtd2Vic2l0ZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpeyAuYWJvdXQtaW1hZ2UgeyB3aWR0aDogNTAlOyB9IC5hYm91dC10ZXh0c3sgd2lkdGg6IDYwJSB9fSJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me/about-me.component */ 8031);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills/skills.component */ 3470);
/* harmony import */ var _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-website/about-website.component */ 5205);




class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-about-me")(1, "app-skills")(2, "app-about-website");
    } }, directives: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_0__.AboutMeComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_2__.AboutWebsiteComponent], encapsulation: 2 });


/***/ }),

/***/ 3470:
/*!*************************************************!*\
  !*** ./src/app/home/skills/skills.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SkillsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", skill_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r1.description, " ");
} }
class SkillsComponent {
    constructor() {
        this.skills = [
            { name: "Passionate for Coding", description: "From high level architecture to low level details", image: "assets/imgs/Skill_1.png" },
            { name: "Passionate for Game Design", description: "That is, helping the player achieve a great experience", image: "assets/imgs/Skill_2.png" },
            { name: "Involved in", description: "Networking, Web, Databases, Multi-Threading, Machine Learning...", image: "assets/imgs/Skill_3.png" },
        ];
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 2, vars: 1, consts: [["id", "skill-cards"], ["class", "skill-card", 4, "ngFor", "ngForOf"], [1, "skill-card"], [1, "card-content"], [3, "src"], [1, "is-bold", "medium-text"], [1, "is-italic", "small-text"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["#skill-cards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70%;\n  margin: auto;\n  justify-content: space-between;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxhQUFBO0VBQWUsVUFBQTtFQUFZLFlBQUE7RUFBYyw4QkFBQTtFQUFnQyxpQkFBQTtBQU14RiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiI3NraWxsLWNhcmRzIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDcwJTsgbWFyZ2luOiBhdXRvOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDUlOyB9Il19 */", ".skill-card[_ngcontent-%COMP%] {\n  width: 25%;\n  background-color: #6f56ff;\n  color: white;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxVQUFBO0VBQVkseUJBQUE7RUFBMkIsWUFBQTtFQUFjLG1CQUFBO0FBS25FIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtY2FyZCB7IHdpZHRoOiAyNSU7IGJhY2tncm91bmQtY29sb3I6ICM2ZjU2ZmY7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMTBweDsgfSJdfQ== */", ".skill-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBb0Isc0JBQUE7RUFBd0Isc0NBQUE7QUFHNUMiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbC1jYXJkOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7IH0iXX0= */", "@media screen and (max-width: 1000px) {\n  #skill-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .skill-card[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-bottom: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBdUM7SUFBZSxzQkFBQTtJQUF3QixtQkFBQTtFQUk1RTs7RUFKbUc7SUFBYyxVQUFBO0lBQVksaUJBQUE7RUFTN0g7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXsgI3NraWxsLWNhcmRzIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfSAuc2tpbGwtY2FyZCB7IHdpZHRoOiA2MCU7IG1hcmdpbi1ib3R0b206IDUlOyB9fSJdfQ== */"] });


/***/ }),

/***/ 3093:
/*!*********************************************************************!*\
  !*** ./src/app/projects/about-projects/about-projects.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutProjectsComponent": () => (/* binding */ AboutProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutProjectsComponent {
}
AboutProjectsComponent.ɵfac = function AboutProjectsComponent_Factory(t) { return new (t || AboutProjectsComponent)(); };
AboutProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutProjectsComponent, selectors: [["app-about-projects"]], decls: 5, vars: 0, consts: [[1, "splashart"], ["poster", "assets/imgs/SplashArt.png", "autoplay", "", "muted", "", "loop", "", "preload", "", 1, "main-img"], ["type", "video/mp4", "src", "assets/videos/Projects.mp4"], [1, "title"]], template: function AboutProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7723:
/*!*****************************************************************!*\
  !*** ./src/app/projects/project-list/project-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectListComponent": () => (/* binding */ ProjectListComponent)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects */ 1381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function ProjectListComponent_div_1_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectListComponent_div_1_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.youtube, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectListComponent_div_1_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.gdd, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectListComponent_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const highlight_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](highlight_r9);
} }
function ProjectListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3)(2, "div", 4)(3, "div", 5)(4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul")(11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProjectListComponent_div_1_a_16_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProjectListComponent_div_1_a_17_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProjectListComponent_div_1_a_18_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br")(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProjectListComponent_div_1_div_23_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.engine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.youtube);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.gdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.highlights);
} }
class ProjectListComponent {
    constructor() {
        this.projects = _projects__WEBPACK_IMPORTED_MODULE_0__.projects;
    }
    trackByName(_index, project) {
        return project.name;
    }
}
ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) { return new (t || ProjectListComponent)(); };
ProjectListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectListComponent, selectors: [["app-project-list"]], decls: 2, vars: 2, consts: [["id", "project-list"], ["class", "project", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "project"], ["target", "_blank", 3, "href"], [1, "project-components"], [1, "project-texts"], [1, "project-title", "big-text", "is-bold"], [1, "project-details", "small-text", "is-italic"], [1, "project-links"], ["target", "_blank", "class", "github", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "youtube ml-6", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "gdd ml-6", 3, "href", 4, "ngIf"], [1, "project-image", 3, "src"], [1, "project-highlights"], ["class", "project-highlight", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "github", 3, "href"], ["src", "assets/icons/GitHub.png"], ["target", "_blank", 1, "youtube", "ml-6", 3, "href"], ["src", "assets/icons/Youtube.png"], ["target", "_blank", 1, "gdd", "ml-6", 3, "href"], ["src", "assets/icons/GDD.png"], [1, "project-highlight"], [1, "highlight-text", "is-italic", "small-text"]], template: function ProjectListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectListComponent_div_1_Template, 24, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects)("ngForTrackBy", ctx.trackByName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["#project-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZ0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxrQkFBQTtBQU16RiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3QtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlOyBtYXJnaW4tYm90dG9tOiAxMCU7IH0iXX0= */", ".project[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  margin-bottom: 7.5%;\n  background-color: #6f56ff;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxrQkFBQTtFQUFvQixVQUFBO0VBQVksbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIsbUJBQUE7QUFNM0YiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0IHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogNzAlOyBtYXJnaW4tYm90dG9tOiA3LjUlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY1NmZmOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9Il19 */", ".project[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.3s ease-in-out;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsc0JBQUE7RUFBd0Isc0NBQUE7RUFBd0MsMkNBQUE7QUFJakYiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0OmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7IGJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7IH0iXX0= */", ".project-components[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBc0IsYUFBQTtFQUFlLDhCQUFBO0FBR3JDIiwiZmlsZSI6InByb2plY3QtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jb21wb25lbnRzIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9Il19 */", ".project-texts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 2%;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFVBQUE7RUFBWSw2QkFBQTtBQUtwRSIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtdGV4dHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXJnaW46IDIlOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfSJdfQ== */", ".project-title[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsWUFBQTtBQUVqQiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtdGl0bGUgeyBjb2xvcjogd2hpdGU7IH0iXX0= */", ".project-details[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5%;\n  margin-bottom: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsaUJBQUE7QUFJakQiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWRldGFpbHMgeyBjb2xvcjogd2hpdGU7IG1hcmdpbi10b3A6IDUlOyBtYXJnaW4tYm90dG9tOiA3JTsgfSJdfQ== */", ".project-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBc0Isa0JBQUE7RUFBb0IsU0FBQTtBQUcxQyIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtZGV0YWlscyB1bCB7IHBhZGRpbmctbGVmdDogMjBweDsgbWFyZ2luOiAwOyB9Il19 */", ".project-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  color: white;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBc0IscUJBQUE7RUFBdUIsWUFBQTtFQUFjLGtCQUFBO0FBSTNEIiwiZmlsZSI6InByb2plY3QtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1kZXRhaWxzIGxpIHsgbGlzdC1zdHlsZS10eXBlOiBkaXNjOyBjb2xvcjogd2hpdGU7IG1hcmdpbi1ib3R0b206IDVweDsgfSJdfQ== */", ".project-image[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsbUJBQUE7RUFBcUIsbUJBQUE7QUFHdEMiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWltYWdlIHsgYm9yZGVyLXJhZGl1czogMTBweDsgb2JqZWN0LWZpdDogY29udGFpbjsgfSJdfQ== */", ".project-links[_ngcontent-%COMP%] {\n  align-self: left;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsWUFBQTtBQUduQyIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtbGlua3MgeyBhbGlnbi1zZWxmOiBsZWZ0OyBjb2xvcjogd2hpdGU7IH0iXX0= */", ".project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsZ0JBQUE7QUFFbkIiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWxpbmtzIGEgeyBtYXJnaW4tcmlnaHQ6IDIlOyB9Il19 */", ".github[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBb0IscUJBQUE7RUFBdUIsc0NBQUE7QUFHM0MiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5naXRodWIgaW1nOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDsgfSJdfQ== */", ".youtube[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIscUJBQUE7RUFBdUIsc0NBQUE7QUFHNUMiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi55b3V0dWJlIGltZzpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4zKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7IH0iXX0= */", ".gdd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBaUIscUJBQUE7RUFBdUIsc0NBQUE7QUFHeEMiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5nZGQgaW1nOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDsgfSJdfQ== */", ".project-highlight[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  width: 22.5%;\n  height: clamp(30px, 5vw, 60px);\n  background-color: #6b2cff;\n  color: white;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsYUFBQTtFQUFlLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyw4QkFBQTtFQUFnQyx5QkFBQTtFQUEyQixZQUFBO0VBQWMsbUJBQUE7QUFTbEsiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWhpZ2hsaWdodCB7IGRpc3BsYXk6IGZsZXg7IG1hcmdpbi1yaWdodDogNXB4OyBtYXJnaW4tYm90dG9tOiA1cHg7IHdpZHRoOiAyMi41JTsgaGVpZ2h0OiBjbGFtcCgzMHB4LCA1dncsIDYwcHgpOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmIyY2ZmOyBjb2xvcjogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDEwcHg7IH0iXX0= */", ".highlight-text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsWUFBQTtBQUVsQiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodC10ZXh0IHsgbWFyZ2luOiBhdXRvOyB9Il19 */", ".project-highlights[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: none;\n  position: absolute;\n  display: flex;\n  width: 70%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBc0IsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsYUFBQTtFQUFlLFVBQUE7RUFBWSxlQUFBO0FBTzVHIiwiZmlsZSI6InByb2plY3QtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1oaWdobGlnaHRzIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgdHJhbnNpdGlvbjogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogNzAlOyBtYXJnaW4tbGVmdDogNSU7IH0iXX0= */", "@media screen and (max-width: 1200px) {\n  .project-components[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .project-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .project-texts[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .project-highlight[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n\n  .project-highlights[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    margin: auto;\n    width: 90%;\n  }\n\n  .project[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-bottom: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBdUM7SUFBc0Isc0JBQUE7RUFHM0Q7O0VBSHFGO0lBQWlCLFdBQUE7RUFPdEc7O0VBUHFIO0lBQWdCLFVBQUE7RUFXckk7O0VBWG1KO0lBQW9CLFVBQUE7SUFBWSxZQUFBO0VBZ0JuTDs7RUFoQm1NO0lBQXFCLHNCQUFBO0lBQXdCLHVCQUFBO0lBQXlCLFlBQUE7SUFBYyxVQUFBO0VBdUJ2Ujs7RUF2QnFTO0lBQVUsVUFBQTtJQUFZLGtCQUFBO0VBNEIzVDtBQUNGIiwiZmlsZSI6InByb2plY3QtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpeyAucHJvamVjdC1jb21wb25lbnRzIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSAucHJvamVjdC1pbWFnZSB7IHdpZHRoOiAxMDAlOyB9IC5wcm9qZWN0LXRleHRzeyB3aWR0aDogOTAlOyB9IC5wcm9qZWN0LWhpZ2hsaWdodHsgd2lkdGg6IDg1JTsgbWFyZ2luOiBhdXRvOyB9IC5wcm9qZWN0LWhpZ2hsaWdodHN7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW46IGF1dG87IHdpZHRoOiA5MCU7IH0gLnByb2plY3R7IHdpZHRoOiA5MCU7IG1hcmdpbi1ib3R0b206IDIwJTsgfX0iXX0= */", "@media screen and (min-width: 1200px) {\n  .project-image[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .project-texts[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .project[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBdUM7SUFBaUIsVUFBQTtFQUd0RDs7RUFIb0U7SUFBZ0IsVUFBQTtFQU9wRjs7RUFQa0c7SUFBVyxVQUFBO0VBVzdHO0FBQ0YiLCJmaWxlIjoicHJvamVjdC1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7IC5wcm9qZWN0LWltYWdlIHsgd2lkdGg6IDUwJTsgfSAucHJvamVjdC10ZXh0c3sgd2lkdGg6IDYwJTsgfSAucHJvamVjdCB7IHdpZHRoOiA3MCU7IH19Il19 */"] });


/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _about_projects_about_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-projects/about-projects.component */ 3093);
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list/project-list.component */ 7723);



class ProjectsComponent {
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-about-projects")(1, "app-project-list");
    } }, directives: [_about_projects_about_projects_component__WEBPACK_IMPORTED_MODULE_0__.AboutProjectsComponent, _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__.ProjectListComponent], encapsulation: 2 });


/***/ }),

/***/ 1381:
/*!**************************************!*\
  !*** ./src/app/projects/projects.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
const projects = [
    {
        name: "Fatal: Unleashed Darkness",
        description: "In a remote, desolate place, bizarre events unfold, driving our character to the brink of madness.",
        role: "Lead Programmer & Game Designer - Co-op in a team of +100 people",
        engine: "Unreal Engine 5",
        image: "assets/imgs/fatal.png",
        github: "https://github.com/ProjectSelene/fatal-unleashed-darkness",
        link: "https://selenegames.com/",
        youtube: "https://youtu.be/l22vlFQJBWU",
        highlights: ["Story Driven", "Puzzles"]
    },
    {
        name: "Get'em",
        description: "It's time to put the sheep in their pen, collaborate with another shepherd to enclose them before dangers loom over them.",
        role: "Lead Programmer & Game Designer - Global Game Jam 2024",
        engine: "Unity",
        image: "assets/imgs/Get'em.png",
        github: "https://github.com/TheKaoser/get-em",
        link: "https://globalgamejam.org/games/2024/get-it-them-2",
        highlights: ["Local Multiplayer", "Levels"]
    },
    {
        name: "Sucked Souls",
        description: "The undead can endlessly try to recover humanity by stealing souls... But being human atracts evil.",
        role: "Lead Programmer & Game Designer - The GameDev.tv Game Jam 2022",
        engine: "Unity",
        image: "assets/imgs/SuckedSouls.png",
        github: "https://github.com/TheKaoser/sucked-souls",
        link: "https://thekaoser.itch.io/suck-souls",
        highlights: ["AI Navigation", "Highscore"]
    },
    {
        name: "Time Keeper",
        description: "You are the Timekeeper. You must keep the gears of time moving forward by running against them. Avoid obstacles by changing your way but without changing your path and keep time moving eternally.",
        role: "Lead Programmer & Game Designer - Black and White Jam #8",
        engine: "Unity",
        image: "assets/imgs/TimeKeeper.png",
        github: "https://github.com/TheKaoser/time-keeper",
        link: "https://threeraccoonsgames.itch.io/timekeeper",
        highlights: ["Procedural Gears", "Black & White"]
    },
    {
        name: "UFLINE",
        description: "Push your tactical skills to their limits in this addictive UFO-themed minigame that will make you feel thrilling tension when played alone, and also cause countless friendship breakups when played against your equally noob fellows.",
        role: "Lead Programmer & Game Designer - Opera GX Game Jam",
        engine: "GameMaker Studio 2",
        image: "assets/imgs/UFLINE.png",
        github: "https://github.com/TheKaoser/ufline",
        link: "https://gamejolt.com/games/ufline/637773",
        highlights: ["Local Multiplayer", "Highscore"]
    },
    {
        name: "Basic RPG",
        description: "Kill monsters and bosses, get special items, build unique equipment, trade with other players and fight for victory in the Arena.",
        role: "Lead Programmer & Game Designer - Co-op in a team of 2 people",
        engine: "Unity",
        image: "assets/imgs/BasicRPG.png",
        github: "https://github.com/TheKaoser/basic-rpg",
        youtube: "https://www.youtube.com/watch?v=S8x_KV-txLo",
        gdd: "https://docs.google.com/document/d/1SxjPpwq83R7odQxX4AFcUub99vJhrqGgd_ABC8UGlz0/edit?usp=sharing",
        link: "https://play.google.com/store/apps/details?id=com.dreamingbig.basicrpg",
        highlights: ["Shared Market", "PVP Arena"]
    },
    {
        name: "Planet Fixer",
        description: "The planet is being attacked! Gather resources, repair the damages and... Don't delay!",
        role: "Lead Programmer & Game Designer - Global Game Jam 2020",
        engine: "Unity",
        image: "assets/imgs/PF.png",
        github: "https://github.com/AbsoluteTundra/GGJ2020Game",
        youtube: "https://www.youtube.com/watch?v=kUbibp_TwiY&feature=youtu.be",
        link: "https://play.google.com/store/apps/details?id=com.DreamingBig.PlanetFixer",
        highlights: ["Procedural Planets"]
    },
    {
        name: "Squeenks!",
        description: "On a lost planet, some strange creatures are caught in a non-ending cycle of life and death. You have the power to contemplate what their destiny will be this time.",
        role: "Lead Programmer & Game Designer - Co-op in a team of 2 people",
        engine: "Unreal Engine 4",
        image: "assets/imgs/Squeenks.png",
        github: "https://github.com/TheKaoser/squeenks",
        youtube: "https://www.youtube.com/watch?v=5MPgeJTiENw",
        link: "https://play.google.com/store/apps/details?id=com.DreamingBig.Squeenks",
        highlights: ["Three AIs", "3D Art"]
    },
    {
        name: "Fantastic Wars",
        description: "Put yourself into the shoes of an aspirant to unleash memorable battles for the conquest of the kingdom. Choose among three characters full of personality to fight against other players and face an immensity of situations in which each decision has an echo.",
        role: "Lead Programmer & Game Designer - Co-op in a team of 2 people",
        engine: "Unity",
        image: "assets/imgs/FW.png",
        github: "https://github.com/TheKaoser/fantastic-wars",
        youtube: "https://www.youtube.com/watch?v=cqJkbaSanuE",
        gdd: "https://docs.google.com/document/d/1bHRl48fJPMHmf06XG3-Jzskx57DajT367B8vh_i0LHE/edit?usp=sharing",
        link: "https://play.google.com/store/apps/details?id=com.troncocaotico.fantasticwars",
        highlights: ["RTS Online", "AI Navigation"]
    },
    {
        name: "Three Kingdoms",
        description: "Three kingdoms that fell into misfortune are now habited by an horde of goblins that fight and reproduce at the same rate. Will you become the goblin god?",
        role: "Lead Programmer & Game Designer - Co-op in a team of 3 people",
        engine: "Unity",
        image: "assets/imgs/TTK.png",
        github: "https://github.com/TheKaoser/the-three-kingdoms",
        youtube: "https://www.youtube.com/watch?v=wBYZ2-WWjaYgit",
        highlights: ["TCP logical Server", "3D Art"]
    },
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map