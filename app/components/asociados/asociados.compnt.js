System.register(['angular2/core', './asociado-list.compnt', './asociado-select'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, asociado_list_compnt_1, asociado_select_1;
    var AsociadosCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (asociado_list_compnt_1_1) {
                asociado_list_compnt_1 = asociado_list_compnt_1_1;
            },
            function (asociado_select_1_1) {
                asociado_select_1 = asociado_select_1_1;
            }],
        execute: function() {
            AsociadosCompnt = (function () {
                function AsociadosCompnt(_elementRef) {
                    this._elementRef = _elementRef;
                }
                AsociadosCompnt.prototype.ngOnInit = function () {
                    jQuery(this._elementRef.nativeElement).foundation();
                };
                AsociadosCompnt = __decorate([
                    core_1.Component({
                        selector: 'asociados',
                        directives: [asociado_select_1.AsociadoSelect, asociado_list_compnt_1.AsociadoList],
                        templateUrl: 'app/components/asociados/templates/asociados.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AsociadosCompnt);
                return AsociadosCompnt;
            })();
            exports_1("AsociadosCompnt", AsociadosCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvcy5jb21wbnQudHMiXSwibmFtZXMiOlsiQXNvY2lhZG9zQ29tcG50IiwiQXNvY2lhZG9zQ29tcG50LmNvbnN0cnVjdG9yIiwiQXNvY2lhZG9zQ29tcG50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFPRUEseUJBQW9CQSxXQUF1QkE7b0JBQXZCQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7Z0JBQUdBLENBQUNBO2dCQUUvQ0Qsa0NBQVFBLEdBQVJBO29CQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQVhIRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFLQSxXQUFXQTt3QkFDeEJBLFVBQVVBLEVBQUdBLENBQUNBLGdDQUFjQSxFQUFDQSxtQ0FBWUEsQ0FBQ0E7d0JBQzFDQSxXQUFXQSxFQUFFQSxtREFBbURBO3FCQUNqRUEsQ0FBQ0E7O29DQVNEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELDZDQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hc29jaWFkb3MvYXNvY2lhZG9zLmNvbXBudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsXG4gICAgICAgIEluamVjdCxJbnB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXNvY2lhZG9MaXN0fSAgICAgICAgIGZyb20gJy4vYXNvY2lhZG8tbGlzdC5jb21wbnQnO1xuaW1wb3J0IHtBc29jaWFkb1NlbGVjdH0gICAgICAgZnJvbSAnLi9hc29jaWFkby1zZWxlY3QnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuZGVjbGFyZSB2YXIgZm91bmRhdGlvbjphbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2Fzb2NpYWRvcycsXG4gIGRpcmVjdGl2ZXMgOiBbQXNvY2lhZG9TZWxlY3QsQXNvY2lhZG9MaXN0XSxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9hc29jaWFkb3MvdGVtcGxhdGVzL2Fzb2NpYWRvcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBc29jaWFkb3NDb21wbnR7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBqUXVlcnkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5mb3VuZGF0aW9uKCk7XG4gIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
