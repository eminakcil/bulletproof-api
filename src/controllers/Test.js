import BaseController from "./BaseController";
import TestService from "../services/Test";

export default class TestController extends BaseController {
  constructor() {
    super(new TestService());
  }
}
