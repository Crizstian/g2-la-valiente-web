System.register([], function(exports_1) {
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.textFormat = function (control) {
                    var pattern = /^[a-zA-Z0-9?\s]{3,}$/;
                    return pattern.test(control.value) ? null : { "textFormat": true };
                };
                CustomValidators.textAreaFormat = function (control) {
                    var pattern = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]{15,}$/;
                    return pattern.test(control.value) ? null : { "textFormat": true };
                };
                CustomValidators.emailFormat = function (control) {
                    var pattern = /\S+@\S+\.\S+/;
                    return pattern.test(control.value) ? null : { "emailFormat": true };
                };
                return CustomValidators;
            })();
            exports_1("CustomValidators", CustomValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRvcnMvY3VzdG9tLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOlsiQ3VzdG9tVmFsaWRhdG9ycyIsIkN1c3RvbVZhbGlkYXRvcnMuY29uc3RydWN0b3IiLCJDdXN0b21WYWxpZGF0b3JzLnRleHRGb3JtYXQiLCJDdXN0b21WYWxpZGF0b3JzLnRleHRBcmVhRm9ybWF0IiwiQ3VzdG9tVmFsaWRhdG9ycy5lbWFpbEZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFFQTtnQkFBQUE7Z0JBYUFDLENBQUNBO2dCQVpRRCwyQkFBVUEsR0FBakJBLFVBQWtCQSxPQUFnQkE7b0JBQ2hDRSxJQUFJQSxPQUFPQSxHQUFVQSxzQkFBc0JBLENBQUNBO29CQUM1Q0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsRUFBQ0EsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7Z0JBQ25FQSxDQUFDQTtnQkFDTUYsK0JBQWNBLEdBQXJCQSxVQUFzQkEsT0FBZ0JBO29CQUNwQ0csSUFBSUEsT0FBT0EsR0FBVUEsMkNBQTJDQSxDQUFDQTtvQkFDakVBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLEVBQUNBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBO2dCQUNuRUEsQ0FBQ0E7Z0JBQ01ILDRCQUFXQSxHQUFsQkEsVUFBbUJBLE9BQWdCQTtvQkFDakNJLElBQUlBLE9BQU9BLEdBQVVBLGNBQWNBLENBQUNBO29CQUNwQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsRUFBQ0EsYUFBYUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7Z0JBQ3BFQSxDQUFDQTtnQkFDSEosdUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELCtDQWFDLENBQUEiLCJmaWxlIjoiVmFsaWRhdG9ycy9jdXN0b20tdmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcnMge1xuICBzdGF0aWMgdGV4dEZvcm1hdChjb250cm9sOiBDb250cm9sKTogW1trZXk6IHN0cmluZ106IGJvb2xlYW5dIHtcbiAgICBsZXQgcGF0dGVybjpSZWdFeHAgPSAvXlthLXpBLVowLTk/XFxzXXszLH0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtcInRleHRGb3JtYXRcIjogdHJ1ZX07XG4gIH1cbiAgc3RhdGljIHRleHRBcmVhRm9ybWF0KGNvbnRyb2w6IENvbnRyb2wpOiBbW2tleTogc3RyaW5nXTogYm9vbGVhbl0ge1xuICAgIGxldCBwYXR0ZXJuOlJlZ0V4cCA9IC9eW2EtekEtWjAtOT8kQCMoKSchLCtcXC09XzouJuKCrMKjKiVcXHNdezE1LH0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtcInRleHRGb3JtYXRcIjogdHJ1ZX07XG4gIH1cbiAgc3RhdGljIGVtYWlsRm9ybWF0KGNvbnRyb2w6IENvbnRyb2wpOiBbW2tleTogc3RyaW5nXTogYm9vbGVhbl0ge1xuICAgIGxldCBwYXR0ZXJuOlJlZ0V4cCA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtcImVtYWlsRm9ybWF0XCI6IHRydWV9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
