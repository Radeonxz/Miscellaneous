const axios = require("axios");

const locale = "en-gb";

const getRecords = async () => {
  const getConfig = {
    headers: {
      "X-Algolia-API-Key": "dfc34147e18f0f7eaf6b2bdcbb2fdbcd",
      "X-Algolia-Application-Id": "UKTQRZ7NXH"
    }
  };

  const getUrl = `https://UKTQRZ7NXH-dsn.algolia.net/1/indexes/faq_${locale}?hitsPerPage=80`;
  const response = await axios.get(getUrl, getConfig);
  const records = response.data.hits;
  const requests = [];
  records.map(
    ({
      summary,
      products,
      title,
      content,
      platforms,
      categories,
      objectID,
      urlName,
      link,
      orderNumber,
      masterVersionTitle,
      masterVersionId,
      machineTranslationSourceLanguage,
      locale,
      machineTranslatedPortal,
      isMachineTranslatedPortal,
      isMachineTranslated,
      legacyArticleNumber,
      lastModifiedDate,
      knowledgeArticleId,
      keywords,
      isMasterLanguage,
      isGdprForm,
      isDisableLanguageFallback,
      isAnonymousFlow,
      isAllowToShare,
      faqViewCount,
      createdDate,
      articleNumber
    }) => {
      const parsedOrderNumber = parseInt(orderNumber);
      const parsedViewCount = parseInt(faqViewCount);
      const newCategories = [];
      if (categories.length > 0)
        categories.forEach((c) => {
          newCategories.push({
            id: c.Id || c.id,
            name: c.Name || c.name || ""
          });
        });

      const newPlatforms = [];
      if (platforms.length > 0)
        platforms.forEach((p) => {
          newPlatforms.push({ id: p.Id || p.id, name: p.Name || p.name || "" });
        });

      const newProducts = [];
      if (products.length > 0)
        products.forEach((p) => {
          newProducts.push({
            id: p.Id || p.id,
            name: p.Name || p.name || "",
            spaceId: p.SpaceId || p.spaceId,
            appId: p.AppId || p.appId
          });
        });

      const newRecord = {
        summary,
        products: newProducts.length > 0 ? newProducts : [],
        title,
        content,
        platforms: newPlatforms.length > 0 ? newPlatforms : [],
        categories: newCategories.length > 0 ? newCategories : [],
        objectID,
        urlName,
        link,
        orderNumber: isNaN(parsedOrderNumber) ? null : parsedOrderNumber,
        masterVersionTitle,
        masterVersionId,
        machineTranslationSourceLanguage,
        isMachineTranslated:
          machineTranslatedPortal ||
          isMachineTranslatedPortal ||
          isMachineTranslated ||
          false,
        legacyArticleNumber,
        lastModifiedDate,
        knowledgeArticleId,
        keywords,
        isMasterLanguage,
        isGdprForm,
        isDisableLanguageFallback,
        isAnonymousFlow,
        isAllowToShare,
        faqViewCount: isNaN(parsedViewCount) ? null : parsedViewCount,
        createdDate,
        articleNumber,
        locale
      };

      requests.push({
        action: "updateObject",
        body: newRecord
      });
    }
  );

  if (requests.length > 0) {
    // console.log("requests is ", requests);
    requests.forEach((r) => {
      console.log(r.body.articleNumber);
      console.log(r.body.categories);
      console.log(r.body.platforms);
      console.log(r.body.products);
    });
    const postConfig = {
      headers: {
        "X-Algolia-API-Key": "66c134b07be06b44554f88ff3ce675e6",
        "X-Algolia-Application-Id": "UKTQRZ7NXH"
      }
    };
    const postData = { requests };

    const postUrl = `https://UKTQRZ7NXH-dsn.algolia.net/1/indexes/faq_${locale}/batch`;
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
