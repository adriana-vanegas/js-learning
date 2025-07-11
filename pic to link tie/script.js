const pictures = [
  { name: "Asana", pic: "Asana.svg", url: "asana.com" },
  { name: "Atlassian", pic: "Atlassian.svg", url: "id.atlassian.com" },
  { name: "AWS", pic: "AWS.svg", url: "aws.amazon.com" },
  { name: "Azure", pic: "Azure.svg", url: "azure.microsoft.com" },
  { name: "Google Calendar", pic: "Calendar.svg", url: "calendar.google.com" },
  { name: "Canva", pic: "Canva.svg", url: "canva.com" },
  { name: "Clickhouse", pic: "Clickhouse.svg", url: "clickhouse.com" },
  { name: "Clickup", pic: "Clickup.svg", url: "clickup.com" },
  { name: "Cloudzero", pic: "Cloudzero.svg", url: "cloudzero.com" },
  { name: "Coda", pic: "Coda.svg", url: "coda.io" },
  { name: "Data", pic: "Data.svg", url: "data.com" },
  { name: "Database", pic: "Database.svg", url: "database.com" },
  { name: "Databricks", pic: "Databricks.svg", url: "databricks.com" },
  { name: "Datadog", pic: "Datadog.svg", url: "datadoghq.com" },
  { name: "dbt", pic: "dbt.svg", url: "getdbt.com" },
  { name: "Drive", pic: "Drive.svg", url: "drive.google.com" },
  { name: "Facebook", pic: "Facebook.svg", url: "facebook.com" },
  { name: "Figma", pic: "Figma.svg", url: "figma.com" },
  { name: "Github", pic: "Github.svg", url: "github.com" },
  { name: "Gong", pic: "Gong.svg", url: "gong.io" },
  { name: "Google Cloud", pic: "Google Cloud.svg", url: "cloud.google.com" },
  { name: "Google Doc", pic: "Google Doc.svg", url: "docs.google.com" },
  { name: "Google Sheets", pic: "Google Sheets.svg", url: "sheets.google.com" },
  { name: "Google Slides", pic: "Google Slides.svg", url: "slides.google.com" },
  { name: "Google", pic: "Google.svg", url: "google.com" },
  { name: "Greenhouse", pic: "Greenhouse.svg", url: "greenhouse.io" },
  { name: "Gusto", pic: "Gusto.svg", url: "gusto.com" },
  { name: "Handshake", pic: "Handshake.svg", url: "joinhandshake.com" },
  { name: "Hubspot", pic: "Hubspot.svg", url: "hubspot.com" },
  { name: "Instagram", pic: "Instagram.svg", url: "instagram.com" },
  { name: "LinkedIn", pic: "LinkedIn.svg", url: "linkedin.com" },
  { name: "Looker", pic: "Looker.svg", url: "looker.com" },
  { name: "Loom", pic: "Loom.svg", url: "loom.com" },
  { name: "Monday", pic: "Monday.svg", url: "monday.com" },
  { name: "Netsuite", pic: "Netsuite.svg", url: "netsuite.com" },
  { name: "Notion", pic: "Notion.svg", url: "notion.so" },
  { name: "OpenAI", pic: "OpenAI.svg", url: "chatgpt.com" },
  { name: "Oracle", pic: "Oracle.svg", url: "oracle.com" },
  { name: "Pipedrive", pic: "Pipedrive.svg", url: "pipedrive.com" },
  { name: "Salesforce", pic: "Salesforce.svg", url: "salesforce.com" },
  { name: "Snowflake", pic: "Snowflake.svg", url: "snowflake.com" },
  { name: "Splunk", pic: "Splunk.svg", url: "splunk.com" },
  { name: "Stripe", pic: "Stripe.svg", url: "stripe.com" },
  { name: "Tableau", pic: "Tableau.svg", url: "tableau.com" },
  { name: "TikTok", pic: "TikTok.svg", url: "tiktok.com" },
  { name: "Trello", pic: "Trello.svg", url: "trello.com" },
  { name: "Wordpress", pic: "Wordpress.svg", url: "wordpress.com" },
  { name: "Workday", pic: "Workday.svg", url: "workday.com" },
  { name: "Zendesk", pic: "Zendesk.svg", url: "zendesk.com" },
  { name: "Zoom", pic: "Zoom.svg", url: "zoom.us" },
];

const testURL = "asana.com";

const div = document.querySelector(".image");

pictures.forEach((pic) => {
  if (testURL.includes(pic["url"])) {
    const pictureLink = pic["pic"];
    const pictureName = pic["name"];
    // document.write(pictureLink);
    div.innerHTML = `<img src="${pictureLink}" alt="${pictureName}">`;
  }
});
