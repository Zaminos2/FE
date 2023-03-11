console.log(
    [1, 4, 3, 0, 4, 5, 4 ]
    .filter(Element => !(Element % 2))
    .reduceRight((accmulator, Element) => accmulator + Math.sqrt(Element), 0)
)