export function getDocumentsByAuthor(docs, author) {

    return docs.filter(doc => doc.author === author.split('-').join(' '))

}


export function getDocumentsByCategory(docs, category) {

    return docs.filter(doc => doc.category === category)

}



export function getDocumentsByTags(docs, tag) {

    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag))

}