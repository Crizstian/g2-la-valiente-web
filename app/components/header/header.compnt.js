System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HeaderCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderCompnt = (function () {
                function HeaderCompnt() {
                }
                HeaderCompnt = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        templateUrl: 'app/components/header/templates/header.html',
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderCompnt);
                return HeaderCompnt;
            })();
            exports_1("HeaderCompnt", HeaderCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wbnQudHMiXSwibmFtZXMiOlsiSGVhZGVyQ29tcG50IiwiSGVhZGVyQ29tcG50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBSzBCQyxDQUFDQTtnQkFMM0JEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQU1BLFlBQVlBO3dCQUMxQkEsV0FBV0EsRUFBR0EsNkNBQTZDQTt3QkFDM0RBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFVQSxDQUFDQTtxQkFDekJBLENBQUNBOztpQ0FDeUJBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FMMUIsQUFLMkJBLElBQUE7WUFMM0IsdUNBSzJCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgIDogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybCA6ICdhcHAvY29tcG9uZW50cy9oZWFkZXIvdGVtcGxhdGVzL2hlYWRlci5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBudHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
