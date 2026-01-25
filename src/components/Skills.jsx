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
  SiAmazons3,
  SiAmazons3Hex,
  SiAmazoniam,
  SiAmazoniamHex,
  SiGooglegemini,
  SiGooglegeminiHex,
  SiAmazoncloudwatch,
  SiAmazoncloudwatchHex,
  SiAmazonroute53,
  SiAmazonroute53Hex,
  SiAmazonsimpleemailservice,
  SiAmazonsimpleemailserviceHex,
  SiMysql,
  SiMysqlHex,
  SiElasticsearch,
  SiElasticsearchHex,
  SiAmazondynamodb,
  SiAmazondynamodbHex,
  SiRedis,
  SiRedisHex,
  SiApachecouchdb,
  SiApachecouchdbHex,
  SiGo,SiGoHex
} from "@icons-pack/react-simple-icons";
import * as Icons from "@/components/Icons";
export const skills = {
  Frontend: [
    { name: "ReactJS", icon: <SiReact color={SiReactHex} /> },
    { name: "NextJS", icon: <SiNextdotjs color={SiNextdotjsHex} /> },
    { name: "JavaScript", icon: <SiJavascript color={SiJavascriptHex} /> },
    { name: "HTML", icon: <SiHtml5 color={SiHtml5Hex} /> },
    { name: "CSS", icon: <SiCss color={SiCssHex} /> },
    { name: "Bootstrap", icon: <SiBootstrap color={SiBootstrapHex} /> },
  ],

  Databases: [
    { name: "MySQL - AWS RDS", icon: <SiMysql color={SiMysqlHex} /> },
    {
      name: "Elastic Search - AWS Open Search",
      icon: <SiElasticsearch color={SiElasticsearchHex} />,
    },
    {
      name: "AWS Dynamo DB",
      icon: <SiAmazondynamodb color={SiAmazondynamodbHex} />,
    },
    { name: "Redis", icon: <SiRedis color={SiRedisHex} /> },
    { name: "Couch DB", icon: <SiApachecouchdb color={SiApachecouchdbHex} /> },
  ],
  Backend: [
    { name: "NodeJS", icon: <SiNodedotjs color={SiNodedotjsHex} /> },
    { name: "Golang", icon: <SiGo color={SiGoHex} /> },
    { name: "PHP", icon: <SiPhp color={SiPhpHex} /> },
    { name: "Python", icon: <SiPython color={SiPythonHex} /> },
    { name: "Symfony", icon: <SiSymfony color={SiSymfonyHex} /> },
  ],
  AI: [
    {
      name: "Google Gemini",
      icon: <SiGooglegemini color={SiGooglegeminiHex} />,
    },
    {
      name: "Amazon Q",
      icon: <Icons.AmazonQ />,
    },
    {
      name: "GenAI",
      icon: null,
    },
    {
      name: "Prompt Engineering",
      icon: null,
    },
    {
      name: "Amazon Transcribe",
      icon: <Icons.AmazonTranscribe />,
    },
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
      name: "AWS Route 53",
      icon: <SiAmazonroute53 color={SiAmazonroute53Hex} />,
    },
    {
      name: "Global Accelerator",
      icon: <Icons.GlobalAccelerator />,
    },
    {
      name: "SQS - Simple Queue Service",
      icon: <SiAmazonsqs color={SiAmazonsqsHex} />,
    },
    {
      name: "SNS - Simple Notification Service",
      icon: <Icons.SNS />,
    },
    {
      name: "SES - Simple Email Service",
      icon: (
        <SiAmazonsimpleemailservice color={SiAmazonsimpleemailserviceHex} />
      ),
    },
    {
      name: "Cloud Watch",
      icon: <SiAmazoncloudwatch color={SiAmazoncloudwatchHex} />,
    },
    {
      name: "Cloud Trail",
      icon: <Icons.CloudTrail />,
    },
    {
      name: "S3 - Simple Storage Service",
      icon: <SiAmazons3 color={SiAmazons3Hex} />,
    },
    {
      name: "CloudFront - CDN",
      icon: <Icons.CloudFront />,
    },
    {
      name: "IAM - Identity and Access Management",
      icon: <SiAmazoniam color={SiAmazoniamHex} />,
    },
    {
      name: "WAF - Web Application Firewall",
      icon: <Icons.WAF />,
    },
    {
      name: "AWS Inspector",
      icon: <Icons.AWSInspector />,
    },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 row">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div className="col-lg-6" key={category}>
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
