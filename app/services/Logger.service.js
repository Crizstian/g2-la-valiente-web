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
    var Logger;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Logger = (function () {
                function Logger() {
                    this.logs = []; // capture logs for testing
                }
                Logger.prototype.log = function (message) {
                    this.logs.push(message);
                    console.log(message);
                };
                Logger = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Logger);
                return Logger;
            })();
            exports_1("Logger", Logger);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0xvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkxvZ2dlciIsIkxvZ2dlci5jb25zdHJ1Y3RvciIsIkxvZ2dlci5sb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFFRUMsU0FBSUEsR0FBWUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsMkJBQTJCQTtnQkFLakRBLENBQUNBO2dCQUpDRCxvQkFBR0EsR0FBSEEsVUFBSUEsT0FBZUE7b0JBQ2pCRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDeEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBTkhGO29CQUFDQSxpQkFBVUEsRUFBRUE7OzJCQU9aQTtnQkFBREEsYUFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQsMkJBT0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Mb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBsb2dzOnN0cmluZ1tdID0gW107IC8vIGNhcHR1cmUgbG9ncyBmb3IgdGVzdGluZ1xuICBsb2cobWVzc2FnZTogc3RyaW5nKXtcbiAgICB0aGlzLmxvZ3MucHVzaChtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
