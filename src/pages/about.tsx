export type Props = {
  message: string;
};

const About = ({ message }: Props) => {
  return <div>{message}</div>;
};

export default About;
