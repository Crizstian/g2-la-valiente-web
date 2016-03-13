System.register(['angular2/core', 'angular2/router', './asociado-modal.compnt'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, asociado_modal_compnt_1;
    var AsociadoItemCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (asociado_modal_compnt_1_1) {
                asociado_modal_compnt_1 = asociado_modal_compnt_1_1;
            }],
        execute: function() {
            AsociadoItemCompnt = (function () {
                function AsociadoItemCompnt() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AsociadoItemCompnt.prototype, "asociado", void 0);
                AsociadoItemCompnt = __decorate([
                    core_1.Component({
                        selector: 'asociado-item',
                        directives: [router_1.RouterLink, asociado_modal_compnt_1.AsociadoModelCompnt],
                        templateUrl: 'app/components/asociados/templates/asociado-item.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AsociadoItemCompnt);
                return AsociadoItemCompnt;
            })();
            exports_1("AsociadoItemCompnt", AsociadoItemCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLWl0ZW0uY29tcG50LnRzIl0sIm5hbWVzIjpbIkFzb2NpYWRvSXRlbUNvbXBudCIsIkFzb2NpYWRvSXRlbUNvbXBudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUFBO2dCQVNBQyxDQUFDQTtnQkFGQ0Q7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0Esd0NBQVFBLFVBQUNBO2dCQVBwQkE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBS0EsZUFBZUE7d0JBQzVCQSxVQUFVQSxFQUFHQSxDQUFDQSxtQkFBVUEsRUFBQ0EsMkNBQW1CQSxDQUFDQTt3QkFDN0NBLFdBQVdBLEVBQUVBLHVEQUF1REE7cUJBQ3JFQSxDQUFDQTs7dUNBS0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FUQSxBQVNDQSxJQUFBO1lBVEQsbURBU0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Fzb2NpYWRvcy9hc29jaWFkby1pdGVtLmNvbXBudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSAgICAgICAgICAgZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q2VydmVjZXJvfSAgICAgICAgICAgIGZyb20gJy4uLy4uL21vZGVscy9jZXJ2ZWNlcm8nO1xuaW1wb3J0IHtBc29jaWFkb01vZGVsQ29tcG50fSAgZnJvbSAnLi9hc29jaWFkby1tb2RhbC5jb21wbnQnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuZGVjbGFyZSB2YXIgZm91bmRhdGlvbjphbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2Fzb2NpYWRvLWl0ZW0nLFxuICBkaXJlY3RpdmVzIDogW1JvdXRlckxpbmssQXNvY2lhZG9Nb2RlbENvbXBudF0sXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvYXNvY2lhZG9zL3RlbXBsYXRlcy9hc29jaWFkby1pdGVtLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFzb2NpYWRvSXRlbUNvbXBudHtcblxuICBASW5wdXQoKSBhc29jaWFkbztcbiAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
