type IApiResult<T = any> = {
  createAcc: T;
  message: string;
};

type IApiResultCourse<T = any> = {
  acc: T;
  message: string;
};

type IBaseApi<T> = {
  Enable: boolean;
  CreatedOn: string;
  CreatedBy: string;
  ModifiedOn: string;
  ModifiedBy: string;
} & T;
