import { instance } from "~/apiBase/instance";

class CourseApi {
  getAll = () =>
    instance.get<IApiResultCourse<ICourse[]>>("/api/Course/GetAllCourse");
  post = (data: ICourse) => instance.post("/api/Course/InsertCourse", data, {});
}

export const courseApi = new CourseApi();
