#include <iostream>

using namespace std;

int main(void)
{
	int C = 0;
	cin >> C;

	for(int i=0; i<C; i++)
	{
		int N = 0;
		cin >> N;

		int *Array = new int[N];
		int sum = 0;

		for(int j=0; j<N; j++)
		{
			cin >> Array[j];
			sum += Array[j];
		}

		int count = 0;

		for(int j=0; j<N; j++)
		{
			if(Array[j] > (double)sum/(double)N)
				count++;
		}
		cout << fixed;
		cout.precision(3);
		cout << ((double)count/(double)N)*100 << "%" << endl;
	}
	return 0;
}
