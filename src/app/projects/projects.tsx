import { ReactElement } from "react";
export interface Project {
  project_title: string;
  skills: string;
  role: string;
  responsibility: string;
  resource: string | ReactElement;
  type: "yt" | "embed" | "image" | "";
  img: string;
  description: string | ReactElement;
}

export interface Company {
  company_name: string;
  url: string;
  logo: string;
  linkedIn?: string;
  projects: Project[];
}
const projectsList: Company[] = [
  {
    company_name: "Knexus",
    url: "https://www.knexusai.com/",
    logo: "https://d3qy1pxzcopg5z.cloudfront.net/wp-content/uploads/2021/01/15112406/knexus-full-000-3-01.png",
    linkedIn: "https://www.linkedin.com/company/knexus/",
    projects: [
      {
        img: "",
        project_title: "Experiences",
        skills: "ReactJS, PHP Symfony, MYSql, AWS, Redis, SQS, S3",
        resource: "6m94px6o4uQ",
        type: "yt",
        description: (
          <>
            I was <b>product owner</b> for Experiences. The interface is used to
            set up a JavaScript widget. It has the option to select seven widget
            types. Each type has some common and different options for the
            number of content displays, customer journey, AI/ML recommendation
            (decision-making), content format, template, and A/B testing option.
            The template UI has the option to create from base twig template and
            is customizable with CSS, JavaScript, and HTML. It was used to
            Knexus widgets, which deliver personalized, shoppable content on
            websites and landing pages.
            <h5>Knexus Widgets:</h5> HTML containers that insert personalized
            content. Responsive and don&apos;t impact page load or layout.
            <h5>Experience Types:</h5>
            <ol>
              <li>
                <b>Dynamic Content</b>: Personalized content based on customer
                data.
              </li>
              <li>
                <b>Shoppable Content</b>: Personalized content with shoppable
                products.
              </li>
              <li>
                <b>Education & Social Proofing</b>: Content that educates and
                provides social proof for products.
              </li>
              <li>
                <b>Shoppable Feed</b>: Infinity scroll of personalized,
                shoppable content.
              </li>
              <li>
                <b>Shoppable YouTube Video Landing Page</b>: Shoppable YouTube
                videos with related products.
              </li>
              <li>
                <b>Products</b>: Personalized product recommendations.
              </li>
              <li>
                <b>Products with Social Proofing</b>: Product recommendations
                with supporting social proof content.
              </li>
            </ol>
          </>
        ),
        role: "Product Owner",
        responsibility:
          "My responsibility was to lead end to end for frontend, backend, and technical solution.",
      },
      {
        img: "",
        project_title: "ETL Job Processor for CouchDB",
        skills: "NodeJS, MySQL, Couch DB",
        resource: "",
        type: "",
        description:
          "I designed the solution for near real-time analytic data aggregation. The solution was to read data from MySQL and store it in CouchDB after its aggregation. Couch DB has documents and views for different dimensions. Each client has a different db prefix for the couch document.",
        role: "Technical Solution",
        responsibility:
          "My role was to review the solution development and provide feedback to the developer.",
      },
      {
        img: "",
        project_title: "Content Uploader for Knexus AI",
        skills: "NodeJS, BinaryJS, S3FS, WebSocket, Nginx reverse proxy",
        resource: "",
        type: "",
        description:
          "Created a node server for content upload over a secure WebSocket. The server was running behind an nginx reverse proxy. After data is received by the server, it uploads in the AWS S3FS file system and returns JSON with content ID and S3 path.",
        role: "Technical Solution and Development",
        responsibility:
          "My role was to migrate the upload of files from PHP to this solution. I owned end-to-end delivery for this solution.",
      },
      {
        img: "",
        project_title: "CSS and JS Minification for Knexus AI",
        skills: "Gulp and NodeJS",
        resource: "",
        type: "",
        description:
          "I created CSS and JS minification automation with gulp, which runs in every build.",
        role: "Technical Solution  and Development",
        responsibility:
          "After the release of the project, CSS and JS took more time over the HTTP version 1. My role was to find the solution and automate it with the existing build process in the release automation script.",
      },
      {
        img: "",
        project_title:
          "Widget JS, Visitor JS, Analytics JS build for Knexus AI",
        skills: "NodeJS, S3, Cloudfront, uglify-js",
        resource: "",
        type: "",
        description:
          "I create JS build for widget.js, analytics, visitor.js, and lightbox creating java script for each client. In the build process, it replaces the client ID, analytic URL, and token for encryption for each client. After building it, upload it to S3 and create invalidation for CDN.",
        role: "Technical Solution  and Development",
        responsibility:
          "My role was to streamline and automate the workflow for JavaScript to be shared with the client for widget.js and visitor.js integration. There were lots of manual efforts, ie, manually building the node package and manually creating cache invalidation from CDN. Which resulted in a better release process.",
      },
      {
        img: "",
        project_title: "Microservice for Image Processing",
        skills: "NodeJS, Lambda Function, S3, SQS, Lambda Layer",
        resource: "",
        type: "",
        description:
          "I created a microservice for image processing after image upload to create different versions of the image. The Lambda function was called in asyc mode from PHP API. After processing it, set the content status to published in SQS so that the content worker can process it to publish it.",
        role: "Technical Solution and Development",
        responsibility:
          "My role was to first understand the workflow of Lambda in VPC mode. The setup of the Lambda function VPC mode took most of the time as setup of the Lambda layer for AWS and image-magick. Test connection with redis and MySQL. After understanding my role was to migrate code from PHP to Lambda function to create a micro service, I set up a different codebase. Automate the build and release process in the AWS ecosystem. ",
      },
      {
        img: "",
        project_title: "Microservice for Analytic Capture",
        skills: "NodeJS, Lambda Function, ALB, Redis",
        resource: "",
        type: "",
        description:
          "I designed a solution for processing analytics. User requests are sent to ALB, and  ALB sends data to the target group with the lambda function. The lambda function saves data in Redis for further processing. ",
        role: "Technical Solution",
        responsibility:
          "My role was to create a solution for migration analytics capturing from end users from PHP monolithic applications to microservices. This solution improved the EC2 autoscaling by diverting the load from EC2 to the Lambda function. It also created a new domain for analytic capturing in HTTP V1, which improved load time for the users.",
      },

      {
        img: "",
        project_title: "Microservice for Image Autotaging",
        skills: "",
        resource: "",
        type: "",
        description:
          "I created a micro service for auto-tagging images, which calls Google Vision API and Imaga API to text information from images and text information passed to internal NLP API to generate auto-tagging.",
        role: "Migration from PHP to Lambda",
        responsibility:
          "My role was to migrate existing monolithic solutions from PHP for image auto-tagging to microservice in node.js and integrate APIs from Google Vision, Imaga, internal NLP, and saving in the database. If Imaga API returns processing, it updates the status in the content table for further processing to read the status from Imaga and re-call auto-tagging NLP API from a different microservice.",
      },
    ],
  },
  {
    company_name: "DigitasIndia",
    url: "https://www.digitas.com/en-in/",
    logo: "https://www.digitas.com/en-in/sites/en-in/files/2021-09/logo-digitas.svg",
    linkedIn: "https://www.linkedin.com/company/digitasin/",
    projects: [
      {
        img: "",
        project_title: "Aircel High Flyer",
        skills: "PHP, MySql, Facebook API, Image GD, JQuery",
        resource: "yCLhYSbNQCQ",
        type: "yt",
        description:
          "A questions based game play for IPL7. and gratifications for winners",
        role: "Developer",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, creating mysql table, creating admin pannel to see all the entries. At the end dymaic image was created using PHP Image GD library.",
      },
      {
        img: "",
        project_title: "Max Healthcare - Free IVF consultation ",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A Sign up for a FREE  consultation with our ovarian aging expert.",
        role: "Developer",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, creating mysql table, creating admin pannel to see all the entries.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Veet Walk of Confidance",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "Veet Walk of Confidance - a mini CMS based event showcase website for Veet Be The Diva contest, for Twitter Feed, photo feed, youtube feed, news feed, celebrity feed, user can leave comment by Twitter connect / FB connect",
        role: "Developer",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, creating mysql table, creating admin pannel to see all the entries.",
      },
      {
        img: "",
        project_title: "Aircel Chennai Open",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A questions based game play. and gratifications for winners",
        role: "Developer",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, creating mysql table, creating admin pannel to see all the entries.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Veet Naturals - Myth Busters",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A questions based game play for creating awarenss for Veet new products.",
        role: "Developer",
        responsibility: "My role was to convert HTML to dynamic PHP",
      },
      {
        img: "",
        project_title: "ingram redington - Iphone Store Locator",
        skills: "PHP, MySql, JQuery",
        resource: "",
        type: "",
        description:
          "A launch website for iPhone 5C/5S, in india to create awareness of avilable stores in india and make them able to register for launch event/s.",
        role: "Developer",
        responsibility: "My role was to convert HTML to dynamic PHP",
      },
      {
        img: "",
        project_title: "Max Health Care	- MAX-IMIZE PINK",
        skills: "PHP, MySql, Facebook API, Image GD, JQuery",
        resource: "",
        type: "",
        description: "An awarenss buzz for breast cancer in woman",
        role: "Developer",
        responsibility: "My role was to convert HTML to dynamic PHP",
      },
      {
        img: "",
        project_title: "Aircel - Ticket to Cricket",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A timer based quiz application, user has to answer 10 questions in 60 seconds. User can view leaderboard. Admin panel to edit, add questions using csv , and view reports.",
        role: "Developer",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, creating mysql table, creating admin pannel to see all the entries. Upload questions from CSV.",
      },
      {
        project_title: "Axis Bank - Youth Card 2013",
        skills: "PHP, MySql, JQuery",
        resource: "",
        img: "https://pbs.twimg.com/media/BGSXouxCIAAtpPh?format=jpg&name=large",
        type: "image",
        description:
          "An engegment activity and create awareness that youth can obtain debit card custmoized as per there need and look & feel by designing it at threr own pace.",
        role: "Back end",
        responsibility:
          "My role was to convert HTML to dynamic PHP, integrage facebook APIs, and save images on server after customization from an flash APP. Create admin for the same.",
      },
      {
        img: "",
        project_title: "Axis Bank- YouTube Custom Channel",
        skills: "PHP, MySql, AWS S3, Youtube, JQuery",
        resource: "",
        type: "",
        description:
          "A product based website to be used in  iframe - in the custom tab of youtube. Developved frontend and a mini cms to add, edit products, interactive videos, setting menu postion using jquery ui.",
        role: "Developer",
        responsibility:
          "My role was create backend CMS, and integrate YouTube APIs, and AWS S3",
      },
      {
        img: "",
        project_title: "Maruti - What&apos;s your reason - Alto 800",
        skills: "PHP, MySql, JQuery",
        resource: "",
        type: "",
        description:
          "A project to capture user&apos;s reviews for Alto 800 for making no 1 car.",
        role: "Developer",
        responsibility:
          "My role was to create fronend and backend along with admin pannel.",
      },
      {
        resource: "",
        project_title: "Razorfish - Tweet A Salute",
        skills: "PHP, MYSql, Twitter API, CRON",
        img: "https://pbs.twimg.com/media/ByhfyGkCUAAlqmS?format=jpg&name=large",
        type: "image",
        description:
          "A virtual flag hosting campaign to flew the flag beyond Mount Everest using twitter#tag #tweetasalute. Front end, tweet bot to reteet, a cron code to read tweets having #tweetasalute and which has tweeted dirctly in my account not on website tweetasalute.com",
        role: "Developer",
        responsibility:
          "My role was to create dynamic website and create A cron to read tweets and insert in database using twitter API.",
      },
      {
        img: "",
        project_title: "Eureka Forbes - Science Contest",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: (
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D10151903761446259%26set%3Da.377476901258&show_text=true&width=500"
            width={500}
            height={357}
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ),
        type: "embed",
        description:
          "A project to capture user&apos;s enty for contest &quot;Water Coperation Challenge&quot;, in the form of word doc or an image with student profile. User can view the entry gallery and can search the gallery.",
        role: "Developer",
        responsibility:
          "My role was to create facebook APP front end and backend.",
      },
      {
        img: "",
        project_title: "Airtel - F1 Marshal in the making",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A timer based quiz application for GK of F1, user has to answer each questions in 60 seconds.",
        role: "Developer",
        responsibility:
          "My role was to create facebook APP front end and backend.",
      },
      {
        img: "",
        project_title: "Airtel - Airtel Rising Star 2013",
        skills: "PHP, MySql, Youtube API, JQuery",
        resource: "",
        type: "",
        description:
          "A project to uplaod videos and showing them in gallery. In galley all videos are from youtube channel and user&apos;s video was uploaded to youtube channel in admin pannel.",
        role: "Developer",
        responsibility:
          "My role was to create admin and fronend pannel with modration. After Admin approval, videos was uploaded to YouTube.",
      },
      {
        img: "",
        project_title: "Axis Bank - Bankonomics",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A timer based quiz application for awareness of axis bank and banking. User has to answer 5 questions minimum time. User can view weekly leaderboard. Admin panel to edit, add questions using csv , decalre winner, and view reports.",
        role: "Developer",
        responsibility:
          "My role was to create admin and fronend pannel with uploading of questions from csv.",
      },
      {
        img: "",
        project_title: "Aircel - All Access microsite IPL Blog",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "This is a custom blog site, with content listing, searching, encripted voting and having photo gallery. An admin pannel to write blog and blog upload blog photo. Rest api to feed blog content on crickbuzz website.",
        role: "Developer",
        responsibility: "My role was to create website and admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Dettol Dho dho kar Jetto",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A flash animation for awareness for washing colored hand using dettol handwash. Backend to capture time taken in washing the hand using base64 encoding.",
        role: "Developer",
        responsibility: "My role was to create website and admin pannel.",
      },
      {
        img: "",
        project_title: "Samsung	- Save water on Holi Facebook app",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A flash animation for awareness to save water. Backend to capture no of litters water saved.",
        role: "Developer",
        responsibility: "My role was to create facebook app and admin pannel.",
      },
      {
        img: "",
        project_title: "Aircel - All Access microsite",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A microsite to capture user&apos;s blog, shoing them in gallery. User can search, share, tweet and vote the entry. A backend to view the report.",
        role: "Developer",
        responsibility: "My role was to create website and admin pannel.",
      },
      {
        img: "",
        project_title: "Airtel Party Idea Microsite and Facebook App",
        skills: "PHP, MySql, Facebook API, JQuery",
        resource: "",
        type: "",
        description:
          "A flash annimated Microsite and facebook app to capture user&apos;s collest idea for party, shoing them in gallery. User can search, share, tweet and vote the entry. A backend to view the report",
        role: "Developer",
        responsibility: "My role was to create website and admin pannel.",
      },
      {
        img: "",
        project_title: "Axis Bank - It&apos;s All About Money",
        skills: "PHP, MySql, WordPress",
        resource: "dEVpdor768o",
        type: "yt",
        description:
          "It was a wordpress blog for money releated information by Axis Bank.",
        role: "Developer",
        responsibility:
          "My role was to deploy and management of wordpress blog.",
      },
      {
        img: "",
        project_title:
          "Axis Bank - Progess Together Microside and Facebook App",
        skills:
          "PHP, MySql, AWS S3, Open Inviter, Three.js, HTML5 Canvas, IMAGE GD Libary",
        resource: "QLxNasrHwx0",
        type: "yt",
        description:
          "ProgressTogether is a platform where one can acknowledge the people for their contributions in life. The acknowledgement is shown in the from of connected graph, in connected graph people can be search. HTML5 canvas (The graph image run time view) can be shared in facebook. The user can see to whom heshe has acknowledged and who has acknowledged himher. One can acknowledge from facebook or can import email from gmail, yahoo, hotmail. Admin panel to view report.",
        role: "Developer",
        responsibility:
          "My role was to create JSON data to show graph connection for invitations, its database, creating image to be shared on Facebook along with admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Say No To HIV",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A unique campaign for awareness about HIV and worlds AIDS day, this project capture the pledge taken by user in inches, by this to increase the length of virtual condom.",
        role: "Developer",
        responsibility: "My role was to create facebook app and admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Do The Rex",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "ni3GHgECVJg",
        type: "yt",
        description:
          "This was a social media campaign, featuring Ranveer Singh, aimed to promote safe sex and engage in open discussions about sexual well-being in India.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Dettol Diwali Facebook App",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A flash animated facebook app to create awareness about noice pollution cased by crackers. It tracks which cracker has been cracked and how the user is informed how much noice pollution has not been increased. A back end to view the report.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Nestle Treasure Hunt Facebook App",
        skills: "PHP, MySql, Facebook API, YouTube, jQuery",
        resource: "",
        type: "",
        description:
          "A product awareness based project. User has to watch a TVC every action is being captured (mute, play, %view, rewind, pause). After that user has to answer question related TVC, User has to invite friends and accepted invite increase the user point in leader board. User can overall larboard and his/her leader board weekly. A admin panel to view report.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Samsung	Touch Style Calc: Champ Neo Duos",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A question based facebook app to calculate how much user is touch friendly with champ neo duos phone. User has to answer what he likes in the mobile phone.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "ESPN - Karbonn Smart CLT-20 Asli Fan",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "User has to suport the team- CSK, MI, KKR, DDA by uploading photo / writing sloagn in the contest. A leaderbaord for each team fans.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser	Veet Be The Diva Phase1",
        skills: "PHP, MySql, Facebook API, ImageGD, jQuery",
        resource: "",
        type: "",
        description:
          "Photograph based contest, user has to upload the photogarph, and show them in gallery.",
        role: "Developer",
        responsibility:
          "My role was to create facebook app, and website with admin pannel",
      },
      {
        img: "",
        project_title: "Samsung	Samsung Two Million",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "Samsung Mobile india launch this facebook app for the fans. User can create his/her cover picture in 4 diffrent theems by uploading 6 photos either from facebook/desktop. Cretead picture is being uploaded in facebook account.",
        role: "Developer",
        responsibility:
          "My role was to create facebook app with admin pannel and create image with brand image watermarked so that it could be used to set cover image in Facebook.",
      },
      {
        img: "",
        project_title: "Samsung	Galaxy Note II Be Creative",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A prelaunch online awareness for Samsung Note II, user has to wacth a TVC related to feature of mobile phone and has to write sloagn - what user can do with the feature. Daily winner get chance to win Note II.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Nestle - My Own Maggi Pack",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A unique way to create brand awareness - &quot;2 minute ki khushiyan&quot;, user can create virtual maggi pack with their photos form facebook. User can zoom, rotate, the uploaded picture and can write slogan. Final picture posted to facebook.",
        role: "Developer",
        responsibility:
          "My role was to create facebook app, with admin pannel. Create iamge from base64 encoded data posted from flash app. ",
      },
      {
        img: "",
        project_title: "Airtel Social Clock",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A flash based clock to showcase rightnow moments in &quot;jo tera hai wo mera hai&quot; around the world on facebook and twitter. User can rotate the clock to get updates in back time.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Nestle Biggest Maggi Fan",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: (
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMeriMaggiIndia%2Fphotos%2Fa.149840085069910%2F420731421314107%2F%3Ftype%3D3&show_text=true&width=500"
            width={500}
            height={388}
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ),
        type: "embed",
        description:
          "A sloagn based contest to capture how the user is biggest maggi fan, and top voted entry got chance to meet Amitabh Bacchan.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Dabur - Réal Fruiticons & Friends",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "A unique way to create brand awareness by expressing user&apos;s mood on his/her own facebook wall or friends wall by choosing and sending messages. Moods were represnted by real frutis.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Reckitt Benckiser - Veet Strip Ease",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description: "A photo uplaod based contest to get veet samples.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
      {
        img: "",
        project_title: "Hp - Tiffin Treats",
        skills: "PHP, MySql, Facebook API, jQuery",
        resource: "",
        type: "",
        description:
          "User has to upload recipes and recipe image, recipes can been shown in gallery.",
        role: "Developer",
        responsibility: "My role was to create facebook app with admin pannel.",
      },
    ],
  },
];
export default projectsList;
