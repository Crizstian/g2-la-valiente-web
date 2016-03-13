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
    var SearchAsociado;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchAsociado = (function () {
                function SearchAsociado() {
                }
                SearchAsociado.prototype.transform = function (value, _a) {
                    var id = _a[0];
                    return value.filter(function (item) {
                        if (item.id == id)
                            return true;
                        else if (0 == id)
                            return true;
                    });
                };
                SearchAsociado = __decorate([
                    core_1.Pipe({
                        name: 'searchAsociado'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchAsociado);
                return SearchAsociado;
            })();
            exports_1("SearchAsociado", SearchAsociado);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBpcGVzL3NlYXJjaC1hc29jaWFkby50cyJdLCJuYW1lcyI6WyJTZWFyY2hBc29jaWFkbyIsIlNlYXJjaEFzb2NpYWRvLmNvbnN0cnVjdG9yIiwiU2VhcmNoQXNvY2lhZG8udHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7Z0JBVUFDLENBQUNBO2dCQU5DRCxrQ0FBU0EsR0FBVEEsVUFBVUEsS0FBS0EsRUFBRUEsRUFBSUE7d0JBQUhFLEVBQUVBO29CQUNsQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7d0JBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7d0JBQy9CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2hDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBVEhGO29CQUFDQSxXQUFJQSxDQUFDQTt3QkFDSkEsSUFBSUEsRUFBR0EsZ0JBQWdCQTtxQkFDeEJBLENBQUNBOzttQ0FRREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCwyQ0FVQyxDQUFBIiwiZmlsZSI6IlBpcGVzL3NlYXJjaC1hc29jaWFkby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZSA6ICdzZWFyY2hBc29jaWFkbydcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQXNvY2lhZG97XG4gIHRyYW5zZm9ybSh2YWx1ZSwgW2lkXSl7XG4gICAgcmV0dXJuIHZhbHVlLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT0gaWQpIHJldHVybiB0cnVlO1xuICAgICAgZWxzZSBpZiAoMCA9PSBpZCkgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
