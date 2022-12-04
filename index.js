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
                        if (node.body.body.length === 0) {
                            context.report({
                                node,
                                message: "getName must return a value"
                            })
                        }
                    }
                }
            },
        }
    }
}