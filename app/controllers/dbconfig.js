exports.host = "host";
exports.username = "username";
exports.password = "password";

exports.table.studioOwner = "studioOwner";
exports.table.studio = "studio";
exports.table.room = "room";
exports.table.reservation = "reservation";
exports.table.user = "user";
exports.table.comment = "comment";

exports.studioOwner.id = "id";
exports.studioOwner.name = "name";
exports.studioOwner.username = "username";
exports.studioOwner.password = "password";
exports.studioOwner.email = "email";
exports.studioOwner.phone = "phone";
exports.studioOwner.bankAccount = "bankAccount";

exports.studio.id = "id";
exports.studio.ownerID = "ownerID";
exports.studio.openTime = "openTime";
exports.studio.name = "name";
exports.studio.address = "address";
exports.studio.numRoom = "numRoom";

exports.room.id = "id";
exports.room.studioID = "studioID";
exports.room.size = "size";
exports.room.price = "price";
exports.room.type = "type";
exports.room.info = "info";
exports.room.pic = "pic";
exports.room.maxSize = "maxSize";

exports.reservation.id = "id";
exports.reservation.roomid = "roomid";
exports.reservation.reserverid = "reserverid";
exports.reservation.status = "status";
exports.reservation.timeStart = "timeStart";
exports.reservation.timeEnd = "timeEnd";
exports.reservation.paymentStatus = "paymentStatus";

exports.user.id = "id";
exports.user.name = "name";
exports.user.username = "username";
exports.user.password = "password";
exports.user.address = "address";
exports.user.email = "email";
exports.user.phone = "phone";

exports.comment.userid = "userid";
exports.comment.roomid = "roomid";
exports.comment.rating = "rating";
exports.comment.detail = "detail";
exports.comment.time = "time";
