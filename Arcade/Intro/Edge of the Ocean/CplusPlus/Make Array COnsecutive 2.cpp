int makeArrayConsecutive2(std::vector<int> statues)
{
    int a = statues.size();
    int diff = 0;
    int sum = 0;

    sort(statues.begin(), statues.end());

    for (int i = a - 1; i > 0; i--)
    {
        sum += (statues[i] - statues[i - 1]) - 1;
    }
    return sum;
}
