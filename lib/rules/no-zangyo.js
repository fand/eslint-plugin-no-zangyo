/**
* @fileoverview Rule to disallow zangyo
* @author amagitakayosi
* @copyright 2017 amagitakayosi. All rights reserved.
*/
const moment = require('moment');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "disallow zangyo",
      category: "Possible Errors",
    },
    schema: [{
      type       : 'object',
      properties : {
        beginWorking : {
          type : 'string',
        },
        endWorking : {
          type : 'string',
        },
      },
    }]
  },
  create: function(context) {
    const options = context.options[0] || {};
    const beginWorking = moment(options.beginWorking || "10:00", "hh:mm");
    const endWorking = moment(options.endWorking || "19:00", "hh:mm");

    return {
      Program : function checkZangyo (node) {
        const now = moment();
        const sourceCode = context.getSourceCode();


        console.log(sourceCode);

        if (now.isBefore(beginWorking) || now.isAfter(endWorking)) {
          context.report({ node, message: 'はよ帰れ', loc: {
            start: sourceCode.getLocFromIndex(0),
            end: sourceCode.getLocFromIndex(sourceCode.getText().length - 1),
          }})
        }
      },
    };
  }
};
