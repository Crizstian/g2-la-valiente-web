System.register(['angular2/core', 'angular2/router', 'rxjs/Observable', '../../logic/newStateDispatcher', '../../logic/Actions', '../../services/asociado.service', '../../services/Logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, Observable_1, newStateDispatcher_1, Actions_1, asociado_service_1, Logger_service_1;
    var HomeCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (newStateDispatcher_1_1) {
                newStateDispatcher_1 = newStateDispatcher_1_1;
            },
            function (Actions_1_1) {
                Actions_1 = Actions_1_1;
            },
            function (asociado_service_1_1) {
                asociado_service_1 = asociado_service_1_1;
            },
            function (Logger_service_1_1) {
                Logger_service_1 = Logger_service_1_1;
            }],
        execute: function() {
            HomeCompnt = (function () {
                function HomeCompnt(_router, _asociadoService, _logger, _elementRef, _dispatcher, _state) {
                    this._router = _router;
                    this._asociadoService = _asociadoService;
                    this._logger = _logger;
                    this._elementRef = _elementRef;
                    this._dispatcher = _dispatcher;
                    this._state = _state;
                }
                HomeCompnt.prototype.ngOnInit = function () {
                    jQuery(this._elementRef.nativeElement).foundation();
                    this._dispatcher.next(new Actions_1.AsociadoActions.Action({
                        type: Actions_1.stateAction.REQUEST_DATA,
                        json: this._asociadoService.getAll()
                    }));
                };
                HomeCompnt.prototype.ngAfterViewInit = function () {
                    jQuery("#owl-demo-home").owlCarousel({
                        autoPlay: 3000,
                        // stopOnHover : true,
                        // navigation:true,
                        items: 4,
                        itemsDesktop: [1199, 3],
                        itemsDesktopSmall: [979, 3]
                    });
                };
                Object.defineProperty(HomeCompnt.prototype, "getAsociados", {
                    get: function () {
                        return this._state.map(function (s) { return s; });
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeCompnt = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [router_1.RouterLink],
                        templateUrl: 'app/components/home/templates/home.html'
                    }),
                    __param(4, core_1.Inject(newStateDispatcher_1.dispatcher)),
                    __param(5, core_1.Inject(newStateDispatcher_1.state)), 
                    __metadata('design:paramtypes', [router_1.Router, asociado_service_1.AsociadoService, Logger_service_1.Logger, core_1.ElementRef, Object, Observable_1.Observable])
                ], HomeCompnt);
                return HomeCompnt;
            })();
            exports_1("HomeCompnt", HomeCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG50IiwiSG9tZUNvbXBudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wbnQubmdPbkluaXQiLCJIb21lQ29tcG50Lm5nQWZ0ZXJWaWV3SW5pdCIsIkhvbWVDb21wbnQuZ2V0QXNvY2lhZG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBT0VBLG9CQUNvQkEsT0FBZUEsRUFDZkEsZ0JBQWdDQSxFQUNoQ0EsT0FBY0EsRUFDZEEsV0FBdUJBLEVBQ0hBLFdBQTZCQSxFQUNsQ0EsTUFBNEJBO29CQUwzQ0MsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7b0JBQ2ZBLHFCQUFnQkEsR0FBaEJBLGdCQUFnQkEsQ0FBZ0JBO29CQUNoQ0EsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBT0E7b0JBQ2RBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtvQkFDSEEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWtCQTtvQkFDbENBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXNCQTtnQkFDbERBLENBQUNBO2dCQUdkRCw2QkFBUUEsR0FBUkE7b0JBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO29CQUNwREEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEseUJBQWVBLENBQUNBLE1BQU1BLENBQUNBO3dCQUMvQ0EsSUFBSUEsRUFBRUEscUJBQVdBLENBQUNBLFlBQVlBO3dCQUM5QkEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQTtxQkFDckNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFDREYsb0NBQWVBLEdBQWZBO29CQUNFRyxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBO3dCQUNuQ0EsUUFBUUEsRUFBRUEsSUFBSUE7d0JBQ2RBLHNCQUFzQkE7d0JBQ3RCQSxtQkFBbUJBO3dCQUNuQkEsS0FBS0EsRUFBR0EsQ0FBQ0E7d0JBQ1RBLFlBQVlBLEVBQUdBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO3dCQUN2QkEsaUJBQWlCQSxFQUFHQSxDQUFDQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQTtxQkFDNUJBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsc0JBQUlBLG9DQUFZQTt5QkFBaEJBO3dCQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFLQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDMUNBLENBQUNBOzs7bUJBQUFKO2dCQXJDSEE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBS0EsTUFBTUE7d0JBQ25CQSxVQUFVQSxFQUFHQSxDQUFDQSxtQkFBVUEsQ0FBQ0E7d0JBQ3pCQSxXQUFXQSxFQUFFQSx5Q0FBeUNBO3FCQUN2REEsQ0FBQ0E7b0JBUVlBLFdBQUNBLGFBQU1BLENBQUNBLCtCQUFVQSxDQUFDQSxDQUFBQTtvQkFDbkJBLFdBQUNBLGFBQU1BLENBQUNBLDBCQUFLQSxDQUFDQSxDQUFBQTs7K0JBMEIzQkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtZQXZDRCxtQ0F1Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS5jb21wbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFxuICAgICAgICBJbmplY3QsSW5wdXQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZXJMaW5rfSAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gICAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge2Rpc3BhdGNoZXIsc3RhdGV9ICAgICBmcm9tICcuLi8uLi9sb2dpYy9uZXdTdGF0ZURpc3BhdGNoZXInO1xuaW1wb3J0IHtBcHBTdGF0ZX0gICAgICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQXBwU3RhdGUnO1xuaW1wb3J0IHtBY3Rpb24sQXNvY2lhZG9BY3Rpb25zLFxuICAgICAgICBzdGF0ZUFjdGlvbn0gICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQWN0aW9ucyc7XG5pbXBvcnTCoHtBc29jaWFkb1NlcnZpY2V9ICAgICAgZnJvbSAnLi4vLi4vc2VydmljZXMvYXNvY2lhZG8uc2VydmljZSc7XG5pbXBvcnQge0xvZ2dlcn0gICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge0NlcnZlY2Vyb30gICAgICAgICAgICBmcm9tICcuLi8uLi9tb2RlbHMvY2VydmVjZXJvJztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcbmRlY2xhcmUgdmFyIGZvdW5kYXRpb246YW55O1xuZGVjbGFyZSB2YXIgb3dsQ2Fyb3VzZWw6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdob21lJyxcbiAgZGlyZWN0aXZlcyA6IFtSb3V0ZXJMaW5rXSxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ob21lL3RlbXBsYXRlcy9ob21lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXNvY2lhZG9TZXJ2aWNlOkFzb2NpYWRvU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgQEluamVjdChkaXNwYXRjaGVyKSBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgICAgICAgICAgICBASW5qZWN0KHN0YXRlKSBwcml2YXRlIF9zdGF0ZTogT2JzZXJ2YWJsZTxBcHBTdGF0ZT5cbiAgICAgICAgICAgICkge31cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGpRdWVyeSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQobmV3IEFzb2NpYWRvQWN0aW9ucy5BY3Rpb24oe1xuICAgICAgdHlwZTogc3RhdGVBY3Rpb24uUkVRVUVTVF9EQVRBLFxuICAgICAganNvbjogdGhpcy5fYXNvY2lhZG9TZXJ2aWNlLmdldEFsbCgpXG4gICAgfSkpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGpRdWVyeShcIiNvd2wtZGVtby1ob21lXCIpLm93bENhcm91c2VsKHtcbiAgICAgIGF1dG9QbGF5OiAzMDAwLCAvL1NldCBBdXRvUGxheSB0byAzIHNlY29uZHNcbiAgICAgIC8vIHN0b3BPbkhvdmVyIDogdHJ1ZSxcbiAgICAgIC8vIG5hdmlnYXRpb246dHJ1ZSxcbiAgICAgIGl0ZW1zIDogNCxcbiAgICAgIGl0ZW1zRGVza3RvcCA6IFsxMTk5LDNdLFxuICAgICAgaXRlbXNEZXNrdG9wU21hbGwgOiBbOTc5LDNdXG4gICAgfSk7XG4gIH1cblxuICBnZXQgZ2V0QXNvY2lhZG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5tYXAocyA9PiB7cmV0dXJuIHN9KTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
