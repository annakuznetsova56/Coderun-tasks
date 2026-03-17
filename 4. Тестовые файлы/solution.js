module.exports = function(content /* текст тестового файла */) {
    const contentLines = content.toString().split('\n'); 
    const newContent = [];

    let describeIndex = -1;
    const testsStart = [];
    let describeEndIndex = -1;

    contentLines.forEach((line, index) => {
        if(line.trim().startsWith('describe')) describeIndex = index;
        if(line.trim().startsWith('it')) testsStart.push(index);
        if(line.trim().startsWith('});')) describeEndIndex = index;
    })

    testsStart.forEach((testStart, index) => {
        let newTest = '';
        let testEnd = describeEndIndex - 1;

        if(index < testsStart.length - 1) testEnd = testsStart[index+1] - 1;

        for(let i = 0; i <= describeIndex; i++) {
            newTest = newTest + contentLines[i] + '\n';
        }

        for(let i = testStart; i <= testEnd; i++) {
            newTest = newTest + contentLines[i] + '\n';
        }

        newTest = newTest + '});'; 
        
        newContent.push(newTest);
    })
    return newContent;
}