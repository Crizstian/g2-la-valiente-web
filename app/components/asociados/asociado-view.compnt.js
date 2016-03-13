System.register(['angular2/core', 'angular2/router', '../../services/asociado.service', '../../services/Logger.service', '../disqus/disqus.compnt'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, asociado_service_1, Logger_service_1, disqus_compnt_1;
    var AsociadoViewCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (asociado_service_1_1) {
                asociado_service_1 = asociado_service_1_1;
            },
            function (Logger_service_1_1) {
                Logger_service_1 = Logger_service_1_1;
            },
            function (disqus_compnt_1_1) {
                disqus_compnt_1 = disqus_compnt_1_1;
            }],
        execute: function() {
            AsociadoViewCompnt = (function () {
                function AsociadoViewCompnt(_router, _routeParams, _asociadoService, _logger, _elementRef) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._asociadoService = _asociadoService;
                    this._logger = _logger;
                    this._elementRef = _elementRef;
                    this.asociados = [];
                    this.numeros = [];
                    this.quantity = 0;
                    this.imagenes = [];
                }
                AsociadoViewCompnt.prototype.ngOnInit = function () {
                    var _this = this;
                    // jQuery(this._elementRef.nativeElement).foundation();
                    this.id = this._routeParams.get('id');
                    this.asociado = this._asociadoService.getAll().filter(function (item) { return item.id == _this.id; })[0];
                    (_a = this.imagenes).push.apply(_a, [this.asociado.logo].concat(this.asociado.imagenes));
                    this.image = this.imagenes[0];
                    this.quantity = this._asociadoService.getAll().length;
                    this.identifier = "http://cerarmich.org/#/asociados/" + this.id;
                    this.asociados = this.getRandom();
                    var _a;
                };
                AsociadoViewCompnt.prototype.ngAfterViewInit = function () {
                    jQuery('html, body').animate({
                        scrollTop: jQuery("#asociados").offset().top
                    }, 2500);
                    jQuery("#owl-demo").owlCarousel({
                        autoPlay: 3000,
                        // stopOnHover : true,
                        navigation: true,
                        items: 4,
                        itemsDesktop: [1199, 3],
                        itemsDesktopSmall: [979, 3]
                    });
                };
                AsociadoViewCompnt.prototype.setImage = function (image) {
                    this.image = image;
                };
                AsociadoViewCompnt.prototype.getRandomInt = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                AsociadoViewCompnt.prototype.getRandom = function () {
                    var _this = this;
                    for (var _i = 0, _a = [1, 2, 3, 4, 5]; _i < _a.length; _i++) {
                        var i = _a[_i];
                        var n = this.getRandomInt(1, this.quantity);
                        if (n != this.id)
                            this.numeros.push(n);
                    }
                    return this._asociadoService.getAll()
                        .filter(function (item) { return item.id == _this.numeros.filter(function (n) { return n == item.id; })[0]; });
                };
                AsociadoViewCompnt.prototype.changeNext = function () {
                    var actual = this.imagenes.indexOf(this.image);
                    if ((actual + 1) == this.imagenes.length)
                        this.image = this.imagenes[0];
                    else
                        this.image = this.imagenes[actual + 1];
                };
                AsociadoViewCompnt.prototype.changeAnt = function () {
                    var actual = this.imagenes.indexOf(this.image);
                    if ((actual - 1) == -1)
                        this.image = this.imagenes[this.imagenes.length - 1];
                    else
                        this.image = this.imagenes[actual - 1];
                };
                AsociadoViewCompnt = __decorate([
                    core_1.Component({
                        selector: 'asociado-view',
                        directives: [router_1.RouterLink, disqus_compnt_1.Disqus],
                        templateUrl: 'app/components/asociados/templates/asociado-view.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, asociado_service_1.AsociadoService, Logger_service_1.Logger, core_1.ElementRef])
                ], AsociadoViewCompnt);
                return AsociadoViewCompnt;
            })();
            exports_1("AsociadoViewCompnt", AsociadoViewCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvLXZpZXcuY29tcG50LnRzIl0sIm5hbWVzIjpbIkFzb2NpYWRvVmlld0NvbXBudCIsIkFzb2NpYWRvVmlld0NvbXBudC5jb25zdHJ1Y3RvciIsIkFzb2NpYWRvVmlld0NvbXBudC5uZ09uSW5pdCIsIkFzb2NpYWRvVmlld0NvbXBudC5uZ0FmdGVyVmlld0luaXQiLCJBc29jaWFkb1ZpZXdDb21wbnQuc2V0SW1hZ2UiLCJBc29jaWFkb1ZpZXdDb21wbnQuZ2V0UmFuZG9tSW50IiwiQXNvY2lhZG9WaWV3Q29tcG50LmdldFJhbmRvbSIsIkFzb2NpYWRvVmlld0NvbXBudC5jaGFuZ2VOZXh0IiwiQXNvY2lhZG9WaWV3Q29tcG50LmNoYW5nZUFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBa0JFQSw0QkFDVUEsT0FBZUEsRUFDZkEsWUFBd0JBLEVBQ3hCQSxnQkFBZ0NBLEVBQ2hDQSxPQUFjQSxFQUNkQSxXQUF1QkE7b0JBSnZCQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDZkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQVlBO29CQUN4QkEscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFnQkE7b0JBQ2hDQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFDZEEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO29CQWJqQ0EsY0FBU0EsR0FBZUEsRUFBRUEsQ0FBQ0E7b0JBQzNCQSxZQUFPQSxHQUFZQSxFQUFFQSxDQUFDQTtvQkFDdEJBLGFBQVFBLEdBQVVBLENBQUNBLENBQUNBO29CQUdwQkEsYUFBUUEsR0FBWUEsRUFBRUEsQ0FBQ0E7Z0JBU3BCQSxDQUFDQTtnQkFFSkQscUNBQVFBLEdBQVJBO29CQUFBRSxpQkFTQ0E7b0JBUkNBLHVEQUF1REE7b0JBQ3ZEQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFH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LENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUN2REEsSUFBSUE7d0JBQ0ZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBcEZIUjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFNQSxlQUFlQTt3QkFDN0JBLFVBQVVBLEVBQUlBLENBQUNBLG1CQUFVQSxFQUFDQSxzQkFBTUEsQ0FBQ0E7d0JBQ2pDQSxXQUFXQSxFQUFHQSx1REFBdURBO3FCQUN0RUEsQ0FBQ0E7O3VDQWtGREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQXRGQSxBQXNGQ0EsSUFBQTtZQXRGRCxtREFzRkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Fzb2NpYWRvcy9hc29jaWFkby12aWV3LmNvbXBudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsXG4gICAgICAgIEluamVjdCxJbnB1dH0gICAgICAgICBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcixcbiAgICAgICAgUm91dGVyTGlua30gICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnTCoHtBc29jaWFkb1NlcnZpY2V9ICAgICAgZnJvbSAnLi4vLi4vc2VydmljZXMvYXNvY2lhZG8uc2VydmljZSc7XG5pbXBvcnQge0xvZ2dlcn0gICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge0NlcnZlY2Vyb30gICAgICAgICAgICBmcm9tICcuLi8uLi9tb2RlbHMvY2VydmVjZXJvJztcbmltcG9ydCB7RGlzcXVzfSAgICAgICAgICAgICAgIGZyb20gJy4uL2Rpc3F1cy9kaXNxdXMuY29tcG50JztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcbmRlY2xhcmUgdmFyIGZvdW5kYXRpb246YW55O1xuZGVjbGFyZSB2YXIgb3dsQ2Fyb3VzZWw6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgOiAnYXNvY2lhZG8tdmlldycsXG4gIGRpcmVjdGl2ZXMgIDogW1JvdXRlckxpbmssRGlzcXVzXSxcbiAgdGVtcGxhdGVVcmwgOiAnYXBwL2NvbXBvbmVudHMvYXNvY2lhZG9zL3RlbXBsYXRlcy9hc29jaWFkby12aWV3Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFzb2NpYWRvVmlld0NvbXBudHtcblxuICBpZDpzdHJpbmc7XG4gIGFzb2NpYWRvOkNlcnZlY2VybztcbiAgaW1hZ2U6c3RyaW5nO1xuICBhc29jaWFkb3M6Q2VydmVjZXJvW10gPSBbXTtcbiAgbnVtZXJvczpudW1iZXJbXSA9IFtdO1xuICBxdWFudGl0eTpudW1iZXIgPSAwO1xuICBpZGVudGlmaWVyOnN0cmluZztcbiAgYWN0dWFsOnN0cmluZztcbiAgaW1hZ2VuZXM6c3RyaW5nW10gPSBbXTtcbiAgYW50OnN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczpSb3V0ZVBhcmFtcyxcbiAgICBwcml2YXRlIF9hc29jaWFkb1NlcnZpY2U6QXNvY2lhZG9TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2xvZ2dlcjpMb2dnZXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZm91bmRhdGlvbigpO1xuICAgIHRoaXMuaWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgdGhpcy5hc29jaWFkbyA9IHRoaXMuX2Fzb2NpYWRvU2VydmljZS5nZXRBbGwoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09IHRoaXMuaWQpWzBdO1xuICAgIHRoaXMuaW1hZ2VuZXMucHVzaCh0aGlzLmFzb2NpYWRvLmxvZ28sLi4udGhpcy5hc29jaWFkby5pbWFnZW5lcyk7XG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2VuZXNbMF07XG4gICAgdGhpcy5xdWFudGl0eSA9IHRoaXMuX2Fzb2NpYWRvU2VydmljZS5nZXRBbGwoKS5sZW5ndGg7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gYGh0dHA6Ly9jZXJhcm1pY2gub3JnLyMvYXNvY2lhZG9zLyR7dGhpcy5pZH1gO1xuICAgIHRoaXMuYXNvY2lhZG9zID0gdGhpcy5nZXRSYW5kb20oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6IGpRdWVyeShcIiNhc29jaWFkb3NcIikub2Zmc2V0KCkudG9wXG4gICAgfSwgMjUwMCk7XG5cbiAgICBqUXVlcnkoXCIjb3dsLWRlbW9cIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgYXV0b1BsYXk6IDMwMDAsIC8vU2V0IEF1dG9QbGF5IHRvIDMgc2Vjb25kc1xuICAgICAgLy8gc3RvcE9uSG92ZXIgOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjp0cnVlLFxuICAgICAgaXRlbXMgOiA0LFxuICAgICAgaXRlbXNEZXNrdG9wIDogWzExOTksM10sXG4gICAgICBpdGVtc0Rlc2t0b3BTbWFsbCA6IFs5NzksM11cbiAgICB9KTtcbiAgfVxuXG4gIHNldEltYWdlKGltYWdlOnN0cmluZyl7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICBnZXRSYW5kb20oKXtcbiAgICBmb3IobGV0IGkgb2YgWzEsMiwzLDQsNV0pe1xuICAgICAgbGV0IG4gPSB0aGlzLmdldFJhbmRvbUludCgxLCB0aGlzLnF1YW50aXR5KTtcbiAgICAgIGlmKG4gIT0gdGhpcy5pZClcbiAgICAgICAgdGhpcy5udW1lcm9zLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hc29jaWFkb1NlcnZpY2UuZ2V0QWxsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT0gdGhpcy5udW1lcm9zLmZpbHRlcihuID0+IG4gPT0gaXRlbS5pZClbMF0pO1xuICB9XG5cbiAgY2hhbmdlTmV4dCgpe1xuICAgIGNvbnN0IGFjdHVhbCA9IHRoaXMuaW1hZ2VuZXMuaW5kZXhPZih0aGlzLmltYWdlKTtcbiAgICBpZigoYWN0dWFsKzEpID09IHRoaXMuaW1hZ2VuZXMubGVuZ3RoKVxuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2VuZXNbMF07XG4gICAgZWxzZVxuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2VuZXNbYWN0dWFsICsgMV07XG4gIH1cbiAgY2hhbmdlQW50KCl7XG4gICAgY29uc3QgYWN0dWFsID0gdGhpcy5pbWFnZW5lcy5pbmRleE9mKHRoaXMuaW1hZ2UpO1xuICAgIGlmKChhY3R1YWwtMSkgPT0gLTEpXG4gICAgICB0aGlzLmltYWdlID0gdGhpcy5pbWFnZW5lc1t0aGlzLmltYWdlbmVzLmxlbmd0aCAtIDFdO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlbmVzW2FjdHVhbCAtIDFdO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
