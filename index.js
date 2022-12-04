module.exports = {
    rules: {
        get: {
            meta: {
                fixable: 'code'
            },
            /**
             * api
             */
            create(context) {
                console.log('init eslint plugin')
                return {
                    FunctionDeclaration(node) {
                        // console.log(node)// 获取到ast中body里面是否有值
                        const functionName = node.id.name

                        if (!functionName.startsWith('get')) return
                        const blockStatementBody = node.body.body

                        const lastNode = blockStatementBody[blockStatementBody.length - 1]
                        if (!lastNode || lastNode.type !== 'ReturnStatement') {
                            context.report({
                                node,
                                message: `${functionName} must return a value`,
                                fix(fixer) {
                                    return fixer.replaceTextRange([node.range[1] - 1, node.range[1]], "return ''}")
                                    // return {
                                    //     range:[],
                                    //     text: ""
                                    // }
                                }
                            })
                            // return
                        }

                        // if (blockStatementBody.length === 0) {
                        //     context.report({
                        //         node,
                        //         message: `${functionName} must return a value`
                        //     })
                        // }
                    }
                }
            },
        }
    }
}