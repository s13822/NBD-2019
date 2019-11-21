printjson(db.people.aggregate( { "$group": { _id: { "$arrayElemAt": [ "$credit.currency", 0 ] }, sumbalance: { $avg: { $ifNull: [ { "$arrayElemAt": ["$credit.balance", 0] }, 0 ]}}}}))
