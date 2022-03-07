import Test from "../models/Test";

const insert = (data) => {
  const test = Test(data);
  return test.save();
};

const list = () => {
  return Test.find({});
};

export { insert, list };
