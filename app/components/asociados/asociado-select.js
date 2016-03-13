System.register(['angular2/core', 'rxjs/Observable', '../../logic/newStateDispatcher', '../../logic/Actions', '../../services/asociado.service'], function(exports_1) {
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
    var core_1, Observable_1, newStateDispatcher_1, Actions_1, asociado_service_1;
    var AsociadoSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }],
        execute: function() {
            AsociadoSelect = (function () {
                function AsociadoSelect(_asociadoService, _dispatcher, _state) {
                    this._asociadoService = _asociadoService;
                    this._dispatcher = _dispatcher;
                    this._state = _state;
                    this.select = new core_1.EventEmitter();
                }
                AsociadoSelect.prototype.ngOnInit = function () {
                    this.select.emit(0);
                    this._dispatcher.next(new Actions_1.AsociadoActions.Action({
                        type: Actions_1.stateAction.REQUEST_DATA,
                        json: this._asociadoService.getAll()
                    }));
                };
                Object.defineProperty(AsociadoSelect.prototype, "getAsociados", {
                    get: function () {
                        return this._state.map(function (s) { return s; });
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AsociadoSelect.prototype, "select", void 0);
                AsociadoSelect = __decorate([
                    core_1.Component({
                        selector: 'asociado-select',
                        template: "\n  <select #sel (change)=\"select.emit(sel.value)\">\n    <option [value]=\"0\">Seleccionar Todos</option>\n    <option [value]=\"asociado.id\" *ngFor=\"#asociado of getAsociados | async\">{{asociado.nombre}}</option>\n  </select>"
                    }),
                    __param(1, core_1.Inject(newStateDispatcher_1.dispatcher)),
                    __param(2, core_1.Inject(newStateDispatcher_1.state)), 
                    __metadata('design:paramtypes', [asociado_service_1.AsociadoService, Object, Observable_1.Observable])
                ], AsociadoSelect);
                return AsociadoSelect;
            })();
            exports_1("AsociadoSelect", AsociadoSelect);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLXNlbGVjdC50cyJdLCJuYW1lcyI6WyJBc29jaWFkb1NlbGVjdCIsIkFzb2NpYWRvU2VsZWN0LmNvbnN0cnVjdG9yIiwiQXNvY2lhZG9TZWxlY3QubmdPbkluaXQiLCJBc29jaWFkb1NlbGVjdC5nZXRBc29jaWFkb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQVlFQSx3QkFDb0JBLGdCQUFnQ0EsRUFDWkEsV0FBNkJBLEVBQ2xDQSxNQUE0QkE7b0JBRjNDQyxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWdCQTtvQkFDWkEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWtCQTtvQkFDbENBLFdBQU1BLEdBQU5BLE1BQU1BLENBQXNCQTtvQkFMckRBLFdBQU1BLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFNekJBLENBQUNBO2dCQUdkRCxpQ0FBUUEsR0FBUkE7b0JBQ0VFLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEseUJBQWVBLENBQUNBLE1BQU1BLENBQUNBO3dCQUMvQ0EsSUFBSUEsRUFBRUEscUJBQVdBLENBQUNBLFlBQVlBO3dCQUM5QkEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQTtxQkFDckNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFFREYsc0JBQUlBLHdDQUFZQTt5QkFBaEJBO3dCQUNFRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFLQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDM0NBLENBQUNBOzs7bUJBQUFIO2dCQW5CREE7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFBQ0Esa0NBQU1BLFVBQXNCQTtnQkFWeENBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUdBLGlCQUFpQkE7d0JBQzVCQSxRQUFRQSxFQUFHQSx5T0FJREE7cUJBQ1hBLENBQUNBO29CQU9ZQSxXQUFDQSxhQUFNQSxDQUFDQSwrQkFBVUEsQ0FBQ0EsQ0FBQUE7b0JBQ25CQSxXQUFDQSxhQUFNQSxDQUFDQSwwQkFBS0EsQ0FBQ0EsQ0FBQUE7O21DQWlCM0JBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7WUFoQ0QsMkNBZ0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hc29jaWFkb3MvYXNvY2lhZG8tc2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT3V0cHV0LEV2ZW50RW1pdHRlcixJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7T2JzZXJ2ZXJ9ICAgICAgICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuaW1wb3J0IHtkaXNwYXRjaGVyLHN0YXRlfSAgICAgZnJvbSAnLi4vLi4vbG9naWMvbmV3U3RhdGVEaXNwYXRjaGVyJztcbmltcG9ydCB7QXBwU3RhdGV9ICAgICAgICAgICAgIGZyb20gJy4uLy4uL2xvZ2ljL0FwcFN0YXRlJztcbmltcG9ydCB7QWN0aW9uLEFzb2NpYWRvQWN0aW9ucyxcbiAgICAgICAgc3RhdGVBY3Rpb259ICAgICAgICAgIGZyb20gJy4uLy4uL2xvZ2ljL0FjdGlvbnMnO1xuaW1wb3J0wqB7QXNvY2lhZG9TZXJ2aWNlfSAgICAgIGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzb2NpYWRvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgOiAnYXNvY2lhZG8tc2VsZWN0JyxcbiAgdGVtcGxhdGUgOiBgXG4gIDxzZWxlY3QgI3NlbCAoY2hhbmdlKT1cInNlbGVjdC5lbWl0KHNlbC52YWx1ZSlcIj5cbiAgICA8b3B0aW9uIFt2YWx1ZV09XCIwXCI+U2VsZWNjaW9uYXIgVG9kb3M8L29wdGlvbj5cbiAgICA8b3B0aW9uIFt2YWx1ZV09XCJhc29jaWFkby5pZFwiICpuZ0Zvcj1cIiNhc29jaWFkbyBvZiBnZXRBc29jaWFkb3MgfCBhc3luY1wiPnt7YXNvY2lhZG8ubm9tYnJlfX08L29wdGlvbj5cbiAgPC9zZWxlY3Q+YFxufSlcbmV4cG9ydCBjbGFzcyBBc29jaWFkb1NlbGVjdCB7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXNvY2lhZG9TZXJ2aWNlOkFzb2NpYWRvU2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChkaXNwYXRjaGVyKSBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgICAgICAgICAgICBASW5qZWN0KHN0YXRlKSBwcml2YXRlIF9zdGF0ZTogT2JzZXJ2YWJsZTxBcHBTdGF0ZT5cbiAgICAgICAgICAgICkge31cblxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCgwKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQobmV3IEFzb2NpYWRvQWN0aW9ucy5BY3Rpb24oe1xuICAgICAgdHlwZTogc3RhdGVBY3Rpb24uUkVRVUVTVF9EQVRBLFxuICAgICAganNvbjogdGhpcy5fYXNvY2lhZG9TZXJ2aWNlLmdldEFsbCgpXG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0IGdldEFzb2NpYWRvcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUubWFwKHMgPT4ge3JldHVybiBzO30pO1xuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
