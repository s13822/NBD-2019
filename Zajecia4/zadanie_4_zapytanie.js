printjson(db.people.aggregate( { "$group": { _id: "$nationality", avgbmi: { $avg: { $divide: [ "$weight", { $multiply: ["$height", "$height"]} ]  }  }, minbmi: { $min: { $divide: [ "$weight", { $multiply: ["$height", "$height"]} ]  }  }, maxbmi: { $max: { $divide: [ "$weight", { $multiply: ["$height", "$height"]} ]  }  }       }}).toArray())