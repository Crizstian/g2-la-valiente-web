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
                    // jQuery('.presentacion h1').fadeIn(3000,function(){
                    //   jQuery('.presentacion h3').fadeIn(2500,function(){
                    //     jQuery('.presentacion span').fadeIn(1000);
                    //   });
                    // });
                    var $animation_elements = jQuery('.animation-element');
                    var $window = jQuery(window);
                    function check_if_in_view() {
                        var window_height = $window.height();
                        var window_top_position = $window.scrollTop();
                        var window_bottom_position = (window_top_position + window_height);
                        jQuery.each($animation_elements, function () {
                            var $element = jQuery(this);
                            var element_height = $element.outerHeight();
                            var element_top_position = $element.offset().top;
                            var element_bottom_position = (element_top_position + element_height);
                            //check to see if this current container is within viewport
                            if ((element_bottom_position >= window_top_position) &&
                                (element_top_position <= window_bottom_position)) {
                                $element.addClass('in-view');
                            }
                            else
                                $element.removeClass('in-view');
                        });
                    }
                    $window.on('scroll resize', check_if_in_view);
                    $window.trigger('scroll');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBudC50cyJdLCJuYW1lcyI6WyJIb21lQ29tcG50IiwiSG9tZUNvbXBudC5jb25zdHJ1Y3RvciIsIkhvbWVDb21wbnQubmdPbkluaXQiLCJIb21lQ29tcG50Lm5nQWZ0ZXJWaWV3SW5pdCIsIkhvbWVDb21wbnQubmdBZnRlclZpZXdJbml0LmNoZWNrX2lmX2luX3ZpZXciLCJIb21lQ29tcG50LmdldEFzb2NpYWRvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU9FQSxvQkFDb0JBLE9BQWVBLEVBQ2ZBLGdCQUFnQ0EsRUFDaENBLE9BQWNBLEVBQ2RBLFdBQXVCQSxFQUNIQSxXQUE2QkEsRUFDbENBLE1BQTRCQTtvQkFMM0NDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUNmQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWdCQTtvQkFDaENBLFlBQU9BLEdBQVBBLE9BQU9BLENBQU9BO29CQUNkQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7b0JBQ0hBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFrQkE7b0JBQ2xDQSxXQUFNQSxHQUFOQSxNQUFNQSxDQUFzQkE7Z0JBQ2xEQSxDQUFDQTtnQkFHZEQsNkJBQVFBLEdBQVJBO29CQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtvQkFDcERBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHlCQUFlQSxDQUFDQSxNQUFNQSxDQUFDQTt3QkFDL0NBLElBQUlBLEVBQUVBLHFCQUFXQSxDQUFDQSxZQUFZQTt3QkFDOUJBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsRUFBRUE7cUJBQ3JDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JB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Q29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFxuICAgICAgICBJbmplY3QsSW5wdXQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZXJMaW5rfSAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gICAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge2Rpc3BhdGNoZXIsc3RhdGV9ICAgICBmcm9tICcuLi8uLi9sb2dpYy9uZXdTdGF0ZURpc3BhdGNoZXInO1xuaW1wb3J0IHtBcHBTdGF0ZX0gICAgICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQXBwU3RhdGUnO1xuaW1wb3J0IHtBY3Rpb24sQXNvY2lhZG9BY3Rpb25zLFxuICAgICAgICBzdGF0ZUFjdGlvbn0gICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQWN0aW9ucyc7XG5pbXBvcnTCoHtBc29jaWFkb1NlcnZpY2V9ICAgICAgZnJvbSAnLi4vLi4vc2VydmljZXMvYXNvY2lhZG8uc2VydmljZSc7XG5pbXBvcnQge0xvZ2dlcn0gICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge0NlcnZlY2Vyb30gICAgICAgICAgICBmcm9tICcuLi8uLi9tb2RlbHMvY2VydmVjZXJvJztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcbmRlY2xhcmUgdmFyIGZvdW5kYXRpb246YW55O1xuZGVjbGFyZSB2YXIgb3dsQ2Fyb3VzZWw6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdob21lJyxcbiAgZGlyZWN0aXZlcyA6IFtSb3V0ZXJMaW5rXSxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ob21lL3RlbXBsYXRlcy9ob21lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXNvY2lhZG9TZXJ2aWNlOkFzb2NpYWRvU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9nZ2VyOkxvZ2dlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgQEluamVjdChkaXNwYXRjaGVyKSBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxuICAgICAgICAgICAgICBASW5qZWN0KHN0YXRlKSBwcml2YXRlIF9zdGF0ZTogT2JzZXJ2YWJsZTxBcHBTdGF0ZT5cbiAgICAgICAgICAgICkge31cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGpRdWVyeSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQobmV3IEFzb2NpYWRvQWN0aW9ucy5BY3Rpb24oe1xuICAgICAgdHlwZTogc3RhdGVBY3Rpb24uUkVRVUVTVF9EQVRBLFxuICAgICAganNvbjogdGhpcy5fYXNvY2lhZG9TZXJ2aWNlLmdldEFsbCgpXG4gICAgfSkpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGpRdWVyeShcIiNvd2wtZGVtby1ob21lXCIpLm93bENhcm91c2VsKHtcbiAgICAgIGF1dG9QbGF5OiAzMDAwLCAvL1NldCBBdXRvUGxheSB0byAzIHNlY29uZHNcbiAgICAgIC8vIHN0b3BPbkhvdmVyIDogdHJ1ZSxcbiAgICAgIC8vIG5hdmlnYXRpb246dHJ1ZSxcbiAgICAgIGl0ZW1zIDogNCxcbiAgICAgIGl0ZW1zRGVza3RvcCA6IFsxMTk5LDNdLFxuICAgICAgaXRlbXNEZXNrdG9wU21hbGwgOiBbOTc5LDNdXG4gICAgfSk7XG4gICAgLy8galF1ZXJ5KCcucHJlc2VudGFjaW9uIGgxJykuZmFkZUluKDMwMDAsZnVuY3Rpb24oKXtcbiAgICAvLyAgIGpRdWVyeSgnLnByZXNlbnRhY2lvbiBoMycpLmZhZGVJbigyNTAwLGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGpRdWVyeSgnLnByZXNlbnRhY2lvbiBzcGFuJykuZmFkZUluKDEwMDApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG5cblxuICAgIHZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0galF1ZXJ5KCcuYW5pbWF0aW9uLWVsZW1lbnQnKTtcbiAgICB2YXIgJHdpbmRvdyA9IGpRdWVyeSh3aW5kb3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tfaWZfaW5fdmlldygpIHtcbiAgICAgIHZhciB3aW5kb3dfaGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgIHZhciB3aW5kb3dfdG9wX3Bvc2l0aW9uID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgICAgIHZhciB3aW5kb3dfYm90dG9tX3Bvc2l0aW9uID0gKHdpbmRvd190b3BfcG9zaXRpb24gKyB3aW5kb3dfaGVpZ2h0KTtcblxuICAgICAgalF1ZXJ5LmVhY2goJGFuaW1hdGlvbl9lbGVtZW50cywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgdmFyIGVsZW1lbnRfaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIGVsZW1lbnRfdG9wX3Bvc2l0aW9uID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgZWxlbWVudF9ib3R0b21fcG9zaXRpb24gPSAoZWxlbWVudF90b3BfcG9zaXRpb24gKyBlbGVtZW50X2hlaWdodCk7XG5cbiAgICAgICAgLy9jaGVjayB0byBzZWUgaWYgdGhpcyBjdXJyZW50IGNvbnRhaW5lciBpcyB3aXRoaW4gdmlld3BvcnRcbiAgICAgICAgaWYgKChlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA+PSB3aW5kb3dfdG9wX3Bvc2l0aW9uKSAmJlxuICAgICAgICAgICAgKGVsZW1lbnRfdG9wX3Bvc2l0aW9uIDw9IHdpbmRvd19ib3R0b21fcG9zaXRpb24pKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygnaW4tdmlldycpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnaW4tdmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBjaGVja19pZl9pbl92aWV3KTtcbiAgICAkd2luZG93LnRyaWdnZXIoJ3Njcm9sbCcpO1xuICB9XG5cbiAgZ2V0IGdldEFzb2NpYWRvcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUubWFwKHMgPT4ge3JldHVybiBzfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
