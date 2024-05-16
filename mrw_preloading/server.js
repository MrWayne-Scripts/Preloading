//const config = require('config.json');
const card = {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.0",
  type: "AdaptiveCard",
  body: [
    {
      type: "TextBlock",
      text: `Načítání serveru -`,
      wrap: true,
      horizontalAlignment: "center",
      size: "large",
    },
    {
      type: "Image",
      url: ``,
      width: "700px",
      horizontalAlignment: "center",
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.Submit",
          title: "Hrát",
          data: { nat2k15: "codes this" },
        },
        {
          type: "Action.OpenUrl",
          title: "Discord",
          url: ``,
        },
      ],
    },
  ],
};
AddEventHandler("playerConnecting", function (name, setKickReason, deferrals) {
  deferrals.defer();
  setInterval(() => {
    deferrals.presentCard(card, function (data, rawData) {
      if (rawData) {
        deferrals.done();
      }
    });
  }, 500);
  setTimeout(() => {
    deferrals.done();
  }, 20000);
});
