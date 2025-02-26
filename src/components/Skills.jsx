import {
  SiReact,
  SiReactHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiJavascript,
  SiJavascriptHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss,
  SiCssHex,
  SiBootstrap,
  SiBootstrapHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiPhp,
  SiPhpHex,
  SiPython,
  SiPythonHex,
  SiSymfony,
  SiSymfonyHex,
  SiAmazonwebservices,
  SiAmazonwebservicesHex,
  SiAmazonec2,
  SiAmazonec2Hex,
  SiAwselasticloadbalancing,
  SiAwselasticloadbalancingHex,
  SiAwslambda,
  SiAwslambdaHex,
  SiAmazonsqs,
  SiAmazonsqsHex,
} from "@icons-pack/react-simple-icons";
import * as Icons from "@/components/Icons";
const skills = {
  Frontend: [
    { name: "ReactJS", icon: <SiReact color={SiReactHex} /> },
    { name: "NextJS", icon: <SiNextdotjs color={SiNextdotjsHex} /> },
    { name: "JavaScript", icon: <SiJavascript color={SiJavascriptHex} /> },
    { name: "HTML", icon: <SiHtml5 color={SiHtml5Hex} /> },
    { name: "CSS", icon: <SiCss color={SiCssHex} /> },
    { name: "Bootstrap", icon: <SiBootstrap color={SiBootstrapHex} /> },
  ],
  Backend: [
    { name: "NodeJS", icon: <SiNodedotjs color={SiNodedotjsHex} /> },
    { name: "PHP", icon: <SiPhp color={SiPhpHex} /> },
    { name: "Python", icon: <SiPython color={SiPythonHex} /> },
    { name: "Symfony", icon: <SiSymfony color={SiSymfonyHex} /> },
  ],
  Cloud: [
    {
      name: "AWS",
      icon: <SiAmazonwebservices color={SiAmazonwebservicesHex} />,
    },
    {
      name: "EC2",
      icon: <SiAmazonec2 color={SiAmazonec2Hex} />,
    },
    {
      name: "AWS Elastic Load Balancing",
      icon: <SiAwselasticloadbalancing color={SiAwselasticloadbalancingHex} />,
    },
    {
      name: "Lambda",
      icon: <SiAwslambda color={SiAwslambdaHex} />,
    },
    {
      name: "Cloud Formation",
      icon: <Icons.CloudFormation />,
    },
    {
      name: "Virtual Private Cloud",
      icon: <Icons.VPC />,
    },
    {
      name: "SQS - Simple Queue Service",
      icon: <SiAmazonsqs color={SiAmazonsqsHex} />,
    },
    {
      name: "SNS - Simple Notification Service",
      icon: <Icons.SNS />,
    },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <ul className="list-group">
            {skillList.map((skill) => (
              <li className="list-group-item" key={skill.name}>
                {skill.icon} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
