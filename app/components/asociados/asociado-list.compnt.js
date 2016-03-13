System.register(['angular2/core', 'angular2/router', 'rxjs/Observable', '../../logic/newStateDispatcher', '../../logic/Actions', '../../services/asociado.service', '../../services/Logger.service', './asociado-item.compnt', '../../Pipes/search-asociado'], function(exports_1) {
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
    var core_1, router_1, Observable_1, newStateDispatcher_1, Actions_1, asociado_service_1, Logger_service_1, asociado_item_compnt_1, search_asociado_1;
    var AsociadoList;
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
            },
            function (asociado_item_compnt_1_1) {
                asociado_item_compnt_1 = asociado_item_compnt_1_1;
            },
            function (search_asociado_1_1) {
                search_asociado_1 = search_asociado_1_1;
            }],
        execute: function() {
            AsociadoList = (function () {
                function AsociadoList(_router, _asociadoService, _logger, _elementRef, _dispatcher, _state) {
                    this._router = _router;
                    this._asociadoService = _asociadoService;
                    this._logger = _logger;
                    this._elementRef = _elementRef;
                    this._dispatcher = _dispatcher;
                    this._state = _state;
                }
                AsociadoList.prototype.ngOnInit = function () {
                    // jQuery(this._elementRef.nativeElement).foundation();
                    this._dispatcher.next(new Actions_1.AsociadoActions.Action({
                        type: Actions_1.stateAction.REQUEST_DATA,
                        json: this._asociadoService.getAll()
                    }));
                };
                Object.defineProperty(AsociadoList.prototype, "getAsociados", {
                    get: function () {
                        return this._state.map(function (s) { return s; });
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AsociadoList.prototype, "status", void 0);
                AsociadoList = __decorate([
                    core_1.Component({
                        selector: 'asociado-list',
                        pipes: [search_asociado_1.SearchAsociado],
                        directives: [asociado_item_compnt_1.AsociadoItemCompnt],
                        templateUrl: 'app/components/asociados/templates/asociado-list.html'
                    }),
                    __param(4, core_1.Inject(newStateDispatcher_1.dispatcher)),
                    __param(5, core_1.Inject(newStateDispatcher_1.state)), 
                    __metadata('design:paramtypes', [router_1.Router, asociado_service_1.AsociadoService, Logger_service_1.Logger, core_1.ElementRef, Object, Observable_1.Observable])
                ], AsociadoList);
                return AsociadoList;
            })();
            exports_1("AsociadoList", AsociadoList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLWxpc3QuY29tcG50LnRzIl0sIm5hbWVzIjpbIkFzb2NpYWRvTGlzdCIsIkFzb2NpYWRvTGlzdC5jb25zdHJ1Y3RvciIsIkFzb2NpYWRvTGlzdC5uZ09uSW5pdCIsIkFzb2NpYWRvTGlzdC5nZXRBc29jaWFkb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFVRUEsc0JBQ29CQSxPQUFlQSxFQUNmQSxnQkFBZ0NBLEVBQ2hDQSxPQUFjQSxFQUNkQSxXQUF1QkEsRUFDSEEsV0FBNkJBLEVBQ2xDQSxNQUE0QkE7b0JBTDNDQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDZkEscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFnQkE7b0JBQ2hDQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFDZEEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO29CQUNIQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBa0JBO29CQUNsQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBc0JBO2dCQUNsREEsQ0FBQ0E7Z0JBR2RELCtCQUFRQSxHQUFSQTtvQkFDRUUsdURBQXVEQTtvQkFFdkRBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHlCQUFlQSxDQUFDQSxNQUFNQSxDQUFDQTt3QkFDL0NBLElBQUlBLEVBQUVBLHFCQUFXQSxDQUFDQSxZQUFZQTt3QkFDOUJBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsRUFBRUE7cUJBQ3JDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURGLHNCQUFJQSxzQ0FBWUE7eUJBQWhCQTt3QkFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsQ0FBQ0EsSUFBS0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNDQSxDQUFDQTs7O21CQUFBSDtnQkF2QkRBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLGdDQUFNQSxVQUFDQTtnQkFSbEJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUtBLGVBQWVBO3dCQUM1QkEsS0FBS0EsRUFBUUEsQ0FBQ0EsZ0NBQWNBLENBQUNBO3dCQUM3QkEsVUFBVUEsRUFBR0EsQ0FBQ0EseUNBQWtCQSxDQUFDQTt3QkFDakNBLFdBQVdBLEVBQUVBLHVEQUF1REE7cUJBQ3JFQSxDQUFDQTtvQkFVWUEsV0FBQ0EsYUFBTUEsQ0FBQ0EsK0JBQVVBLENBQUNBLENBQUFBO29CQUNuQkEsV0FBQ0EsYUFBTUEsQ0FBQ0EsMEJBQUtBLENBQUNBLENBQUFBOztpQ0FnQjNCQTtnQkFBREEsbUJBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxJQUFBO1lBaENELHVDQWdDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLWxpc3QuY29tcG50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixcbiAgICAgICAgSW5qZWN0LElucHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9ICAgICAgICAgICAgICAgZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09ic2VydmVyfSAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmVyJztcbmltcG9ydCB7ZGlzcGF0Y2hlcixzdGF0ZX0gICAgIGZyb20gJy4uLy4uL2xvZ2ljL25ld1N0YXRlRGlzcGF0Y2hlcic7XG5pbXBvcnQge0FwcFN0YXRlfSAgICAgICAgICAgICBmcm9tICcuLi8uLi9sb2dpYy9BcHBTdGF0ZSc7XG5pbXBvcnQge0FjdGlvbixBc29jaWFkb0FjdGlvbnMsXG4gICAgICAgIHN0YXRlQWN0aW9ufSAgICAgICAgICBmcm9tICcuLi8uLi9sb2dpYy9BY3Rpb25zJztcbmltcG9ydMKge0Fzb2NpYWRvU2VydmljZX0gICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hc29jaWFkby5zZXJ2aWNlJztcbmltcG9ydCB7TG9nZ2VyfSAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL3NlcnZpY2VzL0xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7Q2VydmVjZXJvfSAgICAgICAgICAgIGZyb20gJy4uLy4uL21vZGVscy9jZXJ2ZWNlcm8nO1xuaW1wb3J0IHtBc29jaWFkb0l0ZW1Db21wbnR9ICAgZnJvbSAnLi9hc29jaWFkby1pdGVtLmNvbXBudCc7XG5pbXBvcnQge1NlYXJjaEFzb2NpYWRvfSAgICAgICBmcm9tICcuLi8uLi9QaXBlcy9zZWFyY2gtYXNvY2lhZG8nO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuZGVjbGFyZSB2YXIgZm91bmRhdGlvbjphbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2Fzb2NpYWRvLWxpc3QnLFxuICBwaXBlcyAgICAgIDogW1NlYXJjaEFzb2NpYWRvXSxcbiAgZGlyZWN0aXZlcyA6IFtBc29jaWFkb0l0ZW1Db21wbnRdLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Fzb2NpYWRvcy90ZW1wbGF0ZXMvYXNvY2lhZG8tbGlzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBc29jaWFkb0xpc3TCoHtcblxuICBASW5wdXQoKSBzdGF0dXM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hc29jaWFkb1NlcnZpY2U6QXNvY2lhZG9TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2dnZXI6TG9nZ2VyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBASW5qZWN0KGRpc3BhdGNoZXIpIHByaXZhdGUgX2Rpc3BhdGNoZXI6IE9ic2VydmVyPEFjdGlvbj4sXG4gICAgICAgICAgICAgIEBJbmplY3Qoc3RhdGUpIHByaXZhdGUgX3N0YXRlOiBPYnNlcnZhYmxlPEFwcFN0YXRlPlxuICAgICAgICAgICAgKSB7fVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZm91bmRhdGlvbigpO1xuXG4gICAgdGhpcy5fZGlzcGF0Y2hlci5uZXh0KG5ldyBBc29jaWFkb0FjdGlvbnMuQWN0aW9uKHtcbiAgICAgIHR5cGU6IHN0YXRlQWN0aW9uLlJFUVVFU1RfREFUQSxcbiAgICAgIGpzb246IHRoaXMuX2Fzb2NpYWRvU2VydmljZS5nZXRBbGwoKVxuICAgIH0pKTtcbiAgfVxuXG4gIGdldCBnZXRBc29jaWFkb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLm1hcChzID0+IHtyZXR1cm4gczt9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
