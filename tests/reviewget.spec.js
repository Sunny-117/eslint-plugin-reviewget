const { RuleTester } = require("eslint")
const { rules } = require('../index')

const ruleTester = new RuleTester()
ruleTester.run('get', rules.get, {
    valid: [
        {
            name: 'success',
            code: `function getName(){ return ''}`
        }
    ],
    invalid: [


    ]
})

