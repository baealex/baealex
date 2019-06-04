#include <iostream>

using namespace std;

int main(void)
{
	int N;
	cin >> N;

	double *a = new double[N];
	int M = 0;

	for(int i = 0; i < N; i++)
	{
		cin >> a[i];
		if(M < a[i])
		{
			M = a[i];
		}
	}

	double sum = 0;

	for(int i = 0; i < N; i++)
	{
		a[i] = a[i]/M*100;
		sum += a[i];
	}
	cout << fixed;
	cout.precision(6);
	cout << sum/N << endl;
}
