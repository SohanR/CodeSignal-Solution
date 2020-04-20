bool checkPalindrome(std::string inputString)
{

    int start, end;

    start = 0;
    end = inputString.size() - 1;

    while (start < end)
    {

        if (inputString[start++] != inputString[end--])
        {
            return false;
        }
    }
    return true;
}