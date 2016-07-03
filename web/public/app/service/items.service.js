/**
 * Created by Mr.Carry on 16/7/3.
 */


managerApp.service("itemsService", function ($resource, $q) {
    var items = $resource('/api/items/');
    var deferred = $q.defer();
    var promise = deferred.promise;
    return {
        query: function () {
            items.query({}, function (data) {
                deferred.resolve(data);
            }, function () {
                deferred.reject("sorry, it lost!");
            });
            return promise;
        }
    };
});