const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  var1: Number,
  var2: Number,
  var3: Number,
  var4: Number,
  var5: Number,
  var6: Number,
  var7: Number,
  var8: Number,
  var9: Number,
  var10: Number,
  var11: Number,
  var12: Number,
  var13: Number,
  var14: Number,
  var15: Number,
  var16: Number,
  var17: Number,
  var18: Number,
  var19: Number,
  var20: Number,
  var21: Number,
  var22: Number,
  var23: Number,
  var24: Number,
  var25: Number,
  var26: Number,
  var27: Number,
  var28: Number,
  var29: Number,
  var30: Number,
  var31: Number,
  var32: Number,
  var33: Number,
  var34: Number,
  var35: Number,
  var36: Number,
  var37: Number,
  var38: Number,
  var39: Number,
  var40: Number,
  var41: Number,
  var42: Number,
  var43: Number,
  var44: Number,
  var45: Number,
  var46: Number,
  var47: Number,
  var48: Number,
  var49: Number,
  var50: Number,
  var51: Number,
  var52: Number,
  var53: Number,
  var54: String,
  var55: String,
  var56: Number,
  var57: Number,
  var58: Number,
  var59: Number,
  var60: Number,
  date: String,
  user: String,
  timestamp: {
    type: Date,
    default: Date.now,
    get: function(v) {
      return new Date(v).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    },
  },
});

// const dataSchema = new mongoose.Schema({
//   user: String,
//   userID: Number,
//   date: String,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//     get: function(v) {
//       return new Date(v).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
//     },
//   },
//   motion:{
//     speed: Number,
//     rpm: Number,
//     distance: Number,
//     trip: Number,
//     slope: Number,
//     mode: Number,
//   },
//   temperature:{
//     controllerTemperature: Number,
//     motorTemperature: Number,
//     ambientTemperature: Number,
//     otherTemperature: Number,
//     controllerFault: Number,
//   },
//   battery1:{
//     voltage: Number,
//     current: Number,
//     soc: Number,
//     power: Number,
//     watthr: Number,
//     range: Number,
//     charging: Number,
//     batteryFault: Number,
//     lowCell: Number,
//     highCell: Number,
//     avgCell: Number,
//     cell:{
//       v1: Number,
//       v2: Number,
//       v3: Number,
//       v4: Number,
//       v5: Number,
//       v6: Number,
//       v7: Number,
//       v8: Number,
//       v9: Number,
//       v10: Number,
//       v11: Number,
//       v12: Number,
//       v13: Number,
//       v14: Number,
//       v15: Number,
//       v16: Number,
//       v17: Number,
//       v18: Number,
//       v19: Number,
//       v20: Number,
//       v21: Number,
//       v22: Number,
//       v23: Number,
//       v24: Number,
//     }
//   },
//   battery2:{
//     voltage: Number,
//     current: Number,
//     soc: Number,
//     power: Number,
//     watthr: Number,
//     range: Number,
//     charging: Number,
//     batteryFault: Number,
//     lowCell: Number,
//     highCell: Number,
//     avgCell: Number,
//     cell:{
//       v1: Number,
//       v2: Number,
//       v3: Number,
//       v4: Number,
//       v5: Number,
//       v6: Number,
//       v7: Number,
//       v8: Number,
//       v9: Number,
//       v10: Number,
//       v11: Number,
//       v12: Number,
//       v13: Number,
//       v14: Number,
//       v15: Number,
//       v16: Number,
//       v17: Number,
//       v18: Number,
//       v19: Number,
//       v20: Number,
//       v21: Number,
//       v22: Number,
//       v23: Number,
//       v24: Number,
//     }
//   },
//   battery3:{
//     voltage: Number,
//     current: Number,
//     soc: Number,
//     power: Number,
//     watthr: Number,
//     range: Number,
//     charging: Number,
//     batteryFault: Number,
//     lowCell: Number,
//     highCell: Number,
//     avgCell: Number,
//     cell:{
//       v1: Number,
//       v2: Number,
//       v3: Number,
//       v4: Number,
//       v5: Number,
//       v6: Number,
//       v7: Number,
//       v8: Number,
//       v9: Number,
//       v10: Number,
//       v11: Number,
//       v12: Number,
//       v13: Number,
//       v14: Number,
//       v15: Number,
//       v16: Number,
//       v17: Number,
//       v18: Number,
//       v19: Number,
//       v20: Number,
//       v21: Number,
//       v22: Number,
//       v23: Number,
//       v24: Number,
//     }
//   },
// });

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
