export function findChildrenById(flatData, id){
    return flatData.filter(item => item.pId === id)
}


export function toTree(flatData){
    const roots = findChildrenById(flatData, -1)
    function loop(roots){
        roots.forEach(root => {
            let children = findChildrenById(flatData, root.id)
            if(children.length > 0){
                root.children = children
                loop(children)
            }
        });
    }
    loop(roots)
    return roots
}

export function isLeaf(flatData,id){
    return findChildrenById(flatData,id).length === 0
}