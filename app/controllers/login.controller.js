exports.register = function(req,res){
	var ret = {'test':'123'};
	res.status(200).json(ret);
};
