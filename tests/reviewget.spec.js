const { RuleTester } = require("eslint")
const { rules } = require('../index')

const ruleTester = new RuleTester()
ruleTester.run('get', rules.get, {
    valid: [
        {
            name: 'success',
            code: `function getName(){ return ''}`
        }, {
            name: 'success',
            code: `function setName(){ }`
        },
    ],
    invalid: [
        {
            name: "body is empty",
            code: "function getName(){}",
            output: "function getName(){return ''}",// 被fix之后的结果
            errors: [{ message: "getName must return a value" }]
        },
        {
            name: "body is not empty",
            code: "function getName(){var name = 'demo';}",
            output: "function getName(){var name = 'demo';return ''}",
            errors: [{ message: "getName must return a value" }]

        },
        {
            name: "no fix",
            code: "function getNotFixName(){}",
            output: "function getNotFixName(){}",
            options: [false],
            errors: [{ message: "getNotFixName must return a value" }]
        },

    ]
})

