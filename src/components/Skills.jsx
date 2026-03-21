"use client";
import {
  SiReact, SiReactHex, SiNextdotjs, SiNextdotjsHex,
  SiJavascript, SiJavascriptHex, SiHtml5, SiHtml5Hex,
  SiCss, SiCssHex, SiBootstrap, SiBootstrapHex,
  SiNodedotjs, SiNodedotjsHex, SiPhp, SiPhpHex,
  SiPython, SiPythonHex, SiSymfony, SiSymfonyHex,
  SiAmazonwebservices, SiAmazonwebservicesHex,
  SiAmazonec2, SiAmazonec2Hex,
  SiAwselasticloadbalancing, SiAwselasticloadbalancingHex,
  SiAwslambda, SiAwslambdaHex,
  SiAmazonsqs, SiAmazonsqsHex,
  SiAmazons3, SiAmazons3Hex,
  SiAmazoniam, SiAmazoniamHex,
  SiGooglegemini, SiGooglegeminiHex,
  SiAmazoncloudwatch, SiAmazoncloudwatchHex,
  SiAmazonroute53, SiAmazonroute53Hex,
  SiAmazonsimpleemailservice, SiAmazonsimpleemailserviceHex,
  SiMysql, SiMysqlHex,
  SiElasticsearch, SiElasticsearchHex,
  SiAmazondynamodb, SiAmazondynamodbHex,
  SiRedis, SiRedisHex,
  SiApachecouchdb, SiApachecouchdbHex,
  SiGo, SiGoHex,
} from "@icons-pack/react-simple-icons";
import * as Icons from "@/components/Icons";
import { skills } from "@/constants";

const iconMap = {
  SiReact: <SiReact color={SiReactHex} />,
  SiNextdotjs: <SiNextdotjs color={SiNextdotjsHex} />,
  SiJavascript: <SiJavascript color={SiJavascriptHex} />,
  SiHtml5: <SiHtml5 color={SiHtml5Hex} />,
  SiCss: <SiCss color={SiCssHex} />,
  SiBootstrap: <SiBootstrap color={SiBootstrapHex} />,
  SiNodedotjs: <SiNodedotjs color={SiNodedotjsHex} />,
  SiGo: <SiGo color={SiGoHex} />,
  SiPhp: <SiPhp color={SiPhpHex} />,
  SiPython: <SiPython color={SiPythonHex} />,
  SiSymfony: <SiSymfony color={SiSymfonyHex} />,
  SiMysql: <SiMysql color={SiMysqlHex} />,
  SiElasticsearch: <SiElasticsearch color={SiElasticsearchHex} />,
  SiAmazondynamodb: <SiAmazondynamodb color={SiAmazondynamodbHex} />,
  SiRedis: <SiRedis color={SiRedisHex} />,
  SiApachecouchdb: <SiApachecouchdb color={SiApachecouchdbHex} />,
  SiAmazonwebservices: <SiAmazonwebservices color={SiAmazonwebservicesHex} />,
  SiAmazonec2: <SiAmazonec2 color={SiAmazonec2Hex} />,
  SiAwselasticloadbalancing: <SiAwselasticloadbalancing color={SiAwselasticloadbalancingHex} />,
  SiAwslambda: <SiAwslambda color={SiAwslambdaHex} />,
  SiAmazonsqs: <SiAmazonsqs color={SiAmazonsqsHex} />,
  SiAmazons3: <SiAmazons3 color={SiAmazons3Hex} />,
  SiAmazoniam: <SiAmazoniam color={SiAmazoniamHex} />,
  SiGooglegemini: <SiGooglegemini color={SiGooglegeminiHex} />,
  SiAmazoncloudwatch: <SiAmazoncloudwatch color={SiAmazoncloudwatchHex} />,
  SiAmazonroute53: <SiAmazonroute53 color={SiAmazonroute53Hex} />,
  SiAmazonsimpleemailservice: <SiAmazonsimpleemailservice color={SiAmazonsimpleemailserviceHex} />,
  CloudFormation: <Icons.CloudFormation />,
  VPC: <Icons.VPC />,
  GlobalAccelerator: <Icons.GlobalAccelerator />,
  SNS: <Icons.SNS />,
  CloudTrail: <Icons.CloudTrail />,
  CloudFront: <Icons.CloudFront />,
  WAF: <Icons.WAF />,
  AWSInspector: <Icons.AWSInspector />,
  AmazonQ: <Icons.AmazonQ />,
  AmazonTranscribe: <Icons.AmazonTranscribe />,
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
                {skill.iconKey ? iconMap[skill.iconKey] : null} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
