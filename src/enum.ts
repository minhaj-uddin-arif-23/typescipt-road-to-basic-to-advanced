enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// type StatusCodes = 'NotFound'| 'Success'|'Accepted'|'BadRequest'

const FunStatusCode = (code: StatusCodes) => {
  if (
    code == StatusCodes.Accepted ||
    code === StatusCodes.BadRequest ||
    code === StatusCodes.NotFound ||
    code == StatusCodes.Success
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(FunStatusCode(StatusCodes.Accepted));
