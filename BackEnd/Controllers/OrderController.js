const OrderSchema = require("../Model/OrderSchema");


const addorder = async (req, res, next) => {
  const { userid, date, paymentMethod,p_Detail, Services} = req.body;

  const newUser = new UserSchema({
   userid:userid,
    date: date,
    paymentMethod: paymentMethod,
    p_Detail:p_Detail,
    Services:Services
  });
  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
  }

  res.json(newUser);
};













exports.addorder = addorder;
