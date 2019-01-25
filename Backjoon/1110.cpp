#include <iostream>

using namespace std;

int main(void)
{
	int N = 0;
	cin >> N;

	int sum = 0;
	int temp1 = 0;
	int temp10 = 0;
	int count = 0;
	
	int newN = N;
	while(1)
	{
		count++;
		temp1 = newN % 10;
		temp10 = newN / 10;
		sum = (temp1 + temp10) % 10;
		newN = temp1 * 10 + sum;
		if(newN == N)
			break;
	}

	cout << count << endl;
	return 0;
}
