System.register(['angular2/core', 'angular2/http', './Logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Logger_service_1;
    var EmailService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Logger_service_1_1) {
                Logger_service_1 = Logger_service_1_1;
            }],
        execute: function() {
            EmailService = (function () {
                function EmailService(http, _logger) {
                    this.http = http;
                    this._logger = _logger;
                    this.baseAPI = 'http://cerarmich.org';
                }
                EmailService.prototype.send = function (mail) {
                    return this.http.post(this.baseAPI + "/mail.php", JSON.stringify(mail))
                        .map(function (res) { return res.json(); })
                        .share();
                };
                EmailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Logger_service_1.Logger])
                ], EmailService);
                return EmailService;
            })();
            exports_1("EmailService", EmailService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2VtYWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiRW1haWxTZXJ2aWNlIiwiRW1haWxTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiRW1haWxTZXJ2aWNlLnNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUtFQSxzQkFDWUEsSUFBVUEsRUFDVkEsT0FBY0E7b0JBRGRDLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQUNWQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtvQkFKbEJBLFlBQU9BLEdBQVdBLHNCQUFzQkEsQ0FBQ0E7Z0JBTS9DQSxDQUFDQTtnQkFFSEQsMkJBQUlBLEdBQUpBLFVBQUtBLElBQUlBO29CQUNQRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxjQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt5QkFDdERBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBO3lCQUN0QkEsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFmSEY7b0JBQUNBLGlCQUFVQSxFQUFFQTs7aUNBaUJaQTtnQkFBREEsbUJBQUNBO1lBQURBLENBakJBLEFBaUJDQSxJQUFBO1lBakJELHVDQWlCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2VtYWlsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cH0gICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDZXJ2ZWNlcm99ICAgZnJvbSAnLi4vbW9kZWxzL2NlcnZlY2Vybyc7XG5pbXBvcnQge0FTT0NJQURPU30gICBmcm9tICcuL21vY2stYXNvY2lhZG8nO1xuaW1wb3J0IHtMb2dnZXJ9ICAgICAgICAgICAgZnJvbSAnLi9Mb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1haWxTZXJ2aWNle1xuXG4gIHByaXZhdGUgYmFzZUFQSTogc3RyaW5nID0gJ2h0dHA6Ly9jZXJhcm1pY2gub3JnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgIHByaXZhdGUgX2xvZ2dlcjpMb2dnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgc2VuZChtYWlsKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmJhc2VBUEl9L21haWwucGhwYCwgSlNPTi5zdHJpbmdpZnkobWFpbCkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
