System.register(['angular2/core', 'angular2/router', './components/header/header.compnt', './components/footer/footer.compnt', './components/home/home.compnt', './components/asociados/asociados.compnt', './components/contact/contact.compnt', './components/nosotros/nosotros.compnt', './components/asociados/asociado-view.compnt', './services/asociado.service', './services/Logger.service', './services/email.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, header_compnt_1, footer_compnt_1, home_compnt_1, asociados_compnt_1, contact_compnt_1, nosotros_compnt_1, asociado_view_compnt_1, asociado_service_1, Logger_service_1, email_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_compnt_1_1) {
                header_compnt_1 = header_compnt_1_1;
            },
            function (footer_compnt_1_1) {
                footer_compnt_1 = footer_compnt_1_1;
            },
            function (home_compnt_1_1) {
                home_compnt_1 = home_compnt_1_1;
            },
            function (asociados_compnt_1_1) {
                asociados_compnt_1 = asociados_compnt_1_1;
            },
            function (contact_compnt_1_1) {
                contact_compnt_1 = contact_compnt_1_1;
            },
            function (nosotros_compnt_1_1) {
                nosotros_compnt_1 = nosotros_compnt_1_1;
            },
            function (asociado_view_compnt_1_1) {
                asociado_view_compnt_1 = asociado_view_compnt_1_1;
            },
            function (asociado_service_1_1) {
                asociado_service_1 = asociado_service_1_1;
            },
            function (Logger_service_1_1) {
                Logger_service_1 = Logger_service_1_1;
            },
            function (email_service_1_1) {
                email_service_1 = email_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(elementRef) {
                    this.elementRef = elementRef;
                }
                AppComponent.prototype.ngOnInit = function () {
                    jQuery(this.elementRef.nativeElement).foundation();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [header_compnt_1.HeaderCompnt, router_1.RouterOutlet, footer_compnt_1.FooterCompnt],
                        providers: [asociado_service_1.AsociadoService, Logger_service_1.Logger, email_service_1.EmailService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Home', component: home_compnt_1.HomeCompnt, useAsDefault: true },
                        { path: '/asociados', as: 'Asociados', component: asociados_compnt_1.AsociadosCompnt },
                        { path: '/asociados/:id', as: 'Asociado', component: asociado_view_compnt_1.AsociadoViewCompnt },
                        { path: '/nosotros', as: 'Nosotros', component: nosotros_compnt_1.NosotrosCompnt },
                        { path: '/contacto', as: 'Contacto', component: contact_compnt_1.ContactCompnt }
                    ]), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBY0VBLHNCQUFvQkEsVUFBc0JBO29CQUF0QkMsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBWUE7Z0JBQUVBLENBQUNBO2dCQUU3Q0QsK0JBQVFBLEdBQVJBO29CQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtnQkFDckRBLENBQUNBO2dCQWxCSEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBTUEsUUFBUUE7d0JBQ3RCQSxXQUFXQSxFQUFHQSxjQUFjQTt3QkFDNUJBLFVBQVVBLEVBQUVBLENBQUNBLDRCQUFZQSxFQUFDQSxxQkFBWUEsRUFBQ0EsNEJBQVlBLENBQUNBO3dCQUNwREEsU0FBU0EsRUFBR0EsQ0FBQ0Esa0NBQWVBLEVBQUNBLHVCQUFNQSxFQUFDQSw0QkFBWUEsQ0FBQ0E7cUJBQ2xEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNYQSxFQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFXQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFPQSxTQUFTQSxFQUFFQSx3QkFBVUEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7d0JBQ2hGQSxFQUFDQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxrQ0FBZUEsRUFBQ0E7d0JBQ2pFQSxFQUFDQSxJQUFJQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLHlDQUFrQkEsRUFBQ0E7d0JBQ3ZFQSxFQUFDQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFHQSxTQUFTQSxFQUFFQSxnQ0FBY0EsRUFBQ0E7d0JBQ2hFQSxFQUFDQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFHQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBQ0E7cUJBQ2hFQSxDQUFDQTs7aUNBT0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQsdUNBbUJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsSW5qZWN0fSAgICAgICAgICAgZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyxcbiAgICAgICAgUm91dGVyT3V0bGV0ICB9ICAgICAgICAgICAgICAgICBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIZWFkZXJDb21wbnR9ICAgICAgICAgICAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBudCc7XG5pbXBvcnQge0Zvb3RlckNvbXBudH0gICAgICAgICAgICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG50JztcbmltcG9ydCB7SG9tZUNvbXBudH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBudCc7XG5pbXBvcnQge0Fzb2NpYWRvc0NvbXBudH0gICAgICAgICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL2Fzb2NpYWRvcy9hc29jaWFkb3MuY29tcG50JztcbmltcG9ydCB7Q29udGFjdENvbXBudH0gICAgICAgICAgICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBudCc7XG5pbXBvcnQge05vc290cm9zQ29tcG50fSAgICAgICAgICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL25vc290cm9zL25vc290cm9zLmNvbXBudCc7XG5pbXBvcnQge0Fzb2NpYWRvVmlld0NvbXBudH0gICAgICAgICAgICAgZnJvbSAnLi9jb21wb25lbnRzL2Fzb2NpYWRvcy9hc29jaWFkby12aWV3LmNvbXBudCc7XG5pbXBvcnQge0Fzb2NpYWRvU2VydmljZX0gICAgICAgICAgICAgICAgZnJvbSAnLi9zZXJ2aWNlcy9hc29jaWFkby5zZXJ2aWNlJztcbmltcG9ydCB7TG9nZ2VyfSAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3NlcnZpY2VzL0xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7RW1haWxTZXJ2aWNlfSAgICAgICAgICAgICAgICAgICBmcm9tICcuL3NlcnZpY2VzL2VtYWlsLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuZGVjbGFyZSB2YXIgZm91bmRhdGlvbjphbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICA6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZVVybCA6ICdhcHAvYXBwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG50LFJvdXRlck91dGxldCxGb290ZXJDb21wbnRdLFxuICBwcm92aWRlcnMgOiBbQXNvY2lhZG9TZXJ2aWNlLExvZ2dlcixFbWFpbFNlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvJywgICAgICAgICAgYXM6ICdIb21lJywgICAgICBjb21wb25lbnQ6IEhvbWVDb21wbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL2Fzb2NpYWRvcycsIGFzOiAnQXNvY2lhZG9zJywgY29tcG9uZW50OiBBc29jaWFkb3NDb21wbnR9LFxuICB7cGF0aDogJy9hc29jaWFkb3MvOmlkJywgYXM6ICdBc29jaWFkbycsIGNvbXBvbmVudDogQXNvY2lhZG9WaWV3Q29tcG50fSxcbiAge3BhdGg6ICcvbm9zb3Ryb3MnLCAgYXM6ICdOb3NvdHJvcycsICBjb21wb25lbnQ6IE5vc290cm9zQ29tcG50fSxcbiAge3BhdGg6ICcvY29udGFjdG8nLCAgYXM6ICdDb250YWN0bycsICBjb21wb25lbnQ6IENvbnRhY3RDb21wbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
