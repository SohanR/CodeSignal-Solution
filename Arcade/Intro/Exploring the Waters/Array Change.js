https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg/

function arrayChange(inputArray) {
    let change = 0;
    for (let i = 0; i < inputArray.length - 1; i++)
        while (inputArray[i] >= inputArray[i + 1])
        {
            inputArray[i + 1]++;
            change++;
        }

    return change;
}
