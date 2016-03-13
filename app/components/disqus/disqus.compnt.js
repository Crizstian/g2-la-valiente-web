System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Disqus;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Disqus = (function () {
                function Disqus(_location) {
                    this._location = _location;
                }
                /**
                 * Component on init
                 */
                Disqus.prototype.ngOnInit = function () {
                    if (window.DISQUS === undefined) {
                        this._addScriptTag();
                    }
                    else {
                        this._reset();
                    }
                };
                /**
                 * Reset Disqus with new information.
                 */
                Disqus.prototype._reset = function () {
                    window.DISQUS.reset({
                        reload: true,
                        config: this._getConfig()
                    });
                };
                /**
                 * Add the Disqus script to the document.
                 */
                Disqus.prototype._addScriptTag = function () {
                    window.disqus_config = this._getConfig();
                    var container = this._getScriptContainer(), scriptSrc = '//' + this.shortname + '.disqus.com/embed.js';
                    container.appendChild(this._buildScriptTag(scriptSrc));
                };
                /**
                 * Get Disqus config
                 */
                Disqus.prototype._getConfig = function () {
                    var _self = this;
                    return function () {
                        this.page.url = _self._location.path();
                        this.page.identifier = _self.identifier;
                        this.language = 'en';
                    };
                };
                /**
                 * Get the HEAD element
                 * @return {HTMLHeadElement}
                 */
                Disqus.prototype._getScriptContainer = function () {
                    return document.getElementsByTagName('head')[0];
                };
                /**
                 * Build the Disqus script element.
                 * @param  {string} src
                 * @return {HTMLScriptElement}
                 */
                Disqus.prototype._buildScriptTag = function (src) {
                    var script = document.createElement('script');
                    script.src = src;
                    script.async = true;
                    script.type = 'text/javascript';
                    script.setAttribute('data-timestamp', new Date().getTime().toString());
                    return script;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Disqus.prototype, "identifier", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Disqus.prototype, "shortname", void 0);
                Disqus = __decorate([
                    core_1.Component({
                        selector: 'disqus',
                        template: '<div id="disqus_thread"></div>',
                        properties: ['identifier', 'shortname']
                    }), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], Disqus);
                return Disqus;
            })();
            exports_1("Disqus", Disqus);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlzcXVzL2Rpc3F1cy5jb21wbnQudHMiXSwibmFtZXMiOlsiRGlzcXVzIiwiRGlzcXVzLmNvbnN0cnVjdG9yIiwiRGlzcXVzLm5nT25Jbml0IiwiRGlzcXVzLl9yZXNldCIsIkRpc3F1cy5fYWRkU2NyaXB0VGFnIiwiRGlzcXVzLl9nZXRDb25maWciLCJEaXNxdXMuX2dldFNjcmlwdENvbnRhaW5lciIsIkRpc3F1cy5fYnVpbGRTY3JpcHRUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVFFQSxnQkFDU0EsU0FBbUJBO29CQUFuQkMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBVUE7Z0JBQzNCQSxDQUFDQTtnQkFZRkQ7O21CQUVHQTtnQkFDSEEseUJBQVFBLEdBQVJBO29CQUNFRSxFQUFFQSxDQUFBQSxDQUFPQSxNQUFPQSxDQUFDQSxNQUFNQSxLQUFLQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDdENBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO29CQUN2QkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUFBLENBQUNBO3dCQUNMQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDaEJBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFFREY7O21CQUVHQTtnQkFDSEEsdUJBQU1BLEdBQU5BO29CQUNRRyxNQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDekJBLE1BQU1BLEVBQUVBLElBQUlBO3dCQUNaQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQTtxQkFDMUJBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREg7O21CQUVHQTtnQkFDSEEsOEJBQWFBLEdBQWJBO29CQUNRSSxNQUFPQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtvQkFDaERBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFDMUNBLFNBQVNBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLHNCQUFzQkEsQ0FBQ0E7b0JBQzNEQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQUVESjs7bUJBRUdBO2dCQUNIQSwyQkFBVUEsR0FBVkE7b0JBQ0VLLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsTUFBTUEsQ0FBQ0E7d0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQUE7Z0JBQ0hBLENBQUNBO2dCQUVETDs7O21CQUdHQTtnQkFDSEEsb0NBQW1CQSxHQUFuQkE7b0JBQ0VNLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxDQUFDQTtnQkFFRE47Ozs7bUJBSUdBO2dCQUNIQSxnQ0FBZUEsR0FBZkEsVUFBZ0JBLEdBQVdBO29CQUN6Qk8sSUFBSUEsTUFBTUEsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtvQkFDakJBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO29CQUNwQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsaUJBQWlCQSxDQUFDQTtvQkFDaENBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLGdCQUFnQkEsRUFBRUEsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQXRFRFA7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsOEJBQVVBLFVBQVNBO2dCQUtuQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBUUEsNkJBQVNBLFVBQVNBO2dCQXBCcENBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsZ0NBQWdDQTt3QkFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLFlBQVlBLEVBQUVBLFdBQVdBLENBQUNBO3FCQUN4Q0EsQ0FBQ0E7OzJCQWtGREE7Z0JBQURBLGFBQUNBO1lBQURBLENBdEZBLEFBc0ZDQSxJQUFBO1lBdEZELDJCQXNGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlzcXVzL2Rpc3F1cy5jb21wbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rpc3F1cycsXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImRpc3F1c190aHJlYWRcIj48L2Rpdj4nLFxuICBwcm9wZXJ0aWVzOiBbJ2lkZW50aWZpZXInLCAnc2hvcnRuYW1lJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEaXNxdXMge1xuXG4gIGNvbnN0cnVjdG9yKFxuICBcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbilcbiAge31cblxuICAvKipcbiAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcGFnZVxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGlkZW50aWZpZXI6IHN0cmluZztcblxuICAvKipcbiAgICogWW91ciBEaXNxdXMgc2hvcnRuYW1lXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgc2hvcnRuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBvbiBpbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBpZigoPGFueT53aW5kb3cpLkRJU1FVUyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9hZGRTY3JpcHRUYWcoKTtcbiAgICB9IGVsc2V7XG4gICAgICB0aGlzLl9yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBEaXNxdXMgd2l0aCBuZXcgaW5mb3JtYXRpb24uXG4gICAqL1xuICBfcmVzZXQoKSB7XG4gICAgKDxhbnk+d2luZG93KS5ESVNRVVMucmVzZXQoe1xuICAgICAgcmVsb2FkOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLl9nZXRDb25maWcoKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgRGlzcXVzIHNjcmlwdCB0byB0aGUgZG9jdW1lbnQuXG4gICAqL1xuICBfYWRkU2NyaXB0VGFnKCkge1xuICAgICg8YW55PndpbmRvdykuZGlzcXVzX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZygpO1xuICAgIGxldCBjb250YWluZXIgPSB0aGlzLl9nZXRTY3JpcHRDb250YWluZXIoKSxcbiAgICBzY3JpcHRTcmMgPSAnLy8nICsgdGhpcy5zaG9ydG5hbWUgKyAnLmRpc3F1cy5jb20vZW1iZWQuanMnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9idWlsZFNjcmlwdFRhZyhzY3JpcHRTcmMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgRGlzcXVzIGNvbmZpZ1xuICAgKi9cbiAgX2dldENvbmZpZygpIHtcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnBhZ2UudXJsID0gX3NlbGYuX2xvY2F0aW9uLnBhdGgoKTtcbiAgICAgIHRoaXMucGFnZS5pZGVudGlmaWVyID0gX3NlbGYuaWRlbnRpZmllcjtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSAnZW4nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEhFQUQgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtIVE1MSGVhZEVsZW1lbnR9XG4gICAqL1xuICBfZ2V0U2NyaXB0Q29udGFpbmVyKCk6IEhUTUxIZWFkRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIERpc3F1cyBzY3JpcHQgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBzcmNcbiAgICogQHJldHVybiB7SFRNTFNjcmlwdEVsZW1lbnR9XG4gICAqL1xuICBfYnVpbGRTY3JpcHRUYWcoc3JjOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXN0YW1wJywgbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
