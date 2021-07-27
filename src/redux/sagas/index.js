// export function* sagaGeneric(action) {
//     const { payload, type } = action;
//     const methodName = lodash.camelCase(type);
//     const request = callMethods[methodName](payload);
//     yield request;
// }

// function* allSagaWatcher(action){
//     console.log(action);
//     yield takeEvery(({type}) => /-Request$/g.test(type), SagaGeneric)
// }

// export function* rootSaga() {
//     yield all([allSagaWatcher(), mySagaFilm()]);
// }