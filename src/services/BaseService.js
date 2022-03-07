import Mongoose from "mongoose";

export default class BaseService {
  /**
   *
   * @param {Mongoose.Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @returns {Mongoose.Query}
   */
  list(where) {
    return this.model.find(where || {});
  }

  /**
   *
   * @param {object} data
   * @returns {(Promise | undefined)}
   */
  insert(data) {
    const model = new this.model(data);
    return model.save();
  }

  /**
   *
   * @param {any} id?
   * @returns { Mongoose.Query }
   */
  show(id) {
    return this.model.findById(id);
  }

  /**
   *
   * @param {any} id?
   * @returns { Mongoose.Query }
   */
  remove(id) {
    return this.model.findByIdAndDelete(id);
  }
}
