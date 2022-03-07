import Test from "../models/Test";
import BaseService from "./BaseService";

export default class TestService extends BaseService {
  constructor() {
    super(Test);
  }
}
