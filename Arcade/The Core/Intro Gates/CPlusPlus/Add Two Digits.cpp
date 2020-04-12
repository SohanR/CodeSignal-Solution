//You are given a two-digit integer n. Return the sum of its digits.

int addTwoDigits(int n)
{
    int sum;

    for (sum = 0; n > 0; sum += n % 10, n /= 10)
        ;

    return sum;
}
