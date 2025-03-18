import useOnlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";

const About = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <UserClass name={"Food App"} />
      <UserClass name={"second app"} />
    </div>
  );
};
export default About;
