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
    var AsociadosCompnt;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AsociadosCompnt = (function () {
                function AsociadosCompnt(_elementRef) {
                    this._elementRef = _elementRef;
                }
                AsociadosCompnt.prototype.ngOnInit = function () {
                    jQuery(this._elementRef.nativeElement).foundation();
                };
                AsociadosCompnt.prototype.ngAfterViewInit = function () {
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
                AsociadosCompnt = __decorate([
                    core_1.Component({
                        selector: 'asociados',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNvY2lhZG9zL2Fzb2NpYWRvcy5jb21wbnQudHMiXSwibmFtZXMiOlsiQXNvY2lhZG9zQ29tcG50IiwiQXNvY2lhZG9zQ29tcG50LmNvbnN0cnVjdG9yIiwiQXNvY2lhZG9zQ29tcG50Lm5nT25Jbml0IiwiQXNvY2lhZG9zQ29tcG50Lm5nQWZ0ZXJWaWV3SW5pdCIsIkFzb2NpYWRvc0NvbXBudC5uZ0FmdGVyVmlld0luaXQuY2hlY2tfaWZfaW5fdmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBTUVBLHlCQUFvQkEsV0FBdUJBO29CQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO2dCQUFHQSxDQUFDQTtnQkFFL0NELGtDQUFRQSxHQUFSQTtvQkFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7Z0JBQ3REQSxDQUFDQTtnQkFDREYseUNBQWVBLEdBQWZBO29CQUNFRyxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBO3dCQUNuQ0EsUUFBUUEsRUFBRUEsSUFBSUE7d0JBQ2RBLHNCQUFzQkE7d0JBQ3RCQSxtQkFBbUJBO3dCQUNuQkEsS0FBS0EsRUFBR0EsQ0FBQ0E7d0JBQ1RBLFlBQVlBLEVBQUdBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO3dCQUN2QkEsaUJBQWlCQSxFQUFHQSxDQUFDQSxHQUFHQSxFQUFDQSxDQUFDQSxDQUFDQTtxQkFDNUJBLENBQUNBLENBQUNBO29CQUNIQSxxREFBcURBO29CQUNyREEsdURBQXVEQTtvQkFDdkRBLGlEQUFpREE7b0JBQ2pEQSxRQUFRQTtvQkFDUkEsTUFBTUE7b0JBR05BLElBQUlBLG1CQUFtQkEsR0FBR0EsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtvQkFDdkRBLElBQUlBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO29CQUU3QkE7d0JBQ0VDLElBQUlBLGFBQWFBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO3dCQUNyQ0EsSUFBSUEsbUJBQW1CQSxHQUFHQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTt3QkFDOUNBLElBQUlBLHNCQUFzQkEsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxhQUFhQSxDQUFDQSxDQUFDQTt3QkFFbkVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUE7NEJBQy9CLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDOzRCQUM1QyxJQUFJLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7NEJBQ2pELElBQUksdUJBQXVCLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUMsQ0FBQzs0QkFFdEUsMkRBQTJEOzRCQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixJQUFJLG1CQUFtQixDQUFDO2dDQUNoRCxDQUFDLG9CQUFvQixJQUFJLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNuRCxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUNqQyxDQUFDOzRCQUFDLElBQUk7Z0NBQ0osUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDcEMsQ0FBQyxDQUFDQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7b0JBQ0RELE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLGVBQWVBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQW5ESEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBS0EsV0FBV0E7d0JBQ3hCQSxXQUFXQSxFQUFFQSxtREFBbURBO3FCQUNqRUEsQ0FBQ0E7O29DQWtEREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQXJEQSxBQXFEQ0EsSUFBQTtZQXJERCw2Q0FxREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Fzb2NpYWRvcy9hc29jaWFkb3MuY29tcG50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZixcbiAgICAgICAgSW5qZWN0LElucHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuZGVjbGFyZSB2YXIgZm91bmRhdGlvbjphbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2Fzb2NpYWRvcycsXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvYXNvY2lhZG9zL3RlbXBsYXRlcy9hc29jaWFkb3MuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXNvY2lhZG9zQ29tcG50e1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgalF1ZXJ5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZm91bmRhdGlvbigpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGpRdWVyeShcIiNvd2wtZGVtby1ob21lXCIpLm93bENhcm91c2VsKHtcbiAgICAgIGF1dG9QbGF5OiAzMDAwLCAvL1NldCBBdXRvUGxheSB0byAzIHNlY29uZHNcbiAgICAgIC8vIHN0b3BPbkhvdmVyIDogdHJ1ZSxcbiAgICAgIC8vIG5hdmlnYXRpb246dHJ1ZSxcbiAgICAgIGl0ZW1zIDogNCxcbiAgICAgIGl0ZW1zRGVza3RvcCA6IFsxMTk5LDNdLFxuICAgICAgaXRlbXNEZXNrdG9wU21hbGwgOiBbOTc5LDNdXG4gICAgfSk7XG4gICAgLy8galF1ZXJ5KCcucHJlc2VudGFjaW9uIGgxJykuZmFkZUluKDMwMDAsZnVuY3Rpb24oKXtcbiAgICAvLyAgIGpRdWVyeSgnLnByZXNlbnRhY2lvbiBoMycpLmZhZGVJbigyNTAwLGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGpRdWVyeSgnLnByZXNlbnRhY2lvbiBzcGFuJykuZmFkZUluKDEwMDApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG5cblxuICAgIHZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0galF1ZXJ5KCcuYW5pbWF0aW9uLWVsZW1lbnQnKTtcbiAgICB2YXIgJHdpbmRvdyA9IGpRdWVyeSh3aW5kb3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tfaWZfaW5fdmlldygpIHtcbiAgICAgIHZhciB3aW5kb3dfaGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgIHZhciB3aW5kb3dfdG9wX3Bvc2l0aW9uID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgICAgIHZhciB3aW5kb3dfYm90dG9tX3Bvc2l0aW9uID0gKHdpbmRvd190b3BfcG9zaXRpb24gKyB3aW5kb3dfaGVpZ2h0KTtcblxuICAgICAgalF1ZXJ5LmVhY2goJGFuaW1hdGlvbl9lbGVtZW50cywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgdmFyIGVsZW1lbnRfaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIGVsZW1lbnRfdG9wX3Bvc2l0aW9uID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgZWxlbWVudF9ib3R0b21fcG9zaXRpb24gPSAoZWxlbWVudF90b3BfcG9zaXRpb24gKyBlbGVtZW50X2hlaWdodCk7XG5cbiAgICAgICAgLy9jaGVjayB0byBzZWUgaWYgdGhpcyBjdXJyZW50IGNvbnRhaW5lciBpcyB3aXRoaW4gdmlld3BvcnRcbiAgICAgICAgaWYgKChlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA+PSB3aW5kb3dfdG9wX3Bvc2l0aW9uKSAmJlxuICAgICAgICAgICAgKGVsZW1lbnRfdG9wX3Bvc2l0aW9uIDw9IHdpbmRvd19ib3R0b21fcG9zaXRpb24pKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcygnaW4tdmlldycpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnaW4tdmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBjaGVja19pZl9pbl92aWV3KTtcbiAgICAkd2luZG93LnRyaWdnZXIoJ3Njcm9sbCcpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
