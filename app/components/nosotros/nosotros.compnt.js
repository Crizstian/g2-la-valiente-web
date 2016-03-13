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
    var NosotrosCompnt;
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
            NosotrosCompnt = (function () {
                function NosotrosCompnt(_router, _asociadoService, _logger, _elementRef, _dispatcher, _state) {
                    this._router = _router;
                    this._asociadoService = _asociadoService;
                    this._logger = _logger;
                    this._elementRef = _elementRef;
                    this._dispatcher = _dispatcher;
                    this._state = _state;
                }
                NosotrosCompnt.prototype.ngOnInit = function () {
                    jQuery(this._elementRef.nativeElement).foundation();
                    this._dispatcher.next(new Actions_1.AsociadoActions.Action({
                        type: Actions_1.stateAction.REQUEST_DATA,
                        json: this._asociadoService.getAll()
                    }));
                };
                NosotrosCompnt.prototype.ngAfterViewInit = function () {
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
                Object.defineProperty(NosotrosCompnt.prototype, "getAsociados", {
                    get: function () {
                        return this._state.map(function (s) { return s; });
                    },
                    enumerable: true,
                    configurable: true
                });
                NosotrosCompnt = __decorate([
                    core_1.Component({
                        selector: 'about',
                        templateUrl: 'app/components/nosotros/templates/nosotros.html'
                    }),
                    __param(4, core_1.Inject(newStateDispatcher_1.dispatcher)),
                    __param(5, core_1.Inject(newStateDispatcher_1.state)), 
                    __metadata('design:paramtypes', [router_1.Router, asociado_service_1.AsociadoService, Logger_service_1.Logger, core_1.ElementRef, Object, Observable_1.Observable])
                ], NosotrosCompnt);
                return NosotrosCompnt;
            })();
            exports_1("NosotrosCompnt", NosotrosCompnt);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG50LnRzIl0sIm5hbWVzIjpbIk5vc290cm9zQ29tcG50IiwiTm9zb3Ryb3NDb21wbnQuY29uc3RydWN0b3IiLCJOb3NvdHJvc0NvbXBudC5uZ09uSW5pdCIsIk5vc290cm9zQ29tcG50Lm5nQWZ0ZXJWaWV3SW5pdCIsIk5vc290cm9zQ29tcG50Lm5nQWZ0ZXJWaWV3SW5pdC5jaGVja19pZl9pbl92aWV3IiwiTm9zb3Ryb3NDb21wbnQuZ2V0QXNvY2lhZG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFLRUEsd0JBQ29CQSxPQUFlQSxFQUNmQSxnQkFBZ0NBLEVBQ2hDQSxPQUFjQSxFQUNkQSxXQUF1QkEsRUFDSEEsV0FBNkJBLEVBQ2xDQSxNQUE0QkE7b0JBTDNDQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDZkEscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFnQkE7b0JBQ2hDQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFDZEEsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO29CQUNIQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBa0JBO29CQUNsQ0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBc0JBO2dCQUNsREEsQ0FBQ0E7Z0JBR2RELGlDQUFRQSxHQUFSQTtvQkFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7b0JBQ3BEQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx5QkFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7d0JBQy9DQSxJQUFJQSxFQUFFQSxxQkFBV0EsQ0FBQ0EsWUFBWUE7d0JBQzlCQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBO3FCQUNyQ0EsQ0FB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Q29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxFbGVtZW50UmVmLFxuICAgICAgICBJbmplY3QsSW5wdXQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixSb3V0ZXJMaW5rfSAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gICAgICAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZlcic7XG5pbXBvcnQge2Rpc3BhdGNoZXIsc3RhdGV9ICAgICBmcm9tICcuLi8uLi9sb2dpYy9uZXdTdGF0ZURpc3BhdGNoZXInO1xuaW1wb3J0IHtBcHBTdGF0ZX0gICAgICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQXBwU3RhdGUnO1xuaW1wb3J0IHtBY3Rpb24sQXNvY2lhZG9BY3Rpb25zLFxuICAgICAgICBzdGF0ZUFjdGlvbn0gICAgICAgICAgZnJvbSAnLi4vLi4vbG9naWMvQWN0aW9ucyc7XG5pbXBvcnTCoHtBc29jaWFkb1NlcnZpY2V9ICAgICAgZnJvbSAnLi4vLi4vc2VydmljZXMvYXNvY2lhZG8uc2VydmljZSc7XG5pbXBvcnQge0xvZ2dlcn0gICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Mb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge0NlcnZlY2Vyb30gICAgICAgICAgICBmcm9tICcuLi8uLi9tb2RlbHMvY2VydmVjZXJvJztcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XG5kZWNsYXJlIHZhciBmb3VuZGF0aW9uOmFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnYWJvdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25vc290cm9zL3RlbXBsYXRlcy9ub3NvdHJvcy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOb3NvdHJvc0NvbXBudHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hc29jaWFkb1NlcnZpY2U6QXNvY2lhZG9TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2dnZXI6TG9nZ2VyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBASW5qZWN0KGRpc3BhdGNoZXIpIHByaXZhdGUgX2Rpc3BhdGNoZXI6IE9ic2VydmVyPEFjdGlvbj4sXG4gICAgICAgICAgICAgIEBJbmplY3Qoc3RhdGUpIHByaXZhdGUgX3N0YXRlOiBPYnNlcnZhYmxlPEFwcFN0YXRlPlxuICAgICAgICAgICAgKSB7fVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgalF1ZXJ5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZm91bmRhdGlvbigpO1xuICAgIHRoaXMuX2Rpc3BhdGNoZXIubmV4dChuZXcgQXNvY2lhZG9BY3Rpb25zLkFjdGlvbih7XG4gICAgICB0eXBlOiBzdGF0ZUFjdGlvbi5SRVFVRVNUX0RBVEEsXG4gICAgICBqc29uOiB0aGlzLl9hc29jaWFkb1NlcnZpY2UuZ2V0QWxsKClcbiAgICB9KSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgalF1ZXJ5KFwiI293bC1kZW1vLWhvbWVcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgYXV0b1BsYXk6IDMwMDAsIC8vU2V0IEF1dG9QbGF5IHRvIDMgc2Vjb25kc1xuICAgICAgLy8gc3RvcE9uSG92ZXIgOiB0cnVlLFxuICAgICAgLy8gbmF2aWdhdGlvbjp0cnVlLFxuICAgICAgaXRlbXMgOiA0LFxuICAgICAgaXRlbXNEZXNrdG9wIDogWzExOTksM10sXG4gICAgICBpdGVtc0Rlc2t0b3BTbWFsbCA6IFs5NzksM11cbiAgICB9KTtcbiAgICAvLyBqUXVlcnkoJy5wcmVzZW50YWNpb24gaDEnKS5mYWRlSW4oMzAwMCxmdW5jdGlvbigpe1xuICAgIC8vICAgalF1ZXJ5KCcucHJlc2VudGFjaW9uIGgzJykuZmFkZUluKDI1MDAsZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgalF1ZXJ5KCcucHJlc2VudGFjaW9uIHNwYW4nKS5mYWRlSW4oMTAwMCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcblxuXG4gICAgdmFyICRhbmltYXRpb25fZWxlbWVudHMgPSBqUXVlcnkoJy5hbmltYXRpb24tZWxlbWVudCcpO1xuICAgIHZhciAkd2luZG93ID0galF1ZXJ5KHdpbmRvdyk7XG5cbiAgICBmdW5jdGlvbiBjaGVja19pZl9pbl92aWV3KCkge1xuICAgICAgdmFyIHdpbmRvd19oZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgdmFyIHdpbmRvd190b3BfcG9zaXRpb24gPSAkd2luZG93LnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHdpbmRvd19ib3R0b21fcG9zaXRpb24gPSAod2luZG93X3RvcF9wb3NpdGlvbiArIHdpbmRvd19oZWlnaHQpO1xuXG4gICAgICBqUXVlcnkuZWFjaCgkYW5pbWF0aW9uX2VsZW1lbnRzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0galF1ZXJ5KHRoaXMpO1xuICAgICAgICB2YXIgZWxlbWVudF9oZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCgpO1xuICAgICAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9IChlbGVtZW50X3RvcF9wb3NpdGlvbiArIGVsZW1lbnRfaGVpZ2h0KTtcblxuICAgICAgICAvL2NoZWNrIHRvIHNlZSBpZiB0aGlzIGN1cnJlbnQgY29udGFpbmVyIGlzIHdpdGhpbiB2aWV3cG9ydFxuICAgICAgICBpZiAoKGVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uID49IHdpbmRvd190b3BfcG9zaXRpb24pICYmXG4gICAgICAgICAgICAoZWxlbWVudF90b3BfcG9zaXRpb24gPD0gd2luZG93X2JvdHRvbV9wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdpbi12aWV3Jyk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdpbi12aWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgJHdpbmRvdy5vbignc2Nyb2xsIHJlc2l6ZScsIGNoZWNrX2lmX2luX3ZpZXcpO1xuICAgICR3aW5kb3cudHJpZ2dlcignc2Nyb2xsJyk7XG4gIH1cblxuICBnZXQgZ2V0QXNvY2lhZG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5tYXAocyA9PiB7cmV0dXJuIHN9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
