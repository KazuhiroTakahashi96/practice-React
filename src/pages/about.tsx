import { useNavigate } from "react-router-dom";

export type Props = {
  message: string;
};

const About = ({ message }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <h2 className="text-2xl top p-10">{message}</h2>
      <button
        className="text-white bg-sky-400 m-10 p-2 rounded-md hover:bg-sky-600"
        onClick={() => navigate("/contact")}
      >
        Contactページへ
      </button>
    </div>
  );
};

export default About;
