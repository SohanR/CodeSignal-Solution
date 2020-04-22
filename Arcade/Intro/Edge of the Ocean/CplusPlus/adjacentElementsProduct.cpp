int adjacentElementsProduct(std::vector<int> inputArray)
{
    int a = inputArray.size() - 1;
    int p = -1000;
    int x = 0;
    int y = 0;

    for (int i = 0; i < a; i++)
    {

        x = inputArray[i];
        y = inputArray[i + 1];

        if (x * y > p)
        {
            p = x * y;
        }
    }
    return p;
}
