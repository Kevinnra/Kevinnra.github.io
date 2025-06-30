const projects = {
  "active-directory-lab": {
    title: "Active Directory & Helpdesk Simulation Lab",
    image: "/Resources/images/active-directory.png",
    description:"<h2>Key Features</h2><ul><li> Built a fully functional <strong>IT environment</strong> using <strong>Windows Server 2022</strong> and <strong>Windows 10</strong> clients in <strong>VirtualBox</strong>.</li><li> Deployed and configured <strong>Active Directory</strong>, <strong>Organizational Units</strong>, and created <strong>user accounts</strong> via GUI and <strong>PowerShell</strong>.</li><li> Designed and enforced <strong>Group Policies</strong> for <strong>password complexity</strong> and <strong>screensaver locks</strong>. </li><li> Simulated helpdesk operations with <strong>Freshdesk</strong>, resolving 20+ mock tickets covering <strong>password resets</strong>, <strong>account lockouts</strong>, and <strong>GPO</strong> troubleshooting. </li><li> Integrated <strong>Freshdesk API</strong> with <strong>Python</strong> to automate ticket creation and applied <strong>SLA rules</strong> (e.g., 30-min response time for <strong>high-priority issues</strong>).</li></ul>",
    company: "IT SUPPORT",
    githubAvailable: "yes",
    githubUrl: "https://github.com/Kevinnra/ActiveDirectory_HomeLab"
  },
  "Python-Automation-Scripts": {
    title: "Python Automation Scripts for Active Directory & Helpdesk Workflows",
    image: "/Resources/images/python-automate.jpg",
    description:"<h2>Key Features</h2><ul><li> Wrote <strong>Python</strong> scripts to automate ticket creation in <strong>Freshdesk</strong> via its <strong>REST API</strong>, simulating real-world <strong>ITSM</strong> scenarios. </li><li> Developed a ticket categorization tool (e.g., prioritizes tickets based on keywords like '<strong>outage</strong>' or '<strong>password</strong>').</li><li> Used <strong>requests</strong> and <strong>JSON</strong> manipulation to build, send, and validate API payloads, mimicking enterprise automation workflows.</li></ul>",
    company: "IT SUPPORT",
    githubAvailable: "yes",
    githubUrl: "https://github.com/Kevinnra/ActiveDirectory_HomeLab/blob/main/Scripts/Freshdesk-Integration/FreshdeskAPI.py"
  },
  "aws-portfolio-hosting": {
    title: "Personal Portfolio Hosting on AWS S3 & Route 53",
    image: "/Resources/images/Architecture-Diagram-AWS.png",
    description: "<h2>Intended Features</h2><ul><li> Hosted a <strong>static portfolio website</strong> (HTML, CSS, JavaScript) on <strong>AWS S3</strong> for highly available, low-cost web hosting.</li><li> Configured a <strong>custom domain</strong> using <strong>Route 53</strong> and set up DNS records for global access.</li><li> Secured the site with <strong>HTTPS</strong> by integrating <strong>CloudFront</strong> as a CDN and attaching an <strong>SSL certificate</strong> from AWS Certificate Manager.</li><li> Implemented <strong>bucket policies</strong> to restrict access and <strong>prevent public file overwrites</strong>.</li><li> Enabled <strong>versioning</strong> and <strong>lifecycle policies</strong> to manage and optimize S3 storage over time.</li><li> Documented the deployment process in a <strong>README</strong> and created a GitHub repo for future CI/CD integration.</li></ul>",
    company: "AWS CLOUD PROJECT",
    githubAvailable: "no",
    githubUrl: ""
}

  
};
