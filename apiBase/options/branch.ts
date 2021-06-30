import { instance } from "~/apiBase/instance";

class BranchApi {
  getAll = () =>
    instance.get<IApiResult<IBranch[]>>("/api/Branch/GetAllBranch");
  post = (data: IBranch) => instance.post("/api/Branch/InsertBranch", data);
}

export const branchApi = new BranchApi();
