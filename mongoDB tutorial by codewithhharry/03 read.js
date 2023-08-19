db.inventory.find() //Fetch all documents
db.inventory.find({}) //Fetch all documents
db.inventory.find({qty:25}) //Fetch all documents
db.inventory.find( {item: { $in: ["mat","journal"]}}) 

//AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

