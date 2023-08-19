//Delete all the records in the database (inventory)
db.inventory.deleteMany({})

db.inventory.deleteMany({ status : "A" })

db.inventory.deleteOne({ status : "D" })

