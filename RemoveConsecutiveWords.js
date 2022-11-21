

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s) {
    return s.split(' ').filter((word,i) => word !== s.split(" ")[i+1]).join(' ')
}
