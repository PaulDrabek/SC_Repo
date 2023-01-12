import axios from "axios";

//generelle API für Backend, die jedes Mal mit URL "api" gelesene wird, danach müssen spezfischen URL dazu hinzugefügt werden
export default axios.create({
  baseURL: "/api",
});
