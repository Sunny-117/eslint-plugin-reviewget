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
                        const BlockStatement = node.body.body
                        if (BlockStatement.length === 0) {
                            context.report({
                                node,
                                message: `${functionName} must return a value`
                            })
                        }
                    }
                }
            },
        }
    }
}