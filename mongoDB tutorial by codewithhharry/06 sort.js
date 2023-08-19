db.inventory.find().sort({qty: -1}) //Descending order of qty
db.inventory.find().sort({qty: 1}) //Ascending order of qty

db.inventory.find().skip(1) //Skip the first document
db.inventory.find().skip(2) //Skip the first 2 documents

db.inventory.find().limit(1) //Limits the number of documents in the output to 1
db.inventory.find().limit(2) //Limits the number of documents in the output to 2


