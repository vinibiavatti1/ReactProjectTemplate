/**
 * Query value by searching with path string.
 * @param path path as string like: node.subnode.value.
 * @param object object to search.
 */
function queryByStringPath(path: string, object: object): unknown {
    const keys = path.split('.')
    let node: any = object // eslint-disable-line
    keys.forEach((key) => {
        if (!(key in node)) {
            node = null
            return
        } else {
            node = node[key]
        }
    })
    return node
}

export default {
    findByQueryString: queryByStringPath,
}
