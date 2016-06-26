angular.module("modulex", []).service("module", function($timeout) {
	return {
		create: function(pro) {
			var cre = function(cla, pro) {
				for (var p in pro) {
					cla.prototype[p] = pro[p];
				}
				return cla;
			}
			return cre(function() {
				this.__setData = function(data){
					angular.extend(this,data);
				};
				if(this.__instanceBefore){
					this.__instanceBefore();
				}
			}, pro);
		}
	};
})