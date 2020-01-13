
// STATE : DONE

#include <iostream>

using namespace std;

int main(void)
{
	int a, i;
	cin >> a;
	for (i = 1; i < 10; i++)
	{
		printf("%d * %d = %d\n", a, i, (a*i));
	}
	return 0;
}