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
    var SearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe() {
                }
                SearchPipe.prototype.transform = function (value, _a) {
                    var term = _a[0];
                    return value.filter(function (item) { return item.text.startsWith(term); });
                };
                SearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'search'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchPipe);
                return SearchPipe;
            })();
            exports_1("SearchPipe", SearchPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBpcGVzL3NlYXJjaC1waXBlLnRzIl0sIm5hbWVzIjpbIlNlYXJjaFBpcGUiLCJTZWFyY2hQaXBlLmNvbnN0cnVjdG9yIiwiU2VhcmNoUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkFPQUMsQ0FBQ0E7Z0JBSENELDhCQUFTQSxHQUFUQSxVQUFVQSxLQUFLQSxFQUFDQSxFQUFNQTt3QkFBTEUsSUFBSUE7b0JBQ25CQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxJQUFJQSxJQUFLQSxPQUFBQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUExQkEsQ0FBMEJBLENBQUNBLENBQUNBO2dCQUM1REEsQ0FBQ0E7Z0JBTkhGO29CQUFDQSxXQUFJQSxDQUFDQTt3QkFDSkEsSUFBSUEsRUFBR0EsUUFBUUE7cUJBQ2hCQSxDQUFDQTs7K0JBS0RBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQsbUNBT0MsQ0FBQSIsImZpbGUiOiJQaXBlcy9zZWFyY2gtcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZSA6ICdzZWFyY2gnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBpcGV7XG4gIHRyYW5zZm9ybSh2YWx1ZSxbdGVybV0pe1xuICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGV4dC5zdGFydHNXaXRoKHRlcm0pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
