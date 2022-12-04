module.exports = {
    rules: {
        get: {
            /**
             * api
             */
            create(context) {
                console.log('init eslint plugin')
                return {
                    FunctionDeclaration(node) {
                        // console.log(node)// 获取到ast中body里面是否有值
                        const functionName = node.id.name
                        const blockStatementBody = node.body.body

                        const lastNode = blockStatementBody[blockStatementBody.length - 1]
                        if (!lastNode || lastNode.type !== 'ReturnStatement') {
                            context.report({
                                node,
                                message: `${functionName} must return a value`
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