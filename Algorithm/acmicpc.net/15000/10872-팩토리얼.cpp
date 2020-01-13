
// STATE : NOT YET

#include <iostream>

using namespace std;

int main(void)
{
	int N = 0;
	cin >> N;

	int Total = 1;
	for(int i=N; i>0; i--)
	{
		Total *= i;
	}
	cout << Total << endl;
	return 0;
}
