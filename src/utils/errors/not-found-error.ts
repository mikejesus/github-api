import ErrorException from "./http-exceptions";

class NotFoundError extends ErrorException {
  resource: string;

  constructor(resource: string) {
    super(`Route '${resource}' Not Found`, 404, null);

    this.resource = resource;
  }
}

export default NotFoundError;
