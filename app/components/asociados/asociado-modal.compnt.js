System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AsociadoModelCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AsociadoModelCompnt = (function () {
                function AsociadoModelCompnt(_elementRef) {
                    this._elementRef = _elementRef;
                }
                AsociadoModelCompnt.prototype.ngOnInit = function () {
                    jQuery(this._elementRef.nativeElement).foundation();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AsociadoModelCompnt.prototype, "asociado", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AsociadoModelCompnt.prototype, "selected", void 0);
                AsociadoModelCompnt = __decorate([
                    core_1.Component({
                        selector: 'asociado-modal',
                        templateUrl: 'app/components/asociados/templates/asociado-item.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AsociadoModelCompnt);
                return AsociadoModelCompnt;
            })();
            exports_1("AsociadoModelCompnt", AsociadoModelCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLW1vZGFsLmNvbXBudC50cyJdLCJuYW1lcyI6WyJBc29jaWFkb01vZGVsQ29tcG50IiwiQXNvY2lhZG9Nb2RlbENvbXBudC5jb25zdHJ1Y3RvciIsIkFzb2NpYWRvTW9kZWxDb21wbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQVNFQSw2QkFBb0JBLFdBQXVCQTtvQkFBdkJDLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtnQkFBR0EsQ0FBQ0E7Z0JBRS9DRCxzQ0FBUUEsR0FBUkE7b0JBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO2dCQUN0REEsQ0FBQ0E7Z0JBUERGO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHlDQUFRQSxVQUFDQTtnQkFDbEJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHlDQUFRQSxVQUFDQTtnQkFQcEJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUtBLGdCQUFnQkE7d0JBQzdCQSxXQUFXQSxFQUFFQSx1REFBdURBO3FCQUNyRUEsQ0FBQ0E7O3dDQVdEQTtnQkFBREEsMEJBQUNBO1lBQURBLENBZEEsQUFjQ0EsSUFBQTtZQWRELHFEQWNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hc29jaWFkb3MvYXNvY2lhZG8tbW9kYWwuY29tcG50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NlcnZlY2Vyb30gICAgICAgICAgICBmcm9tICcuLi8uLi9tb2RlbHMvY2VydmVjZXJvJztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcbmRlY2xhcmUgdmFyIGZvdW5kYXRpb246YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdhc29jaWFkby1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvYXNvY2lhZG9zL3RlbXBsYXRlcy9hc29jaWFkby1pdGVtLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFzb2NpYWRvTW9kZWxDb21wbnR7XG5cbiAgQElucHV0KCkgYXNvY2lhZG87XG4gIEBJbnB1dCgpIHNlbGVjdGVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgalF1ZXJ5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZm91bmRhdGlvbigpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
