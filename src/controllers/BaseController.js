import express from "express";
import httpStatus from "http-status";
import BaseService from "../services/BaseService";

import ApiError from "../errors/ApiError";

export default class BaseController {
  /**
   *
   * @param {BaseService} service
   */
  constructor(service) {
    this.service = service;
  }

  /**
   * @returns {function(): void}
   */
  index() {
    /**
     * @param {express.Request}
     * @param {express.Response}
     */
    return (req, res, next) => {
      this.service
        .list()
        .then((response) => {
          res.status(httpStatus.OK).send(response);
        })
        .catch((e) => {
          return next(new ApiError(e));
        });
    };
  }

  /**
   * @returns {function(): void}
   */
  create() {
    /**
     * @param {express.Request}
     * @param {express.Response}
     */
    return (req, res, next) => {
      this.service
        .insert(req.body)
        .then((response) => {
          res.status(httpStatus.CREATED).send(response);
        })
        .catch((e) => {
          return next(new ApiError(e));
        });
    };
  }

  /**
   * @returns {function(): void}
   */
  show() {
    /**
     * @param {express.Request}
     * @param {express.Response}
     */
    return (req, res, next) => {
      if (!req.params?.id) return next(new ApiError("id not found"));

      this.service
        .show(req.params.id)
        .then((data) => {
          res.status(httpStatus.OK).send(data);
        })
        .catch((e) => {
          return next(new ApiError(e));
        });
    };
  }

  /**
   * @returns {function(): void}
   */
  delete() {
    /**
     * @param {express.Request}
     * @param {express.Response}
     */
    return (req, res, next) => {
      if (!req.params?.id) return next(new ApiError("id not found"));

      this.service
        .remove(req.params.id)
        .then((data) => {
          if (!data)
            return res.status(httpStatus.NOT_FOUND).send({
              message: "Böyle bir kayıt bulunmamaktadır.",
            });
          res.status(httpStatus.OK).send(data);
        })
        .catch((e) => {
          return next(new ApiError(e));
        });
    };
  }
}
