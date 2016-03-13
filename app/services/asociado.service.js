System.register(['angular2/core', './mock-asociado'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_asociado_1;
    var AsociadoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_asociado_1_1) {
                mock_asociado_1 = mock_asociado_1_1;
            }],
        execute: function() {
            AsociadoService = (function () {
                function AsociadoService() {
                }
                AsociadoService.prototype.getAll = function () {
                    return mock_asociado_1.ASOCIADOS;
                };
                AsociadoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AsociadoService);
                return AsociadoService;
            })();
            exports_1("AsociadoService", AsociadoService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Fzb2NpYWRvLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQXNvY2lhZG9TZXJ2aWNlIiwiQXNvY2lhZG9TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXNvY2lhZG9TZXJ2aWNlLmdldEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBR0VBO2dCQUFlQyxDQUFDQTtnQkFFaEJELGdDQUFNQSxHQUFOQTtvQkFDRUUsTUFBTUEsQ0FBQ0EseUJBQVNBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7Z0JBUEhGO29CQUFDQSxpQkFBVUEsRUFBRUE7O29DQVFaQTtnQkFBREEsc0JBQUNBO1lBQURBLENBUkEsQUFRQ0EsSUFBQTtZQVJELDZDQVFDLENBQUEiLCJmaWxlIjoic2VydmljZXMvYXNvY2lhZG8uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDZXJ2ZWNlcm99ICAgZnJvbSAnLi4vbW9kZWxzL2NlcnZlY2Vybyc7XG5pbXBvcnQge0FTT0NJQURPU30gICBmcm9tICcuL21vY2stYXNvY2lhZG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXNvY2lhZG9TZXJ2aWNle1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBbGwoKTpDZXJ2ZWNlcm9bXXtcbiAgICByZXR1cm4gQVNPQ0lBRE9TO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
