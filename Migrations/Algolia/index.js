const axios = require("axios");

const locale = "ar-ar";

const applicationId = "";
const applicationKey = "";

const getRecords = async () => {
  const getConfig = {
    headers: {
      "X-Algolia-API-Key": applicationKey,
      "X-Algolia-Application-Id": applicationId
    }
  };


  const getUrl = `https://${applicationId}-dsn.algolia.net/1/indexes/faq_${locale}?hitsPerPage=80`;
  const response = await axios.get(getUrl, getConfig);
  const records = response.data.hits;
  const requests = [];
  records.map((r) => {

    if (r.categories && r.categories.length > 0) {
      r.categories.map((c) => {
        if (c.id.includes("B") || c.id.includes("A") || c.id.includes("U")) {
          console.log("c1 is ", c);
          if (c.id.includes("B")) {
            const strArr = c.id.split("B");
            c.id = strArr[1];
          } else if (c.id.includes("A")) {
            const strArr = c.id.split("A");
            c.id = strArr[1];
          } else if (c.id.includes("U")) {
            const strArr = c.id.split("U");
            c.id = strArr[1];
          }
          console.log("c2 is ", c);
        }
      });

      requests.push({
        action: "updateObject",
        body: r
      });
    }
  });

  if (requests.length > 0) {
    // console.log("requests is ", requests);
    requests.forEach((r) => {
      console.log(r.body.categories);
    });
    const postConfig = {
      headers: {
        "X-Algolia-API-Key": applicationKey,
        "X-Algolia-Application-Id": applicationId
      }
    };
    const postData = { requests };

    const postUrl = `https://${applicationId}-dsn.algolia.net/1/indexes/faq_${locale}/batch`;
    try {
      const updateRes = await axios.post(postUrl, postData, postConfig);
      console.log("updateRes is ", updateRes);
    } catch (error) {
      console.log("error is ", error);
    }
  }
};

// Integer randomNumber = Integer.valueof((Math.random() * 100000));
// newsItem.UrlName = newsItem.UrlName + '-' + String.valueOf(randomNumber);

getRecords();
