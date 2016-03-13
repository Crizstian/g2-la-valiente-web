System.register(['angular2/core', 'rxjs/Subject', 'rxjs/subject/BehaviorSubject', './asociadoReducer', 'rxjs/add/operator/map', 'rxjs/add/operator/zip'], function(exports_1) {
    var core_1, Subject_1, BehaviorSubject_1, asociadoReducer_1;
    var initState, initDriver, dispatcher, state, initValue, drivers, stateAndDispatcher;
    function configDispatcher(drivers) {
        return new Subject_1.Subject(null);
    }
    function configState(initState, actions, drivers) {
        var combine = function (s) { return ({ asociado: s[0] }); };
        var appState = drivers.asociado(initState.asociados, actions);
        return wrapIntoBehavior(initState, appState);
    }
    function wrapIntoBehavior(init, obs) {
        var res = new BehaviorSubject_1.BehaviorSubject(init);
        obs.subscribe(function (s) { res.next(s); });
        return res;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (asociadoReducer_1_1) {
                asociadoReducer_1 = asociadoReducer_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            initState = new core_1.OpaqueToken("initState");
            initDriver = new core_1.OpaqueToken("initDriver");
            exports_1("dispatcher", dispatcher = new core_1.OpaqueToken("dispatcher"));
            exports_1("state", state = new core_1.OpaqueToken("state"));
            initValue = {
                asociados: []
            };
            drivers = {
                asociado: asociadoReducer_1.asociados
            };
            exports_1("stateAndDispatcher", stateAndDispatcher = [
                core_1.provide(initDriver, { useValue: drivers }),
                core_1.provide(initState, { useValue: initValue }),
                core_1.provide(dispatcher, { useFactory: configDispatcher, deps: [new core_1.Inject(initDriver)] }),
                core_1.provide(state, { useFactory: configState, deps: [new core_1.Inject(initState), new core_1.Inject(dispatcher), new core_1.Inject(initDriver)] })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2ljL25ld1N0YXRlRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6WyJjb25maWdEaXNwYXRjaGVyIiwiY29uZmlnU3RhdGUiLCJ3cmFwSW50b0JlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOztRQVlNLFNBQVMsRUFDVCxVQUFVLEVBQ0gsVUFBVSxFQUNWLEtBQUssRUFFWixTQUFTLEVBSVQsT0FBTyxFQXlCQSxrQkFBa0I7SUFyQi9CLDBCQUEwQixPQUFPO1FBQy9CQSxNQUFNQSxDQUFDQSxJQUFJQSxpQkFBT0EsQ0FBU0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBRUQscUJBQXFCLFNBQW1CLEVBQUUsT0FBMEIsRUFBQyxPQUFXO1FBRTlFQyxJQUFNQSxPQUFPQSxHQUFHQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxDQUFDQSxFQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFDQSxDQUFDQSxFQUFsQkEsQ0FBa0JBLENBQUNBO1FBRXhDQSxJQUFJQSxRQUFRQSxHQUF3QkEsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsRUFBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFFbEZBLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBR0QsMEJBQTBCLElBQUksRUFBRSxHQUFHO1FBQ2xDQyxJQUFNQSxHQUFHQSxHQUFHQSxJQUFJQSxpQ0FBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLENBQUNBLElBQUtBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUFBLENBQUFBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtJQUNaQSxDQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBL0JLLFNBQVMsR0FBVyxJQUFJLGtCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsVUFBVSxHQUFVLElBQUksa0JBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyx3QkFBQSxVQUFVLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDM0MsbUJBQUEsS0FBSyxHQUFRLElBQUksa0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBRTdDLFNBQVMsR0FBRztnQkFDaEIsU0FBUyxFQUFDLEVBQUU7YUFDYixDQUFBO1lBRUssT0FBTyxHQUFHO2dCQUNkLFFBQVEsRUFBRSwyQkFBUzthQUNwQixDQUFBO1lBdUJZLGdDQUFBLGtCQUFrQixHQUFHO2dCQUNoQyxjQUFPLENBQUMsVUFBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxjQUFPLENBQUMsU0FBUyxFQUFHLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxjQUFPLENBQUMsVUFBVSxFQUFFLEVBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLElBQUksYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFDbkYsY0FBTyxDQUFDLEtBQUssRUFBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxhQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxhQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQzlILENBQUEsQ0FBQyIsImZpbGUiOiJsb2dpYy9uZXdTdGF0ZURpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wYXF1ZVRva2VuLHByb3ZpZGUsSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge0FwcFN0YXRlfSAgICAgICAgICAgICAgICAgICBmcm9tICcuL0FwcFN0YXRlJztcbmltcG9ydCB7QWN0aW9ufSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vQWN0aW9ucyc7XG5pbXBvcnQge09ic2VydmFibGV9ICAgICAgICAgICAgICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9ICAgICAgICAgICAgZnJvbSAncnhqcy9zdWJqZWN0L0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQge2Fzb2NpYWRvc30gICAgICAgICAgICAgICAgICBmcm9tICcuL2Fzb2NpYWRvUmVkdWNlcic7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvemlwJztcblxuXG5jb25zdCBpbml0U3RhdGUgICAgICAgICA9IG5ldyBPcGFxdWVUb2tlbihcImluaXRTdGF0ZVwiKTtcbmNvbnN0IGluaXREcml2ZXIgICAgICAgID0gbmV3IE9wYXF1ZVRva2VuKFwiaW5pdERyaXZlclwiKTtcbmV4cG9ydCBjb25zdCBkaXNwYXRjaGVyID0gbmV3IE9wYXF1ZVRva2VuKFwiZGlzcGF0Y2hlclwiKTtcbmV4cG9ydCBjb25zdCBzdGF0ZSAgICAgID0gbmV3IE9wYXF1ZVRva2VuKFwic3RhdGVcIik7XG5cbmNvbnN0IGluaXRWYWx1ZSA9IHtcbiAgYXNvY2lhZG9zOltdXG59XG5cbmNvbnN0IGRyaXZlcnMgPSB7XG4gIGFzb2NpYWRvOiBhc29jaWFkb3Ncbn1cblxuZnVuY3Rpb24gY29uZmlnRGlzcGF0Y2hlcihkcml2ZXJzKTpPYnNlcnZhYmxlPEFjdGlvbj57XG4gIHJldHVybiBuZXcgU3ViamVjdDxBY3Rpb24+KG51bGwpO1xufVxuXG5mdW5jdGlvbiBjb25maWdTdGF0ZShpbml0U3RhdGU6IEFwcFN0YXRlLCBhY3Rpb25zOk9ic2VydmFibGU8QWN0aW9uPixkcml2ZXJzOmFueSk6IE9ic2VydmFibGU8QXBwU3RhdGU+IHtcblxuICBjb25zdCBjb21iaW5lID0gcyA9PiAoe2Fzb2NpYWRvOiBzWzBdfSk7XG5cbiAgbGV0IGFwcFN0YXRlOk9ic2VydmFibGU8QXBwU3RhdGU+ID0gZHJpdmVycy5hc29jaWFkbyhpbml0U3RhdGUuYXNvY2lhZG9zLGFjdGlvbnMpO1xuXG4gIHJldHVybiB3cmFwSW50b0JlaGF2aW9yKGluaXRTdGF0ZSwgYXBwU3RhdGUpO1xufVxuXG5cbmZ1bmN0aW9uIHdyYXBJbnRvQmVoYXZpb3IoaW5pdCwgb2JzKSB7XG4gY29uc3QgcmVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0KTtcbiBvYnMuc3Vic2NyaWJlKHMgPT4ge3Jlcy5uZXh0KHMpfSk7XG4gcmV0dXJuIHJlcztcbn1cblxuXG5leHBvcnQgY29uc3Qgc3RhdGVBbmREaXNwYXRjaGVyID0gW1xuICBwcm92aWRlKGluaXREcml2ZXIsIHt1c2VWYWx1ZTogZHJpdmVycyB9KSxcbiAgcHJvdmlkZShpbml0U3RhdGUsICB7dXNlVmFsdWU6IGluaXRWYWx1ZSB9KSxcbiAgcHJvdmlkZShkaXNwYXRjaGVyLCB7dXNlRmFjdG9yeTogY29uZmlnRGlzcGF0Y2hlciwgZGVwczogW25ldyBJbmplY3QoaW5pdERyaXZlcildfSksXG4gIHByb3ZpZGUoc3RhdGUsICAgICAge3VzZUZhY3Rvcnk6IGNvbmZpZ1N0YXRlLCBkZXBzOiBbbmV3IEluamVjdChpbml0U3RhdGUpLCBuZXcgSW5qZWN0KGRpc3BhdGNoZXIpLCBuZXcgSW5qZWN0KGluaXREcml2ZXIpXX0pXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
