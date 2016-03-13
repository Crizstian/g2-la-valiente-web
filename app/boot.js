///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './app.component', 'angular2/core', './logic/newStateDispatcher'], function(exports_1) {
    var browser_1, router_1, http_1, app_component_1, core_1, router_2, newStateDispatcher_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newStateDispatcher_1_1) {
                newStateDispatcher_1 = newStateDispatcher_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                newStateDispatcher_1.stateAndDispatcher
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV3BFLHFCQUFjLEVBQUUsQ0FBQztZQUNqQixtQkFBUyxDQUFDLDRCQUFZLEVBQ3BCO2dCQUNFLHFCQUFjO2dCQUNkLHlCQUFnQjtnQkFDaEIsY0FBTyxDQUFDLHlCQUFnQixFQUNyQixFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO2dCQUNwQyx1Q0FBa0I7YUFDbkIsQ0FBQztpQkFDQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cblxuaW1wb3J0IHtib290c3RyYXB9ICAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSAgICAgICAgICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gICAgICAgICAgICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7ZW5hYmxlUHJvZE1vZGUscHJvdmlkZX0gICBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSxcbiAgICAgICAgSGFzaExvY2F0aW9uU3RyYXRlZ3l9ICAgICBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtzdGF0ZUFuZERpc3BhdGNoZXJ9ICAgICAgIGZyb20gJy4vbG9naWMvbmV3U3RhdGVEaXNwYXRjaGVyJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsXG4gIFtcbiAgICBIVFRQX1BST1ZJREVSUyxcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSxcbiAgICAgICB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksXG4gICAgc3RhdGVBbmREaXNwYXRjaGVyXG4gIF0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
