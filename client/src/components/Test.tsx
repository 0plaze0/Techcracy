import { api } from "../config/api";

const Test = () => {
  const datapost = async () => {
    await api.post("/api/v1/event/create-event");
  };

  datapost();
  return <div>Test</div>;
};

export default Test;
